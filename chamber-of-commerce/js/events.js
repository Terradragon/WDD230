const requestURL = "https://raw.githubusercontent.com/Terradragon/wdd230/master/chamber-of-commerce/json/events.json"

fetch(requestURL)
.then(function(response){
    return response.json();
})

.then(function(jsonObject){
    const events = (jsonObject)["events"];
    for(let i = 0 ; i < events.length; i++){
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let div = document.createElement("div");

        h2.textContent = "events";

        events.forEach((events) =>{
            let eventP = document.createElement("p");
            eventP.textContent = event;
            allEvents.append(eventP);
        })

        allEvents.setAttribute("class", "cards_events");
        div.append(allEvents);
        card.append(h2, div);
        document.querySelector("div.cards_events").append(card);
    }
})