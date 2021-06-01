let form = document.querySelector("form");
let inputElm = document.querySelector(".input");
let container = document.querySelector(".container");

let cardsData = JSON.parse(localStorage.getItem("cards")) || [];


form.addEventListener("submit", (event) => {
    event.preventDefault();

    let title = event.target.elements.title.value;
    let category = event.target.elements.category.value;

    cardsData.push({title, category});
    localStorage.setItem("cards", JSON.stringify(cardsData));
    createUI(cardsData, container);
    event.target.elements.title.value = '';
    event.target.elements.category.value = '';
});

function handleEdit(event, info, id, label ) {
    let elm = event.target;
    let input = document.createElement("input");
    input.type = "text";
    input.value = info;
    input.addEventListener("keyup", (e) => {
        if(e.keyCode === 13) {
            let updatedValue = e.target.value;
            cardsData[id][label] = updatedValue;
            createUI();
            localStorage.setItem("cards", JSON.stringify(cardsData));
        }     
    });
    input.addEventListener("blur", (e) => {
            let updatedValue = e.target.value;
            cardsData[id][label] = updatedValue;
            createUI();
            localStorage.setItem("cards", JSON.stringify(cardsData));
    });

    let parent = event.target.parentElement;
    parent.replaceChild(input, elm);
}


function createUI (data = cardsData, root = container) {
    root.innerHTML = "";
    let fragment = new DocumentFragment();
    data.forEach((cardInfo, index) => {
        let li = document.createElement("li");
        li.classList.add("itemContainer");

        let p = document.createElement("p");
        p.innerText = cardInfo.category;
        p.addEventListener("dblclick", (event) =>  handleEdit(event, cardInfo.category, index, "category"));

        let h2 = document.createElement("h2");
        h2.innerText = cardInfo.title;
        h2.addEventListener("dblclick", (event) =>  handleEdit(event, cardInfo.title, index, "title"));

        li.append(p, h2);
        fragment.appendChild(li);       
    });
    root.append(fragment);
}
createUI(cardsData, container);


// window.addEventListener("DOMContentLoaded", createCards);