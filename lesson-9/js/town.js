const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"

fetch(requestURL)
.then(function (response){
    return response.json();
})

.then(function (jsonObject){
    const towns = jsonObject["towns"]
    towns.splice(1, 1);
    towns.splice(2, 3);
    for(let i = 0; i < towns.length; i++){
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let m = document.createElement("h3");
        let yf = document.createElement("p");
        let p = document.createElement("p");
        let arf = document.createElement("p");
        let photo = document.createElement("img");


        h2.textContent = towns[i].name;
        m.textContent = towns[i].motto;
        yf.textContent = "Year Founded: " + towns[i].yearFounded;
        p.textContent = "Population: " + towns[i].currentPopulation;
        arf.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
        photo.setAttribute("src", towns[i].photo);
        photo.setAttribute("alt", towns[i].name);

        card.appendChild(h2);
        card.appendChild(m);
        card.appendChild(yf);
        card.appendChild(p);
        card.appendChild(arf);
        card.appendChild(photo);
        document.querySelector("div.cards").appendChild(card);
    }
})