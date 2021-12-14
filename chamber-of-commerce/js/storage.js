if(localStorage.getItem("date") == null){
    var oldDate = new Date();
 }
 
 else{
    var oldDate = localStorage.getItem("date");
    var oldDate = new Date(oldDate);
 }
    
    var currentDate = new Date();
    var difference = Math.round((currentDate - oldDate) / (1000 * 60 * 60 * 24));
 
 document.getElementById("lastVisit").textContent = difference;
 
 localStorage.setItem("date", currentDate);