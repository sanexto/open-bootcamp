import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import { API_CALL_REQUEST } from '../actions/asyncActions';

// WATCHER SAGA
// Listens the API_CALL_REQUEST actions
export function* watcherSaga() { // funcion generadora
    // Listens the action and starts a Worker Saga
    yield takeLatest(API_CALL_REQUEST, workerSaga);
}

// WORKER SAGA
// Is called from watcher Saga, does the Login and Dispatches an action
export function* workerSaga(action) {
    try {
        const response = yield call(fetchHttp(action.payload.request));
        // We Obtain the token from response
        const token = response.data.token;
        // Despachamos successAction (API_CALL_SUCCESS)
        yield put({
            type: action.payload.successAction,
            payload: {
                token,
            },
        });
    } catch (error) {
        // Despachamos failureAction (API_CALL_FAILURE)
        yield put({
            type: action.payload.failureAction,
            payload: {
                error,
            },
        });
    }
}

function fetchHttp(request) {
    return function() {
        return axios(request);
    }
}