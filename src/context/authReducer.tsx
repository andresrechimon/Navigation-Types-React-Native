import { AuthState } from "./AuthContext";

type AuthAction = 
| {type:'signIn'} 
| {type: 'logOut'}
| {type: 'favoriteIcon', payload:string}
| {type: 'changeUsername', payload:string}


export const authReducer = (state:AuthState, action:AuthAction):AuthState => {
    switch (action.type) {
        case 'signIn':
            return{
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            }
        case 'logOut':
            return{
                ...state,
                isLoggedIn: false,
                username: 'log-out-completed',
                favoriteIcon: undefined
            }
        case 'favoriteIcon':
            return{
                ...state,
                favoriteIcon: action.payload
            }
        case 'changeUsername':
            return{
                ...state,
                username: action.payload
            }
        default:
            return state;
    }
}