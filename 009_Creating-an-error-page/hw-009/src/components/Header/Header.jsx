import React from 'react';
import {NavLink} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Header.scss';
import ModalComponent from '../ModalComponent/ModalComponent';
import { AUTH_FALSE, AUTH_MODAL_CLOSE, AUTH_MODAL_OPEN, USER_RESET } from '../../redux-store/actions';
import AuthFormComponent from '../AuthFormComponent/AuthFormComponent';

const Header = () => {
    const dispatch = useDispatch();
    const modalStore = useSelector(state => state.modal);
    const authStore = useSelector(state => state.auth);

    const {authModal} = modalStore;
    const {isLoggedIn, authButton} = authStore;

    function logInOut() {
        if (isLoggedIn) {
            dispatch({type: USER_RESET});
            dispatch({type: AUTH_FALSE});
        }
        else {
            dispatch({type: AUTH_MODAL_OPEN})
        }
    }


    return (
        <header className="header">
            <nav className="header__nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/pictures">Pictures</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </nav>
            <button className='button button--white' onClick={()=>{logInOut()}}>{authButton}</button>
            {authModal && <ModalComponent closeBtnHandler={()=>{dispatch({type: AUTH_MODAL_CLOSE})}}>
                <AuthFormComponent />
            </ModalComponent>}
        </header>
    );
};

export default Header;