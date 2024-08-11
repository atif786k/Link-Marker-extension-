let inputTxt = document.getElementById("input-txt");
let saveInput = document.getElementById("save-input");
let deleteIN = document.getElementById("delete-in");
let El = document.getElementById("el");
let stores = [];

let getItems=JSON.parse(localStorage.getItem("stores"));
if (getItems) {
    stores = getItems;
    display();
}
function display(){
    let items = "";
    for (let i = 0; i < stores.length; i++) {
        items +=`<li>
                    <a href="${stores[i]}" target="_blank">
                    ${stores[i]} 
                    </a>
                </li>`

    }
    El.innerHTML = items;
}
deleteIN.addEventListener("click" , function(){
    localStorage.clear();
    stores = [];
    display();
})
saveInput.addEventListener("click", function () {
    stores.push(inputTxt.value);
    
    localStorage.setItem("stores" , JSON.stringify(stores));
    console.log(getItems)
    display();

    let clear = "";
    inputTxt.value = clear;

})

// localStorage.setItem("stores" , "items");
// localStorage.getItem("stores");
// localStorage.clear();