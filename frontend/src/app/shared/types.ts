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