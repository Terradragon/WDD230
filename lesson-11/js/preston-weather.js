function fahrenheit(temp){
    return Math.round((temp - 273.5) * (9 / 5) + 32);
}



const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=0f83d7b0bb4f3743fe80e3075281c729";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=0f83d7b0bb4f3743fe80e3075281c729";


//Fetch Weather Summary
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);

    //Add Variables
    let temp = fahrenheit(jsObject.main.temp);
    let prestonHigh = document.getElementById("high");
    let current = jsObject.weather[0].description;
    let windS = Math.round(jsObject.wind.speed);

    document.getElementById("current").textContent = `Currently: ${current}`;

    document.getElementById("high").innerHTML = `High: ${fahrenheit(jsObject.main.temp_max)}&deg;F`;

    document.getElementById("humid").innerHTML = `Humidity: ${jsObject.main.humidity}%`;

    document.getElementById("windS").textContent =`Wind Speed: ${windS} mph`;
})

//Fecth Five Day Forecast
fetch(forecastUrl)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    
    //Add Variables
    const currentDate = new Date(jsObject.list[0].dt_txt)
    const today = currentDate.getDay();
    let a = today;
    let dayOfTheWeek;
    const days = document.querySelectorAll(".day");

    //Add Array
    const weekName = [
         "Sunday",
         "Monday",
         "Tuesday",
         "Wednesday",
         "Thursday",
         "Friday",
         "Saturday",
    ]
    
    days.forEach((day) =>{
        Object.keys(weekName).forEach((day) => {
            if (a > 6){
                a = 0;
            }
            if (day == a){
                dayOfWeek = weekName[a];
            }
        })
        day.innerHTML = dayOfWeek;
        a += 1;
    })

    const forecastImage = document.querySelectorAll(".forecast-image");

    //Forecast Temperatures
    const fTemp = document.querySelectorAll(".ftemp");
    let b = 0;

    jsObject.list.forEach((item, a) => {
        let itemDT = new Date(item.dt_txt);
        let now = itemDT.getHours();

        if(now = 18){
            //Weather for Five Day Forecast
            let fiveDayWeather = fahrenheit(jsObject.list[a].main.temp);
            fTemp[b].innerHTML = `${fiveDayWeather}&deg;F`;

            //Image for Five Day Forecast
            const imagesrc = `https://openweathermap.org/img/w/${jsObject.list[a].weather[0].icon}.png`;
            forecastImage[b].setAttribute("src", imagesrc);
            
            b += 1;
        }
        
    })

});
