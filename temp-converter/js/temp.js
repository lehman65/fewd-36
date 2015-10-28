var tempF = document.querySelector('.temp-f');
var tempC = document.querySelector('.temp-c');

tempF.addEventListener('keyup', calcFtoC);
tempC.addEventListener('keyup', calcCtoF);

function calcFtoC(event) {
  if (tempF.value.length > 0) {
    tempC.value = calcFahrenheitToCelcius(tempF.value)
  } else {
    tempC.value = '';
  }
}

function calcFahrenheitToCelcius(tempF) {
  var tempC = (tempF-32) * (5/9);
    return Math.round(tempC);
}

function calcCtoF(event) {
  if (tempC.value.length > 0) {
    tempF.value = calcCelciusToFahrenheit(tempC.value)
  } else {
    tempF.value = '';
  }
}


function calcCelciusToFahrenheit(tempC) {
  var tempF = tempC * 9/5 + 32;
    return  Math.round(tempF);
}


