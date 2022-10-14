import createAsyncActions from "../../utils/createAsyncActions";
import { createAction } from "@reduxjs/toolkit";

export const loadUsersListAC = createAsyncActions("LOAD_USERS_LIST");
export const clearUsersListAC = createAction("CLEAR_USERS_LIST");
export const addUserAC = createAsyncActions("ADD_USER");
export const updateUserAC = createAsyncActions("UPDATE_USER");