let temperature = parseInt(document.getElementById("high").textContent);
let windspeed = parseInt(document.getElementById("windS").textContent);
let chill;
if (temperature <= 50 && windspeed > 3.0){
    chill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temperature) * Math.pow(windspeed, 0.16);
    //Round to two digits
    let digits = 2;
    let multiplier = Math.pow(10, digits);
    chill = Math.round(chill * multiplier) / multiplier;
    document.getElementById("windc").textContent = chill + "ºF";
}
else{
    document.getElementById("windc").textContent = "N/A";
}