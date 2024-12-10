(function init(){
    "use strict";
    
    let arrayNoProps = [];
    let objectNoProps = {};
    console.log(arrayNoProps, typeof arrayNoProps);
    console.log(objectNoProps, typeof objectNoProps);

    let anyObject = {
        firstName : "me",
        lastName : "object",
        human : false
    };

    // for ... in für object
    for(let item in anyObject){
        console.log(`${item} : ${anyObject[item]}`);
    }

    console.log(anyObject.human); 
    
    // nicht existente properties
    console.log(anyObject.living);

    // object ist mutable
    anyObject.living = true;
    console.log(anyObject);

    // Deklaration über einen eigenen Konstruktor
    // Konstruktoren sind Funktionen
    function Plant(leaves, color, species){
        this.leaves = leaves;
        this.color = color;
        this.species = species;
        // return ist möglich
    }

    // Referenz möglich, Aufruf nicht
    console.log(Plant);

    // object deklarieren über den selbst definierten Konstruktor
    let tree = new Plant(100000000, "green", "tree");
    let flower = new Plant(8, "red", "flower");

    console.log(tree.leaves);
    console.log(typeof flower, flower.constructor);

    console.clear();

    // Eingebaute Konstruktoren
    const sonne = document.querySelector("img");
    console.log(sonne, typeof sonne);

    let sonneFromConst = new Image();
    console.log(sonneFromConst);
    sonneFromConst.src = "pics/sonne.png";
    console.log(sonneFromConst);

    console.log(sonne.width, sonne.height, sonne.alt, sonne.className);
    console.log(sonneFromConst.width, sonneFromConst.height, sonneFromConst.alt, sonneFromConst.className);




})();