const tempFactor = document.getElementById("temp");
const windSpeedFactor = document.getElementById("wind-speed");
const windChill = document.getElementById("wind-chill");

let temperature = parseFloat(tempFactor.textContent);
let windSpeed = parseFloat(windSpeedFactor.textContent);

function findWindChill(temp, speed) {
    if (temp <= 50 && speed > 3.0) {
            windChillValue = 35.74 + (0.6215*temp) - (35.75*Math.pow(speed, 0.16)) + (0.4275 *temp*Math.pow(speed, 0.16));
            windChill.textContent = `${windChillValue.toFixed(2)} °F`;
        }
    
    else {
        windChill.textContent = "N/A";
    }

}

findWindChill(temperature, windSpeed);