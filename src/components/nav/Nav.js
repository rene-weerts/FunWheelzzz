import React, {useContext} from 'react';
import styles from'./Nav.module.css';
import {NavLink, useNavigate} from 'react-router-dom';
import flag from '../../assets/Limburgse-vlag.png';
import authContext from '../../context/AuthContext';

const Nav = ({auth, setAuth}) => {
    // const {isauth, logout} = useContext(authContext);
    //
    // function handleLogout() {
    //     logout();
    // }

    const navigate = useNavigate();
    const navLinkStyles = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bolder' : 'normal',
            textDecoration: isActive ? 'underline dashed var(--cl-rood' : 'none',
        };
    };

    function handleRegister(e) {
        e.preventDefault();
        setAuth(true);
        navigate('/register');

    }

    return (
        <header>

            <nav className={styles["nav-default"]}>
                <div className={styles["nav-outer-container-wheelzzz"]} id="header-home">
                    <div>
                        <p className={styles["nav-container-name-wheelzzz"]}>Fun Wheelzzz</p>
                    </div>
                    <div className={styles["img-vlag"]}>
                        <img src={flag} alt="Limburgse-vlag" width="45" height="25"/>
                    </div>

                </div>


                <ul className={styles["nav-container-ul"]}>

                    {auth && <NavLink
                        className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to="/" style={navLinkStyles}>
                        <p className={styles["nav-p-tag"]}>Home</p>
                    </NavLink>}

                    {auth && <NavLink
                        className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to="/top5" style={navLinkStyles}>
                        <p className={styles["top5-color"]} >Top 5</p>
                    </NavLink>}

                    {auth && <NavLink
                        className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to="/regio" style={navLinkStyles}>
                        <p className={styles["nav-p-tag"]}>Regio</p>
                    </NavLink>}


                    {auth &&
                        <a className={styles["nav-a-tag"]} href="#form-contact-link-bottom">Contact</a>
                    }
                    {auth &&
                        <NavLink to="login" onClick={() => {
                            setAuth(false);
                        }} style={navLinkStyles}><p className={styles["nav-p-tag"]}>Logout</p></NavLink>}

                    {!auth && <NavLink className="login-link" to="/login" onClick={() => {
                        setAuth(true);
                    }} style={navLinkStyles}><p className={styles["nav-p-tag"]}>Log in</p></NavLink>}

                    {!auth && <NavLink className="register-link" to="/Register" onClick={() => {
                        setAuth(true);
                    }} style={navLinkStyles}><p className={styles["nav-p-tag"]}>Registreren</p></NavLink>}


                </ul>


            </nav>

        </header>)

};

export default Nav;

