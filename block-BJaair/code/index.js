let form = document.querySelector("form");
let inputElm = document.querySelector(".input");
let option = document.querySelector(".select");
let container = document.querySelector(".container");

let obj = {};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let div = document.createElement("div");
        div.classList.add("itemContainer");
        let h3 = document.createElement("h3");
        let h2 = document.createElement("h2");
    
        h3.innerText = inputElm.value;
        h2.innerText = option.value;
        obj[h3.innerText] = h2.innerText;
        localStorage.values = obj;
        div.append(h2, h3);
    
        container.append(div);
        inputElm.value = '';
        option.value = 'Select Category';
})


function createCards() {
    
        for(let key in localStorage.obj) {
        
        let div = document.createElement("div");
        div.classList.add("itemContainer");
        let h3 = document.createElement("h3");
        let h2 = document.createElement("h2");
    
        h3.innerText = key;
        h1.innerText = localStorage.obj[key];
        localStorage.setItem(h3.innerText, h2.innerText);
        div.append(h2, h3);
    
        container.append(div);
        }
    
}

window.addEventListener("DOMContentLoaded", createCards);