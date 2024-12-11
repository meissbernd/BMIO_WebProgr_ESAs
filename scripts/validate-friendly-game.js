(function () {
    "use strict";

    console.clear();
    console.log("Start validate-friendly-game:");

    // Todo: button innerhalb des Formulars raussuchen!!
    const submitButton = document.getElementById("submit");
    const myForm = document.getElementById('contactForm');

    submitButton.addEventListener("click", (event) => {
        console.log("Submit clicked");
        const formDataIsValid = true;
        if (formDataIsValid) {
            console.log("Validierung erfolgreich");
            console.log(myForm.checkValidity());
            if (myForm.checkValidity()) {
                myForm.submit();
            }
        } else {
            console.log("Validierung fehlgeschlagen");
            event.preventDefault();
        }
    });
})();