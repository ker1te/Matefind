export interface UserInterface {
    id: number;
    name: string;
    avatar: string;
    games: [];
    description: string;
    email: string;
    passwordHash: string;
}


export class User {
    id: number;
    name: string;
    avatar: string;
    games: [];
    description: string;
    email: string;
    passwordHash: string;

    constructor(userData: any) {
        this.id = userData.id;
        this.name = userData.username;
        this.avatar = '../assets/cat.jpg';
        this.games = [];
        this.description = '';
        this.email = userData.email;
        this.passwordHash = userData.password
    }
}
