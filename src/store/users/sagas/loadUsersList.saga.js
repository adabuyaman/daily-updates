
import { collection, getDocs } from 'firebase/firestore';
import {
    put,
    call
} from 'redux-saga/effects';
import { db } from '../../../config/firebase';
import { loadUsersListAC } from '../users.actions';

export function* loadUsersListSaga() {
    const usersRef = collection(db, 'users');
    const snapshot = yield call(getDocs, usersRef);
    const usersList = snapshot.docs.map(item => item.data());
    yield put(loadUsersListAC.successAC(usersList));
}