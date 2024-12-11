(function () {
    "use strict";

    console.clear();
    console.log("Start validate-friendly-game:");

    const contactForm = document.getElementById('contactForm');
    const submitButton = contactForm.querySelector('input[type="submit"]');
    submitButton.addEventListener("click", (event) => {
        console.log("Submit clicked");
        const formDataIsValid = validateForm();
        if (formDataIsValid) {
            console.log("Validierung erfolgreich");
            console.log(contactForm.checkValidity());
            if (contactForm.checkValidity()) {
                contactForm.submit();
            }
        } else {
            console.log("Validierung fehlgeschlagen");
            event.preventDefault();
        }
    });

    // Funktion zur Validierung des Formulars
    function validateForm() {
        // const name = document.getElementById('name').value;
        // const email = document.getElementById('email').value;
        //
        // // Einfache Validierung
        // if (name === '' || email === '') {
        //     alert('Bitte füllen Sie alle Felder aus.');
        //     return false; // Rückgabe false, wenn die Validierung fehlschlägt
        // }
        return contactForm.checkValidity();
    }
})();