
import React from 'react';
function FahrenheitToCelcius(fahrenheit) {
    return `${Math.round((fahrenheit- 32) * 0.5556) }° C`;
}

export default FahrenheitToCelcius;

//
// function FahrenheitToCelcius(kelvin) {
//     return `${Math.round((kelvin - 273.15) * 1.8) + 32}° F`;
// }