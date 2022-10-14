import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { call, put } from 'redux-saga/effects';
import { db } from '../../../config/firebase';
import { createTeamAC } from '../teams.actions';

export default function* createTeamSaga({ payload: { teamName, teamMembers, ownerId } }) {
    const teamsRef = collection(db, 'teams');
    const newTeamObj = {
        name: teamName,
        members: teamMembers,
        createdAt: Timestamp.fromDate(new Date()),
        owner: ownerId
    };
    yield call(addDoc, teamsRef, newTeamObj);
    yield put(createTeamAC.successAC(newTeamObj))
}