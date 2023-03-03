import React, {useContext, useState} from 'react';
import styles from './Nav.module.css';
import {NavLink,} from 'react-router-dom';
import photoFlagLimburg from '../../assets/photo-flag-Limburg.png';
import photoFlagFrance from '../../assets/photo-flag-France.png';
import photoFlagGermany from '../../assets/photo-flag-Germany.png';
import {AuthContext} from '../../context/AuthContext';
import HamburgerButton from '../hamburger button/HamburgerButton';

const Nav = () => {
    const [formTouched, setFormTouched] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const {isAuth, logout} = useContext(AuthContext);
    const navLinkStyles = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bolder' : 'normal',
            textDecoration: isActive ? 'underline dashed var(--cl-rood' : 'none',
        };
    };
    const handleFormTouch = () => {
        setFormTouched(true);
        setTimeout(() => {
            setFormTouched(false);
        }, 5000);
    };


    return (
        <header>
            <nav className={styles['nav-default']}>
                <div className={styles['nav-outer-container-wheelzzz']} id='header-home'>
                    <p className={styles['nav-container-name-wheelzzz']}>Fun Wheelzzz</p>
                    <div className={styles['photo-flag-Limburg']}>
                        <img src={photoFlagLimburg} alt='flag-Limburg' width='45' height='25'/>
                    </div>
                    <div className={styles['hamburger-container']}>
                        <HamburgerButton/>
                    </div>
                </div>
                <ul className={styles['nav-container-ul']}>
                    {!isAuth && (
                        <>
                            {<NavLink to='/login' style={navLinkStyles}>
                                <p className={styles['nav-p-tag']}>Login</p>
                            </NavLink>}
                            {<NavLink to='/register' style={navLinkStyles}>
                                <p className={styles['nav-p-tag']}>Register</p>
                            </NavLink>}
                        </>
                    ) }
                    {isAuth &&(
                        <>
                            {<NavLink to='/home' style={navLinkStyles}>
                                <p className={styles['nav-p-tag']}>Home</p>
                            </NavLink>}
                            {<NavLink to='/top5' style={navLinkStyles}>
                                <p className={styles['top5-color']}>Top5</p>
                            </NavLink>}
                            {<NavLink to='/regio' style={navLinkStyles}>
                                <p className={styles['nav-p-tag']}>Regio</p>
                            </NavLink>}
                            {<NavLink to='/contact' style={navLinkStyles}>
                                <p className={styles['nav-p-tag']}>Contact</p>
                            </NavLink>}
                            {<NavLink to='/logout' onClick={logout} style={navLinkStyles}>
                                <p className={styles['nav-p-tag']}>Logout</p>
                            </NavLink>}
                        </>
                    )}

                </ul>
                <div className={styles['login-text-container']}>
                    {formTouched &&
                        <p className={styles['login-text']}>Log eerst in alstublieft!</p>}
                </div>
                <div className={styles['container-france']}>
                    <img src={photoFlagFrance} alt='flag-France' width='40' height='15'
                         onClick={handleFormTouch}
                    />
                </div>
                <div className={styles['container-germany']}>
                    <img src={photoFlagGermany} alt='flag-Germany' width='40' height='15'
                         onClick={handleFormTouch}
                    />
                </div>
            </nav>
        </header>
    );
};
export default Nav;


