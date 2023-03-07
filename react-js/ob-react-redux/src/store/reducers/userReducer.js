import { API_CALL_FAILURE, API_CALL_REQUEST, API_CALL_SUCCESS } from '../actions/asyncActions';

// Initial State for userState
const initialState = {
    fetching: false,
    token: null,
    error: null,
    loged: false,
};

export const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case API_CALL_REQUEST:
            return {
                ...initialState,
                fetching: true,
            };
        case API_CALL_SUCCESS:
            return {
                ...initialState,
                token: action.payload.token,
                loged: true,
            };
        case API_CALL_FAILURE:
            return {
                ...initialState,
                error: action.payload.error,
            };
        default:
            return state;
    }
};