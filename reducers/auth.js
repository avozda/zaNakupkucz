import {
    REGISTER_SUCCESS,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGOUT
} from '../actions/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
const initialState = {
    token: AsyncStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
};
function authReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            };
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            };
        case AUTH_ERROR:
        case LOGOUT:
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            };
        default:
            return state;
    }
}

export default authReducer;