export interface Section {
  id: number;
  name: string;
}

export interface User {
  id: number;
  name: string;
  avatar: string;
  isAdmin: boolean;
  games: Game[];
  description: string;
  links: SocialLink[];
}

export interface Game {
  id: number;
  name: string;
  description: string;
  avatar: string;
}

export interface Team {
  id: number;
  name: string;
  description: string;
  avatar: string;
}

export interface News {
  id: number;
  title: string;
  //subTitle: string; //todo: Subtitle adds to the news by user
  description: string;
  image: string;
  views: number;
}

export interface Publication {
  id: number;
  titile: string;
  description: string;
  games: Game[];
}

export interface SocialLink {
  link: string;
  resource: string;
}
