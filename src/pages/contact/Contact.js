import React from 'react';
import './Contact.css';
import fotoContactForm from '../../assets/achtergrond-contact-formulier.jpg';
import Button from '../../components/button/Button';

const Contact = () => {
    return (
        <>
            <div className="outer-container-picture-form-contact">
                <img className="picture-form" src={fotoContactForm} alt=""/>

                <div className="outer-container-form">
                    <div className="form-text-top">
                        <h3 className="question-text-form"> Vragen of tips?</h3>
                        <h3>Wij horen graag van u...</h3>
                    </div>
                    <div id="form-contact-link-bottom" className="form-text">
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

export default Contact;