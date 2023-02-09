//
// import React, {useState} from 'react';
// import FahrenheitToCelcius from '../fahrenheit to celcius/FahrenheitToCelcius';
// import ToggleTemp from '../toggle temperature/ToggleTemp';
//
// function TempContextProvider({ children }) {
//     const [selectedMetric, toggleSelectedMetric] = useState('fahrenheit');
//
//     function FahrenheitToCelcius(fahrenheit) {
//         return `${Math.round((fahrenheit- 32) * 0.5556) }° C`;
//     }
//     function ToggleTemp() {
//         if (selectedMetric === 'fahrenheit') {
//             toggleSelectedMetric('Celsius');
//         } else {
//             toggleSelectedMetric('fahrenheit');
//         }
//     }
//
//     return (
//         <TempContext.Provider
//             value={{
//                 toggleTemp: toggleTemp,
//                 kelvinToMetric: selectedMetric === 'fahrenheit' ? kelvinToCelcius : kelvinToFahrenheit,
//             }}
//         >
//             { children }
//         </TempContext.Provider>
//     );
//
// }
// export default TempContextProvider;
// // <TempContext.Provider
// //     value={{
// //         toggleTemp: toggleTemp,
// //         kelvinToMetric: selectedMetric === 'celcius' ? kelvinToCelcius : kelvinToFahrenheit,
// //     }}
// // >
// //     { children }
// // </TempContext.Provider>
// // );