
let list = document.createElement("ol")
list.id="names"
let body = document.getElementById("players")
body.appendChild(list)

let bodyt = document.getElementById("teams")

let randNames = []
let chosenName = []

let teamlist = document.createElement("ol")



const nameList = function(){
    let firstName = document.getElementById("firstname")
    let lastName = document.getElementById("lastname")
    let item = document.createElement("li")
    item.innerText =firstName.value + " " + lastName.value
    list.appendChild(item)
    randNames.push(item.innerText)
    console.log(randNames)
  
}


const team = function(){
   
let teams = document.getElementById("teamnr").value
    for(i=0;i<teams;i++){
        let teamlist = document.createElement("ol")
        bodyt.appendChild(teamlist)
        let item = document.createElement("li")
        teamlist.appendChild(item)
    }
}

const assign = function(){

        let x = randNames[Math.floor(Math.random())*(randNames.length)]
        chosenName.push(x)
        randNames.splice((x-1),1)
        console.log(chosenName,randNames)
    

}


