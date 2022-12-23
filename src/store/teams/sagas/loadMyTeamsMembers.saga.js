import { select, call, put } from 'redux-saga/effects';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { getMyTeams } from '../teams.selectors';
import { loadMyTeamsMembersAC } from '../teams.actions';

export default function* loadMyTeamsMembersSaga() {
    yield put(loadMyTeamsMembersAC.startAC());

    const usersRef = collection(db, 'users');
    const teams = yield select(getMyTeams);

    const teamsMembersMap = {};

    if (teams) {
        for (let i = 0; i < teams.length; i++) {
            if (teams[i].membersLoading) {
                try {
                    const teamMembersQuery = query(usersRef, where('uid', 'in', teams[i].members));
                    const teamMembersSnapshot = yield call(getDocs, teamMembersQuery);
                    const teamMembers = teamMembersSnapshot.docs.map(member => member.data());
                    teamsMembersMap[teams[i].id] = teamMembers;
                }
                catch (error) {
                    console.log(error.code);
                }
            }
        }
        yield put(loadMyTeamsMembersAC.successAC(teamsMembersMap));
    }
}