{
    // Block für alles was mit Block Scope deklariert wird.
    // ein eigener namespace
    "use strict";

    // Browser Methoden um mit dem Anwender zu kommunizieren
    // Informationen an den Anwender geben
    // alert("Hallo Welt!");
    // Informationen vom Anwender bekommen
    // let user = prompt("Hallo, wer bist Du?");
    // Informationen für den Entwickler
    // console.log(user);

    // Function Scope, Funktion ist in diesem Fall die Datei
    var message = "Hallo Welt!";

    // Variablen müssen nicht initialisiert werden.
    let x;
    console.log(x);
    // null: kein Wert
    // undefined: kein Wert und kein Typ
    console.log(typeof x);

    const NUM = 4;
    // NUM = 2;
    // Konstanten können keine Wertänderung erfahren

    console.clear();

    let n = 0;
    let m = 1;
    let test = true;
    let sign = "1";
    let nothing = null;
    let alsoNothing = undefined;

    console.log(typeof n);
    console.log(typeof test);
    console.log(typeof sign);
    
    // Vergleiche
    if(n == m){
        console.log(n + " ist gleich " + m);
    }
    else
        console.log(`${n} ist ungleich ${m}`);

    // Zeichenketten:
    // "text"
    // 'text'
    // template literals `` 

    // implizite Konvertierung
    if(sign == m)
        console.log(`${sign} ist gleich ${m}`);

    if(test == m)
        console.log(`${test} ist gleich ${m}`);

    if(test === sign)
        console.log(`${test} ist gleich ${sign}`);
    else
        console.log(`${test} hat zwar denselben Wert wie ${sign}, aber nicht denselben Typ.`);
    
        // == Vergleich auf Wert
        // === Vergleich auf Wert und Typ

    // Datentypen können zur Laufzeit verändert werden
    n = sign;
    console.log(n);
   
}
// console.log(message);