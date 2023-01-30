import React, {useState} from 'react';
import './SignIn.css';
import Button from '../../components/button/Button';
import axios from 'axios';

const login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (!username || !password) {
            console.error('Vul alle velden in alstublieft.');
            return;
        }
        if (username.length < 6) {
            console.error('Gebruikersnaam moet minimaal 6 letters zijn.');
            return;
        }
        if (username.length < 6) {
            console.error('Gebruikersnaam moet minimaal 6 letters zijn.');
            return;
        }
        if (password.length < 6) {
            console.error('Wachtwoord moet minimaal 6 letters zijn.');
            return;
        }
        const data = {
            username: username,
            password: password,
            role: ['user']
        };
       const {headersLogin} = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer xxx.xxx.xxx',
        };
        async function postDataNovi() {

            try {
                const response = await axios.post((process.env.REACT_APP_NOVI_URI + process.env.REACT_APP_NOVI_ENDPOINT_POST_REGISTER),data,{headersLogin});
                console.log(response);

            } catch (err) {
                console.error();
            }
        }

        const resultDataPostNovi = postDataNovi();
        console.log(resultDataPostNovi);




    }
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
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
                                    <span className="login-text-forgot-psw">Wachtwoord vergeten? <a
                                        href="/login">Wachtwoord?</a></span>
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