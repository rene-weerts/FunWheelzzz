import React from 'react';
import './Home.css';
import fotoHeader from '../../assets/foto-header.jpeg';
import fotoMain from '../../assets/foto-main.jpg';
import fotoTerras from '../../assets/foto-terras.jpg';
import fotoBakkerij from '../../assets/foto-bakkerij.jpeg';
import fotoBasilica from '../../assets/foto-eten-basilica.jpeg';
import fotoAccommodatie from '../../assets/foto-accommodatie.jpg';
import fotoContactForm from '../../assets/achtergrond-contact-formulier.jpg';
import Button from '../../components/button/Button';
const Home = () => {


    return (<>
            <header className="header-outer-container" id="home-header">

                <img className="img-header" src={fotoHeader} alt="header"/>

                <div className="header-text-outer-container">
                    <div className="header-text-inner-container">
                        <h1>Welkom</h1>
                        <h3>bij de enige website die u nodig heeft om erop uit te gaan met de fiets<br/>
                            en meer...</h3>
                    </div>
                </div>
            </header>
            <section>
                <main>
                    <article>
                        <div className="main-outer-container">
                            <div className="home-container-text1-top5">
                                <p className="home-text1-top5">Top 5</p>
                            </div>
                            <img className="img-main" src={fotoMain} alt="main"/>
                            <div className="main-inner-container-text-top5">
                                <div className="text-2-top5">
                                    <h3>Maak een Top 5<br/> van de zonnigste en droogste routes naar plaats van uw keuze
                                        boven in
                                        ons menu...</h3>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article>
                        <div className="region-container-terras">
                            <div className="region-terras-text">
                                <h3 className="text-terras">een terrasje pikken..</h3>
                            </div>
                            <div>
                                <img className="picture-terras" src={fotoTerras} alt="terras"/>
                            </div>
                        </div>
                    </article>

                    <div className="parent-element">
                        <div className="element-relative">
                            <article>
                                <div className="region-container-bakery">
                                    <img className="picture-bakery" src={fotoBakkerij} alt="bakery"/>
                                    <h3 className="text-bakery">..een bezoekje aan de beste bakker van de
                                        streek..</h3>
                                </div>
                            </article>
                        </div>
                        <div className="element-absolute">
                            <article>
                                <div className="region-container-food-basilica">
                                    <img className="picture-food-basilica" src={fotoBasilica} alt="food-basilica"/>
                                    <h3 className="text-food-basilica">..gastronomisch keuzes te over..</h3>
                                </div>
                            </article>
                        </div>

                    </div>
                    <article>
                        <div className="region-container-hotel">
                            <img className="picture-hotel" src={fotoAccommodatie} alt="hotel"/>
                            <h3 className="text-hotel">..een verblijf in één van de prachtige accommodaties die
                                typisch zijn voor deze streek..u vind het allemaal op onze Regio pagina bovenaan..
                            </h3>
                        </div>
                    </article>

                </main>
            </section>
            <div className="outer-container-picture-form">
                <img className="picture-form" src={fotoContactForm} alt="contact-form"/>

                <div className="outer-container-form">
                    <div className="form-text-top">
                        <h3 className="question-text-form"> Vragen of tips?</h3>
                        <h3>Wij horen graag van u...</h3>
                    </div>
                    <div id="form-contact-link-bottom" className="form-text">
                    {/*    <div  className="form-text">*/}
                        <label htmlFor="name"><p>Naam</p></label>
                        <input placeholder="Name" id="name"/>
                        <label htmlFor="email"><p>Email</p></label>
                        <input placeholder="Email" id="email"/>
                        <label htmlFor="message"><p>Bericht</p></label>
                        <input placeholder="Message" id="message"/>
                        <div className="button-div">
                            <Button/>
                        </div>
                    </div>
                </div>
            </div>


        </>


    );
};

export default Home;


