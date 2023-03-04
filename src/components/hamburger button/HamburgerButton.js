import React, {useState} from 'react';
import styles from './HamburgerButton.module.css';

function HamburgerButton() {
    const [isActive, setIsActive] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    function handleClick() {
        setIsActive(!isActive);
    }

    return (


        <>
            <div className={styles['hamburger-container']}>
                <button className={`${styles['hamburger-button']} ${isActive ? styles.active : ''}`}
                        onClick={handleClick}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
                <div className={styles.textContainerOuter}>
                    <div className={styles.textContainer}>
                        {isHovering && (
                            <p className={styles.text}>
                                Kies een vlag voor een andere streek in Nederland
                            </p>
                        )}
                    </div>
                </div>



            </div>

        </>


    );
}

export default HamburgerButton;