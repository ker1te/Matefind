import { BodyParams, Controller, Get, PathParams, Post } from "@tsed/common";
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
