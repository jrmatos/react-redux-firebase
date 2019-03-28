export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';

export const signIn = (credentials) => {
    return async (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        try {
            await firebase.auth().signInWithEmailAndPassword(
                credentials.email,
                credentials.password
            );
    
            dispatch({ type: LOGIN_SUCCESS });
        } catch (err) {
            dispatch({ type: LOGIN_ERROR, err });
        }
    }
}

export const signOut = () => {
    return async (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        await firebase.auth().signOut();

        dispatch({ type: SIGNOUT_SUCCESS });

    }
}