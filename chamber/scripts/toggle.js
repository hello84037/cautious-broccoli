const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const article = document.querySelector("article");

gridButton.addEventListener("click", () => {
    article.classList.remove("list");
    article.classList.add("grid");
});

listButton.addEventListener("click", () => {
    article.classList.remove("grid");
    article.classList.add("list");
});