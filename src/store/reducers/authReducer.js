import { LOGIN_SUCCESS, LOGIN_ERROR, SIGNOUT_SUCCESS } from '../actions/authActions';

const initiState = {
    authError: null
};

const authReducer = (state = initiState, action) => {
    switch(action.type) {
        case LOGIN_ERROR:
            console.log(LOGIN_ERROR)
            return {
                ...state,
                authError: 'Login Failed'
            };
        case LOGIN_SUCCESS:
            console.log(LOGIN_SUCCESS)
            return {
                ...state,
                authError: null,

            }
        case SIGNOUT_SUCCESS:
            console.log(SIGNOUT_SUCCESS);
            return state;
        default:
            return state;
    }
}

export default authReducer;