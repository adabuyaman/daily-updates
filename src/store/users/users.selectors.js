import { usersReducerPath } from "./users.reducer";

export const getUsersList = (state) => state[usersReducerPath].list;
export const getUsersListAsOptions = (state) => state[usersReducerPath].list?.map(({ uid, name }) => ({ label: name, value: uid }));
export const getUsersListAsEnumOptions = (state) => state[usersReducerPath].list?.map(({ uid, name }) => ({ title: name, const: uid }));