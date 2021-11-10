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
  if (w == "Friday") {
    text = "Saturday = Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion";
  } else {
    text = null;
  }
  
  document.getElementById("demo").innerHTML = text;
}