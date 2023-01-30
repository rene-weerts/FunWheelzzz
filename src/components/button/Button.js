import React from 'react';
import styles from './Button.module.css';


function Button() {
    return (
        <>
            <button type="submit" className={styles['container']}>
                <i className={styles['button-i']}>
                </i>
                <span className={styles['default-button']}>
                    Versturen
                </span>
            </button>
        </>
    );
}


export default Button;