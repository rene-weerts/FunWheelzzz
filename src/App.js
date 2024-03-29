import React, {useContext} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Nav from './components/nav/Nav';
import Home from './pages/home/Home';
import Top5 from './pages/top5/Top5';
import Contact from './pages/contact/Contact';
import Register from './pages/register/SignUp';
import Login from './pages/login/SignIn';
import Footer from './components/footer/Footer';
import Region from './pages/region/Region';
import {AuthContext} from './context/AuthContext';
require('dotenv').config();

function App() {
    const {isAuth} = useContext(AuthContext);

    return (<>
            <Nav/>
            <Routes>
                <Route path='/home' element={<Home/>}/>
       A         <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/top5' element={isAuth ? <Top5/> : <Navigate to='/'/>}/>
                <Route path='/region' element={isAuth ? <Region/> : <Navigate to='/'/>}/>
                <Route path='/contact' element={isAuth ? <Contact/> : <Navigate to='/'/>}/>
                <Route path='/logout' element={<Home/>}/>
                <Route path='*' element={<Home/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
