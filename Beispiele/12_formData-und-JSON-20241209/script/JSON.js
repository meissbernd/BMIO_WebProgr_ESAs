(function init(){
    "use strict";

    // Primitive Datentypen und Ausdrücke in JSON konvertieren.
    const person = {
        firstName : "Susi",
        lastName: "Schmidt",
        happy: true,
        stars: 5 + 2
    };

    console.log(person);
    console.log(typeof person);

    // object in JSON konvertieren
    let personFlat = JSON.stringify(person);
    console.log(personFlat);
    console.log(typeof personFlat);
    // aus JSON in js konvertieren
    console.log(JSON.parse(personFlat));

    // Funktionen können nicht konvertiert werden!
    const complexPerson = {
        firstName : "Susi",
        lastName : "Schmidt",
        hobbies : ["turnen", "tanzen", "tischlern"],
        birthYear : 2000,
        age : function(){
            let thisYear = new Date().getFullYear();
            console.log (thisYear - this.birthYear);
        }
    }

    console.log(complexPerson);
    let complexPersonFlat = JSON.stringify(complexPerson);
    console.log(complexPersonFlat);
    let complexPersonFlatBackToJs = JSON.parse(complexPersonFlat);
    // Die Funktion ist "verloren gegangen"
    console.log(complexPersonFlatBackToJs);
})();
