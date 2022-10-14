import watchUsersSaga from "./users/sagas";
import { all } from 'redux-saga/effects';
import { watchTeamsSaga } from "./teams/sagas";

export default function* rootSaga() {
    yield all([
        watchUsersSaga(),
        watchTeamsSaga(),
    ])
}