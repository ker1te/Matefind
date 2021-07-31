export class Section {
  id: number;
  name: string;
}

export class User {
  id: number;
  name: string;
  avatar: string;
  games: Game[];
  description: string;
}

export class Game {
  id: number;
  name: string;
}

export class News {
  id: number;
  title: string;
  //subTitle: string; //todo: Subtitle adds to the news by user
  description: string;
  image: string;
  views: number;
}

export class Publication {
  id: number;
  titile: string;
  description: string;
  games: Game[];
}