import { LOADING, LOADING_ERROR } from "../../redux-store/actions";
import initialStore from "../../redux-store/initialStore";

export default function postsReduser (store = initialStore.posts, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...store,
                posts: action.payload
            };
        case LOADING_ERROR:
            return {
                ...store,
                error: action.error
            };
        default:
            return store;
    }
}