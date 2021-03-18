import {getWeather} from './getWeather'

const displayData = async (cityQuery)=>{
    const data = await getWeather(cityQuery);
    const newData = data.list[0]

    let weatherDescription = (newData.weather[0].description)[0].toUpperCase() + (newData.weather[0].description).slice(1); 
    let weatherIcon = newData.weather[0].icon;
    let place = `${newData.name}, ${newData.sys.country}`.toUpperCase();
    let temperature = `${newData.main.temp} °C`;
    let feelsLike =`Feels like: ${newData.main.feels_like}°C`;
    let maxTemp = `Max Temp: ${newData.main.temp_max}°C`;
    let minTemp = `Min Temp: ${newData.main.temp_min}°C`;

    let result = [
        {elementId: "weather", value: weatherDescription},
        {elementId: "place", value: place},
        {elementId: "temp", value: temperature},
        {elementId: "feels-like", value: feelsLike},
        {elementId: "max-temp", value: maxTemp},
        {elementId: "min-temp", value: minTemp},
    ]
    for(let{elementId, value} of result){
        document.getElementById(elementId).innerText = value;
    }
    
    const image = document.getElementById("icon")
    image.src = `http://openweathermap.org/img/w/${weatherIcon}.png`;

    document.getElementById('input-city').value = null

}

export {displayData}