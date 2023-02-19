import React from 'react';
import styles from './InputFieldTop5.module.css';

const InputFieldTop5Component = ({citySun1,citySun2,citySun3,citySun4,citySun5,cityTemp1,cityTemp2,cityTemp3,cityTemp4, cityTemp5,cityRain1,cityRain2,cityRain3,cityRain4,cityRain5,cityWind1,cityWind2,cityWind3,cityWind4,cityWind5}) => {

    return (

        < div>
            <label className={styles['inputFieldTop5']}>
                <p className={styles['inputFieldTop5-nr']}>1</p>
                <p className={styles['inputFieldTop5-p']}>
                    {citySun1}
                    {cityTemp1}
                    {cityRain1}
                    {cityWind1}
                </p>
            </label>
            <label className={styles['inputFieldTop5']}>
                <p className={styles['inputFieldTop5-nr']}>2</p>
                <p className={styles['inputFieldTop5-p']}>
                    {citySun2}
                    {cityTemp2}
                    {cityRain2}
                    {cityWind2}
                </p>
            </label>
            <label className={styles['inputFieldTop5']}>
                <p className={styles['inputFieldTop5-nr']}>3</p>
                <p className={styles['inputFieldTop5-p']}>
                    {citySun3}
                    {cityTemp3}
                    {cityRain3}
                    {cityWind3}
                </p>
            </label>
            <label className={styles['inputFieldTop5']}>
                <p className={styles['inputFieldTop5-nr']}>4</p>
                <p className={styles['inputFieldTop5-p']}>
                    {citySun4}
                    {cityTemp4}
                    {cityRain4}
                    {cityWind4}
                </p>
            </label>
            <label className={styles['inputFieldTop5']}>
                <p className={styles['inputFieldTop5-nr']}>5</p>
                <p className={styles['inputFieldTop5-p']}>
                    {citySun5}
                    {cityTemp5}
                    {cityRain5}
                    {cityWind5}
                </p>
            </label>

        </div>
    );


};


export default InputFieldTop5Component;


