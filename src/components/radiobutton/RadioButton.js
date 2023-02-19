import React from 'react';
import styles from './RadioButton.module.css';

const RadioButton = ({label, value, name,checkedRadioButton, onChange}) => {


    return (
        <label className={styles['top5-label-radio']}>
            <input
                className={styles['top5-input-radio']}
                type="radio"
                name={name}
                value={value}
                onChange={onChange}
                checked={checkedRadioButton}
            />
            {label}
        </label>
    );
};


export default RadioButton;

