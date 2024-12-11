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

    // Validierung des Formulars mit Feedback an User
    function validateWithFeedback(form) {
        if (form.checkValidity()) {
            console.log("Alle Eingaben ok!");
            return true
        }
        console.log("Invalide Eingaben vorhanden!");
        // Eingaberelevante Felder holen
        const inputFields = form.querySelectorAll('input, textarea, select');
        // Jede Eingabe prüfen
        inputFields.forEach((inputField, index) => {
            if (!inputField.validity.valid) {
                console.log("invalide: " + inputField.name + " " + inputField.id);
                // inputField.setCustomValidity("CustomValidity: Bitte korrigieren Sie dieses Feld.");
                // inputField.reportValidity();
            }
        })
        return form.checkValidity();
    }
})();