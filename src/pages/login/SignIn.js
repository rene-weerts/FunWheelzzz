import React from 'react';
import './SignIn.css';
import Button from '../../components/button/Button';

function SignIn() {
    // const {login} = useContext(AuthContext);
    //
    // async function handleLogin() {
    //     // bij data komt email en pass word uit de request body (geen andere data)
    //     const response = await axios.post("http://localhost:3000/login",{})
    //     login();
    // }
    //
    // try {
    //
    // } catch (e) {
    //     console.error('e');
    //     //     hier komt page not found of error melding voor gebruiker
    //
    // }
    //
    // function handleLogin() {
    //     login(response.data.accestoken);
    // }

    return (
        <>
            <form>
                <div className="login-outer-container-background">
                    <div className="login-inner-container">
                        <div className="login-container-title">
                            <h2 className="login-title">LOGIN</h2>
                            <p className="login-text-p-title">Vul alstublieft in om in te loggen.</p>

                            <div className="login-container-text">

                                <label htmlFor="uname"><p className="login-text-p">Gebruikersnaam</p></label>
                                <input type="text" placeholder="Vul gebruikersnaam in..." name="uname" id="uname"
                                       required/>

                                <label htmlFor="psw"><p className="login-text-p">Wachtwoord</p></label>
                                <input type="password" placeholder="Vul wachtwoord in..." name="psw" id="psw" required/>

                                  <div className="login-button-div">
                                {/*/! * Hier moet een onclick event geplaatst worden*!/     onClick={handleLogin}*/}
                                {/*      <button className="login-button" type="button" ><p>Verstuur</p>*/}
                                {/*      </button>*/}
                                      <Button/>
                                  </div>
                                    <div className="login-container-forgot-pswr">
                                    <span className="login-text-forgot-psw">Wachtwoord vergeten? <a href="#">Wachtwoord?</a></span>
                                    </div>
                                    </div>

                                    </div>

                                    </div>
                                    </div>
                                    </form>
                                    </>
                                    );
};

export default SignIn;