import React from 'react';
import styles from './CheckBox.module.css';

const CheckBox = ({labelText, checked, onChange}) => {


    return (
        <div className={styles['top5-checkbox-container']}>
            <input className={styles['top5-checkbox-input']}
                   type="checkbox"
                   id={'checkbox'}
                   value={labelText}
                   onChange={onChange}
                   checked={checked}
            />
            <label className={styles['top5-checkbox-label']}
                   htmlFor={'checkbox'}>
                {labelText}
            </label>
        </div>

    );


};
export default CheckBox;


