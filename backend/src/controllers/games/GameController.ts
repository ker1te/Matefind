import { BodyParams, Controller, Delete, Get, PathParams, Post } from "@tsed/common";
import { GameInterface, GameModel } from "./Game";

@Controller("/games")
export class GamesController {
    @Get("/")
    async get() {
        const games = await GameModel.findAll();
        return games;
    }

    @Post("/")
    async post(
        @BodyParams('data') game: GameInterface
    ) {
        const newGame = await GameModel.create(game);
        return newGame;
    }

    @Delete("/:id")
    async delete(
        @PathParams('id') id:number
    ) {
        const deletedGame = await GameModel.destroy({ where: { id } })
        return deletedGame;
    }
}
