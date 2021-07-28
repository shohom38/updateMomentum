const API_KEY = "5cb96a44fae78d9a9f39574f57975d77"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("you live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).then(response => response.json()).then(data => {
        console.log(data.name, data.weather[0].main, data.sys.country);
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:nth-child(2)");
        const country = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        country.innerText = data.sys.country;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp.toFixed(1)}`;
    });
}
function onGeoErr() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);