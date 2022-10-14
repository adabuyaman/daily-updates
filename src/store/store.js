import { configureStore } from '@reduxjs/toolkit'

import { usersReducer, usersReducerPath } from './users/users.reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import { teamsReducer, teamsReducerPath } from './teams/teams.reducers';


const sagaMiddleware = createSagaMiddleware(rootSaga);

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([sagaMiddleware]),
    reducer: {
        [usersReducerPath]: usersReducer,
        [teamsReducerPath]: teamsReducer,
    },
});

sagaMiddleware.run(rootSaga);

export default store;