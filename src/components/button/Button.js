import React from 'react';
import styles from './Button.module.css';

function Button() {
    return (
        <>
            <a href="#"  className={styles['container']}>
                <i className={styles["button-i"]}></i>
                <span className={styles['default-button']}>
                    Versturen
                </span>
            </a>


        </>
    );
}

export default Button;