const hamburger = document.querySelector(".menu");
const navigation = document.querySelector(".navigation");
let showMenu = false;

function toggleMenu() {
    navigation.classList.toggle("open");
    if(!showMenu){
        hamburger.classList.add("close");
        showMenu = true;
    } else {
        hamburger.classList.remove("close");
        showMenu = false;
    }
}

hamburger.addEventListener("click", () => {
    toggleMenu();
});