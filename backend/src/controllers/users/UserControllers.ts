import { BodyParams, Controller, Get, PathParams, Post } from "@tsed/common";
import {User, UserInterface} from "./User";

const UserList: UserInterface[] = []

@Controller("/users")
export class UsersController {
  @Get("/") 
  get() {
    return UserList;
  }

  @Get("/:id")
  getById(
      @PathParams('id') id:number
  ){
    let user = UserList.filter(u => u.id == id)[0];
    return user;
  }

  @Post("/")
  post(
    @BodyParams('data') user: any
  ) {
    user.id = UserList.length;
    let newUser = new User(user);
    UserList.push(newUser);
    return newUser;
  }

  @Post("/signIn")
  signIn(
      @BodyParams('data') userData: any
  ){
    let user = UserList.filter(u => u.name == userData.name && u.passwordHash == userData.passwordHash)[0];
    return user;
  }
}
