const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=41.14&lon=-112.05&appid=e356e16f0092b81f81328a0edd061471&units=imperial";

async function apiFetch() {  
    try {
        const response = await fetch(url);
        if (response.ok)  {
            const data = await response.json();
            displayResults(data);}
        else {
            throw Error(await response.text());
        }}
    catch (error) {
        console.log(error);
    }
}



function displayResults(data) {
    const temperature = Math.round(data.main.temp);
    currentTemp.innerHTML = `${temperature}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    
    
    let weatherDescriptions = data.weather.map(item => {
        let desc = item.description;
        const words = desc.split(" ");
        for (let i = 0; i < words.length; i ++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        return words.join(" ");
    });
    
    const capitalizedDesc = weatherDescriptions.join(" ");

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', capitalizedDesc);
    captionDesc.textContent = `${capitalizedDesc}`;
}

apiFetch();