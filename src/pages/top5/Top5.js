import React from 'react';
// import axios from 'axios';
// import {useState} from "react"
import './Top5.css';
import pictureMap from '../../assets/picture-map.jpg';
import Button from '../../components/button/Button';
import RadioButton from '../../components/radiobutton/RadioButton';
import CheckBox from '../../components/checkbox/CheckBox';
import InputFieldTop5Component from '../../components/inputfieldTop5/InputFieldTop5';
// import {AuthContext} from '../../context/AuthContext';

function Top5() {
    // const {auth, setAuth} = useContext(AuthContext);


//     // const BASE_URI = api.openWeatherMap.org / data / 2.5 / weather ? q =`${cityString}`uk & APPID =${apiKey}
//     // const ENDPOINT = ff34a85592c12bf069a17cfe9ffe75aa;
//     // const MyApi = BASE_URI + ENDPOINT;
//     const [selectedCities, setSelectedCities] = useState([]); // store the selected city names
//     const [selectedWeather, setSelectedWeather] = useState(''); // store the selected weather type
//
//     const handleCheckboxChange = (e) => {
//         const {name, checked} = e.target;
//         if (checked) {
//             setSelectedCities([...selectedCities, name]);
//         } else {
//             setSelectedCities(selectedCities.filter(city => city !== name));
//         }
//     };
//
//     const handleRadioChange = (e) => {
//         setSelectedWeather(e.target.value);
//     };
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // do something with the selectedCities and selectedWeather data, such as making an API call
//         console.log('selected cities: ', selectedCities);
//         console.log('selected weather: ', selectedWeather);
//         getWeather(selectedCities);
//     };
//
//     const getWeather = async (cityNames) => {
//         if (!Array.isArray(cityNames)) {
//             console.error('cityNames should be an array of strings');
//             return;
//         }
//         const cityString = cityNames.join(',');
//         const apiKey = 'ff34a85592c12bf069a17cfe9ffe75aa';
//         const apiUrl = `api.openWeatherMap.org/data/2.5/weather?q=${cityString}&APPID=${apiKey}`;
//         try {
//             const response = await axios.get(apiUrl);
//             const data = await response.();
//             console.log(data);
//         } catch (error) {
//             console.error(error);
//         }
//     };
//  void getWeather()//

    return (
        <div className="top5-outer-container">
            <div className="top5-inner-container">
                <img className="top5-image" src={pictureMap} alt="map"/>
                <div className="top5-outer-container-form">

                    <form className="top5-inner-container-form">
                        <p className="top5-info-text">Selecteer elke gewenste plaats...</p>
                        <div className="top5-container-places">
                            <p className="top5-places">Plaatsen.</p>
                            <CheckBox labelText="Maastricht"/>
                            <CheckBox labelText="Geleen"/>
                            <CheckBox labelText="Sittard"/>
                            <CheckBox labelText="Brunssum"/>
                            <CheckBox labelText="Kerkrade"/>
                            <CheckBox labelText="Voerendaal"/>
                            <CheckBox labelText="Valkenburg"/>
                            <CheckBox labelText="Gulpen"/>
                            <CheckBox labelText="Vaals"/>
                            <CheckBox labelText="Margraten"/>
                        </div>

                        <p className="top5-info-text">Selecteer 1 gewenst weertype...</p>

                        <div className="top5-weather-types">
                            <RadioButton/>
                        </div>
                        <div className="top5-button-component-container">
                            <Button/>
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

export default Top5;


