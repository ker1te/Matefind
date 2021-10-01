import { BodyParams, Controller, Delete, Get, PathParams, Post, Put } from "@tsed/common";
import { UserGamesModel, UserInterface, UserModel } from "./User";
import { GameModel } from "../games/Game";
import { sequelize } from "../../Server";


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
    return updatedUser;
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

  @Post("/findByParams")
  async findByParams(
      @BodyParams('params') params: any
  ){
    const { name, games } = params;
    const nameQueryPart: string = ((name) ? `"Users"."name" = \'${name}\'` : '');
    const query = 'SELECT "Users"."id", "Users"."name", "Users"."avatar", "Users"."isAdmin" FROM "Users" LEFT JOIN "UserGames" ON "Users"."id" = "UserGames"."userId" WHERE '
        + nameQueryPart
        + (nameQueryPart && games.length ? ' AND ' : '')
        + games.map((gameId: number) => `"UserGames"."gameId" = ${gameId}`).join(' AND ')
    const users = await sequelize.query(query, { raw: true });
    return users[0];
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
