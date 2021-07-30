import { GameList } from "./gameList";
import { User } from "./types";

export const USERLIST : User[] = [
  { id: 0, name: 'keritea', avatar: '../assets/cat.jpg', games: [ GameList[0] ], description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
  { id: 1, name: 'aspercrite', avatar: '../assets/cat.jpg', games: [ GameList[0], GameList[1] ], description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
  { id: 2, name: 'bony', avatar: '../assets/cat.jpg', games: [ GameList[0], GameList[2] ], description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
  { id: 3, name: 'calendar', avatar: '../assets/cat.jpg', games: [ GameList[2], GameList [3]], description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
  { id: 4, name: 'WorthGamer', avatar: '../assets/cat.jpg', games: [ GameList[1] ], description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
]