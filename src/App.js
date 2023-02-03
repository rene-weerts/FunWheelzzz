

import './App.module.css';
import React, {useContext, useState} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Nav from './components/nav/Nav';
import Home from './pages/home/Home';
import Top5 from './pages/top5/Top5';
import Contact from './pages/contact/Contact';
import Register from './pages/register/SignUp';
import Login from './pages/login/SignIn';
import MemoryLeak from './pages/memoryLeak/MemoryLeak';
import NotFound from './pages/not found/NotFound';
import Footer from './components/footer/Footer';
import Regio from './pages/regio/Regio';
import PrivacyVerklaring from './pages/privacy verklaring/PrivacyVerklaring';
import Profile from './pages/profile/Profile';
import LogOut from './pages/logout/LogOut';
import {AuthContext} from './context/AuthContext';
require('dotenv').config();
function App() {
    const {isAuth} = useContext(AuthContext);
    const [auth, setAuth] = useState(false);

    return (<>
            <Nav auth={auth} setAuth={setAuth}/>
            <Routes>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/top5" element={isAuth ? <Top5/> : <Navigate to="/"/>}/>
                <Route path="/regio" element={isAuth ? <Regio/> : <Navigate to="/"/>}/>
                <Route path="/contact" element={isAuth ? <Contact/> : <Navigate to="/"/>}/>
                <Route path="/logout" element={isAuth ? <LogOut/> : <Navigate to="/"/>}/>
                <Route path="/memoryLeak" element={<MemoryLeak/>}/>
                <Route path="/privacyVerklaring" element={<PrivacyVerklaring/>}/>
                <Route path="/profile" element={isAuth ? <Profile/> : <Navigate to="/"/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </>
    );
}
export default App;
