let day1 = document.getElementById('day1');
let day2 = document.getElementById('day2');
let day3 = document.getElementById('day3');
let day4 = document.getElementById('day4');
let day5 = document.getElementById('day5');
let temp1 = document.getElementById('temp1');
let temp2 = document.getElementById('temp2');
let temp3 = document.getElementById('temp3');
let temp4 = document.getElementById('temp4');
let temp5 = document.getElementById('temp5');
let icon1 = document.getElementById('icon1');
let icon2 = document.getElementById('icon2');
let icon3 = document.getElementById('icon3');
let icon4 = document.getElementById('icon4');
let icon5 = document.getElementById('icon5');
let desc1 = document.getElementById('desc1');
let desc2 = document.getElementById('desc2');
let desc3 = document.getElementById('desc3');
let desc4 = document.getElementById('desc4');
let desc5 = document.getElementById('desc5');

let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
setInterval(()=>{
    const obj = new Date();
    const day = obj.getDay();
    day1.innerHTML=days[day];
    day2.innerHTML=days[day+1];
    day3.innerHTML=days[day+2];
    day4.innerHTML=days[day+3];
    day5.innerHTML=days[day+4];
},1000);

window.addEventListener("load",()=>{
    var lat;
    var lon;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            const api = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=6de77d968c2ca3b338bf09fa09c4d05e`
        fetch(api)
        .then((response)=>{
            return response.json();
        })
        .then(data=>{
               for(i=0;i<5;i++){
                   document.getElementById("temp"+(i+1)).innerHTML=Number(data.list[i].main.feels_like-288.32).toFixed(1)+"°C";
               }
            })
        })
        
    }
});

