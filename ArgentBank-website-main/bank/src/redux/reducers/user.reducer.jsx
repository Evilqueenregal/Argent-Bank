import { GET_USERPROFILE, EDIT_USERNAME, LOGOUT } from "../actions/type.actions"

/* État initial de l'utilisateur */
const initialState = {
    status: 'VOID',
    userData: {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        createdAt: '',
        updatedAt: '',
        id: ''
    }
}

export const userReducer = (state = initialState, action ) => {
    switch (action.type) {
        case GET_USERPROFILE:
            console.log("Payload:", JSON.stringify(action.payload, null, 2));

            const { username, email, createdAt, updatedAt, id } = action.payload;

            const firstname = "Tony";  
            const lastname = "Stark";

            return {
                ...state,
                status: 'SUCCEEDED',
                userData: {
                    firstname,
                    lastname,
                    username,
                    email,
                    createdAt,
                    updatedAt,
                    id
                }

            }
        case EDIT_USERNAME: 
            return {
                ...state,
                status: "MODIFIED",
                userData: {
                    ...state.userData,
                    username: action.payload
                } 
            } 
        case LOGOUT: {
            return initialState;  
        }   
        default:
            return state;    
    }
}





