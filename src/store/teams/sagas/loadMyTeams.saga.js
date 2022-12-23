import { call, put } from 'redux-saga/effects';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { loadMyTeamsAC, loadMyTeamsMembersAC } from '../teams.actions';
import { teamSerializer } from '../../../utils/models/teams';

export function* loadMyTeamsSaga({ payload }) {
    yield put(loadMyTeamsAC.startAC());

    const teamsRef = collection(db, 'teams');
    const teamsQuery = query(teamsRef, where('owner', '==', payload));
    const teamsSnapshot = yield call(getDocs, teamsQuery);
    
    const teamsList = teamsSnapshot.docs.map(item => {
        const serialized = teamSerializer.fromFirebase(item);
        return serialized;
    });

    yield put(loadMyTeamsAC.successAC(teamsList));
    yield put(loadMyTeamsMembersAC.triggerAC());

}