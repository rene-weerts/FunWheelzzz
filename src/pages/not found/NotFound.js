import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const NotFound = (props) => {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{},2000)
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