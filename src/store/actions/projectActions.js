export const CREATE_PROJECT = 'CREATE_PROJECT';
export const CREATE_PROJECT_ERROR = 'CREATE_PROJECT_ERROR';

export const createProject = (project) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        try {
            await firestore.collection('projects').add({
                ...project,
                authorFirstName: profile.firstName,
                authorLastName: profile.lastName,
                authorId: authorId,
                createdAt: new Date()
            });
    
            dispatch({
                type: CREATE_PROJECT,
                project
            });
        }
        catch (err) {
            dispatch({
                type: CREATE_PROJECT_ERROR,
                err
            });
        }
       
    }
}