/*add info
let day = newDate();
let week = d.getDay();
.style.display = "block";
add message
let announcment;
if(week == 4){
    message = "Saturday = Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion";
}
else{
    message = "false";
}
document.getElementById("event").textContent= announcment;*/
/*function banner() {
    let day = newDate();
    let week = d.getDay();
    let message = "";
    if (week == 4) {
      message = "Saturday = Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pailion";
    } else {
      message = "false";
    }
    document.getElementById("demo").innerHTML = text;
  }*/

function banner(){
    let daynames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let w =  daynames[d.getDay()];
  let text;
  text.style.bacgroundColor = "#954B93";
  text.style.color = "#D9A408";
  text.style.padding = "16px";
  text.style.margin = "0 auto";
  text.style.display = "flex";
  if (w == "Friday") {
    text = "Saturday = Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavillion";

  } else {
    text = null;
  }
  
  document.getElementById("demo").innerHTML = text;
}