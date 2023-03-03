import React, {useRef, useState} from 'react';
import axios from 'axios';
import './Top5.css';
import photoMap from '../../assets/photo-map.jpg';
import Button from '../../components/button/Button';
import RadioButton from '../../components/radiobutton/RadioButton';
import CheckBox from '../../components/checkbox/CheckBox';
import InputFieldTop5 from '../../components/inputfieldTop5/InputFieldTop5';

const Top5 = () => {
    const labelText1 = 'Maastricht';
    const labelText2 = 'Geleen';
    const labelText3 = 'Sittard';
    const labelText4 = 'Brunssum';
    const labelText5 = 'Kerkrade';
    const labelText6 = 'Voerendaal';
    const labelText7 = 'Valkenburg';
    const labelText8 = 'Vaals';
    const labelText9 = 'Eijsden';
    const labelText10 = 'Margraten';
    const [citySun1, setCitySun1] = useState('');
    const [citySun2, setCitySun2] = useState('');
    const [citySun3, setCitySun3] = useState('');
    const [citySun4, setCitySun4] = useState('');
    const [citySun5, setCitySun5] = useState('');
    const [weatherSortStringSun, setWeatherSortStringSun] = useState("")
    const [cityTemp1, setCityTemp1] = useState('');
    const [cityTemp2, setCityTemp2] = useState('');
    const [cityTemp3, setCityTemp3] = useState('');
    const [cityTemp4, setCityTemp4] = useState('');
    const [cityTemp5, setCityTemp5] = useState('');
    const [weatherSortStringTemp, setWeatherSortStringTemp] = useState("")
    const [cityRain1, setCityRain1] = useState('');
    const [cityRain2, setCityRain2] = useState('');
    const [cityRain3, setCityRain3] = useState('');
    const [cityRain4, setCityRain4] = useState('');
    const [cityRain5, setCityRain5] = useState('');
    const [weatherSortStringRain, setWeatherSortStringRain] = useState("")
    const [cityWind1, setCityWind1] = useState('');
    const [cityWind2, setCityWind2] = useState('');
    const [cityWind3, setCityWind3] = useState('');
    const [cityWind4, setCityWind4] = useState('');
    const [cityWind5, setCityWind5] = useState('');
    const [weatherSortStringWind, setWeatherSortStringWind] = useState("")

    const [checked, setChecked] = useState({});
    const [selectedValue, setSelectedValue] = useState([]);
    const [checkedRadioButton] = useState('');
    const [radioList, setRadioList] = useState('');
    const radioListRef = useRef('');
    const weatherTypeRadio = radioListRef.current;
    const citiesList = selectedValue.join(',');
    const citiesListArray = citiesList.split(',');


    const handleCheckBoxChange = (e) => {
        setChecked({...checked, [e.target.value]: e.target.checked});
        if (!e.target.checked) {

            setSelectedValue(selectedValue.filter((value) => value !== e.target.value));
        } else {
            setSelectedValue([...selectedValue, e.target.value]);
        }
    };
    const handleRadioButtonChange = (e) => {
        radioListRef.current = e.target.value;
        setRadioList(e.target.value);

    };

    function handleSubmit(e) {
        e.preventDefault();
        if (weatherTypeRadio === '1') {
            async function getWeatherSun() {
                try {
                    const promises = citiesListArray.map(city => axios.get(` http://api.openweathermap.org/data/2.5/weather?&q=${city},nl&units=metric&type=accurate&mode=metric&APPID=5b63149357fbecbe141bbc8090490979&lang=nl`));

                    const resp = await Promise.all(promises);
                    let respSunData = [];
                    for (let i = 0; i < resp.length; i++) {
                        respSunData.push(resp[i].data.name + resp[i].data.clouds.all);
                        respSunData.sort(function (a, b) {
                            let aNum = parseInt(a.match(/\d+/)[0]);
                            let bNum = parseInt(b.match(/\d+/)[0]);
                            return aNum - bNum;
                        });
                    }
                    respSunData.forEach(function (str, index) {
                        respSunData[index] = str.replace(/\d+/g, '');
                    });

                    let [citySun1, citySun2, citySun3, citySun4, citySun5] = respSunData.map(str => str === undefined ? '' : str);
                    setCitySun1(citySun1);
                    setCitySun2(citySun2);
                    setCitySun3(citySun3);
                    setCitySun4(citySun4);
                    setCitySun5(citySun5);

                } catch (e) {
                    console.log(e);
                }
            }

            void getWeatherSun();
        } if (weatherTypeRadio === '1'){
            const newWeatherSortStringSun = "met de meeste zon"
            setWeatherSortStringSun(newWeatherSortStringSun)
        }
        else {
            setCitySun1('');
            setCitySun2('');
            setCitySun3('');
            setCitySun4('');
            setCitySun5('');
            setWeatherSortStringSun('')
        }
        if (weatherTypeRadio === '2') {
            async function getWeatherTemp() {
                try {
                    const promises = citiesListArray.map(city => axios.get(` http://api.openweathermap.org/data/2.5/weather?&q=${city},nl&units=metric&type=accurate&mode=metric&APPID=5b63149357fbecbe141bbc8090490979&lang=nl`));
                    const resp = await Promise.all(promises);
                    let respTempData = [];
                    for (let i = 0; i < resp.length; i++) {
                        respTempData.push(resp[i].data.name + resp[i].data.main.temp);
                        respTempData.sort(function (b, a) {
                            let aNum = parseFloat(a.match(/\d+\.\d+/)[0]);
                            let bNum = parseFloat(b.match(/\d+\.\d+/)[0]);
                            return aNum - bNum;
                        });
                    }
                    respTempData.forEach(function (str, index) {
                        respTempData[index] = str.replace(/\d+/g, '');
                    });

                    let [cityTemp1, cityTemp2, cityTemp3, cityTemp4, cityTemp5] = respTempData.map(str => str === undefined ? '' : str);
                    setCityTemp1(cityTemp1);
                    setCityTemp1(cityTemp1);
                    setCityTemp2(cityTemp2);
                    setCityTemp3(cityTemp3);
                    setCityTemp4(cityTemp4);
                    setCityTemp5(cityTemp5);
                } catch (e) {
                    console.log(e);
                }
            }

            void getWeatherTemp();
        }if (weatherTypeRadio === '2'){
            const newWeatherSortStringTemp = 'met de hoogste temp'
            setWeatherSortStringTemp(newWeatherSortStringTemp)
        }
        else {
            setCityTemp1('');
            setCityTemp1('');
            setCityTemp2('');
            setCityTemp3('');
            setCityTemp4('');
            setCityTemp5('');
            setWeatherSortStringTemp('')
        }
        if (weatherTypeRadio === '3') {
            async function getWeatherRain() {
                try {
                    const promises = citiesListArray.map(city => axios.get(`http://api.openweathermap.org/data/2.5/weather?&q=${city},nl&units=metric&type=accurate&mode=metric&APPID=5b63149357fbecbe141bbc8090490979&lang=nl`));
                    const resp = await Promise.all(promises);

                    let respRainData = [];
                    for (let i = 0; i < resp.length; i++) {
                        respRainData.push(resp[i].data.name + resp[i].data.main.humidity);
                        respRainData.sort(function (b, a) {
                            let aNum = parseInt(a.match(/\d+/)[0]);
                            let bNum = parseInt(b.match(/\d+/)[0]);
                            return aNum - bNum;
                        });
                    }
                    respRainData.forEach(function (str, index) {
                        respRainData[index] = str.replace(/\d+/g, '');
                    });
                    let [cityRain1, cityRain2, cityRain3, cityRain4, cityRain5] = respRainData.map(str => str === undefined ? '' : str);
                    setCityRain1(cityRain1);
                    setCityRain2(cityRain2);
                    setCityRain3(cityRain3);
                    setCityRain4(cityRain4);
                    setCityRain5(cityRain5);
                } catch (e) {
                    console.log(e);
                }
            }

            void getWeatherRain();
        } if (weatherTypeRadio === '3'){
            const newWeatherSortStringRain = 'met de meeste regen'
            setWeatherSortStringRain(newWeatherSortStringRain)
        }
        else {
            setCityRain1('');
            setCityRain2('');
            setCityRain3('');
            setCityRain4('');
            setCityRain5('');
            setWeatherSortStringRain('')
        }
        if (weatherTypeRadio === '4') {
            async function getWeatherWind() {
                try {
                    const promises = citiesListArray.map(city => axios.get(`http://api.openweathermap.org/data/2.5/weather?&q=${city},nl&units=metric&type=accurate&mode=metric&APPID=5b63149357fbecbe141bbc8090490979&lang=nl`));
                    const resp = await Promise.all(promises);
                    let respWindData = [];
                    for (let i = 0; i < resp.length; i++) {
                        respWindData.push(resp[i].data.name + resp[i].data.wind.speed);
                        respWindData.sort(function (b, a) {
                            let aNum = parseInt(a.match(/\d+/)[0]);
                            let bNum = parseInt(b.match(/\d+/)[0]);
                            return aNum - bNum;
                        });
                    }
                    respWindData.forEach(function (str, index) {
                        respWindData[index] = str.replace(/\d+/g, '');
                    });
                    let [cityWind1, cityWind2, cityWind3, cityWind4, cityWind5] = respWindData.map(str => str === undefined ? '' : str);
                    setCityWind1(cityWind1);
                    setCityWind2(cityWind2);
                    setCityWind3(cityWind3);
                    setCityWind4(cityWind4);
                    setCityWind5(cityWind5);

                } catch (e) {
                    console.log(e);
                }
            }

            void getWeatherWind();
        } if (weatherTypeRadio === '4'){
            const newWeatherSortStringTemp = 'met de meeste wind'
            setWeatherSortStringTemp(newWeatherSortStringTemp)
        }
        else {
            setCityWind1('');
            setCityWind2('');
            setCityWind3('');
            setCityWind4('');
            setCityWind5('');
            setWeatherSortStringWind('')
        }
    }


    return (
        <div className='top5-outer-container'>
            <div className='top5-inner-container'>
                <img className='top5-image' src={photoMap} alt='map'/>
                <div className='top5-outer-container-form'>
                    <form onSubmit={handleSubmit} className='top5-inner-container-form'>
                        <p className='top5-info-text'>Selecteer elke gewenste plaats..</p>
                        <div className='top5-container-places'>
                            <p className='top5-places'>Plaatsen.</p>
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
                        <p className='top5-info-text'>Selecteer 1 gewenst weertype..</p>
                        <div className='top5-weather-types'>
                            <RadioButton
                                label='Zon'
                                name='weather'
                                value='1'
                                onChange={handleRadioButtonChange}
                                checked={checkedRadioButton === '1'}
                                radioList={radioList}
                            />
                            <RadioButton
                                label='Temp'
                                name='weather'
                                value={2}
                                onChange={handleRadioButtonChange}
                                checked={checkedRadioButton === '2'}
                                radioList={radioList}
                            />
                            <RadioButton
                                label='Regen'
                                name='weather'
                                value={3}
                                onChange={handleRadioButtonChange}
                                checked={checkedRadioButton === '3'}
                                radioList={radioList}
                            />
                            <RadioButton
                                label='Wind'
                                name='weather'
                                value={4}
                                onChange={handleRadioButtonChange}
                                checked={checkedRadioButton === '4'}
                                radioList={radioList}
                            />
                        </div>
                        <div className='top5-button-component-container'>
                            <Button type='submit'/>
                        </div>
                        <span id='error-message'></span>
                    </form>
                </div>
                <div className='top5-container-list'>
                    <p className='top5-list-text'>Top 5</p>
                    <p className='container-list-places'>Plaatsen</p>
                    <p className='container-list-places'>{weatherSortStringSun}{weatherSortStringTemp}{weatherSortStringRain}{weatherSortStringWind}</p>
                    <div>
                        <InputFieldTop5
                            citySun1={citySun1}
                            citySun2={citySun2}
                            citySun3={citySun3}
                            citySun4={citySun4}
                            citySun5={citySun5}
                            cityTemp1={cityTemp1}
                            cityTemp2={cityTemp2}
                            cityTemp3={cityTemp3}
                            cityTemp4={cityTemp4}
                            cityTemp5={cityTemp5}
                            cityRain1={cityRain1}
                            cityRain2={cityRain2}
                            cityRain3={cityRain3}
                            cityRain4={cityRain4}
                            cityRain5={cityRain5}
                            cityWind1={cityWind1}
                            cityWind2={cityWind2}
                            cityWind3={cityWind3}
                            cityWind4={cityWind4}
                            cityWind5={cityWind5}
                        />
                    </div>
                </div>
            </div>
        </div>

    );
};


export default Top5;


