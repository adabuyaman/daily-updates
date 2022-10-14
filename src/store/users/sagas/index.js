import { all } from 'redux-saga/effects';
import watchSaga from '../../global/sagas/watch.saga';
import { loadUsersListAC } from '../users.actions';
import { loadUsersListSaga } from './loadUsersList.saga';

export default function* watchUsersSaga() {
    yield all([
        watchSaga(
            loadUsersListAC,
            loadUsersListSaga
        ),
    ])
}