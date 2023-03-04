import React, {useContext, useEffect, useState} from 'react';
import './Home.css';
import photoHeader from '../../assets/photo-header.jpeg';
import photoMain from '../../assets/photo-main.jpg';
import photoTerrace from '../../assets/photo-terrace.jpg';
import photoBakery from '../../assets/photo-bakery.jpeg';
import photoBasilica from '../../assets/photo-food-Basilica.jpeg';
import photoAccommodation from '../../assets/photo-accommodation.jpg';
import photoContactForm from '../../assets/photo-background-contact-form.jpg';
import Button from '../../components/button/Button';
import {AuthContext} from '../../context/AuthContext';
const Home = () => {
    const {isAuth} = useContext(AuthContext);
    const [formTouched, setFormTouched] = useState(false);
    const [limitReached, setLimitReached] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [text, setText] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        setName('');
        setEmail('');
        setText('');
        setFormSubmitted(true);
        setFormTouched(true);
        setTimeout(() => {
            setFormSubmitted(false);
        }, 5000);
        setTimeout(() => {
            setFormTouched(false);
        }, 5000);

    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    useEffect(() => {
        const words = text.trim().split(/\s+/);

        if (words.length > 50) {
            setLimitReached(true);
            console.log(words.length);
        } else {
            setLimitReached(false);
        }
    }, [text]);

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        const words = inputValue.trim().split(/\s+/);

        if (words.length <= 50) {
            setText(inputValue);
        } else {
            setText(words.slice(0, 50).join(' '));
        }

        console.log(inputValue);
    };
    const handleFormTouch = () => {
        setFormTouched(true);
        setTimeout(() => {
            setFormTouched(false);
        }, 5000);
    };


    return (<>
            <header className='header-outer-container' id='home-header'>
                <img className='photo-header' src={photoHeader} alt='header'/>
                <div className='header-text-outer-container'>
                    <div className='header-text-inner-container'>
                        <h1>Welkom</h1>
                        <h3>bij de enige website die u nodig heeft om erop uit te gaan met de fiets<br/>
                            en meer...</h3>
                    </div>
                </div>
            </header>
            <section>
                <main>
                    <article>
                        <div className='main-outer-container'>
                            <div className='home-container-text1-top5'>
                                <p className='home-text1-top5'>Top 5</p>
                            </div>
                            <img className='photo-main' src={photoMain} alt='main'/>
                            <div className='main-inner-container-text-top5'>
                                <div className='text-2-top5'>
                                    <h3>Maak een Top 5<br/> van de zonnigste en droogste routes naar plaats van uw keuze
                                        boven in
                                        ons menu...</h3>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article>
                        <div className='region-container-terrace'>
                            <div className='region-terrace-text'>
                                <h3 className='text-terrace'>een terrasje pikken...</h3>
                            </div>
                            <div>
                                <img className='photo-terrace' src={photoTerrace} alt='terrace'/>
                            </div>
                        </div>
                    </article>

                    <div className='region-outer-container'>
                        <div className='region-inner-container'>
                            <article>
                                <div className='region-container-bakery'>
                                    <img className='photo-bakery' src={photoBakery} alt='bakery'/>
                                    <h3 className='text-bakery'>een bezoekje aan de beste bakker van de
                                        streek...</h3>
                                </div>
                            </article>
                        </div>
                        <div className='region-outer-container-food'>
                            <article>
                                <div className='region-container-food-basilica'>
                                    <img className='photo-food-basilica' src={photoBasilica} alt='food-basilica'/>
                                    <h3 className='text-food-basilica'>gastronomische keuzes te over...</h3>
                                </div>
                            </article>
                        </div>

                    </div>
                    <article>
                        <div className='region-container-hotel'>
                            <img className='photo-hotel' src={photoAccommodation} alt='hotel'/>
                            <h3 className='text-hotel'>een verblijf in één van de prachtige accommodaties die
                                typisch zijn voor deze streek...u vindt het allemaal op onze Regio pagina bovenaan...
                            </h3>
                        </div>
                    </article>

                </main>
            </section>
            <div className='outer-container-photo-form'>
                <img className='photo-form' src={photoContactForm} alt='contact-form'/>

                <div className='outer-container-form'>
                    <div className='form-text-top'>
                        <h3 className='question-text-form'> Vragen of tips?</h3>
                        <h3>Wij horen graag van u...</h3>
                    </div>

                    <form id='form-contact-link-bottom' className='form-text'
                          onSubmit={handleSubmit}
                          onBlur={handleFormTouch}
                    >
                        <label htmlFor='name'><p>Naam</p></label>
                        <input placeholder='Naam'
                               type='text'
                               id='name'
                               name='name'
                               value={isAuth ? name : ''}
                               onChange={handleNameChange}
                               onBlur={handleFormTouch}
                        />
                        <label htmlFor='email'><p>Email</p></label>
                        <input placeholder='Email'
                               type='email'
                               id='email'
                               name='email'
                               value={isAuth ? email : ''}
                               onChange={handleEmailChange}
                               onBlur={handleFormTouch}
                        />
                        <label htmlFor='message'><p>Bericht</p></label>
                        <input placeholder='Bericht max 50 woorden'
                               type='text'
                               id='message'
                               value={isAuth ? (limitReached ? text.slice(0, text.lastIndexOf(' ', text.length - 10)) : text) : ''}
                               onChange={(e) => {
                                   handleInputChange(e);
                                   handleTextChange(e);
                               }}
                               onBlur={handleFormTouch}
                        />
                        {formTouched && !isAuth &&
                            <p className='login-thank-you-text'>Log eerst in alstublieft!</p>}
                        {isAuth && formSubmitted &&
                            <p className='login-thank-you-text'>Dank u voor uw bericht!</p>}
                        {limitReached &&
                         <p> className="error-text">U heeft het maximaal aantal woorden gebruikt!.</p>}
                        <div className='button-div'>
                            <Button type='submit'/>
                        </div>

                    </form>

                </div>
            </div>
        </>
    );
};
export default Home;


