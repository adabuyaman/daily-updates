import { useMemo } from "react";
import { useDispatch } from 'react-redux';

export default function useAction(actionCreator) {
    const dispatch = useDispatch();
    return useMemo(
        () => {
            const createAction = actionCreator?.triggerAC ?? actionCreator;
            return (...args) => {
                const action = createAction(...args);
                dispatch(action);
            }
        }
        , [dispatch, actionCreator],
    );
}