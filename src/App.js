import './App.css';
import React, {useContext, useState} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Nav from './components/nav/Nav';
import Home from './pages/home/Home';
import Top5 from './pages/top5/Top5';
import Contact from './pages/contact/Contact';
import Register from './pages/register/SignUp';
import Login from './pages/login/SignIn';
import Events from './pages/events/Events';
import Places from './pages/places/Places';
import Repair from './pages/repair/Repair';
import Shop from './pages/shops/Shops';
import Strava from './pages/strava/Strava';
import MemoryLeak from './pages/memoryLeak/MemoryLeak';
import NotFound from './pages/not found/NotFound';
import Footer from './components/footer/Footer';
import Regio from './pages/regio/Regio';
import Profile from './pages/profile/Profile';

function App() {

    const [auth, setAuth] = useState(false);
    // const {isAuth} = useContext(authContext);

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const response = await axios.get('', {
    //                 params: {
    //                     api_key: process.env.REACT_API_KEY
    //                 }
    //             });
    //         } catch (e) {
    //
    //         }
    //     }
    //
    //     fetchData();
    // }, []);

    return (<>

        <Nav auth={auth} setAuth={setAuth}/>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/top5" element={<Top5/>}/>
            <Route path="/repair" element={<Repair/>}/>
            <Route path="/events" element={<Events/>}/>
            <Route path="/places" element={<Places/>}/>
            <Route path="/shops" element={<Shop/>}/>
            <Route path="/strava" element={<Strava/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/memoryLeak" element={<MemoryLeak/>}/>
            {/*<Route path="/contact" element={auth ? <Contact/> : <Navigate to="login"/>}/>*/}
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/regio" element={<Regio/>}/>
            <Route path="/profile" element={auth ? <Profile/> : <Navigate to="/"/>}/>
        </Routes>
        <Footer/>

    </>
    );
}

export default App;
