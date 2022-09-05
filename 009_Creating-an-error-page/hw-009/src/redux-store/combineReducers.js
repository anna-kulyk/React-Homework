import {combineReducers} from "redux";
import authReducer from "../components/AuthFormComponent/authReduser";
import userReducer from "../components/AuthFormComponent/userReduser";
import modalReducer from "../components/ModalComponent/modalReducer";
import postsReduser from "../pages/Posts/postsReduser";

export default combineReducers({
    modal: modalReducer,
    posts: postsReduser,
    auth: authReducer,
    user: userReducer
})