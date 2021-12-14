const requestURL = "https://raw.githubusercontent.com/Terradragon/wdd230/master/chamber-of-commerce/json/georgia.json"

fetch(requestURL)
.then(function(response){
    return response.json();
})

.then(function (jsObject){
    const georgia = jsObject["georgia"]
    for(let i = 0; i < georgia.length; i++){
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let logo = document.createElement("img");
        let p = document.createElement("p");
        let firstCol = document.createElement("column1");
        let secCol = document.createElement("column2");
        /*let div = document.createElement("div");*/

        /*let companies = georgia.companies;
        let allCompanies = document.createElement("div");*/

        h2.textContent = `${georgia.companies} Name`;
        logo.setAttribute("src", "images/" + `${georgia.companies} logo`);
        logo.setAttribute("alt", `${georgia.companies} Name`);
        p.textContent = `${georgia.companies} Purpose`;

        document.querySelector(".cards_companies").appendChild(card);
    }
})