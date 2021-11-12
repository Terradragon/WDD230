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
  /*text.style.bacgroundColor = "#954B93";
  text.style.color = "#D9A408";
  text.style.padding = "16px";
  text.style.margin = "0 auto";
  text.style.display = "flex";*/
  if (w == "Friday") {
    text = "Saturday = Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavillion";

  }
  else {
    text = null;
  }
  
  document.getElementById("demo").innerHTML = text;
}