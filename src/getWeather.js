const weatherKey = "687efc69ec86ad5dcbcc150b678b19d3";

const getWeather = (async (cityQuery) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/find?q=${cityQuery}&units=metric&appid=${weatherKey}`
    );
    const data = await response.json();
    return(data) ;
  } catch (e) {
    console.log(e);
  }
});

export {getWeather}