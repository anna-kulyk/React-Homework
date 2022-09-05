import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Homepage from '../pages/Homepage/Homepage';
import Layout from '../pages/Layout/Layout';
import NotFoundPage from '../pages/errorPages/NotFoundPage/NotFoundPage';
import Pictures from '../pages/Pictures/Pictures';
import Posts from '../pages/Posts/Posts';
import { useSelector } from 'react-redux';
import NotAuthPage from '../pages/errorPages/NotAuthPage/NotAuthPage';


const AppRoutes = () => {
    const authStore = useSelector(state => state.auth);
    const {isLoggedIn} = authStore;

    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Homepage />} />
                    <Route path='pictures' element={isLoggedIn ? <Pictures /> : <NotAuthPage />} />
                    <Route path='posts' element={isLoggedIn ? <Posts /> : <NotAuthPage />} />

                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
            
        </>
    );
};

export default AppRoutes;