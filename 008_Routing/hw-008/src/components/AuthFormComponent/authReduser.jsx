import { AUTH_FALSE, AUTH_TRUE } from "../../redux-store/actions";
import { initialStore } from "../../redux-store/initialStore";

const authReducer = (state = initialStore.auth, action) => {
    switch (action.type) {
        case AUTH_TRUE:
            return {...state, isLoggedIn: true, authButton: 'Log Out'};
        case AUTH_FALSE:
            return {...state, isLoggedIn: false, authButton: 'Log In'};
        default:
            return state;
    }
}

export default authReducer;