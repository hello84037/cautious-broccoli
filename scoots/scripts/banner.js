document.querySelector(".banner").style.display = "block";


document.querySelector(".banner-close").addEventListener("click", function() {
    this.closest(".banner").style.display = "none";
});