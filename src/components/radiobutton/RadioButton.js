import React from 'react';
import styles from './RadioButton.module.css';


const RadioButtonComponent = () => {
    const [weather, setWeather] = React.useState(null);
    const [selectedWeather, setSelectedWeather] = React.useState(null);
    console.log(selectedWeather);
    const onOptionChange = (e) => {
        setSelectedWeather(e.currentTarget.value);
        setWeather(+e.currentTarget.value);
    };


    return (
        <div>
            <RadioButton
                label="Zon"
                name="weather"
                value={1}
                onChange={onOptionChange}
                checked={weather === 1}
                weather={weather}
            />
            <RadioButton
                label="Temp"
                name="weather"
                value={2}
                onChange={onOptionChange}
                checked={weather === 2}
                weather={weather}
            />
            <RadioButton
                label="Regen"
                name="weather"
                value={3}
                onChange={onOptionChange}
                checked={weather === 3}
                weather={weather}
            />
            <RadioButton
                label="Wind"
                name="weather"
                value={4}
                onChange={onOptionChange}
                checked={weather === 4}
                weather={weather}
            />
        </div>

    );
};
const RadioButton = ({label, value, onChange, weather}) => {
    let checked = weather === value;
    return (
        <label className={styles["top5-label-radio"]}>
            <input className={styles["top5-input-radio"]}
                   type="radio"
                   name="weather"
                   value={value}
                   onChange={onChange}
                   checked={weather === value}
            />
            {label}
        </label>


    );


};
export default RadioButtonComponent;