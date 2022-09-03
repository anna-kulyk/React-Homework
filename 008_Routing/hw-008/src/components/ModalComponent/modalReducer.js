import { AUTH_MODAL_OPEN, AUTH_MODAL_CLOSE} from "../../redux-store/actions";
import { initialStore } from "../../redux-store/initialStore";

const modalReducer = (state = initialStore.modal, action) => {
    switch (action.type) {
        case AUTH_MODAL_OPEN:
            return {...state, authModal: true};
        case AUTH_MODAL_CLOSE:
            return {...state, authModal: false};
        default:
            return state;
    }
}

export default modalReducer;