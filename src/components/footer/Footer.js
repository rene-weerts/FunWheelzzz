import React from 'react';
import styles from './Footer.module.css';
import iconTwitter from '../../assets/twitter.png';
import iconFacebook from '../../assets/facebook.png';
import iconInstagram from '../../assets/instagram.png';

const Footer = () => {

    return (

        <footer className={styles['footer-outer-container']}>

            <div className={styles['footer-inner-container']}>

                <div className={styles['footer-containers-ul']}>

                    <div className={styles["footer-container-1"]}>
                        <ul>
                            <li className={'footer-list-items'}>
                                <a href="/home-header" className={styles['footer-a-tag']}><p
                                    className={styles['footer-p-tag']}>Home</p></a>
                            </li>
                            <li className={'footer-list-items'}>
                                <a href="/regio" className={styles['footer-a-tag']}><p
                                    className={styles['footer-p-tag']}>Regio</p></a>
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
                            <div className={styles['footer-text-social-media']}>
                                <h3>
                                    Social with us
                                </h3>
                            </div>
                            <div className={styles['footer-social-media-icons']}>
                                <a href="https://www.facebook.com/"> <img src={iconFacebook} alt="icon-facebook"/></a>
                                <a href="https://www.instagram.com/"><img className={styles['footer-social-icon']} src={iconInstagram} alt="icon-instagram"/></a>
                                <a href="https://twitter.com/?lang=en"> <img src={iconTwitter} alt="icon-twitter"/></a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles["footer-container-3"]}>
                    <ul>
                        <li className={'footer-list-items'}>
                            <a href="/" className={styles['footer-a-tag']}><p
                                className={styles['footer-p-tag']}>Donate</p></a>
                        </li>
                        <li className={'footer-list-items'}>
                            <a href="https://www.strava.com/login" target="blanc
                        k" className={styles['footer-a-tag']}><p className={styles['footer-p-tag']}>Strava</p></a>
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