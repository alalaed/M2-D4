
let list = document.createElement("ol")
let body = document.getElementsByTagName("body")
body[0].appendChild(list)



const nameList = function(){
    let firstName = document.getElementById("firstname")
    let lastName = document.getElementById("lastname")
    let item = document.createElement("li")
    item.innerText =firstName.value + " " + lastName.value
    list.appendChild(item)
  
}
