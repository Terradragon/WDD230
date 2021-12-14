const requestURL = "https://raw.githubusercontent.com/Terradragon/wdd230/master/chamber-of-commerce/json/directory.json"

fetch(requestURL)
.then(function(response){
    return response.json();
})

.then(function(jsObject){
    const directory = jsObject["directory"]
    for(let i = 0; i < directory.length; i++){

                   document.getElementById("directory-table").innerHTML = `<tr>
                   <td>${directory[i].name}</td>
                   <td>${directory[i].owner}</td>
                   <td>${directory[i].address}</td>
                   <td>${directory[i].phone}</td>
                   <td>${directory[i].membersince}</td>
                  </tr>`
    }
})