//add info//
let day = new Date();
let week = d.getDay();

//add message//
let announcment;
if(week == 3){
    message = "Saturday = Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion";
}
else{
    message = "false";
}
document.getElementById("event").textContent= announcment;