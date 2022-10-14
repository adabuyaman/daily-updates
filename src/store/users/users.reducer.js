import { createReducer } from '@reduxjs/toolkit';
import { STATUS } from '../../utils/redux/statusDefaults';

import { clearUsersListAC, loadUsersListAC } from './users.actions';

const initialState = {
    list: [],
    status: STATUS.LOADING,
};

export const usersReducerPath = 'users';

export const usersReducer = createReducer(initialState, {

    // loadUsersListAC
    [loadUsersListAC.triggerAC]: (draft) => {
        draft.status = STATUS.LOADING;
    },
    [loadUsersListAC.startAC]: (draft) => {
        draft.status = STATUS.LOADING;
    },
    [loadUsersListAC.successAC]: (draft, { payload }) => {
        draft.status = STATUS.SUCCESS
        draft.list = payload || [];
    },
    [loadUsersListAC.failAC]: (draft) => {
        draft.status = STATUS.FAIL;
        draft.list = [];
    },

    // clearUsersListAC
    [clearUsersListAC]: (draft)=>{
        draft.list = [];
    }
})