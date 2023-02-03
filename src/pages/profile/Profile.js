import React, {useContext} from 'react';
import './Profile.module.css'
import {AuthContext} from '../../context/AuthContext'

function Profile() {

    const {user: {username}} = useContext(AuthContext)
    return (
        <main>
            <p>Welcome <span>{username}</span></p>
        </main>
    );
}

export default Profile;