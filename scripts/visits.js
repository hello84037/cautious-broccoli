const visitsCount = document.querySelector(".number");
const visitCountKey = "visit-count-ls";

let visitNumber = Number(localStorage.getItem(visitCountKey)) || 0;

if (visitNumber !== 0) {
    visitsCount.textContent = visitNumber;
}

else {
    visitsCount.textContent = `This is your first visit!  Thanks for being here!`;
}

visitNumber++

localStorage.setItem(visitCountKey, visitNumber);