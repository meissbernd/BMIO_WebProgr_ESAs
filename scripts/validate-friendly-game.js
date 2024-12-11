(function () {
    "use strict";

    console.clear();
    console.log("Start validate-friendly-game:");

    // submit-button in form-html identifizieren
    const submitButton = document.querySelector('input[type="submit"]');

    // Actions definieren, wenn submit-button geklickt wurde
    submitButton.addEventListener("click", function (event) {
        const form = this.closest('form');  // Formular des Buttons holen
        deleteOldMessages(form);
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
        let isValid = true;

        // Eingaberelevante Felder holen
        const inputFields = form.querySelectorAll('input[type="text"],' +
            'input[type="tel"], input[type="email"],' +
            'input[type="radio"], textarea, select');

        // Jedes Eingabefeld prüfen
        inputFields.forEach((inputField, index) => {
            if (!inputField.validity.valid) {
                isValid = false;
                const ErrorMessage = whichError(inputField);
                showMessage(ErrorMessage, inputField);
            }
        })

        // Separate Überprüfung der Checkboxen
        const checkboxes = form.querySelectorAll('input[type="checkbox"]');
        const isAnyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
        if (!isAnyChecked) {
            isValid = false;
            showMessage("Bitte wählen Sie mindestens eine Spielform.", checkboxes[0]);
        }

        return isValid;
    }

    // Konkreten Eingabefehler identifizieren
    function whichError(field) {
        let validityState = field.validity;
        let errorMessages = [];
        if (validityState.valueMissing) {
            errorMessages.push("Eingabe erforderlich.");
        }
        if (validityState.typeMismatch) {
            errorMessages.push("Entspricht nicht dem erwarteten Eingabetyp.");
        }
        if (validityState.patternMismatch) {
            errorMessages.push("Entspricht nicht dem erwarteten Eingabemuster.");
        }
        if (validityState.tooLong) {
            errorMessages.push("Zu lang.");
        }
        // Rückgabe der Fehlermeldungen als ein String
        return errorMessages.length > 0 ? errorMessages.join(" ") : "Unbekannter Fehler.";
    }

    // Fehlermeldungen anzeigen
    function showMessage(message, inputField) {
        const errorElement = document.createElement('span');
        errorElement.className = 'form-error-message'; // Klasse für Styling setzen
        errorElement.textContent = message; // Fehlermeldung setzen

        // Errorausgabe-Element hinter Eingabefeld einfügen
        if (inputField.type === 'checkbox') {
            const fieldset = inputField.closest('fieldset');
            fieldset.appendChild(errorElement);
        } else {
            inputField.parentNode.insertBefore(errorElement, inputField.nextSibling); // nach Eingabefeld einfügen
        }
    }

    // Alte Fehlermeldungen entfernen
    function deleteOldMessages(form) {
        const errorElements = form.querySelectorAll('.form-error-message');
        errorElements.forEach(errorElement => {
            errorElement.remove();
        })
    }

})();