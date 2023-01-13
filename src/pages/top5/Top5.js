import React from 'react';
import './Top5.css';
import pictureMap from '../../assets/picture-map.jpg';
import Button from '../../components/button/Button';


function Top5() {
    return (
        <div className="top5-outer-container">

            <div className="top5-inner-container">

                <img className="top5-image" src={pictureMap} alt="picture-map"/>
                <div className="top5-outer-container-form">

                    <div className="top5-inner-container-form">
                        <p className="top5-info-text">Selecteer elke gewenste plaats...</p>

                        <div className="top5-container-places">
                            <p className="top5-places">Plaatsen.</p>


                            <div className="top5-numbers-places">
                                <div className="top5-places-and-checkbox">
                                    <input className="top5-checkboxes" type="checkbox"/><p className="top5-p">1 .
                                    Maastricht</p>
                                </div>
                                <div className="top5-places-and-checkbox">
                                    <input className="top5-checkboxes" type="checkbox"/><p className="top5-p">2 .
                                    Beek</p>
                                </div>
                                <div className="top5-places-and-checkbox">
                                    <input className="top5-checkboxes" type="checkbox"/><p className="top5-p">3 .
                                    Sittard</p>
                                </div>
                                <div className="top5-places-and-checkbox">
                                    <input className="top5-checkboxes" type="checkbox"/><p className="top5-p">4 .
                                    Brunssum</p>
                                </div>
                                <div className="top5-places-and-checkbox">
                                    <input className="top5-checkboxes" type="checkbox"/><p className="top5-p">5 .
                                    Kerkrade</p>
                                </div>
                                <div className="top5-places-and-checkbox">
                                    <input className="top5-checkboxes" type="checkbox"/><p className="top5-p">6 .
                                    Voerendaal</p>
                                </div>
                                <div className="top5-places-and-checkbox">
                                    <input className="top5-checkboxes" type="checkbox"/><p className="top5-p">7 .
                                    Valkenburg</p>
                                </div>
                                <div className="top5-places-and-checkbox">
                                    <input className="top5-checkboxes" type="checkbox"/><p className="top5-p">8 .
                                    Gulpen</p>
                                </div>
                                <div className="top5-places-and-checkbox">
                                    <input className="top5-checkboxes" type="checkbox"/><p className="top5-p">9 .
                                    Vaals</p>
                                </div>
                                <div className="top5-places-and-checkbox">
                                    <input className="top5-checkboxes" type="checkbox"/><p className="top5-p">10 .
                                    Margraten</p>
                                </div>


                            </div>

                        </div>
                        <p className="top5-info-text">Selecteer 1 gewenst weertype...</p>
                        <div className="top5-weather-types">

                            <div className="top5-radio-checkbox-and-weather-type">
                                <label htmlFor="top5-zon-radio">
                                    <input id="top5-zon-radio" type="radio" name="type" className="top5-checkboxes"/>
                                </label>
                                <p className="top5-p">Zon</p>
                            </div>
                            <div className="top5-radio-checkbox-and-weather-type">
                                <label htmlFor="top5-temp-radio">
                                    <input id="top5-temp-radio" name="type" className="top5-checkboxes" type="radio"/>
                                </label>
                                <p className="top5-p">Temp</p>
                            </div>
                            <div className="top5-radio-checkbox-and-weather-type">
                                <label htmlFor="top5-regen-radio">
                                    <input id="top5-regen-radio" name="type" className="top5-checkboxes" type="radio"/>
                                </label>
                                <p className="top5-p">Regen</p>
                            </div>
                            <div className="top5-radio-checkbox-and-weather-type">
                                <label htmlFor="top5-wind-radio">
                                    <input id="top5-wind-radio" name="type" className="top5-checkboxes" type="radio"/>
                                </label>
                                <p className="top5-p">Wind</p>
                            </div>

                        </div>
                        <div className="top5-button-component-container">
                            <Button/>
                        </div>

                        {/*<button className="top5-button" type="submit">*/}
                        {/*    <p className="top5-button-text">Create Top 5</p>*/}
                        {/*</button>*/}
                    </div>

                </div>
                <div className="top5-container-list-background">
                    <div className="top5-container-list">
                        <p className="top5-list-text">Top 5</p>
                        <div className="top5-container-list-places">
                            <p className="container-list-places">Plaatsen.</p>
                            <div className="top5-numbers-places-list">
                                <p className="top5-text-places-list">1.</p>
                                <p className="top5-text-places-list">3.</p>
                                <p className="top5-text-places-list">3.</p>
                                <p className="top5-text-places-list">4.</p>
                                <p className="top5-text-places-list">5.</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
}

export default Top5;


