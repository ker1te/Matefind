import {Controller, Get} from "@tsed/common";

const GameList = [
    { id: 0, name: 'Overwatch' },
    { id: 1, name: 'CS:GO' },
    { id: 2, name: 'Battlefield 4' },
    { id: 3, name: 'Dota 2' },
    { id: 4, name: 'Rainbow Six Siege' }
]

@Controller("/games")
export class GamesController {
    @Get("/")
    get() {
        return GameList;
    }
}
