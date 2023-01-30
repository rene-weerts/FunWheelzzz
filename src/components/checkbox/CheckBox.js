import React, {useState} from 'react';
import styles from './CheckBox.module.css';

const CheckBox = ({labelText}) => {

    const [isChecked, setIsChecked] = useState(false);
    const [labelTextArray, setLabelTextArray] = useState([]);
    const labelTextElements = labelTextArray.map((text, index) => <p key={index}>{text}</p>);
    const allLabelTextElements = React.Children.map(labelTextElements, child => child.props.children);
    // console.log(allLabelTextElements);

    const handleCheckboxChange = event => {
        setIsChecked(event.target.checked);
        if (event.target.checked) {
            setLabelTextArray(prevArray => [...prevArray, event.target.value]);
        }
    };


    return (
        <div className={styles["top5-inner-container-places-component-checkbox"]}>
            <input className={styles["top5-input-checkbox"]} type="checkbox" onChange={handleCheckboxChange} value={labelText} />
            <label className={styles["top5-label-checkbox"]}>{labelText}</label>
            {/*{isChecked && <div>{labelTextElements}</div>}*/}
        </div>
    );



};
export default CheckBox;


