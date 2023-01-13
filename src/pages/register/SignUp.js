import React from 'react';
import './SignUp.css';
import Button from '../../components/button/Button';

function Register ()  {

    function registerUser (){
        console.log("de gebruiker is geregistreerd")
    }
    return (<>
        <form >
            <div className="register-outer-container-background">
                <div className="register-inner-container">
                    <div className="register-container-title">
                        <h2 className="register-title">REGISTREREN</h2>
                        <p className="register-text-p-title">Vul alstublieft in om een account te maken.</p>
                    </div>
                    <div className="register-container-text">
                        <label htmlFor="email"><p className="register-text-p">Email</p></label>
                        <input type="text" placeholder="Vul email in..." name="email" id="email" required/>
                        <label htmlFor="psw"><p className="register-text-p">Wachtwoord</p></label>
                        <input type="password" placeholder="Vul wachtwoord in..." name="psw" id="psw" required/>
                        <label htmlFor="psw-repeat"><p className="register-text-p">Herhaal-Wachtwoord</p></label>
                        <input type="password" placeholder="Vul wachtwoord in..." name="psw-repeat" id="psw-repeat" required/>
                        <div className="register-button-div">
                            <Button/>
                            {/*<button className="register-button"  type="button" onClick={registerUser}><p>Verstuur</p></button>*/}
                        </div>
                        <div className="container signin">
                            <p className="register-agreement-text" >Bij het maken van een account gaat u akkoord met onze <a href="#">Privacyverklaring</a>.</p>
                            <p>Heeft u al een account? <a href="#">log in</a>.</p>
                        </div>


                    </div>
                </div>

            </div>

        </form>



    </>);

};

export default Register;