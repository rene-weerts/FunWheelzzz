import React, {useContext} from 'react';
import styles from './Nav.module.css';
import {NavLink,} from 'react-router-dom';
import flag from '../../assets/Limburgse-vlag.png';
import {AuthContext} from '../../context/AuthContext';

const Nav = () => {

    const {isAuth, logout} = useContext(AuthContext);
    const navLinkStyles = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bolder' : 'normal',
            textDecoration: isActive ? 'underline dashed var(--cl-rood' : 'none',
        };
    };
    return (
        <header>
            <nav className={styles['nav-default']}>
                <div className={styles['nav-outer-container-wheelzzz']} id="header-home">
                    <div>
                        <p className={styles['nav-container-name-wheelzzz']}>Fun Wheelzzz</p>
                    </div>
                    <div className={styles['img-vlag']}>
                        <img src={flag} alt="Limburgse-vlag" width="45" height="25"/>
                    </div>
                </div>
                <ul className={styles['nav-container-ul']}>
                    {!isAuth && (
                        <>
                            {<NavLink to="/login" style={navLinkStyles}>
                                <p className={styles['nav-p-tag']}>Login</p>
                            </NavLink>}
                            {<NavLink to="/register" style={navLinkStyles}>
                                <p className={styles['nav-p-tag']}>Register</p>
                            </NavLink>}

                        </>
                    ) }
                    {isAuth &&(
                        <>

                            {<NavLink to="/home" style={navLinkStyles}>
                                <p className={styles['nav-p-tag']}>Home</p>
                            </NavLink>}
                            {<NavLink to="/top5" style={navLinkStyles}>
                                <p className={styles['top5-color']}>Top5</p>
                            </NavLink>}
                            {<NavLink to="/regio" style={navLinkStyles}>
                                <p className={styles['nav-p-tag']}>Regio</p>
                            </NavLink>}
                            {<NavLink to="/contact" style={navLinkStyles}>
                                <p className={styles['nav-p-tag']}>Contact</p>
                            </NavLink>}
                            {<NavLink to="/logout" onClick={logout} style={navLinkStyles}>
                                <p className={styles['nav-p-tag']}>Logout</p>
                            </NavLink>}

                        </>
                    )}






                    {/* ! link altijd zichtbaar */}
                    {/*auth is link werkt altijd*/}
                    {/*!setAuth link verdwijnt ()*/}
                    {/*setAuth link verschijnt()*/}
                    {/*isAuth link is niet te zien als ingelogd of uitgelogd*/}


                </ul>
            </nav>
        </header>
    );
};
export default Nav;

