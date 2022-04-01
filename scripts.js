// define elements
const searchBar = document.querySelector(".search");
const cycler = document.querySelector(".cycler");
const cycleStatus = document.querySelector(".cycleStatus");
searchBar.value = "Seattle";
const locationValue = document.querySelector(".locationValue");
const timeValue = document.querySelector(".timeValue");
const sunriseValue = document.querySelector(".sunriseValue");
const sunsetValue = document.querySelector(".sunsetValue");
const weathericonValue = document.querySelector(".weathericonValue");
const descriptionValue = document.querySelector(".descriptionValue");
const temperatureValue = document.querySelector(".temperatureValue");
const feelslikeValue = document.querySelector(".feelslikeValue");
const windspeedValue = document.querySelector(".windspeedValue");
const cloudcoverageValue = document.querySelector(".cloudcoverageValue");
const pokemonPic = document.querySelector(".pokemonPic");
const pokemonName = document.querySelector(".pokemonName");
const root = document.querySelector(":root");
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const windDay = {
  pokemon: "jumpluff",
  primaryColorH: 150,
  primaryColorS: 62,
  primaryColorL: 62,
  time: "day",
  weather: "wind",
};
const rainDay = {
  pokemon: "wooper",
  primaryColorH: 210,
  primaryColorS: 100,
  primaryColorL: 75,
  time: "day",
  weather: "rain",
};
const hotDay = {
  pokemon: "slugma",
  primaryColorH: 0,
  primaryColorS: 100,
  primaryColorL: 60,
  time: "day",
  weather: "hot",
};
const coldDay = {
  pokemon: "smoochum",
  primaryColorH: 232,
  primaryColorS: 30,
  primaryColorL: 85,
  time: "day",
  weather: "cold",
};
const sunnyDay = {
  pokemon: "sunflora",
  primaryColorH: 44,
  primaryColorS: 100,
  primaryColorL: 68,
  time: "day",
  weather: "sunny",
};
const cloudyDay = {
  pokemon: "spearow",
  primaryColorH: 39,
  primaryColorS: 21,
  primaryColorL: 81,
  time: "day",
  weather: "cloudy",
};
const thunderstormDay = {
  pokemon: "joltik",
  primaryColorH: 53,
  primaryColorS: 77,
  primaryColorL: 47,
  time: "day",
  weather: "thunderstorm",
};
const mistDay = {
  pokemon: "altaria",
  primaryColorH: 300,
  primaryColorS: 76,
  primaryColorL: 72,
  time: "day",
  weather: "mist",
};
const snowDay = {
  pokemon: "delibird",
  primaryColorH: 232,
  primaryColorS: 30,
  primaryColorL: 85,
  time: "day",
  weather: "snow",
};
const smogDay = {
  pokemon: "weezing",
  primaryColorH: 255,
  primaryColorS: 77,
  primaryColorL: 70,
  time: "day",
  weather: "smog",
};
const clearNight = {
  pokemon: "zubat",
  primaryColorH: 255,
  primaryColorS: 82,
  primaryColorL: 61,
  time: "night",
  weather: "clear",
};
const cloudNight = {
  pokemon: "murkrow",
  primaryColorH: 255,
  primaryColorS: 82,
  primaryColorL: 61,
  time: "night",
  weather: "cloudy",
};
const windNight = {
  pokemon: "drifloon",
  primaryColorH: 255,
  primaryColorS: 17,
  primaryColorL: 61,
  time: "night",
  weather: "wind",
};
const rainNight = {
  pokemon: "palpitoad",
  primaryColorH: 219,
  primaryColorS: 68,
  primaryColorL: 45,
  time: "night",
  weather: "rain",
};
const hotNight = {
  pokemon: "houndour",
  primaryColorH: 0,
  primaryColorS: 23,
  primaryColorL: 38,
  time: "night",
  weather: "hot",
};
const coldNight = {
  pokemon: "snorunt",
  primaryColorH: 240,
  primaryColorS: 50,
  primaryColorL: 75,
  time: "night",
  weather: "cold",
};
const thunderstormNight = {
  pokemon: "luxray",
  primaryColorH: 39,
  primaryColorS: 14,
  primaryColorL: 20,
  time: "night",
  weather: "thunderstorm",
};
const mistNight = {
  pokemon: "spiritomb",
  primaryColorH: 152,
  primaryColorS: 62,
  primaryColorL: 65,
  time: "night",
  weather: "mist",
};
const snowNight = {
  pokemon: "sneasel",
  primaryColorH: 240,
  primaryColorS: 50,
  primaryColorL: 75,
  time: "night",
  weather: "snow",
};
const smogNight = {
  pokemon: "gastly",
  primaryColorH: 248,
  primaryColorS: 53,
  primaryColorL: 58,
  time: "night",
  weather: "smog",
};
const loveDay = {
  pokemon: "azumarill",
  primaryColorH: 3,
  primaryColorS: 77,
  primaryColorL: 68,
  time: "love",
  weather: "day",
};

const UIArray = [
  smogDay,
  smogNight,
  snowDay,
  snowNight,
  thunderstormDay,
  thunderstormNight,
  coldDay,
  coldNight,
  hotDay,
  hotNight,
  rainDay,
  rainNight,
  cloudNight,
  cloudyDay,
  clearNight,
  sunnyDay,
  mistDay,
  mistNight,
  loveDay,
];

weatherKey = "e52935fa1ce4899077609af5e4e8c3f3";
locationKey = "b08c7331b4b8827fee5babd149132cb8";
limit = "1";

getLocation = async () => {
  const searchBarData = searchBar.value;
  const locationRequest = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${searchBarData}&limit=${limit}&appid=${locationKey}`,
    { mode: "cors" }
  );
  const locationData = await locationRequest.json();
  checkLocation(locationData);
  return locationData;
};

getWeather = async (location) => {
  const fetchRequest = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${location[0].lat}&lon=${location[0].lon}&appid=${weatherKey}&units=imperial`,
    { mode: "cors" }
  );
  const weatherData = await fetchRequest.json();
  return weatherData;
};

getPokemon = async (UIState) => {
  const fetchRequest = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${UIState.pokemon}`,
    { mode: "cors" }
  );
  const pokeData = await fetchRequest.json();
  return pokeData;
};

setValues = (locationData, weatherData, pokeData) => {
  locationValue.innerText = locationData[0].name;
  const sunrise = new Date(weatherData.sys.sunrise * 1000);
  timeValue.innerText = `Weather as of ${weekdays[sunrise.getDay()]} ${new Date(
    weatherData.dt * 1000
  ).toLocaleString()}`;
  sunriseValue.innerText = `${new Date(
    weatherData.sys.sunrise * 1000
  ).toLocaleTimeString()}`;
  sunsetValue.innerText = `${new Date(
    weatherData.sys.sunset * 1000
  ).toLocaleTimeString()}`;
  // can adjust size if needed
  weathericonValue.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  descriptionValue.innerText = weatherData.weather[0].description;
  temperatureValue.innerText = `${weatherData.main.temp}°F`;
  feelslikeValue.innerText = `${weatherData.main.feels_like}°F`;
  windspeedValue.innerText = `${weatherData.wind.speed} MPH`;
  cloudcoverageValue.innerText = weatherData.clouds.all;
  pokemonPic.src = pokeData.sprites.other.dream_world.front_default;
  pokemonName.innerText = pokeData.name;
};

// function that ties all functions together
const renderPage = async () => {
  const searchInput = searchBar.value;
  const locFetch = await getLocation(searchInput);
  const weatherFetch = await getWeather(locFetch);
  const UIState = await selectUIRender(weatherFetch);
  const pokemonFetch = await getPokemon(UIState);
  updateUIColor(UIState);
  setValues(locFetch, weatherFetch, pokemonFetch);
};

const temperatureToFahrenheit = (numberInKelvin) => {
  numberInKelvin = parseFloat(numberInKelvin);
  return ((numberInKelvin - 273.15) * 1.8 + 32).toFixed(2);
};

const checkLocation = (locationdata) => {
  if (!locationdata[0]) {
    alert("we messed up, this place was not found");
  } else {
    return locationdata;
  }
};

const updateUIColor = (stateObj) => {
  root.style.setProperty("--primary-color-h", stateObj.primaryColorH);
  root.style.setProperty("--primary-color-s", `${stateObj.primaryColorS}%`);
  root.style.setProperty("--primary-color-l", `${stateObj.primaryColorL}%`);
  cycleStatus.innerText = `${stateObj.weather} ${stateObj.time}`;
};

const manualUI = async () => {
  const pokemonFetch = await getPokemon(UIArray[cycleUINum()]);
  updateUIColor(UIArray[cycleUINum()]);
  pokemonPic.src = pokemonFetch.sprites.other.dream_world.front_default;
  pokemonName.innerText = pokemonFetch.name;
};

const cycleUINum = () => {
  cycleStatus.style.display = "";
  console.log(UIArray.length);
  const matchesArry = (arrItem) =>
    `${arrItem.weather} ${arrItem.time}` == cycleStatus.innerText;
  console.log(UIArray.findIndex(matchesArry));
  let currUIArrNum = UIArray.findIndex(matchesArry);
  if (currUIArrNum === UIArray.length - 1) {
    currUIArrNum = -1;
    // find the current index of the element being used
    // add one to the index
    // needs to work repeatedly
    // might need to add something that checks the length and resets to 0 when needed
  }
  return currUIArrNum + 1;
};

const selectUIRender = (weatherData) => {
  switch (true) {
    case weatherData.wind.speed > 15 &&
      weatherData.weather[0].icon.slice(-1) === "d":
      // windyday
      return windDay;

    case weatherData.main.temp > 87 &&
      weatherData.weather[0].icon.slice(-1) === "d":
      // coldday
      return hotDay;

    case weatherData.main.temp < 32 &&
      weatherData.weather[0].icon.slice(-1) === "d":
      // hotday
      return coldDay;

    case weatherData.wind.speed > 15 &&
      weatherData.weather[0].icon.slice(-1) === "n":
      // windynight
      return windNight;

    case weatherData.main.temp > 87 &&
      weatherData.weather[0].icon.slice(-1) === "n":
      // coldnight
      return hotNight;

    case weatherData.main.temp < 32 &&
      weatherData.weather[0].icon.slice(-1) === "n":
      // hotniight
      return coldNight;

    // clear sunny day
    case weatherData.weather[0].icon === "01d":
    case weatherData.weather[0].icon === "02d":
      return sunnyDay;
      break;

    case weatherData.weather[0].icon === "03d":
    case weatherData.weather[0].icon === "04d":
      //cloudy day
      return cloudyDay;

    case weatherData.weather[0].icon === "09d":
    case weatherData.weather[0].icon === "10d":
      // rain day
      return rainDay;

    case weatherData.weather[0].icon === "11d":
      // thunderstorm day
      return thunderstormDay;

    case weatherData.weather[0].icon === "13d":
      // snow day
      return snowDay;

    case weatherData.weather[0].icon === "50d":
      // mist or fog day
      return mistDay;

    case weatherData.weather[0].icon === "01n":
    case weatherData.weather[0].icon === "02n":
      // clear sky night
      return clearNight;

    case weatherData.weather[0].icon === "03n":
    case weatherData.weather[0].icon === "04n":
      //cloudy night
      return cloudNight;

    case weatherData.weather[0].icon === "09n":
    case weatherData.weather[0].icon === "10n":
      // rain night
      return rainNight;

    case weatherData.weather[0].icon === "11n":
      // thunderstorm night
      return thunderstormNight;

    case weatherData.weather[0].icon === "13n":
      // snow night
      return snowNight;

    case weatherData.weather[0].icon === "50n":
      // mist or fog night
      return mistNight;

    default:
      return alert("NO CONDITION FOUND");
  }
};

renderPage();

searchBar.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    renderPage();
  }
});

cycler.addEventListener("click", manualUI);
