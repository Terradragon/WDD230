const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={51ad4715d0180a37e79d393b882b06e4}"

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);

})