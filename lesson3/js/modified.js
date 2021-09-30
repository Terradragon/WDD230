let months = [
    "Janurary",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
let d = new Date();
let dte = d.getDate();
let month = d.getMonth() + 1;
let year = d.getFullYear();
let hour = d.getHours();
let min = d.getMinutes();
let sec = d.getSeconds();

document.getElementById("lastmodified").textContent = "Last Updated: " + month + "/" + dte + "/" + year + " " + hour + ":" + min + ":" + sec;