document.addEventListener("DOMContentLoaded", () => {
    alert("The content of the DOM is loaded");
  });

function randomIndex () {
   return Math.floor(Math.random() * quotes.length) +1;  
} 
 


function populate() {
    while(true) {
      let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
      const random = randomIndex();
      if (windowRelativeBottom > document.documentElement.clientHeight + 100) break;
      document.body.insertAdjacentHTML("beforeend", `<div class = "quotes-container" ><h2 class = "quote"> 🧿 ${quotes[random].quoteText}</h2> <p class = "author">✍️ ${(quotes[random].quoteAuthor) === "" ? "Anonymous" : (quotes[random].quoteAuthor)}</p></div>`);
    }
  }

  window.addEventListener('scroll', populate);

  populate();