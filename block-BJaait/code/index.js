

let form = document.querySelector("#form");
let draggables = document.getElementsByClassName('draggable')
let display = document.querySelector('.display');


form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let title = document.querySelector("#title").value;
    createUI(title);
});

function createUI(title){
    document.querySelector("#title").value="";
    let li = document.createElement("li");
    li.innerText = title;
    li.style.fontSize = "1.5rem";
    let p = document.createElement("p");
    p.innerText = "Drag Me";
    p.style.fontSize = "0.5rem";
    li.setAttribute("draggable","true");
    li.setAttribute("class","draggable");
    li.append(p);
    display.append(li);
    display.style.display = "flex";
    display.style.justifyContent = "space-between"; 

    [...draggables].forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
          draggable.classList.add('dragging');
        })
      
        draggable.addEventListener('dragend', () => {
          draggable.classList.remove('dragging');
        })
      })
}



  let containers = document.querySelectorAll('.container');
  containers.forEach(container => {
    container.addEventListener('dragover', e => {
      e.preventDefault();
      const afterElement = getDragAfterElement(container, e.clientY)
      const draggable = document.querySelector('.dragging');
      if (afterElement == null) {
        container.appendChild(draggable);
      } else {
        container.insertBefore(draggable, afterElement);
      }
    })
  })
  
  function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];
  
    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
  }
