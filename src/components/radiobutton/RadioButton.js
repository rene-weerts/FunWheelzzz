import React from 'react';
import styles from './RadioButton.module.css';


const RadioButton = ({label, value, name, onChange}) => {
    // let checked = weather === value;
    // console.log(checked);

    return (
        <label
            className={styles['top5-label-radio']}
        >
            <input
                className={styles['top5-input-radio']}
                type="radio"
                name={name}
                value={value}
                onChange={onChange}
                // checked={checked}
            />
            {label}
        </label>
    );
};
export default RadioButton;

