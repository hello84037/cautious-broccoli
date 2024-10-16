let addClicked = false;
let removeClicked = false;

addButton.addEventListener(
    "click",
    function () {
        myPopup.classList.add("show");
        // The Add button was clicked.
    }
);

removeButton.addEventListener(
    "click",
    function () {
        myPopup.classList.add("show");
        // The Remove button was clicked.
    }
);

barcodeLookup.addEventListener(
    "click",
    function () {
        myPopup.classList.remove("show");
        // barcode lookup was clicked
    }
);

manualLookup.addEventListener(
    "click",
    function () {
        myPopup.classList.remove("show");
        // manual lookup was clicked
    }
);

window.addEventListener(
    "click",
    function (event) {
        if (event.target == myPopup) {
            myPopup.classList.remove(
                "show"
            );
        }
    }
);