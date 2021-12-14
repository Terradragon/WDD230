const requestURL = "https://raw.githubusercontent.com/Terradragon/wdd230/master/chamber-of-commerce/json/homedata.json"
fetch(requestURL)
.then(function(response){
    return response.json();
})

.then(function(jsonObject){
    const company = (jsonObject)["company"];
    for(let i = 0; i < company.length; i++){
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        let firstCol = document.createElement("column1");
        let secCol = document.createElement("column2");
        let logo = document.createElement("img");

        h2.textContent = company[i].name;
        p.textContent = company[i].purpose;
        logo.setAttribute("src", "images/" + company[i].logo);
        logo.setAttribute("alt",company[i].name);

        card.appendChild(firstCol);
        card.appendChild(secCol);
        firstCol.appendChild(h2);
        firstCol.appendChild(p);
        secCol.appendChild(logo);

        document.querySelector("div.cards_companies").appendChild(card);
    }
})