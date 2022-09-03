export const initialStore = {
    modal: {
        authModal: false,
        authButton: 'Log In'
    },
    posts: {
        posts: []
    },
    auth: {
        isLoggedIn: false,
        authButton: 'Log In'
    },
    user: {
        login: '',
        password: ''
    }
}

export default initialStore;