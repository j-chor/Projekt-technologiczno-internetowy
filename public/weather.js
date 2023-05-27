const input = document.querySelector('input');
const button = document.querySelector('button');
const errorMsg = document.querySelector('p.error');
const cityName = document.querySelector('h2.cityName');
const img = document.querySelector('img');
const temeperature = document.querySelector('.temperature');
const temperatureDesc = document.querySelector('.temperatureDescription');
const feelsTempe = document.querySelector('.feelsTemp');
const windSpeed = document.querySelector('.windSpeed');
const humidity = document.querySelector('.humidity');
const pressure = document.querySelector('.pressure');
const cloud = document.querySelector('.cloud');

const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&appid=743a324b0e302603055cf2228aa20006';
const apiunits = '&units=metric';
const apiLang = '&lang=pl';

const getWeather = () => {
    const apiCity = input.value || 'Kosakowo';
    const URL = apiLink + apiCity + apiKey + apiunits + apiLang;

    axios.get(URL).then(response => {
        console.log(response.data);

        img.src = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        humidity.textContent = `${response.data.main.humidity} %`;
        windSpeed.textContent = `${Math.floor(response.data.wind.speed * 3.6)} km/h`
        feelsTempe.textContent = `${response.data.main.feels_like}`
        temperatureDesc.textContent = `${response.data.weather[0].description}`;
        temeperature.textContent = `${response.data.main.temp} C`;
        cityName.textContent = `${response.data.name}`;
        pressure.textContent = `${response.data.main.pressure} hPa`;
        cloud.textContent = `${response.data.clouds.all} %`;
        errorMsg.textContent = '';
    }).catch(error => {
        if (error.response.data.cod === '404') {
            errorMsg.textContent = `${error.response.data.message}`
            img.src = '';
            humidity.textContent =  '';
            windSpeed.textContent = '';
            feelsTempe.textContent = '';
            temperatureDesc.textContent = '';
            temeperature.textContent = '';
            cityName.textContent = '';
            pressure.textContent = '';
            cloud.textContent =  '';
        }
        else {
            errorMsg = 'błąd'
        }
    }).finally(() => {
        input.value = '';
    });
}

button.addEventListener('click', getWeather);