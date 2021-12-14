const requestURL = "https://raw.githubusercontent.com/Terradragon/wdd230/master/chamber-of-commerce/json/directory.json"

fetch(requestURL)
.then(function(response){
    return response.json();
})

.then(function(jsObject){
    const directory = jsObject["directory"]
    for(let i = 0; i < directory.length; i++){
        let card = document.createElement("ul");
        let name = document.createElement("li");
        let own = document.createElement("p");
        let add = document.createElement("p");
        let phone = document.createElement("p");
        let ms = document.createElement("p");

        name.textContent = directory[i].name;
        own.textContent = directory[i].owner;
        add.textContent = directory[i].address;
        phone.textContent = directory[i].phone;
        ms.textContent = directory[i].membersince;
                   /*document.getElementById("directory-table").innerHTML = `<tr>
                   <td>${directory[i].name}</td>
                   <td>${directory[i].owner}</td>
                   <td>${directory[i].address}</td>
                   <td>${directory[i].phone}</td>
                   <td>${directory[i].membersince}</td>
                  </tr>`*/
    }
})