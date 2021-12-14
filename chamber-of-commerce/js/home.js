const requestURL = "https://raw.githubusercontent.com/Terradragon/wdd230/master/chamber-of-commerce/json/companies.json"

fetch(requestURL)
.then(function(response){
    return response.json();
})

.then(function(jsObject){
    const companies = jsObject["companies"]
    for(let i = 0; i < companies.length; i++){
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let logo = document.createElement("img");
        let p = document.createElement("p");
        let firstCol = document.createElement("column1");
        let secCol = document.createElement("column2");

        h2.textContent = companies[i].name;
        logo.setAttribute("src", "images/" + companies[i].logo);
        logo.setAttribute("alt", companies[i].name);
        p.textContent = companies[i].purpose;

        card.appendChild(firstCol);
        card.appendChild(secCol);
        firstCol.appendChild(h2);
        firstCol.appendChild(p);
        secCol.appendChild(logo);

        document.querySelector(".cards_companies").appendChild(card);
    }
})

const requesturl = "https://raw.githubusercontent.com/Terradragon/wdd230/master/chamber-of-commerce/json/events.json"

fetch(requesrurl)
.then(function(response){
    return response.json();
})

.then(function(jsObject){
    const events = jsObject["events"]
    for(let j = 0; j < events.length; j++){
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let div = document.createElement("div");

       
    }
})