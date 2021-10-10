import { BodyParams, Controller, Delete, Get, PathParams, Post } from "@tsed/common";
import { TeamInterface, TeamModel, TeamUsersModel } from "./Team";
import { UserModel } from "../users/User";

@Controller("/teams")
export class GamesController {
		@Get("/")
		async get() {
				const teams = await TeamModel.findAll();
				return teams;
		}

		@Get("/:id")
		async getTeamById(
				@PathParams('id') id: number
		) {
				const team = await TeamModel.findOne({ where: { id } });
				return team;
		}

		@Get("/:id/users/")
		async getTeamUsers(
				@PathParams('id') teamId: number
		) {
				const teamUsersIds = await TeamUsersModel.findAll({ where: { teamId } });
				const users = Promise.all(teamUsersIds.map(async (tu: any) => await UserModel.findOne({ where: { id: tu.userId } })));
				return users;
		}

		@Get("/:teamId/users/:userId")
		async checkUserJoin(
				@PathParams('teamId') teamId: number,
				@PathParams('userId') userId: number
		) {
				const teamUser = await TeamUsersModel.findOne({ where: { teamId, userId } });
				return { id: teamUser?.getDataValue('id') };
		}

		@Post("/:teamId/users/:userId")
		async joinTeam(
				@PathParams('teamId') teamId: number,
				@PathParams('userId') userId: number
		) {
				const teamUser = await TeamUsersModel.create({ teamId, userId });
				return teamUser;
		}
}
