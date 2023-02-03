import React, {useContext} from 'react';
import styles from './Nav.module.css';
import {NavLink} from 'react-router-dom';
import flag from '../../assets/Limburgse-vlag.png';
import {AuthContext} from '../../context/AuthContext';
const Nav = () => {
    const {auth, setAuth} = useContext(AuthContext);

    const navLinkStyles = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bolder' : 'normal',
            textDecoration: isActive ? 'underline dashed var(--cl-rood' : 'none',
        };
    };

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
                        to="/"
                        style={navLinkStyles}>
                        <p className={styles['nav-p-tag']}>
                            Home
                        </p>
                    </NavLink>}

                    {auth && <NavLink
                        to="/top5"
                        style={navLinkStyles}>
                        <p className={styles['top5-color']}>
                            Top 5
                        </p>
                    </NavLink>}

                    {auth && <NavLink
                        to="/regio"
                        style={navLinkStyles}>
                        <p className={styles['nav-p-tag']}>
                            Regio
                        </p>
                    </NavLink>}

                    {auth && <NavLink
                        to="/contact"
                        style={navLinkStyles}>
                        <p className={styles['nav-p-tag']}>
                            Contact
                        </p>
                    </NavLink>}

                    {auth && <NavLink
                        to="/home"
                        style={navLinkStyles}>
                        <p className={styles['nav-p-tag']}>
                            Logou
                        </p>
                    </NavLink>}

                    {!auth && <NavLink
                        className="login-link"
                        to="/login"
                        onClick={() => {
                            setAuth(true);
                        }}
                        style={navLinkStyles}>
                        <p className={styles['nav-p-tag']}>
                            Log in
                        </p>
                    </NavLink>}

                    {!auth && <NavLink
                        className="register-link"
                        to="/register"
                        onClick={() => {
                            setAuth(true);
                        }}
                        style={navLinkStyles}>
                        <p className={styles['nav-p-tag']}>
                            Registreren
                        </p>
                    </NavLink>}

                </ul>
            </nav>
        </header>
    );
}
export default Nav;

