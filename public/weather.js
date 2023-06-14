const input = document.querySelector(".input > input");
const sendButton = document.querySelector(".input > button");

const city = document.querySelector(".city");
const temperature = document.querySelector(".temperature")
const description = document.querySelector(".description");
const feltTemperature = document.querySelector(".feltTemperature")
const wind = document.querySelector(".wind")
const humidity = document.querySelector(".humidity")
const pressure = document.querySelector(".pressure")
const cloudiness = document.querySelector(".cloudiness")

const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&appid=743a324b0e302603055cf2228aa20006';
const apiunits = '&units=metric';
const apiLang = '&lang=pl';

const getWeather = () => {
    const apiCity = input.value || "Gdansk";
    const URL = apiLink + apiCity + apiKey + apiunits + apiLang;

    axios.get(URL).then(res => {
        city.textContent = `${res.data.name}`
        temperature.textContent = `${res.data.main.temp} °C`
        description.textContent = `${res.data.weather[0].description}`
        feltTemperature.textContent = `${res.data.main.feels_like} °C`
        wind.textContent = `${Math.floor(res.data.wind.speed * 3.6)} km/h`
        humidity.textContent = `${res.data.main.humidity} %`
        pressure.textContent = `${res.data.main.pressure} hPa`
        cloudiness.textContent = `${res.data.clouds.all} %`
    }).catch(error => {
        if (error.res.data.cod === "404") {
            city.textContent = `${error.res.data.message}`
            temperature.textContent = ""
            description.textContent = ""
            feltTemperature.textContent = ""
            wind.textContent = ""
            humidity.textContent = ""
            pressure.textContent = ""
            cloudiness.textContent = ""
        }
        else {
            city.textContent = "error :("
        }
    }).finally(() => {
        input.value = "";
    });
}

sendButton.addEventListener('click', getWeather);