import React, {useContext} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Nav from './components/nav/Nav';
import Home from './pages/home/Home';
import Top5 from './pages/top5/Top5';
import Contact from './pages/contact/Contact';
import Register from './pages/register/SignUp';
import Login from './pages/login/SignIn';
import NotFound from './pages/not found/NotFound';
import Footer from './components/footer/Footer';
import Region from './pages/region/Region';
import PrivacyStatement from './pages/privacy statement/PrivacyStatement';
import {AuthContext} from './context/AuthContext';
require('dotenv').config();

function App() {
    const {isAuth} = useContext(AuthContext);

    return (<>
            <Nav/>
            <Routes>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/top5' element={isAuth ? <Top5/> : <Navigate to='/'/>}/>
                <Route path='/regio' element={isAuth ? <Region/> : <Navigate to='/'/>}/>
                <Route path='/contact' element={isAuth ? <Contact/> : <Navigate to='/'/>}/>
                <Route path='/logout' element={<Home/>}/>
                <Route path='/privacy statement' element={<PrivacyStatement/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
