import React, {createContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

export const AuthContext = createContext({});

function AuthContextProvider({children}) {

    const navigate = useNavigate();
    const [auth, setAuth] = useState(
        {
            isAuth: false,
            user: null,
            status: 'pending'
        });

    function login(jwt,id) {
        console.log('de gebruiker is ingelogd');
        console.log(jwt);
        localStorage.setItem('token', jwt);
        navigate('/home');
        void fetchUserData(jwt, id)
    }

    function logout() {
        console.log('de gebruiker is uitgelogd');
        localStorage.removeItem('token');
        setAuth({
            ...auth,
            isAuth: false,
            user: null,
        });
        navigate('/home');
    }

    async function fetchUserData(jwt,redirect ) {
        try {
            const response = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`,
                { headers: {
                "Content-Type": "application/json",
                        Authorization: `Bearer ${jwt}`,
        }})

            setAuth({
                ...auth,
                isAuth: true,
                user: {
                    email: response.data.email,
                    id: response.data.id,
                    username: response.data.username
                },

                status: 'done'
            });
            if (redirect) {
                navigate(redirect);
            }
            console.log(response);
        } catch (e) {
            console.error(e);
            setAuth({

                ...auth,
                status: 'done'
            });
        }
    }

    useEffect(() => {

        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            console.log(storedToken);
            void fetchUserData(storedToken);
        } else {

            setAuth({
                ...auth,
                isAuth: false,
                user: null,
                status: 'done'
            });
        }
    }, []);


        const contextData = {
            isAuth: auth.isAuth,
            user: auth.user,
            status: auth.status,
            login, logout
        };

        return (

            <AuthContext.Provider value={contextData}>
                {auth.status === 'done' ? children : <p>Loading...</p>}
            </AuthContext.Provider>
        );


}

export default AuthContextProvider;



