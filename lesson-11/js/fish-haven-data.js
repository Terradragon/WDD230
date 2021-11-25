const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"

fetch(requestURL)
.then(function (response){
    return response.json();
})

.then(function(jsonObject){
    const towns = (jsonObject)["towns"];
    towns.forEach((town) =>{
        if(town.name == "Fish Haven"){
            let card = document.createElement("section");
            let h3 = document.createElement("h3");
            let div = document.createElement("div");

            let events = town.events;
            let allEvents = document.createElement("div");

            card.setAttribute("class", "soda-springs-card");
            div.setAttribute("class", "event-info");

            h3.textContent = `${town.name} Events`;

            events.forEach((event) =>{
                let eventPar = document.createElement("p");
                eventPar.textContent = event;
                allEvents.append(eventPar);
            })

            allEvents.setAttribute("class", "event-info");
            div.append(allEvents);
            card.append(h3, div);
            document.querySelector(".fish-haven-card").append(card);  
        }
    })
})