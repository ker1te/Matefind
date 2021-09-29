import { BodyParams, Controller, Get, PathParams, Post, Put } from "@tsed/common";
import { UserInterface, UserModel } from "./User";


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

  @Post("/signIn")
  async signIn(
      @BodyParams('data') userData: any
  ){
    const { name, passwordHash } = userData;
    const user = await UserModel.findOne({ where: { name, passwordHash } });
    console.log(user);
    return user;
  }
}
