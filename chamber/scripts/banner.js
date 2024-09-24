const today = new Date().getDay();

if (today >= 1 && today <= 3) {
    document.querySelector(".banner").style.display = "block";
} else {
    document.querySelector(".banner").style.display = "none";
}

document.querySelector(".banner-close").addEventListener("click", function() {
    this.closest(".banner").style.display = "none";
});