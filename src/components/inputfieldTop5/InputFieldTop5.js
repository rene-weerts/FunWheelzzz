import React from 'react';
import styles from './InputFieldTop5.module.css';

const InputFieldTop5Component = () => {

    return (
        <>
            <label className={styles["inputFieldTop5"]}>
                <p className={styles["inputFieldTop5-nr"]}>
                    1
                </p>
                 <p className={styles["inputFieldTop5-p"]}>
                     Maastricht
                 </p>
            </label>
            <label className={styles["inputFieldTop5"]}>
                <p className={styles["inputFieldTop5-nr"]}>
                    2
                </p>
                <p className={styles["inputFieldTop5-p"]}>
                    Geleen
                </p>
            </label>
            <label className={styles["inputFieldTop5"]}>
                <p className={styles["inputFieldTop5-nr"]}>
                    3
                </p>
                <p className={styles["inputFieldTop5-p"]}>
                   Voerendaal
                </p>
            </label>
            <label className={styles["inputFieldTop5"]}>
                <p className={styles["inputFieldTop5-nr"]}>
                    4
                </p>
                <p className={styles["inputFieldTop5-p"]}>
                   Valkenburg
                </p>
            </label>
            <label className={styles["inputFieldTop5"]}>
                <p className={styles["inputFieldTop5-nr"]}>
                    5
                </p>
                <p className={styles["inputFieldTop5-p"]}>
                    Kerkrade
                </p>
            </label>

        </>
    );
};

export default InputFieldTop5Component;


// <div className={styles["inputFieldTop5-container-nr-p"]}>*/}
