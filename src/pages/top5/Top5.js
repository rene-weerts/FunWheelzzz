import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import './Top5.css';
import pictureMap from '../../assets/picture-map.jpg';
import Button from '../../components/button/Button';
import RadioButton from '../../components/radiobutton/RadioButton';
import CheckBox from '../../components/checkbox/CheckBox';
import InputFieldTop5Component from '../../components/inputfieldTop5/InputFieldTop5';

const Top5 = () => {
        const labelText1 = 'Maastricht';
        const labelText2 = 'Geleen';
        const labelText3 = 'Sittard';
        const labelText4 = 'Brunssum';
        const labelText5 = 'Kerkrade';
        const labelText6 = 'Voerendaal';
        const labelText7 = 'Valkenburg';
        const labelText8 = 'Vaals';
        const labelText9 = 'Gulpen';
        const labelText10 = 'Margraten';

        const [checked, setChecked] = useState({});
        const [selectedValue, setSelectedValue] = useState([]);


        const [dataArrayJSON, setDataArrayJSON] = useState(null);
        // console.log(checked);
        // console.log(selectedValue);
        // console.log(dataArrayJSON);
        const handleCheckBoxChange = (e) => {
            setChecked({...checked, [e.target.value]: e.target.checked});
            if (!e.target.checked) {

                setSelectedValue(selectedValue.filter((value) => value !== e.target.value));
            } else {
                setSelectedValue([...selectedValue, e.target.value]);
            }
        };

        const [checkedRadioButton, setCheckedRadioButton] = useState('');
        const [radioList, setRadioList] = useState('');
        const radioListRef = useRef('');
        const handleRadioButtonChange = (e) => {
            radioListRef.current = e.target.value;
            setRadioList(e.target.value);
        };
        const weatherTypeRadio = (radioListRef.current);
        console.log(weatherTypeRadio);

        useEffect(() => {
            const controller = new AbortController();
            const GetWeather = async () => {
                const cityList = selectedValue.join(',');
                console.log(cityList);

                // const apiUrl = 'http://api.openweathermap.org/data/2.5/find?q=&`${cityList}`&units=metric&type=accurate&mode=metric&APPID=';
                // const apiKey = '723470e038b84ffe8c76c25d61879b53';
                const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Maastricht&units=metric&type=accurate&mode=metric&APPID=';
                const apiKey = '723470e038b84ffe8c76c25d61879b53';
                {
                    const response = await axios.get(apiUrl + apiKey);
                    const weatherTypes = response.data;
                    console.log(weatherTypes);
                    setDataArrayJSON(JSON.stringify(weatherTypes));
                    const {clouds} = weatherTypes;
                    const sun = clouds.all;
                    console.log(sun);
                    console.log(`De meeste zon, ${sun} % bewolkt`);
                    const temp = weatherTypes.main.temp;
                    console.log(temp);
                    console.log(`De hoogste temp, ${temp} Celcius`);
                    //als er geen regen valt is er ook geen data (dus undefined)!!!
                    // const {rain} = weatherTypes.main.rain;
                    // console.log(rain);
                    // console.log(`De meeste regen, ${rain} mm/u`)
                    const {wind} = weatherTypes;
                    console.log(wind.speed);
                    console.log(`De hardste wind, ${wind.speed} km/u`);
                }


                    // if( Number(weatherTypeRadio) === 1){
                // sun.numbers.sort((a, b) => a- b)
                    //
                    //
                    //
                    //     }
                    // else(){
                    //
                    //     }catch (e) {
                    //     console.error(e);
                    // }


            };
            if (selectedValue.length) {
                GetWeather().then(r => {
                });
            }
            return function cleanup() {
                controller.abort(); // <--- request annuleren
            };
        }, [selectedValue, weatherTypeRadio]);


        return (
            <div className="top5-outer-container">
                <div className="top5-inner-container">
                    <img className="top5-image" src={pictureMap} alt="map"/>
                    <div className="top5-outer-container-form">
                        <form onSubmit={Top5} className="top5-inner-container-form">
                            <p className="top5-info-text">Selecteer elke gewenste plaats...</p>
                            <div className="top5-container-places">
                                <p className="top5-places">Plaatsen.</p>

                                <CheckBox
                                    labelText={labelText1}
                                    value={labelText1}
                                    onChange={handleCheckBoxChange}
                                />
                                <CheckBox
                                    labelText={labelText2}
                                    value={labelText2}
                                    onChange={handleCheckBoxChange}
                                />
                                <CheckBox
                                    labelText={labelText3}
                                    value={labelText3}
                                    onChange={handleCheckBoxChange}
                                />
                                <CheckBox
                                    labelText={labelText4}
                                    value={labelText4}
                                    onChange={handleCheckBoxChange}
                                />
                                <CheckBox
                                    labelText={labelText5}
                                    value={labelText5}
                                    onChange={handleCheckBoxChange}
                                />
                                <CheckBox
                                    labelText={labelText6}
                                    value={labelText6}
                                    onChange={handleCheckBoxChange}
                                />
                                <CheckBox
                                    labelText={labelText7}
                                    value={labelText7}
                                    onChange={handleCheckBoxChange}
                                />
                                <CheckBox
                                    labelText={labelText8}
                                    value={labelText8}
                                    onChange={handleCheckBoxChange}
                                />
                                <CheckBox
                                    labelText={labelText9}
                                    value={labelText9}
                                    onChange={handleCheckBoxChange}
                                />
                                <CheckBox
                                    labelText={labelText10}
                                    value={labelText10}
                                    onChange={handleCheckBoxChange}
                                />
                            </div>
                            <p className="top5-info-text">Selecteer 1 gewenst weertype...</p>
                            <div className="top5-weather-types">
                                <RadioButton
                                    label="Zon"
                                    name="weather"
                                    value="1"
                                    onChange={handleRadioButtonChange}
                                    checked={setCheckedRadioButton}
                                    // weather={weather}
                                />
                                <RadioButton
                                    label="Temp"
                                    name="weather"
                                    value={2}
                                    onChange={handleRadioButtonChange}
                                    checked={setCheckedRadioButton}
                                    // weather={weather}
                                />
                                <RadioButton
                                    label="Regen"
                                    name="weather"
                                    value={3}
                                    onChange={handleRadioButtonChange}
                                    checked={setCheckedRadioButton}
                                    // weather={weather}
                                />
                                <RadioButton
                                    label="Wind"
                                    name="weather"
                                    value={4}
                                    onChange={handleRadioButtonChange}
                                    checked={setCheckedRadioButton}
                                    // weather={weather}
                                />


                            </div>
                            <div className="top5-button-component-container">
                                <Button type="submit"/>
                            </div>
                            <span id="error-message"></span>
                        </form>
                    </div>
                    <div className="top5-container-list">
                        <p className="top5-list-text">Top 5</p>
                        <p className="container-list-places">Plaatsen.</p>
                        <div>
                            <InputFieldTop5Component/>
                        </div>
                    </div>
                </div>
            </div>

        );

    }
;

export default Top5;


