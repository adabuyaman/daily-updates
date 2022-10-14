import {
    call,
    takeEvery,
    takeLatest,
    takeLeading,
  } from 'redux-saga/effects';
  
  import { safeCallSaga } from './safeCall.saga';
  
  
  export const WATCHER_SAGA_TYPE = {
    LEADING: 'LEADING',
    LATEST: 'LATEST',
    EVERY: 'EVERY',
  };
  
  function getStrategy(watcherType) {
    switch (watcherType) {
      case WATCHER_SAGA_TYPE.LEADING:
        return takeLeading;
      case WATCHER_SAGA_TYPE.EVERY:
        return takeEvery;
      case WATCHER_SAGA_TYPE.LATEST:
      default:
        return takeLatest;
    }
  }
  
  function* watchSaga(
    listen,
    handlerSaga,
    options = {},
  ) {
    const trigger = listen.triggerAC || listen;
    const strategy = getStrategy(options.type);
  
    function* watcherSaga() {
      yield strategy(
        trigger.toString(),
        (...args) => safeCallSaga(
          () => call(handlerSaga, ...args),
          options,
        ),
      );
    }
  
    yield call(watcherSaga);
  }
  
  export default watchSaga;
  