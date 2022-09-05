import axios from "axios";

//auth
export const AUTH_TRUE = "AUTH_TRUE";
export const AUTH_FALSE = "AUTH_FALSE";

//modal
export const AUTH_MODAL_OPEN = "AUTH_MODAL_OPEN";
export const AUTH_MODAL_CLOSE = "AUTH_MODAL_CLOSE";

//loading
export const LOADING = "LOADING"
export const LOADING_ERROR = "LOADING_ERROR"

export function LoadingAction() {
    return (dispatch) => {
        axios('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                dispatch({
                    type: LOADING,
                    payload: res.data
                })
            })
            .catch(error => {
                dispatch({type: LOADING_ERROR}, error)
            })
    }
}

//user
export const USER_LOGIN_CHANGE = "USER_LOGIN_CHANGE";
export const USER_PASSWORD_CHANGE = "USER_PASSWORD_CHANGE";
export const USER_RESET = "USER_RESET"

export function userLoginChangeAction(login) {
    return { type: USER_LOGIN_CHANGE, payload: login }
}

export function userPasswordChangeAction(password) {
    return { type: USER_PASSWORD_CHANGE, payload: password }
}