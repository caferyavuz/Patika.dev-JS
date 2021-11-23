let listItemDOM = document.querySelector("#listItem")
let listItemBtnDOM = document.querySelector("#listItemBtn")
let toDoListDOM = document.querySelector("#toDoList")
let toastDOM = document.querySelector("#toast")
let deleteItem


const LIST_ITEM = (item) => `${item}<span class="deleteItem btn-close"></span>`

const TOAST_MESSAGE = (message = "Liste elemanı boş olamaz.") => 
`<div class="toast-header">
<strong>${message}</strong>
<button onclick="toastClose()" type="button" class="btn-close end-0"></button>
</div>`
// let arr=["elma","armut"]
// localStorage.setItem("list",JSON.stringify(arr))

// let list = localStorage.getItem("list")
//   ? JSON.parse(localStorage.getItem("list"))
//   : [];

// console.log(list)

// list.forEach(element => {
//     let liElement = document.createElement("li")
//     liElement.innerHTML = LIST_ITEM(element)
//         toDoListDOM.append(liElement)
//         deleteItemBtn()
// });

listItemBtnDOM.addEventListener("click",function(){
    let liElement = document.createElement("li")
    if(listItemDOM.value && listItemDOM.value.trim()){
        liElement.innerHTML = LIST_ITEM(listItemDOM.value)
        toDoListDOM.append(liElement)

        toastDOM.innerHTML = TOAST_MESSAGE("Listeye eklendi.")
        toastDOM.classList.remove("hide")
        toastDOM.classList.add("show")
        listItemDOM.value = "" 
        //console.log(list)
    }
    else {
        toastDOM.innerHTML = TOAST_MESSAGE()
        toastDOM.classList.remove("hide")
        toastDOM.classList.add("show")
    }
    deleteItemBtn()
})

function toastClose(){
    toastDOM.classList.remove("show")
    toastDOM.classList.add("hide")
}
 
function deleteItemBtn() {
    deleteItem = document.querySelectorAll(".deleteItem")
    console.log(deleteItem)
    for (let i = 0; i < deleteItem.length; i++) {
        deleteItem[i].onclick = function(){
            let li = this.parentElement;
            
            li.remove();

        }
    }
}

toDoListDOM.addEventListener("click",function (item) {
    console.log(item)
    if(item.target.tagName = "li"){
        item.target.classList.toggle("checked")
    }
})


