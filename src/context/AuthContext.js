// import React, {createContext, useState} from 'react';
// import {useNavigate} from 'react-router-dom';
// import jwt_decode from 'jwt-decode';
// import axios from 'axios';
//
// export const AuthContext = createContext({});
//
//
// function AuthContextProvider({children}) {
//
//     const [Auth, setAuth] = useState(
//         {
//             isAuth: false,
//             user: null
//         });
//
//     const navigate = useNavigate();
//
//     function login(jwt) {
//         console.log('de gebruiker is ingelogd');
//         console.log(jwt);
//         localStorage.setItem('token', jwt);
//
//         const decodedToken = jwt_decode(jwt);
//
//         async function fetchUserData() {
//             try {
//                 const response = await axios.get(`https://localhost:3000/600/users/${decodedToken.sub}`, config:{ headers:{
//                     "Content-Type":'application/json',
//                         Authorization:`Bearer${jwt}`
//
//                 }}
//
//
//             setAuth({
//                 isAuth: true,
//                 user: {
//                     email: response.data.email,
//                     id: response.data.id,
//                     username: response.data.username
//                 }
//             });
//             navigate('/profile');
//             console.log(response);
//         }
//
//     }
//
// catch
//     (e);
//     {
//         console.error(e);
//     }
// }
//
// void fetchUserData();
//
//
// function logout() {
//     console.log('de gebruiker is uitgelogd');
//     localStorage.removeItem("token");
//     setAuth({
//         isAuth: false,
//         user: null
//     });
// }
//
// const contextData = {
//     isAuth: Auth.isAuth,
//     user: Auth.user,
//     login: login,
//     logout: logout,
// };
//
//
// return (
//     <AuthContext.provider value={contextData}>
//         {children}
//     </AuthContext.provider>
// );
//
//
// export default AuthContext;