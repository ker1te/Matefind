import { BodyParams, Controller, Delete, Get, PathParams, Post } from "@tsed/common";
import { GameInterface, GameModel } from "./Game";

@Controller("/games")
export class GamesController {
    @Get("/")
    async get() {
        const games = await GameModel.findAll();
        return games;
    }

    @Get("/:id")
    async getGameById(
        @PathParams('id') id:number
    ) {
        const game = await GameModel.findOne({ where: { id } });
        return game;
    }

    @Post("/")
    async post(
        @BodyParams('data') game: GameInterface
    ) {
        const newGame = await GameModel.create(game);
        return newGame;
    }

    @Post('/findByName')
    async findByName(
        @BodyParams('data') data: any
    ) {
        const { name } = data;
        const games = await GameModel.findAll({ where: { name } });
        return games;
    }

    @Delete("/:id")
    async delete(
        @PathParams('id') id:number
    ) {
        const deletedGame = await GameModel.destroy({ where: { id } })
        return deletedGame;
    }
}
