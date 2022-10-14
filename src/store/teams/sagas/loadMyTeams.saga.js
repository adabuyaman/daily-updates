import { call, put } from 'redux-saga/effects';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { loadMyTeamsAC, loadMyTeamsMembersAC } from '../teams.actions';

export function* loadMyTeamsSaga({ payload }) {
    const teamsRef = collection(db, 'teams');
    const teamsQuery = query(teamsRef, where('owner', '==', payload));
    const teamsSnapshot = yield call(getDocs, teamsQuery);
    const teamsList = teamsSnapshot.docs.map(item => {
        const data = item.data();
        return {
            ...data,
            id: item.id,
            createdAt: data.createdAt.toDate().toString(),
            membersLoading: true
        }
    });

    yield put(loadMyTeamsAC.successAC(teamsList));
    yield put(loadMyTeamsMembersAC.triggerAC());

}