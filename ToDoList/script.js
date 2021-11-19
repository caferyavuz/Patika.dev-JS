let listItemDOM = document.querySelector("#listItem")
let listItemBtnDOM = document.querySelector("#listItemBtn")
let toDoListDOM = document.querySelector("#toDoList")
let toastDOM = document.querySelector("#toast")
let deleteItem

const LIST_ITEM = (item) => `${item}<span class="deleteItem">X</span>`

const TOAST_MESSAGE = (message = "Liste elemanı boş olamaz.") => 
`<div class="toast-header">
<strong>${message}</strong>
<button onclick="toastClose()" type="button" class="btn-close end-0"></button>
</div>`


listItemBtnDOM.addEventListener("click",function(){
    let liElement = document.createElement("li")
    if(listItemDOM.value && listItemDOM.value.trim()){
        liElement.innerHTML = LIST_ITEM(listItemDOM.value)
        toDoListDOM.append(liElement)
        toastDOM.innerHTML = TOAST_MESSAGE("Listeye eklendi.")
        toastDOM.classList.remove("hide")
        toastDOM.classList.add("show")
        listItemDOM.value = ""
    }
    else {
        toastDOM.innerHTML = TOAST_MESSAGE()
        toastDOM.classList.remove("hide")
        toastDOM.classList.add("show")
    }
    deleteItem = document.querySelectorAll(".deleteItem")
    console.log(deleteItem)
    for (let i = 0; i < deleteItem.length; i++) {
        deleteItem[i].onclick = function(){
            let li = this.parentElement;
            li.remove();
        }
    }
})

function toastClose(){
    toastDOM.classList.remove("show")
    toastDOM.classList.add("hide")
}
 


toDoListDOM.addEventListener("click",function (item) {
    
    if(item.target.tagName = "li"){
        item.target.classList.toggle("checked")
    }
})


