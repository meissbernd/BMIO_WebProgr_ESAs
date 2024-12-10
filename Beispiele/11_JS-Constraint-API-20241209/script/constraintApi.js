(function init(){
    "use strict";

    const form = document.forms[0];
    // console.log(form.elements);
    const submit = document.querySelector("[type=submit]");
    const reset = document.querySelector("[type=reset]");

    // validity anzeigen
    /* const lastName = document.getElementById("ln");
    console.log(lastName.validity); */

    submit.addEventListener("click",
                            e => {
                                e.preventDefault();
                                deleteMessage();
                                validateForm(form);
                            },false
    
    );

    reset.addEventListener("click",
                            e => {
                                deleteMessage();
                            },
                            false
    );

    // Formularprüfung
    function validateForm(el){
        const formFields = Array.from(form.elements);
        if(el.checkValidity())
            console.log("Alles richtig.");
        else{
            console.log("Irgendwas ist falsch.");
            // einzelne Felder für spezifische Fehlermeldungen prüfen
            formFields.forEach(field => {
                if(field.checkValidity()){
                    // evtl. fieldset, submit und reset ausnehmen
                    // alert("Richtig!");
                }
                else{
                    // alert("Falsch");
                    // Welcher Fehler genau, wird in whichError() geprüft.
                    whichError(field);
                }
            });
        }
    }

    function whichError(field){
        // Ein Buchstabe in Nachname ist false, aber hier noch nicht spezifisch aufgeführt.
        let validity = field.validity;
        // console.log(validity);
        if(validity.valueMissing){
             console.log("Bitte ausfüllen!");
             showMessage(`${field.parentElement.firstElementChild.innerHTML} ausfüllen!`);
        }
        if(validity.rangeUnderflow){
            console.log("Du bist zu jung!");
            showMessage(`${field.parentElement.firstElementChild.innerHTML} Du bist zu jung!`);
        }
        if(validity.tooShort){
            console.log("Zu wenig Zeichen!");
            showMessage(`${field.parentElement.firstElementChild.innerHTML} hat zu wenig Zeichen!`);
        }
        
    }

    function showMessage(text){
        let p = document.createElement("p");
        p.appendChild(document.createTextNode(text));
        form.appendChild(p);
    }

    function deleteMessage(){
        while(form.lastElementChild.nodeName === "P"){
            form.lastElementChild.remove();
        }
    }



})();