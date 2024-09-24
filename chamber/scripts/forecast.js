document.addEventListener('DOMContentLoaded', function() {
    const currentTemp = document.querySelector("#current-temp");
    const captionDesc = document.querySelector("figcaption");
    const weatherIcon = document.querySelector("#weather-icon");

    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=41.14&lon=-112.05&appid=e356e16f0092b81f81328a0edd061471&units=imperial`;

    async function apiFetch() {  
        try {
            const response = await fetch(url);
            if (response.ok)  {
                const data = await response.json();
                groupedForecasts = getTempsByDate(data.list) // groupedForecasts is a list of lists.  Multiple entries per date.
                displayCurrentTemp(data.list[0]);
                displayForecastTemps(groupedForecasts);
            }
            else {
                throw Error(await response.text());
            }}
        catch (error) {
            console.log(error);
        }
    }
    function getTempsByDate(forecastData) {
        const dailyForecasts = {};
    
        forecastData.forEach((forecast) => {
            // Use UTC date string for consistency
            const forecastDate = new Date(forecast.dt * 1000).toISOString().slice(0, 10); // YYYY-MM-DD format
    
            if (!dailyForecasts[forecastDate]) {
                dailyForecasts[forecastDate] = [];
            }
    
            dailyForecasts[forecastDate].push(forecast);
        });
    
        // Sort the daily forecasts by date
        const sortedDates = Object.keys(dailyForecasts).sort();
        const sortedForecasts = sortedDates.map(date => dailyForecasts[date]);
    
        return sortedForecasts;
    }
    
    function displayCurrentTemp(data) {
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

    function displayForecastTemps(dailyForecasts) {
        let forecastList = document.querySelector("#forecast-list");

        // For each date...
        dailyForecasts.forEach((forecast, index) => {
            const forecastAt15 = forecast.find(entry => entry.dt_txt.includes("15:00:00"));

            if (forecastAt15) {
                // Get the correct icon for the first entry for the specified date.
                const forecastedIconsrc = `https://openweathermap.org/img/w/${forecastAt15.weather[0].icon}.png`;
                // Get the description for the first entry for the specified date and the first entry in weather.
                let forecastedWeatherDescriptions = forecastAt15.weather.map(item => {
                    let desc = item.description;
                    const words = desc.split(" ");
                    for (let i = 0; i < words.length; i ++) {
                        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
                    }
                return words.join(" ");
                });
                
                const capitalizedDesc = forecastedWeatherDescriptions.join(" ");

                let card = document.createElement("section");
                let weekday = document.createElement("h4");
                let forecastTemp = document.createElement("h5");
                let icon = document.createElement("figure");
                let forecastedWeatherIcon = document.createElement("img");
                let captionDesc = document.createElement("p");

                let forecastDate = new Date(forecast[0].dt * 1000);
                weekday.textContent = forecastDate.toLocaleDateString("en-US", { weekday: "long" });

                forecastedWeatherIcon.setAttribute('src', forecastedIconsrc);
                forecastedWeatherIcon.setAttribute('alt', capitalizedDesc);
                captionDesc.textContent = `${capitalizedDesc}`;

                forecastTemp.textContent = `Temperature: ${Math.round(forecastAt15.main.temp)}°F`;

                icon.appendChild(forecastedWeatherIcon);
                card.appendChild(weekday);
                card.appendChild(forecastTemp);
                card.appendChild(icon);
                card.appendChild(captionDesc);

                forecastList.appendChild(card);
            }    
        });
    };

apiFetch();
});
