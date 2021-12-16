
let list = document.createElement("ol")



const nameList = function(){
    let firstName = document.getElementById("firstname")
    let lastName = document.getElementById("lastname")
    let item = document.createElement("li")
    item.innerText =firstName + " " + lastName
    list.appendChild(item)
    console.log(list)
}


