import React from 'react';
import styles from './Footer.module.css';
import {useNavigate} from 'react-router-dom';
import iconTwitter from '../../assets/twitter.png';
import iconFacebook from '../../assets/facebook.png';
import iconInstagram from '../../assets/instagram.png';

const Footer = () => {
    const navigate = useNavigate();
    // const {Auth} = useContext(AuthContext);
    const navLinkStyles = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bolder' : 'normal',
            textDecoration: isActive ? 'underline dashed var(--cl-rood' : 'none',
        };
    };

    // function handleRegister(e) {
    //     e.preventDefault();
    //     setAuth(true);
    //     navigate('/register');
    //
    // }

    return (

        <footer className={styles['footer-outer-container']}>

            <div className={styles['footer-inner-container']}>

                <div className={styles['footer-containers-ul']}>

                    <div className={styles["footer-container-1"]}>
                        <ul>
                            <li className={"footer-list-items"}>
                                <a href="#home-header" className={styles['footer-a-tag']}><p className={styles['footer-p-tag']}>Home</p></a>
                            </li>
                            <li className={"footer-list-items"}>
                                <a href="#home-header" className={styles['footer-a-tag']}><p className={styles['footer-p-tag']}>Events</p></a>
                            </li>
                            <li className={"footer-list-items"}>
                                <a href="#home-header" className={styles['footer-a-tag']}><p className={styles['footer-p-tag']}>Strava</p></a>
                            </li>
                        </ul>

                    </div>


                    <div className={styles["footer-container-2"]}>
                        <div>
                            <li className={styles['footer-list-item-top5']}>
                                <a href="/top5" className={styles['footer-a-tag']}>
                                    <p className={styles['footer-text-top5-link']}>
                                        Top 5
                                    </p>
                                </a>
                            </li>
                        </div>
                        <div>

                            <div className={styles['footer-social-media-container']}></div>
                            <div className={styles['footer-text-social-media']}>
                                <h3>
                                    Social with us
                                </h3>
                            </div>
                            <div className={styles['footer-social-media-icons']}>
                                <a href=""> <img src={iconFacebook} alt="icon-facebook"/></a>
                                <a href=""><img className={styles['footer-social-icon']} src={iconInstagram} alt="icon-instagram"/></a>
                                <a href=""> <img src={iconTwitter} alt="icon-twitter"/></a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles["footer-container-3"]}>
                    <ul>
                        <li className={"footer-list-items"}>
                            <a href="/" className={styles['footer-a-tag']}><p className={styles['footer-p-tag']}>Donate</p></a>
                        </li>
                        <li className={"footer-list-items"}>
                            <a href="#home-header" className={styles['footer-a-tag']}><p className={styles['footer-p-tag']}>Repair</p></a>
                        </li>
                        <li className={"footer-list-items"}>
                            <a href="#home-header" className={styles['footer-a-tag']}><p className={styles['footer-p-tag']}>Shop</p></a>
                        </li>
                    </ul>

                </div>


            </div>


            <div className={styles['footer-credentials']}>
                <p>copyright © FunWheels. 2023 </p>
            </div>

        </footer>


    );
};

export default Footer;