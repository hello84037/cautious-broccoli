const hamburger = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamburger.classList.toggle("open");
});

function darkMode() {
    const darkMode = document.querySelector("#content");
    darkMode.classList.toggle("dark-mode");};