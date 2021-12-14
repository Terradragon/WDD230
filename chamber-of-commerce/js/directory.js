const requestURL = "https://raw.githubusercontent.com/Terradragon/wdd230/master/chamber-of-commerce/json/directory.json"

fetch(requestURL)
.then(function(response){
    return response.json();
})

.then(function(jsonObject){
    const directory = (jsonObject)["directory"];
    for(let i = 0; i < directory.length; i++){
        let card = document.createElement("section");
        let list = document.createElement("ul");
        for(let i of data){ let item = document.createElement("li");list.appendChild(item)}

        document.querySelector("directory-info").appendChild(list);
    }
})