let addClicked = false;
let removeClicked = false;

addButton.addEventListener(
    "click",
    function () {
        addRemovePopup.classList.add("show");
        // The Add button was clicked.
    }
);

removeButton.addEventListener(
    "click",
    function () {
        addRemovePopup.classList.add("show");
        // The Remove button was clicked.
    }
);

barcodeLookup.addEventListener(
    "click",
    function () {
        addRemovePopup.classList.remove("show");
        // barcode lookup was clicked
    }
);

// manual lookup was clicked
manualLookup.addEventListener(
    "click",
    function () {
        addRemovePopup.classList.remove("show");
        lookupPopup.classList.add("show");
    }
);

window.addEventListener(
    "click",
    function (event) {
        if (event.target == myPopup) {
            addRemovePopup.classList.remove(
                "show"
            );
        }
    }
);

cancelButton.addEventListener(
    "click",
    function () {
        lookupPopup.classList.remove("show");
        return false;
    }
)