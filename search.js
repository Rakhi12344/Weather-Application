//  connecting html elements in js
var tempEl = document.getElementById('stemp');
var cityEl = document.getElementById('scity');
var icon = document.getElementById('sicon');
var minEl = document.getElementById('min');
var maxEl = document.getElementById('max');
var desc = document.getElementById('weather-desc');
var searchInput = document.getElementById('search');
var searchBtn = document.getElementById('button');

//  adding click listener to search button
searchBtn.addEventListener('click', function () {
    let obj = new Date();
    let hour = obj.getHours();
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchInput.value + '&appid=6de77d968c2ca3b338bf09fa09c4d05e')
        .then((response) => {
            return response.json();
        })
        .then(data => {
            const { name } = data;
            const { feels_like, temp_min, temp_max } = data.main;
            const { id, main } = data.weather[0];

            cityEl.textContent = name;
            tempEl.textContent = Math.round(feels_like - 273);
            minEl.textContent = Math.round(temp_min - 273);
            maxEl.textContent = Math.round(temp_max - 273);
            desc.textContent = main;
            console.log(data);

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
        .catch(err => alert("Please enter a valid city!"))


})
