import { MODAL1_OPEN, MODAL1_CLOSE, MODAL2_OPEN, MODAL2_CLOSE } from "../constants/actionConstants";
import { initialStore } from "../store/initialStore";

const modalReducer = (state = initialStore.modal, action) => {
    switch (action.type) {
        case MODAL1_OPEN:
            return {...state, modal1: true};
        case MODAL1_CLOSE:
            return {...state, modal1: false};
        case MODAL2_OPEN:
            return {...state, modal1: true};
        case MODAL2_CLOSE:
            return {...state, modal1: false};
        default:
            return state;
    }
}

export default modalReducer;