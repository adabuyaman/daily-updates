export function* safeCallSaga(callFactory) {
    try {
        yield callFactory();
    } catch (error) {
        console.error('safeCallSaga', error, error.status);
    }
}
