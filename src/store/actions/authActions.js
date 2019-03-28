export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

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

export const signUp = (newUser) => {
    return async (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        try {
            const resp = await firebase.auth().createUserWithEmailAndPassword(
                newUser.email,
                newUser.password
            );

            await firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            });

            dispatch({ type: SIGNUP_SUCCESS });
        } catch (err) {
            dispatch({ type: SIGNUP_ERROR, err });
        }

        
    }
}