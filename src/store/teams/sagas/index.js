import { all } from "redux-saga/effects";
import watchSaga from "../../global/sagas/watch.saga";
import { createTeamAC, loadMyTeamsAC, loadMyTeamsMembersAC } from "../teams.actions";
import createTeamSaga from "./createTeam.saga";
import { loadMyTeamsSaga } from "./loadMyTeams.saga";
import loadMyTeamsMembersSaga from "./loadMyTeamsMembers.saga";

export function* watchTeamsSaga() {
    yield all([
        watchSaga(
            loadMyTeamsAC,
            loadMyTeamsSaga
        ),
        watchSaga(
            loadMyTeamsMembersAC,
            loadMyTeamsMembersSaga
        ),
        watchSaga(
            createTeamAC,
            createTeamSaga
        ),
    ]);
}