let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
const url = "https://api.quotable.io/random";
let getQ = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
    });
};
window.addEventListener("load", getQ);
btn.addEventListener("click", getQ);