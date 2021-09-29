import { BodyParams, Controller, Delete, Get, PathParams, Post, Put } from "@tsed/common";
import { UserGamesModel, UserInterface, UserModel } from "./User";
import { GameModel } from "../games/Game";


@Controller("/users")
export class UsersController {
  @Get("/") 
  async get() {
    const users = await UserModel.findAll();
    return users;
  }

  @Get("/:id")
  async getById(
      @PathParams('id') id:number
  ){
    const user = await UserModel.findOne({ where: { id } });
    return user;
  }

  @Get("/:id/games")
  async getUserGames(
      @PathParams('id') userId:number
  ){
    const userGamesResponse = await UserGamesModel.findAll({ where: { userId } });
    const userGames = Promise.all(userGamesResponse.map(async (ug: any) => await GameModel.findOne({ where: { id: ug.gameId } })));
    return userGames;
  }

  @Put("/:id")
  async updateUser(
      @PathParams('id') id: number,
      @BodyParams('data') data: UserInterface
  ) {
    const updatedUser = await UserModel.update({ ...data }, { where: { id } });
    const user = await UserModel.findOne({ where: { id: updatedUser[0] } })
    return user;
  }

  @Post("/")
  async post(
    @BodyParams('data') user: UserInterface
  ) {
    const newUser = await UserModel.create(user);
    return newUser;
  }

  @Post("/:id/games")
  async createUserGame(
      @PathParams('id') userId: number,
      @BodyParams('data') data: any
  ) {
    const { gameId } = data;
    const newUserGameResult = await UserGamesModel.create({ userId, gameId });
    const newUserGame = await GameModel.findOne({ where: { id: newUserGameResult.getDataValue('gameId') } })
    return newUserGame;
  }

  @Post("/signIn")
  async signIn(
      @BodyParams('data') userData: any
  ){
    const { name, passwordHash } = userData;
    const user = await UserModel.findOne({ where: { name, passwordHash } });
    return user;
  }

  @Delete("/:userId/games/:gameId")
  async deleteUserGame(
      @PathParams('userId') userId: number,
      @PathParams('gameId') gameId: number
  ) {
    const userGame = await UserGamesModel.destroy({ where: { userId, gameId } })
    return userGame.toString();
  }

}
