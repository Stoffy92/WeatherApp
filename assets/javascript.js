
// API Params
const API_URL       = 'https://api.openweathermap.org/data/2.5/group?';
const API_KEY       = '4ac486aac118f6a11f8379252b09ab51&';
const CITY_IDS 			= '2193733,2179537,2192362'; // Auckland, Wellington, Christchurch
const UNITS					= 'units=metric';
const FULL_API_URL  = `${API_URL}id=${CITY_IDS}&appid=${API_KEY}&${UNITS}`;

const weatherApp = document.getElementById('container');

axios.get(FULL_API_URL).then(response => {
  const apiResponse = response.data.list; // Rename API response
  let markup = apiResponse.map(city => 
    `
      <div class="city-card">

        <div class="city-weather-info">
          <h1 class="city-current-temp">${city.main.temp.toFixed(0) + '°'}</h1>
          <img class="city-weather-img" src ="https://openweathermap.org/img/w/${city.weather[0].icon + '.png'} "/>
          <h1 class="city-weather-desc">${city.weather[0].description}</h1>
          <h1 class="city-name">${city.name}</h1>
        </div>
        
        <div class="weather-row-top">
          <h1 class="city-sun-rise">${new Date(city.sys.sunrise*1000).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}</h1>
          <h1 class="city-sun-set">${new Date(city.sys.sunset*1000).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}</h1>
          <img class="imageLeft" src="./assets/css/images/sunrise.svg" />
          <img src="./assets/css/images/sunset.svg" />
          <h1 class="city-wind-speed">${city.wind.speed}</h1>
          <img class="city-wind-speed" src="./assets/css/images/wind.svg" />
        </div>

        <div class="weather-row-bottom">
          <img src="./assets/css/images/chevrons-up.svg" />
          <h1 class="city-temp-max">${city.main.temp_max.toFixed(0) + '°'}</h1>
          <img src="./assets/css/images/chevrons-down.svg" />
          <h1 class="city-temp-min">${city.main.temp_min.toFixed(0) + '°'}</h1>
        </div>

      </div>
    `).join('')
  weatherApp.innerHTML = markup;
  
});


window.onload = function() { document.body.classList.remove('is-preload'); }
window.ontouchmove = function() { return false; }
window.onorientationchange = function() { document.body.scrollTop = 0; }
