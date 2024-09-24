const msToDays = 84600000;
const todayDate = new Date();
const today = Date.now();
let days = "";

const lastVisited = document.querySelector(".date");
const lastDateKey = "last-date-js";

let visitDate = Number(localStorage.getItem(lastDateKey)) || 0;

if  (visitDate == 0) {
    lastVisited.textContent = `Welcome!  Let us know if you have any questions.`;
}

else if ((today-visitDate) < msToDays) {
    lastVisited.textContent = `Back so soon!  Awesome!`;
}

else {
    days = (today-visitDate) / msToDays;
    wholeDays = Math.round(days);

    if (wholeDays == 1) {
        lastVisited.textContent = `You last visted one day ago.`;
    }

    else {
        lastVisited.textContent = `You last visted ${wholeDays} days ago.`;
    }
}

localStorage.setItem(lastDateKey, today);