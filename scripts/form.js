const p1 = document.querySelector("#password");
const p2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

p2.addEventListener("focusout", function() {
	checkSame();
	showMessage("");
});


function checkSame() {
	if (p1.value !== p2.value) {
		showMessage("Passwords do not match.  Please re-enter your passwords.");

	} else {
		noMessage();		
    }
}
function showMessage(text) {
    message.textContent = text;
}

function noMessage() {
    message.style.display = "none";    
}


const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("range");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}