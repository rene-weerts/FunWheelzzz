import './App.css';
import React, {useState} from 'react';
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
import Profile from './pages/profile/Profile';
import PrivacyVerklaring from "./pages/privacy verklaring/PrivacyVerklaring";
require ("dotenv").config()
// import LogOut from './components/logout/LogOut';
function App() {

    const [auth, setAuth] = useState(false);


    return (<>

            <Nav auth={auth} setAuth={setAuth}/>
            <Routes>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                {/*<Route path="/logout" element={<LogOut/>}/>*/}
                <Route path="/" element={<Home/>}/>
                <Route path="/top5" element={<Top5/>}/>
                <Route path="/memoryLeak" element={<MemoryLeak/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/regio" element={<Regio/>}/>
                <Route path="/privacyVerklaring" element={<PrivacyVerklaring/>}/>
                {/*<Route path="/profile" element={auth ? <Profile/> : <Navigate to="/"/>}/>*/}
                <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>

    </>
    );
}

export default App;
