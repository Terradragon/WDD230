const requestURL = "https://raw.githubusercontent.com/Terradragon/wdd230/master/chamber-of-commerce/json/directory.json"

fetch(requestURL)
.then(function(response){
    return response.json();
})
.then(function(jsObject){
    const directory = jsObject["directory"]
    for(let i = 0; i < directory.length; i++){
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let own = document.createElement("p");
        let add = document.createElement("p");
        let phone = document.createElement("p");
        let ms = document.createElement("p");
       

        name.textContent = directory[i].name;
        own.textContent = "Owner: " + directory[i].owner;
        add.textContent = "Address: " + directory[i].address;
        phone.textContent = "Phone Number: " + directory[i].phone;
        ms.textContent = "Member Since: " + directory[i].membersince;

       card.appendChild(name);
       card.appendChild(own);
       card.appendChild(add);
       card.appendChild(phone);
       card.appendChild(ms);
        document.querySelector(".directory-card").appendChild(card);
    }
})