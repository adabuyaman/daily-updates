
import { createReducer } from '@reduxjs/toolkit';
import { teamsArrayToObject, teamsObjectToArray } from '../../utils/models/teams';
import STATUS_DEFAULT, { STATUS } from '../../utils/redux/statusDefaults';
import { createTeamAC, loadMyTeamsAC, loadMyTeamsMembersAC } from './teams.actions';

const initialState = {
    list: [],
    status: STATUS_DEFAULT,
    createNewTeam: {
        status: STATUS_DEFAULT
    },
};

export const teamsReducerPath = "teams";

export const teamsReducer = createReducer(initialState, {

    // loadMyTeamsAC
    [loadMyTeamsAC.startAC]: (draft) => {
        draft.status = STATUS.LOADING;
    },
    [loadMyTeamsAC.successAC]: (draft, { payload }) => {
        draft.status = STATUS.SUCCESS;
        draft.list = payload || [];
    },
    [loadMyTeamsAC.failAC]: (draft) => {
        draft.status = STATUS.FAIL;
    },

    // loadMyTeamsMembersAC
    [loadMyTeamsMembersAC.startAC]: (draft, { payload }) => {
        console.log("[loadMyTeamsMembersAC.startAC payload", payload);
    },
    [loadMyTeamsMembersAC.successAC]: (draft, { payload: teamsMembersMap }) => {
        const teamsObj = teamsArrayToObject(draft.list);
        const keys = Object.keys(teamsMembersMap);
        for (let i = 0; i < keys.length; i++) {
            teamsObj[keys[i]].members = teamsMembersMap[keys[i]];
            teamsObj[keys[i]].membersLoading = false;
        }
        draft.list = teamsObjectToArray(teamsObj);
    },

    // createTeamAC
    [createTeamAC.startAC]: (draft) => {
        draft.createNewTeam.status = STATUS.LOADING;
    },
    [createTeamAC.successAC]: (draft) => {
        draft.createNewTeam.status = STATUS.SUCCESS;
    }
})