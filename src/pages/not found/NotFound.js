import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate(-1)
        },2000)
        navigate("/")
    },[])

return (
    <div>
        <h1>Page Not Found : 404</h1>
        <p>You will be redirected in 2 sec</p>
    </div>
);
}

export default NotFound;