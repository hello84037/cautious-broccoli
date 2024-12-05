let addClicked = false;
let removeClicked = false;

addButton.addEventListener(
    "click",
    function () {
        // The Add button was clicked.
        addRemovePopup.classList.add("show");
    }
);

removeButton.addEventListener(
    "click",
    function () {
        // The Remove button was clicked.
        addRemovePopup.classList.add("show");
    }
);

barcodeLookup.addEventListener(
    "click",
    function () {
        // barcode lookup was clicked
        addRemovePopup.classList.remove("show");
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
        if (event.target == lookupPopup) {
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