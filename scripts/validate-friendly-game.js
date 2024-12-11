(function () {
    "use strict";

    console.clear();
    console.log("Start validate-friendly-game:");

    // submit-button in form-html identifizieren
    const submitButton = document.querySelector('input[type="submit"]');

    // Actions definieren, wenn submit-button geklickt wurde
    submitButton.addEventListener("click", function (event) {
        const form = this.closest('form');  // Formular des Buttons holen
        const formDataIsValid = validateWithFeedback(form);
        if (formDataIsValid) {
            console.log("Validierung erfolgreich");
            form.submit();
        } else {
            console.log("Validierung fehlgeschlagen");
            event.preventDefault();
        }
    });

    // Funktion zur Validierung des Formulars
    function validateWithFeedback(form) {
        // const name = document.getElementById('name').value;
        // const email = document.getElementById('email').value;
        //
        // // Einfache Validierung
        // if (name === '' || email === '') {
        //     alert('Bitte füllen Sie alle Felder aus.');
        //     return false; // Rückgabe false, wenn die Validierung fehlschlägt
        // }
        return form.checkValidity();
    }
})();