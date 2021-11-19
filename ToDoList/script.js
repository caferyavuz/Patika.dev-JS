let listItemDOM = document.querySelector("#listItem")
let listItemBtnDOM = document.querySelector("#listItemBtn")
let toDoListDOM = document.querySelector("#toDoList")
let toastDOM = document.querySelector("#toast")

const LIST_ITEM = (item) => `<p>${item}<span class="deleteItem" onclick="deleteItem()">X</span></p>`

listItemBtnDOM.addEventListener("click",function(){
    let liElement = document.createElement("li")
    if(listItemDOM.value){
        liElement.innerHTML = LIST_ITEM(listItemDOM.value)
        console.log(liElement)
        toDoListDOM.append(liElement)
        toastDOM.classList.add("show")
    }
    
})
