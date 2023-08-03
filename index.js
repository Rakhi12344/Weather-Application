//  connecting html elements in js
let tempEl = document.getElementById('temp');
let dayEl = document.getElementById('day');
let dateEl = document.getElementById('date');
let ampmEl = document.getElementById('ampm');
let cityEl = document.getElementById('city');
let timeEl = document.getElementById('time');
let descEl = document.getElementById('desc');
let icon = document.getElementById('weather-icon');

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// setting day , date and time

setInterval(() => {
    const obj = new Date();
    const day = obj.getDay();
    const date = obj.getDate();
    const month = obj.getMonth();
    const year = obj.getFullYear();
    const hour = obj.getHours();
    const minute = obj.getMinutes();

    const ampm = hour >= 12 ? 'PM' : 'AM'
    const hourIn12 = hour >= 13 ? hour % 12 : hour

    timeEl.innerHTML = hourIn12 + ":" + minute
    ampmEl.innerHTML = ampm
    dayEl.innerHTML = days[day]
    dateEl.innerHTML = date + " " + months[month] + " " + year
})

window.addEventListener("load", () => {
    let lat;
    let long;
    const object = new Date();
    const hour = object.getHours();
    // fetching data and setting values to HTML Element
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6de77d968c2ca3b338bf09fa09c4d05e`
            fetch(api)
                .then((response) => {
                    return response.json();
                })
                .then(data => {
                    const { name } = data;
                    const { feels_like } = data.main;
                    const { id, main } = data.weather[0];

                    cityEl.textContent = name;
                    tempEl.textContent = Math.round(feels_like - 273);
                    descEl.textContent = main;
                    console.log(data);

                    // setting weather icon according to icon id in fetched data

                    if (id >= 200 && id <= 232) {
                        icon.src = "images/thunderstorm.png";
                    }
                    else if (id >= 300 && id <= 321) {
                        icon.src = "images/rain.png";
                    }
                    else if (id >= 500 && id <= 531) {
                        icon.src = "images/rain.png";
                    }
                    else if (id >= 600 && id <= 622) {
                        icon.src = "images/snowy.png";
                    }
                    else if (id >= 701 && id <= 781) {
                        icon.src = "images/mist.png";
                    }
                    else if (id >= 801 && id <= 804) {
                        icon.src = "images/cloudy.png";
                    }
                    else if (id == 800) {
                        if (hour >= 6 && hour <= 19) {
                            icon.src = "images/sunny.png";
                        }
                        else {
                            icon.src = "images/moon.png";
                        }
                    }
                })
        })
    }
})