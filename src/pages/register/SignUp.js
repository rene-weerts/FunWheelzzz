import React, {useState} from 'react';
import './SignUp.css';
import Button from '../../components/button/Button';
import axios from 'axios';


const Register = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');


    function handleSubmit(e) {
        e.preventDefault();

        if (!email || !username || !password || !repeatPassword) {
            console.error('Vul alle velden in alstublieft.');
            return;
        }

        if (!email.includes('@')) {
            console.error('Vul een geldig email adres in alstublieft.');
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

        if (password !== repeatPassword) {
            console.error('Wachtwoorden komen niet overeen.');
            return;
        }

        const data = {
            username: username,
            email: email,
            password: password,
            role: ['user']
        };
       const {headers} = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer xxx.xxx.xxx',
        };

        // async function getDataNovi () {
        //     try{
        //         const response = await axios.get('https://frontend-educational-backend.herokuapp.com/api/admin/all');
        //        const registerUserName = response.data
        //         console.log(registerUserName);
        //         return registerUserName ===
        //             console.log(totalUsers);
        //
        //         });
        //
        //
        //     } catch (err){
        //         console.error();
        //     }
        // }
        // const resultDataGetNovi =  getDataNovi
        // console.log(resultDataGetNovi);

        async function postDataNovi() {

            try {
                const response = await axios.post((process.env.REACT_APP_NOVI_URI + process.env.REACT_APP_NOVI_ENDPOINT_POST_REGISTER),data,{headers});
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
                <div className="register-outer-container-background">
                    <div className="register-inner-container">
                        <div className="register-container-title">
                            <h2 className="register-title">REGISTREREN</h2>
                            <p className="register-text-p-title">Vul alstublieft in om een account te maken.</p>
                        </div>
                        <div className="register-container-text">

                            <label htmlFor="username">
                                <p className="register-text-p">Gebruikersnaam</p></label>
                            <input
                                id="username"
                                type="text"
                                name="username"
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Vul gebruikersnaam in..."
                                required/>

                            <label htmlFor="email">
                                <p className="register-text-p">Email</p></label>
                            <input
                                id="email"
                                type="text"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Vul email in..."
                                required/>

                            <label htmlFor="password"
                            ><p className="register-text-p">Wachtwoord</p></label>
                            <input
                                id="password"
                                type="password"
                                autoComplete="password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Vul wachtwoord in..."

                                required/>

                            <label htmlFor="repeatPassword"
                            ><p className="register-text-p">Herhaal-Wachtwoord</p></label>
                            <input
                                id="repeatPassword"
                                type="password"
                                autoComplete="repeatPassword"
                                name="password"
                                onChange={(e) => setRepeatPassword(e.target.value)}
                                placeholder="Vul wachtwoord in..."
                                required/>

                            <div className="register-button-div">
                                <Button
                                    type="submit"
                                />
                            </div>
                            <div className="container-sign-in">
                                <p className="register-agreement-text">Bij het maken van een account gaat u akkoord
                                    met onze <a href="/privacy verklaring">Privacyverklaring</a>.</p>
                                <p>Heeft u al een account? <a href="/login">log in</a>.</p>
                            </div>


                        </div>
                    </div>

                </div>

            </form>


        </>);
};

export default Register;


// if(e.response.status === ){
//     console.error("Gebruikersnaam is al in gebruik");
//
// }