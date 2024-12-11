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
                const ErrorMessage = whichError(inputField);
                showMessage(ErrorMessage, inputField);

                // Alternativer Ansatz?
                // inputField.setCustomValidity("CustomValidity: Bitte korrigieren Sie dieses Feld.");
                // inputField.reportValidity();
            }
        })
        return form.checkValidity();
    }

    // Konkreten Eingabefehler identifizieren
    function whichError(field) {
        let validityState = field.validity;
        let errorMessages = [];

        if (validityState.valueMissing) {
            errorMessages.push("Dieses Feld ist erforderlich.");
        }
        if (validityState.typeMismatch) {
            errorMessages.push("Ungültiger Typ.");
        }
        if (validityState.patternMismatch) {
            errorMessages.push("Muster stimmt nicht überein.");
        }
        if (validityState.tooLong) {
            errorMessages.push("Zu lang.");
        }
        if (validityState.tooShort) {
            errorMessages.push("Zu kurz.");
        }
        if (validityState.rangeUnderflow) {
            errorMessages.push("Wert zu niedrig.");
        }
        if (validityState.rangeOverflow) {
            errorMessages.push("Wert zu hoch.");
        }
        if (validityState.stepMismatch) {
            errorMessages.push("Schrittwert stimmt nicht überein.");
        }

        // Rückgabe der Fehlermeldungen als zusammenhängender String
        return errorMessages.length > 0 ? errorMessages.join(" ") : "Unbekannter Fehler.";
    }

    function showMessage(message, inputField) {
        const errorElement = document.createElement('span');
        errorElement.className = 'form-error-message'; // Klasse für Styling setzen
        errorElement.textContent = message; // Fehlermeldung setzen
        inputField.parentNode.insertBefore(errorElement, inputField.nextSibling); // nach Eingabefeld einfügen
    }

})();