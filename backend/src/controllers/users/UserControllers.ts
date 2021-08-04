import {BodyParams, Controller, Get, Post} from "@tsed/common";

const UserList = [
  { id: 0, name: 'keritea', avatar: '../assets/cat.jpg', games: [ ], email: '', passwordHash: '', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
  { id: 1, name: 'aspercrite', avatar: '../assets/cat.jpg', games: [  ], email: '', passwordHash: '', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
  { id: 2, name: 'bony', avatar: '../assets/cat.jpg', games: [  ], email: '', passwordHash: '', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
  { id: 3, name: 'calendar', avatar: '../assets/cat.jpg', games: [  ], email: '', passwordHash: '', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
  { id: 4, name: 'WorthGamer', avatar: '../assets/cat.jpg', games: [ ], email: '', passwordHash: '', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
]

@Controller("/users")
export class UsersController {
  @Get("/") 
  get() {
    return UserList;
  }

  @Post("/")
  post(
    @BodyParams('data') user: any
  ) {
    let newUser = {
      id: UserList.length,
      name: user.username,
      avatar: '../assets/cat.jpg',
      games: [],
      description: '',
      email: user.email,
      passwordHash: user.password
    };
    UserList.push(newUser);
    return newUser;
  }
}