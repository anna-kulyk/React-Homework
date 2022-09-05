
import { USER_LOGIN_CHANGE, USER_PASSWORD_CHANGE, USER_RESET } from "../../redux-store/actions";
import { initialStore } from "../../redux-store/initialStore";

const userReducer = (state = initialStore.user, action) => {
    switch (action.type) {
        case USER_LOGIN_CHANGE:
            return {...state, login: action.payload};
        case USER_PASSWORD_CHANGE:
            return {...state, password: action.payload};
        case USER_RESET:
            return {...state, login:'', password:''};
        default:
            return state;
    }
}

export default userReducer;