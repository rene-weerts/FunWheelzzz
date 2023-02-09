import React, {useContext, useState} from 'react';
import './SignIn.css';
import Button from '../../components/button/Button';
import axios from 'axios';
import {AuthContext} from '../../context/AuthContext';

const login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useContext(AuthContext);

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                username: username,
                password: password,

            });
            login(response.data.accessToken);
            console.log(response.data.accessToken);

        } catch (err) {
            console.log(err.response.data);
        }
    }

        return (
            <>
                <form onSubmit={handleLogin}>
                    <div className="login-outer-container-background">
                        <div className="login-inner-container">
                            <div className="login-container-title">
                                <h2 className="login-title">LOGIN</h2>
                                <p className="login-text-p-title">Vul alstublieft in om in te loggen.</p>
                                <div className="login-container-text">
                                    <label htmlFor="username"><p className="login-text-p">Gebruikersnaam</p></label>
                                    <input
                                        id="username"
                                        type="text"
                                        name="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        autoComplete="username"
                                        placeholder="Vul gebruikersnaam in..."
                                        required/>

                                    <label htmlFor="password"><p className="login-text-p">Wachtwoord</p></label>
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        autoComplete="password"
                                        placeholder="Vul wachtwoord in..."
                                        required/>

                                    <div className="login-button-div">
                                        <Button type="submit"/>
                                    </div>
                                    <div className="login-container-forgot-password">
                                    <span className="login-text-forgot-psw">
                                        Wachtwoord vergeten?
                                        <a href="/login">Wachtwoord?</a>
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </>
        );
}
export default login;

