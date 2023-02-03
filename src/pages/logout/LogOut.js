import React from 'react';
import { useNavigate } from 'react-router-dom';


const Logout = () => {

    const history = useNavigate ;

    const handleLogOut = () => {
        localStorage.removeItem('token');
        history.push('/login');
    }

    return (
        <a href="/home" onClick={handleLogOut}>Log Out</a>
    );
}

export default Logout;

