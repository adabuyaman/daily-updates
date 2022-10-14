import { teamsReducerPath } from "./teams.reducers";

export const getMyTeams = (state) => state[teamsReducerPath].list;
export const getCreateTeamStatus = (state) => state[teamsReducerPath].createNewTeam.status;