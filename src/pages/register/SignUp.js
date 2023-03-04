import React, {useState} from 'react';
import './SignUp.css';
import Button from '../../components/button/Button';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const Register = () => {
    const [error, setError] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup',
                {
                    username: username,
                    email: email,
                    password: password,
                    role: ['user']
                });
            navigate('/login');
            console.log(result.data);

        } catch (e) {
            console.error(e);
            setError(true);
            if (error) {
                return <p>"An error occurred. Please try again later." </p>;
            }
        }
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='register-outer-container-background'>
                    <div className='register-inner-container'>
                        <div className='register-container-title'>
                            <h2 className='register-title'>REGISTREREN</h2>
                            <p className='register-text-p-title'>Vul alstublieft in om een account te maken.</p>
                        </div>
                        <div className='register-container-text'>

                            <label htmlFor='username'>
                                <p className='register-text-p'>Gebruikersnaam</p></label>
                            <input
                                id='username'
                                type='text'
                                name='username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder='Vul gebruikersnaam in...'
                                autoComplete='off'
                                required
                            />


                            <label htmlFor='email'>
                                <p className='register-text-p'>Email</p></label>
                            <input
                                id='email'
                                type='text'
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Vul email in...'
                                autoComplete='off'
                                required
                            />


                            <label htmlFor='password'
                            ><p className='register-text-p'>Wachtwoord</p></label>
                            <input
                                id='password'
                                type='password'
                                name='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Vul wachtwoord in...'
                                autoComplete='off'
                                required
                            />

                            <div className='register-button-div'>
                                <Button
                                    type='submit'
                                />
                            </div>
                            <div className='container-sign-in'>
                                <p className='register-agreement-text'>Bij het maken van een account gaat u akkoord
                                    met onze <a href='/privacy statement'>Privacyverklaring</a>.</p>
                                <p>Heeft u al een account? <a href='/login'>log in</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>);
};

export default Register;

