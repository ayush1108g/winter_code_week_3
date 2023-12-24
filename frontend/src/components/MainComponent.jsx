import React from 'react'
import { RoutesWithAnimation } from '../App';
import Navbar from './Navbar';
import SideBar from './SideBar';
import classes from "./../App.module.css";
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';
const MainComponent = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const screenWidth = window.screen.width;
    console.log(screenWidth);

    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (!isLoggedIn && location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== '/login/forgotpassword' && location.pathname !== '/login/forgotpassword/confirm') {
        navigate('/login');
    }
    return (
        <div>
            <div className="d-none d-lg-block" style={{ position: "fixed", width: '18rem', backgroundColor: 'black' }}>
                <SideBar />
            </div >
            <div className={`h1 d-flex justify-content-center ${classes.gradient}`} style={{ width: '100vw', height: 'auto', padding: '10px', zIndex: 10 }}> Hospital Data Management</div>
            <div className="navbar-expand-lg d-lg-none">
                <Navbar />
            </div>
            <div className="" style={{ marginLeft: screenWidth > 992 ? '24rem' : '2rem', height: '100dvh', overflowY: 'auto' }}>
                <RoutesWithAnimation />
                <div style={{ width: '100%', height: '15vh' }}></div>
            </div>
        </div>
    )
}

export default MainComponent