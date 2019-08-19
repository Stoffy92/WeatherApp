// API Params
const API_URL       = 'http://api.openweathermap.org/data/2.5/group?';
const API_KEY       = '4ac486aac118f6a11f8379252b09ab51&';
const CITY_IDS 			= '2193733,2179537,2192362'; // Auckland, Wellington, Christchurch
const UNITS					= 'units=metric';
const FULL_API_URL  = `${API_URL}id=${CITY_IDS}&appid=${API_KEY}&${UNITS}`;

// API Response
axios.get(FULL_API_URL)
		 .then(response => {
			 console.log('test',response.data);
			 console.log('cities',response.data.list);
			 const apiResponse = response.data.list; // Rename API response

			 apiResponse.forEach(city => {
				 console.log('cityName', city.name);
				 console.log('cityTemp', city.main.temp)
				 
				 // Dynamic Text/HTML Elements

				 const cityCard = document.createElement('div');
				 cityCard.setAttribute('class', 'city-card');
								
				 const cityName = document.createElement('h1');
				 cityName.setAttribute('class', 'city-name');
				 cityName.innerHTML = city.name;
				
				 const cityTemp = document.createElement('h1');
				 cityTemp.setAttribute('class', 'city-current-temp')
				 cityTemp.innerHTML = city.main.temp.toFixed(0) + '°';
				 
				 const cityTempMax = document.createElement('h1');
				 cityTempMax.setAttribute('class', 'city-temp-max');
				 cityTempMax.innerHTML = city.main.temp_max.toFixed(0) + '°';
				 
				 const cityTempMin = document.createElement('h1');
				 cityTempMin.setAttribute('class', 'city-temp-min');
				 cityTempMin.innerHTML = city.main.temp_min.toFixed(0) + '°';

				 const citySunRise = document.createElement('h1');
				 citySunRise.setAttribute('class', 'city-sun-rise');
				 citySunRise.innerHTML = new Date(city.sys.sunrise*1000)
				 						.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}); // Epoch Time Conversion

				 const citySunSet = document.createElement('h1');
				 citySunSet.setAttribute('class', 'city-sun-set');
				 citySunSet.innerHTML = new Date(city.sys.sunset*1000)
										 .toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}); // Epoch Time Conversion
										 
				 const cityWindSpeed = document.createElement('h1');
				 cityWindSpeed.setAttribute('class', 'city-wind-speed');
				 cityWindSpeed.innerHTML = city.wind.speed;
							 
				 const cityPressure = document.createElement('h1');
				 cityPressure.innerHTML = city.main.pressure;

				 // Image Elements

				 const sunRiseImg = document.createElement('img');
				 sunRiseImg.setAttribute('src', './assets/css/images/sunrise.svg');
				 sunRiseImg.setAttribute('class', 'imageLeft');

				 const sunSetImg = document.createElement('img')
				 sunSetImg.setAttribute('src', './assets/css/images/sunset.svg');

				 const windImg = document.createElement('img');
				 windImg.setAttribute('src', './assets/css/images/wind.svg');
				 windImg.setAttribute('class', 'city-wind-speed')

				 const maxTempImg = document.createElement('img');
				 maxTempImg.setAttribute('src', './assets/css/images/chevrons-up.svg');

				 const minTempImg = document.createElement('img');
				 minTempImg.setAttribute('src', './assets/css/images/chevrons-down.svg');


				 // Containers
				 const weatherRowTop = document.createElement('div');
				 weatherRowTop.setAttribute('class', 'weather-row-top');

				 const weatherRowBottom = document.createElement('div');
				 weatherRowBottom.setAttribute('class', 'weather-row-bottom');
				 
				 
				 const weatherApp = document.getElementById('container');
							 weatherApp.appendChild(cityCard);
							 
				 cityCard.appendChild(cityName);
				 cityCard.appendChild(cityTemp);

				 weatherRowBottom.appendChild(maxTempImg);
				 weatherRowBottom.appendChild(cityTempMax);

				 weatherRowBottom.appendChild(minTempImg);
				 weatherRowBottom.appendChild(cityTempMin);

				 cityCard.appendChild(weatherRowTop);
				 cityCard.appendChild(weatherRowBottom);

				 weatherRowTop.appendChild(citySunRise);
				 weatherRowTop.appendChild(citySunSet);
							 
				 weatherRowTop.appendChild(sunRiseImg);
				 weatherRowTop.appendChild(sunSetImg);

				 weatherRowTop.appendChild(cityWindSpeed);
				 weatherRowTop.appendChild(windImg);
				 
			 })
		 });

window.onload = function() { document.body.classList.remove('is-preload'); }
window.ontouchmove = function() { return false; }
window.onorientationchange = function() { document.body.scrollTop = 0; }



