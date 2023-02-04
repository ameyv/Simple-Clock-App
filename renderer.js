window.addEventListener("DOMContentLoaded",() => {
	const clock = new BouncyBlockClock(".clock");
});

const CONSTANTS = {
	weather_api_url: 'http://api.weatherapi.com/v1/forecast.json',
	weather_api_key: '77612029e74a435081a25921230302',
	current_city: 'Montréal',
	forecast_days: 4,
	temperature_format: '°C'
}
const url = `${CONSTANTS.weather_api_url}?key=${CONSTANTS.weather_api_key}&q=${CONSTANTS.current_city}&days=${CONSTANTS.forecast_days}&aqi=yes`;
const weather_condition = [{ 
  "code" : 1000, "day" : "Sunny", "night" : "Clear", "icon" : 'sun' }, 
{ "code" : 1003, "day" : "Partly cloudy", "night" : "Partly cloudy", "icon" : 'cloud' }, 
{ "code" : 1006, "day" : "Cloudy", "night" : "Cloudy", "icon" : 'cloud' }, 
{ "code" : 1009, "day" : "Overcast", "night" : "Overcast", "icon" : 'cloud' }, 
{ "code" : 1030, "day" : "Mist", "night" : "Mist", "icon" : 'cloud' }, 
{ "code" : 1063, "day" : "Patchy rain possible", "night" : "Patchy rain possible", "icon" : 'cloud-rain' }, 
{ "code" : 1066, "day" : "Patchy snow possible", "night" : "Patchy snow possible", "icon" : 'cloud-snow' }, 
{ "code" : 1069, "day" : "Patchy sleet possible", "night" : "Patchy sleet possible", "icon" : 'cloud-snow' }, 
{ "code" : 1072, "day" : "Patchy freezing drizzle possible", "night" : "Patchy freezing drizzle possible", "icon" : 'cloud-snow' }, 
{ "code" : 1087, "day" : "Thundery outbreaks possible", "night" : "Thundery outbreaks possible", "icon" : 'cloud-lightning' }, 
{ "code" : 1114, "day" : "Blowing snow", "night" : "Blowing snow", "icon" : 'cloud-snow' }, 
{ "code" : 1117, "day" : "Blizzard", "night" : "Blizzard", "icon" : 'cloud-snow' }, 
{ "code" : 1135, "day" : "Fog", "night" : "Fog", "icon" : 'cloud' }, 
{ "code" : 1147, "day" : "Freezing fog", "night" : "Freezing fog", "icon" : 'cloud' }, 
{ "code" : 1150, "day" : "Patchy light drizzle", "night" : "Patchy light drizzle", "icon" : 'cloud-rain' }, 
{ "code" : 1153, "day" : "Light drizzle", "night" : "Light drizzle", "icon" : 'cloud-rain' }, 
{ "code" : 1168, "day" : "Freezing drizzle", "night" : "Freezing drizzle", "icon" : 'cloud-snow' }, 
{ "code" : 1171, "day" : "Heavy freezing drizzle", "night" : "Heavy freezing drizzle", "icon" : 'cloud-snow' }, 
{ "code" : 1180, "day" : "Patchy light rain", "night" : "Patchy light rain", "icon" : 'cloud-rain' }, 
{ "code" : 1183, "day" : "Light rain", "night" : "Light rain", "icon" : 'cloud-rain' },
{ "code" : 1186, "day" : "Moderate rain at times", "night" : "Moderate rain at times", "icon" : 'cloud-rain' }, 
{ "code" : 1189, "day" : "Moderate rain", "night" : "Moderate rain", "icon" : 'cloud-rain' }, 
{ "code" : 1192, "day" : "Heavy rain at times", "night" : "Heavy rain at times", "icon" : 'cloud-rain' }, 
{ "code" : 1195, "day" : "Heavy rain", "night" : "Heavy rain", "icon" : 'cloud-rain' }, 
{ "code" : 1198, "day" : "Light freezing rain", "night" : "Light freezing rain", "icon" : 'cloud-rain' }, 
{ "code" : 1201, "day" : "Moderate or heavy freezing rain", "night" : "Moderate or heavy freezing rain", "icon" : 'cloud-rain' }, 
{ "code" : 1204, "day" : "Light sleet", "night" : "Light sleet", "icon" : 'cloud-snow' }, 
{ "code" : 1207, "day" : "Moderate or heavy sleet", "night" : "Moderate or heavy sleet", "icon" : 'cloud-snow' }, 
{ "code" : 1210, "day" : "Patchy light snow", "night" : "Patchy light snow", "icon" : 'cloud-snow' }, 
{ "code" : 1213, "day" : "Light snow", "night" : "Light snow", "icon" : 'cloud-snow' }, 
{ "code" : 1216, "day" : "Patchy moderate snow", "night" : "Patchy moderate snow", "icon" : 'cloud-snow' }, 
{ "code" : 1219, "day" : "Moderate snow", "night" : "Moderate snow", "icon" : 'cloud-snow' }, 
{ "code" : 1222, "day" : "Patchy heavy snow", "night" : "Patchy heavy snow", "icon" : 'cloud-snow' }, 
{ "code" : 1225, "day" : "Heavy snow", "night" : "Heavy snow", "icon" : 'cloud-snow' }, 
{ "code" : 1237, "day" : "Ice pellets", "night" : "Ice pellets", "icon" : 'cloud-snow' }, 
{ "code" : 1240, "day" : "Light rain shower", "night" : "Light rain shower", "icon" : 'cloud-rain' }, 
{ "code" : 1243, "day" : "Moderate or heavy rain shower", "night" : "Moderate or heavy rain shower", "icon" : 'cloud-rain' }, 
{ "code" : 1246, "day" : "Torrential rain shower", "night" : "Torrential rain shower", "icon" : 'cloud-rain' }, 
{ "code" : 1249, "day" : "Light sleet showers", "night" : "Light sleet showers", "icon" : 'cloud-rain' }, 
{ "code" : 1252, "day" : "Moderate or heavy sleet showers", "night" : "Moderate or heavy sleet showers", "icon" : 'cloud-snow' }, 
{ "code" : 1255, "day" : "Light snow showers", "night" : "Light snow showers", "icon" : 'cloud-snow' }, 
{ "code" : 1258, "day" : "Moderate or heavy snow showers", "night" : "Moderate or heavy snow showers", "icon" : 'cloud-snow' }, 
{ "code" : 1261, "day" : "Light showers of ice pellets", "night" : "Light showers of ice pellets", "icon" : 'cloud-snow' }, 
{ "code" : 1264, "day" : "Moderate or heavy showers of ice pellets", "night" : "Moderate or heavy showers of ice pellets", "icon" : 'cloud-snow' }, 
{ "code" : 1273, "day" : "Patchy light rain with thunder", "night" : "Patchy light rain with thunder", "icon" : 'cloud-lightning' }, 
{ "code" : 1276, "day" : "Moderate or heavy rain with thunder", "night" : "Moderate or heavy rain with thunder", "icon" : 'cloud-lightning' }, 
{ "code" : 1279, "day" : "Patchy light snow with thunder", "night" : "Patchy light snow with thunder", "icon" : 'cloud-snow' }, 
{ "code" : 1282, "day" : "Moderate or heavy snow with thunder", "night" : "Moderate or heavy snow with thunder", "icon" : 'cloud-snow' } ];

const AQI = [{
	code: 1, name: 'Good 😇'
}, {
	code: 2, name: 'Moderate 🙂'
}, {
	code: 3, name: 'Unhealthy 🥺'
}, {
	code: 4, name: 'Unhealthy 😵'
}, {
	code: 5, name: 'Bad 🤢'
}, {
	code: 6, name: 'Hazardous ☠️'
}];

const IMAGES = [
	'https://images.unsplash.com/photo-1674217223882-5d7e774ba952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
	'https://images.unsplash.com/photo-1672985769289-9056a3ca9b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
	'https://images.unsplash.com/photo-1674188919462-44cdbbdbcbc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
	'https://images.unsplash.com/photo-1674066636011-d445199acada?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=374&q=80',
	'https://images.unsplash.com/photo-1673285105552-4fdf089c35d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=466&q=80'
];

class BouncyBlockClock {
	constructor(qs) {
		this.el = document.querySelector(qs);
		this.time = { a: [], b: [] };
		this.rollClass = "clock__block--bounce";
		this.digitsTimeout = null;
		this.rollTimeout = null;
		this.mod = 0 * 60 * 1000;

		this.loop();
	}
	animateDigits() {
		const groups = this.el.querySelectorAll("[data-time-group]");

		Array.from(groups).forEach((group,i) => {
			const { a, b } = this.time;

			if (a[i] !== b[i]) group.classList.add(this.rollClass);
		});

		clearTimeout(this.rollTimeout);
		this.rollTimeout = setTimeout(this.removeAnimations.bind(this),900);
	}
	displayTime() {
		// screen reader time
		const timeDigits = [...this.time.b];
		const ap = timeDigits.pop();

		this.el.ariaLabel = `${timeDigits.join(":")} ${ap}`;

		// displayed time
		Object.keys(this.time).forEach(letter => {
			const letterEls = this.el.querySelectorAll(`[data-time="${letter}"]`);

			Array.from(letterEls).forEach((el,i) => {
				el.textContent = this.time[letter][i];
			});
		});
	}
	loop() {
		this.updateTime();
		this.displayTime();
		this.animateDigits();
		this.tick();
	}
	removeAnimations() {
		const groups = this.el.querySelectorAll("[data-time-group]");
	
		Array.from(groups).forEach(group => {
			group.classList.remove(this.rollClass);
		});
	}
	tick() {
		clearTimeout(this.digitsTimeout);
		this.digitsTimeout = setTimeout(this.loop.bind(this),1e3);	
	}
	updateTime() {
		const rawDate = new Date();
		const date = new Date(Math.ceil(rawDate.getTime() / 1e3) * 1e3 + this.mod);
		let h = date.getHours();
		const m = date.getMinutes();
		const s = date.getSeconds();
		const ap = h < 12 ? "AM" : "PM";

		if (h === 0) h = 12;
		if (h > 12) h -= 12;

		this.time.a = [...this.time.b];
		this.time.b = [
			(h < 10 ? `0${h}` : `${h}`),
			(m < 10 ? `0${m}` : `${m}`),
			(s < 10 ? `0${s}` : `${s}`),
			ap
		];

		if (!this.time.a.length) this.time.a = [...this.time.b];
	}
}

(function() {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];

    Date.prototype.getMonthName = function() {
        return months[ this.getMonth() ];
    };
    Date.prototype.getDayName = function() {
        return days[ this.getDay() ];
    };
    Date.prototype.getShortDayName = function() {
        return days[ this.getDay() ].slice(0, 3);
    };
})();

function getIcon(code, is_day) {
	let icon = weather_condition.find((item) => item.code === code).icon;
	if(icon === 'sun' && !is_day) {
		icon = 'moon';
	}
	return icon;
}

function showData(res) {
	let weather_icon = getIcon(res.current.condition.code, res.current.is_day);
	let i = document.createElement('i');
	document.querySelector('.background-image').style.backgroundImage = 'url(https://source.unsplash.com/random/?'+CONSTANTS.current_city+'&1)';//'url(' + IMAGES[Math.floor(Math.random() * IMAGES.length)] +')';
	document.querySelector('.weather-side').style.backgroundImage = 'url(https://source.unsplash.com/random/?'+weather_icon+'&1)';//'url(' + IMAGES[Math.floor(Math.random() * IMAGES.length)] +')';
    document.querySelector('.date-dayname').textContent = new Date(res.location.localtime).getDayName();
    document.querySelector('.date-day').textContent = new Date().getDate() + ' ' + new Date().getMonthName() + ' ' + new Date().getFullYear();
    document.querySelector('.location').textContent = res.location.name + ', ' + res.location.country;
    document.querySelector('.weather-temp').textContent = res.current.temp_c + CONSTANTS.temperature_format;
    document.querySelector('.weather-desc').textContent = res.current.condition.text;
	document.querySelector('.weather-container svg.feather.feather-sun').remove();
	i.classList.add('weather-icon');
	i.setAttribute('data-feather', weather_icon);
	document.querySelector('.weather-container').insertBefore(i, document.querySelector('.weather-temp'));
    document.querySelector('.weather-feels-like-value').textContent = res.current.feelslike_c + CONSTANTS.temperature_format;

	showOtherData({
		precipitation: res.current.precip_in,
		humidity: res.current.humidity,
		wind: res.current.wind_kph,
		aqi: res.current.air_quality['us-epa-index']
	});

    var list = document.querySelector('.week-list').children;
    Array.from(list).forEach(function(el, i) {
        if(el.localName === 'li') {
			el.querySelector('svg.feather').remove();
			let icon = document.createElement('i');
			icon.classList.add('day-icon');
			icon.setAttribute('data-feather', getIcon(res.forecast.forecastday[i].day.condition.code, true));
			el.insertBefore(icon, el.querySelector('.day-name'));
            el.querySelector('.day-name').textContent = new Date(res.forecast.forecastday[i].date + ' ').getShortDayName();
            el.querySelector('.day-temp').textContent = res.forecast.forecastday[i].day.avgtemp_c + CONSTANTS.temperature_format;
			el.setAttribute('precip_in', res.forecast.forecastday[i].day.totalprecip_in);
			el.setAttribute('humidity', res.forecast.forecastday[i].day.avghumidity);
			el.setAttribute('wind', res.forecast.forecastday[i].day.avgvis_km);
			el.setAttribute('aqi', res.forecast.forecastday[i].day.air_quality['us-epa-index']);
        }
    });
	feather.replace();
}

function showOtherData(data) {
	document.querySelector('.precipitation').querySelector('.value').textContent = data.precipitation + '%';
    document.querySelector('.humidity').querySelector('.value').textContent = data.humidity + '%';
    document.querySelector('.wind').querySelector('.value').textContent = data.wind + ' km/h';
    document.querySelector('.air-quality').querySelector('.value').textContent = data.aqi + ' (' + getAQI(Number(data.aqi)) + ')';
}

function getAQI(code) {
	return AQI.find((item) => item.code === code).name;
}

function getData() {
    fetch(url).then(function(response) {
        return response.json();
      }).then(function(data) {
        showData(data);
      }).catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
}
getData();
setInterval(getData, 1800000);
feather.replace();

let ul = document.querySelector('.week-list');
ul.onclick = function(e, t) {
	let target = e.target; 
    while (target && target.parentNode !== ul) {
        target = target.parentNode;
        if(!target) { return; } 
    }
    if (target.tagName === 'LI'){
		var list = document.querySelector('.week-list').children;
		Array.from(list).forEach(function(el, i) {
			el.classList.remove('active');
		});
		target.classList.add('active');
		showOtherData({
			precipitation: target.getAttribute('precip_in'),
			humidity: target.getAttribute('humidity'),
			wind: target.getAttribute('wind'),
			aqi: target.getAttribute('aqi')
		});
    }
}