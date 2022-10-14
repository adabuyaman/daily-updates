import { createAction } from '@reduxjs/toolkit';


function createAsyncActions(baseType) {
    return {
        triggerAC: createAction(`TRIGGER_${baseType}`),
        interruptAC: createAction(`INTERRUPT_${baseType}`),
        startAC: createAction(`${baseType}_START`),
        successAC: createAction(`${baseType}_SUCCESS`),
        failAC: createAction(`${baseType}_FAIL`),
    };
}

export default createAsyncActions;
