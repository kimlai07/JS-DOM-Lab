//add event listener to the button
let button = document.querySelector('button');
button.addEventListener('click', convert);

let conversionFunction = {
    // return fahrenheit to celsius, kelvin, rankine
    fahrenheit: {
        fahrenheit: (fahrenheit) => fahrenheit,
        celsius: (fahrenheit) => (((fahrenheit - 32) * 5) / 9).toFixed(2),
        kelvin: (fahrenheit) => (((fahrenheit - 32) * 5) / 9 + 273.15).toFixed(2),
        rankine: (fahrenheit) => (fahrenheit + 459.67).toFixed(2),
      },
      // return celsius to fahrenheit, kelvin, rankine
      celsius: {
        fahrenheit: (celsius) => ((celsius * 9 /5) + 32).toFixed(2),
        celsius: (celsius) => celsius,
        kelvin: (celsius) => (celsius + 273.15).toFixed(2),
        rankine: (celsius) => ((celsius * 9/5) + 491.67).toFixed(2),
      },
      kelvin: {
        //return kelvin to fahrenheit, celsius, rankine
        fahrenheit: (kelvin) => ((kelvin - 273.15) * 9/5 + 32).toFixed(2),
        celsius: (kelvin) => (kelvin - 273.15).toFixed(2),
        kelvin:  (kelvin) => kelvin,
        rankine:  (kelvin) => (kelvin * 1.8).toFixed(2),
      },
      rankine: {
        //return rankine to fahrenheit, celsius, 
        fahrenheit: (rankine) => (rankine - 459.67).toFixed(2),
        celsius: (rankine) => ((rankine - 491.67) * 5/9).toFixed(2),
        kelvin: (rankine) => (rankine * 5/9).toFixed(2),
        rankine: (rankine) => rankine,
      },
};

function convert (){
    let inputValue = parseFloat(document.querySelector('#inputValue').value);
    let convertFrom = (document.querySelector('#temperature').value).toLowerCase();
    let result = (conversionFunction[convertFrom]);
    for (let prop in result){
       document.getElementById(prop).innerText = (result[prop](inputValue));
    }
}
