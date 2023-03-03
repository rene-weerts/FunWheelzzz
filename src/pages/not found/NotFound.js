import React from 'react';
import {useNavigate} from 'react-router-dom';
import "./NotFound.css"
const NotFound = () => {
    const navigate = useNavigate();


        setTimeout(()=>{
            navigate('/')
        },4000)

    return (
    <>
        <div className='notFound-container'>
            <div className='notFound-text-container'>
                <p className='notFound-text1'>Pagina niet gevonden helaas!</p>
            </div>
            <div>
                <p className='notFound-text2'>U keert terug naar de Home pagina in 4 sec.</p>
            </div>
        </div>

    </>

);
}

export default NotFound;