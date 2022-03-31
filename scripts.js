// define elements
const searchBar = document.querySelector('.search')
const locationValue = document.querySelector('.locationValue')
const timeValue = document.querySelector('.timeValue')
const sunriseValue = document.querySelector('.sunriseValue')
const sunsetValue = document.querySelector('.sunsetValue')
const weathericonValue = document.querySelector('.weathericonValue')
const descriptionValue = document.querySelector('.descriptionValue')
const temperatureValue = document.querySelector('.temperatureValue')
const feelslikeValue = document.querySelector('.feelslikeValue')
const windspeedValue = document.querySelector('.windspeedValue')
const cloudcoverageValue = document.querySelector('.cloudcoverageValue')
const pokemonPic = document.querySelector('.pokemonPic')
const pokemonName = document.querySelector('.pokemonName')
const root = document.querySelector(':root')
const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

//add event listeners
//define functions 



weatherKey = "e52935fa1ce4899077609af5e4e8c3f3"
locationKey = "b08c7331b4b8827fee5babd149132cb8"
cityname ="Manassas"
limit = "1"
lat = '38.9072'
lon = '-77.0369'

getLocation = async () => {
  const locationRequest = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=${limit}&appid=${locationKey}`, {mode: 'cors'})
  const locationData = await locationRequest.json()
  console.log(locationData)
  console.log(locationData[0].name)
  console.log(locationData[0].lon)
  console.log(locationData[0].lat)
}


getWeather = async () => {
  const fetchRequest = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherKey}`, { mode: 'cors' })
  const weatherData = await fetchRequest.json()
  console.log(weatherData)
  console.log(weatherData.weather[0].description)
  console.log(weatherData.weather[0].icon)
  console.log(weatherData.main.temp)
  console.log(weatherData.main.feels_like)
  console.log(weatherData.wind.speed)
  console.log(weatherData.clouds.all)
  const sunrise = new Date(weatherData.sys.sunrise * 1000)
  console.log(`Today is ${weekdays[sunrise.getDay()]} ${new Date(weatherData.dt * 1000).toLocaleString()}`)
  console.log(`${new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}`)
  console.log(`${new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}`)
  // can adjust size if needed
  console.log(`url for the thing is http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`)
}

getPokemon = async () => {
  const fetchRequest = await fetch(`https://pokeapi.co/api/v2/pokemon/murkrow`, { mode: 'cors' })
  const pokeData = await fetchRequest.json()
  console.log(pokeData)
  console.log(pokeData.sprites.other.dream_world.front_default)
  console.log(pokeData.name)
}

setValues = (locationData, weatherData, pokeData) => {
  locationValue.value=locationData[0].name
  timeValue.value=`Today is ${weekdays[sunrise.getDay()]} ${new Date(weatherData.dt * 1000).toLocaleString()}`
  sunriseValue.value=`${new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}`
  sunsetValue.value=`${new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}`
  weathericonValue.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
  descriptionValue.value=weatherData.weather[0].description
  temperatureValue.value=weatherData.main.temp
  feelslikeValue.value=weatherData.main.feels_like
  windspeedValue.value=weatherData.wind.speed
  cloudcoverageValue.value = weatherData.clouds.all
  pokemonPic.src = pokeData.sprites.other.dream_world.front_default
  pokemonName.value=pokeData.name
}
// function that ties all functions together
Math.floor(new Date().getTime()/1000.0) 


const renderPage = async () => {
  const step1 = await getLocation()
  const step2 = await getWeather()
  const step3 = await getPokemon()
  const step4 = await setValues()
}

const updateBGColor = (weather) => {
  switch (weather) {
    case 'clear sky':
      root.style.setProperty('--main', 'darkgrey');
      break;
    
    case 'few clouds':
      root.style.setProperty('--main', 'darkgrey');
      break;
  
    case 'rain':
      root.style.setProperty('--main', 'darkgrey');
      break;
  
    case 'thunderstorm':
      root.style.setProperty('--main', 'darkgrey');
      break;
  
    case 'snow':
      root.style.setProperty('--main', 'darkgrey');
      break;
  
    case 'mist':
      root.style.setProperty('--main', 'darkgrey');
      break;      
  
    case 'hot':
      root.style.setProperty('--main', 'darkgrey');
      break;
  
    case 'cold':
      root.style.setProperty('--main', 'darkgrey');
      break;
  
    case 'windy':
      root.style.setProperty('--main', 'darkgrey');
      break;
      
    case 'smog':
      root.style.setProperty('--main', 'darkgrey');
      break;
        
    default:
      style.setProperty('--main', 'red')
  }

}


getWeather()


searchBar.addEventListener('keypress', function(e){
  if (e.key === 'Enter') {
    renderPage()
  }
})