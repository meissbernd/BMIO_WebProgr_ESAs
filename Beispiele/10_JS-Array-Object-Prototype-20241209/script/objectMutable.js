(function init(){
	"use strict";

	const person = {
		firstName : "Susi",
		lastName : "Schmidt",
		hobbies : ["turnen", "tanzen", "tischlern"],
		birthYear : 2000,
		happy : true,
		age : function(...a){
			let thisYear = new Date().getFullYear();
			return thisYear - person.birthYear;
		}
	};

	for(let item in person){
		console.log(item + " : " + person[item]);
	}

	console.log(Object.getOwnPropertyDescriptor(person, "firstName"));
	
	/*writable: change the value of a property*/
	Object.defineProperty(person, "firstName", {
		writable: false
	});

	// folgendes geht jetzt nicht mehr
	// person.firstName = "Petra";
	console.log(person.firstName);

	/*configurable: change the value of the property descriptor
	Warning: this is a one way action!
	You cannot configure any property after this statement
	and you cannot delete this property*/

	// Kommentieren Sie die folgende Zeile aus und die nachfolgenden funktionieren nicht mehr
	// Object.defineProperty(person, "firstName", {configurable:false});
	Object.defineProperty(person, "firstName", {writable: true});
	delete person.firstName;
	console.log(Object.keys(person));

	/*enumerable: change the enumerability of properties such as in a for...in loop*/
	for(let item in person){
		console.log(person[item]);
	}
	
	Object.defineProperty(person, "age", {enumerable: false});
	for(let item in person){
		console.log(person[item]);
	}

	Object.defineProperty(person, "hobbies", {enumerable: false});
	for(let i=0; i<person.hobbies.length; i++){
		console.log(person.hobbies[i]);
	}
	Object.defineProperty(person.hobbies, 0, {enumerable: false});

	for(let item in person.hobbies){
		console.log(person.hobbies[item]);
	}

})();