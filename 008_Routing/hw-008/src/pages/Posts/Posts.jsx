import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingAction } from '../../redux-store/actions';
import styles from './Posts.module.scss'


const Posts = () => {
    const dispatch = useDispatch();
    const postStore = useSelector(state => state.posts);
    console.log(postStore);

    useEffect(() => {
        dispatch(LoadingAction())
    },[])

    const {posts} = postStore;

    const postsList = posts.map((post, i) => {
        return <li key={post.id}>{post.title}</li>
    })

    return (
        <div className={styles.container}>
            <ol>{postsList}</ol>
        </div>
    );
};

export default Posts;