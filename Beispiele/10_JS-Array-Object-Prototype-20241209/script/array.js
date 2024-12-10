(function init(){
    "use strict";
    
    //dense Array
    let listOfNames = ["Hans", "Peter", "Susanne"];
    console.log(listOfNames, typeof listOfNames);
  
    // sparse Array
    let listOfStuff = [1,2,3,, true, "Hallo Welt", false, null];
    console.log(listOfStuff);
    listOfStuff[8] = 100;
    console.log(listOfStuff);
  
    // Iteration
    let stuffFor = "";
    for(let i=0; i<listOfStuff.length; i++){
      // console.log(listOfStuff[i]);
      stuffFor += listOfStuff[i] + " "; 
    }
    console.log(stuffFor);
  
    let stuffForIn = "";
    for(let i in listOfStuff){
      // console.log(listOfStuff[i]);
      stuffForIn += listOfStuff[i] + " ";
    }
    console.log(stuffForIn);
  
    let stuffForEach = "";
    listOfStuff.forEach(i => {
      // console.log(i);
      stuffForEach += i + " ";
    });
    console.log(stuffForEach);
  
    // Collections
    let allP = document.getElementsByTagName("p");
    console.log(allP);
    let allPArray = Array.from(allP);
    console.log(allPArray);
  
    // Konstruktor (unüblich in clientseitiger Programmierung)
    let arrKonstr = new Array();
    console.log(arrKonstr);
    for(let i=0; i<10; i++){
      arrKonstr[i] = ("a" + i);
    }
    console.log(arrKonstr);
  
    // Array Methoden
      // Methoden lassen das Array entweder unverändert 
      // oder ändern das urspüngliche Array
  
      /* join:
      konvertiert die Elemente des Arrays in Strings
      */
      console.log(listOfStuff);
      let listAsString = "";
      listAsString = listOfStuff.join();
      console.log(listAsString, typeof listAsString);
      // das Komma ist der default Seperator 
      
      let letters = ["H","a","l","l","o"];
      listAsString = letters.join("");
      console.log(listAsString);
      
      /* split()
      ist die Umkehrung von join() 
      */
     let alleNames = "Max, Klaus, Susi";
     let eachName = alleNames.split(",");
     console.log(eachName);
  
      //reverse()
      /* sort()
      verändert das ursprüngliche Array
      wenn kein Argument übergeben wird, dann ist die Sortierung alphabetisch
      */
      console.log(listOfStuff.sort());
      // für das numerische Sortieren muß eine Vergleichsfunktion übergeben werden.
      listOfStuff.sort(function(a,b){return a-b;});
      console.log(listOfStuff);
  
      let listOfNumbers = [27,2,-4,5,100,1,2,3];
      listOfNumbers.sort(function(a,b){
          // lassen Sie sich hier in einer for() jeden Vergleich ausgeben
          return a-b;});
  
      console.log(listOfNumbers);
      listOfNumbers.sort((a,b) => a-b);
      console.log(listOfNumbers);
      listOfNumbers.sort((a,b) => b-a);
      console.log(listOfNumbers);
  
      /*concat()
      Erzeugt ein neues array und gibt dieses zurück.
      Das ursprüngliche array wird nicht verändert.
      */
              
      console.log(listOfNumbers);
      let newList=listOfNumbers.concat(4,5); 
      console.log(newList);
      console.log(listOfNumbers);
      newList=listOfNumbers.concat(newList,['aha'],[true,false,[0]],5678);
      console.log(newList);
  
      console.clear();
      /*slice()
      Die Methode gibt einen beliebigen Teilbereich aus einem array zurück.
      Mit zwei Argumenten werden Anfang und Ende des Teilbereiches spezifiziert. 
      Dabei wird der Wert des ersten Argumentes mit ausgegeben, aber nicht der des zweiten.
      Das ursprüngliche array wird nicht verändert.
      */
          
      console.log(listOfNumbers);
      let partNumbers = listOfNumbers.slice(1,3);
      console.log(partNumbers);
  
      /*Wird nur ein Argument übergeben, dann spezifiziert dieses den Anfang des Teilbereiches 
      und das Ende wird durch das Ende des array spezifiziert.*/
      
      console.log(listOfNumbers.slice(3));
  
      /*Negative Argumente beginnen mit dem Teilbereich am Ende des arrays, 
      zählen aber nach rechts.*/
  
      console.log(listOfNumbers.slice(-3));
      
      console.clear();
  
      /*splice()
      Mit dieser Methode können Elemente sowohl eingefügt als auch entfernt werden. 
      Dabei wird das ursprüngliche array verändert.
      Das erste Argument spezifiziert die Position des Einfügens oder Entfernens.
      Das zweite Argument spezifiziert die Anzahl der Elemente, 
      die entfernt werden sollen.
      Wird das zweite Argument nicht übergeben, wird das Ende des Arrays angenommen.
      Ab dem 3. Argument kann hinzugefügt werden.
      Die Methode gibt ein array zurück, welches die entfernten Elemente enthält.*/
              
      /*entfernen und hinzufügen*/
      console.log(listOfNumbers);
      let spliceNumber = listOfNumbers.splice(1,0,5,true);
      console.log(spliceNumber);
      console.log(listOfNumbers);
  
      console.clear();
      /*push() fügt am Ende des arrays ein 
      und pop() entfernt am Ende des arrays*/
      console.log(listOfNumbers);
  
      listOfNumbers.push("neues Element");
      console.log(listOfNumbers);
      listOfNumbers.pop();
      console.log(listOfNumbers);
  
      /*push() fügt am Ende des arrays ein 
      und pop() entfernt am Ende des arrays*/
      console.log(listOfNumbers);
  
      listOfNumbers.push("neues Element");
      console.log(listOfNumbers);
      listOfNumbers.pop();
      console.log(listOfNumbers);
          
      /*shift() entfernt am Anfang des array 
      und unshift() fügt am Anfang des arrays ein
      Das ursprungsarray wird verändert.*/
  
      listOfNumbers.shift();
      console.log(listOfNumbers);
      listOfNumbers.unshift(1);
      console.log(listOfNumbers);
  
      console.clear();
  
      /* indexOf() bzw. lastIndexOf()
      gibt den index eines gesuchten Wertes zurück
      Wird ein Wert nicht gefunden, liefert sie -1 zurück
      */
      // console.log(listOfStuff);
      listOfStuff.push(true);
      console.log(listOfStuff);
      console.log(listOfStuff.indexOf(true));
      console.log(listOfStuff.lastIndexOf(true));
      console.log(listOfStuff.indexOf("Z"));
      // erst ab index=4 suchen:
      console.log(listOfStuff.indexOf(true,4));
  
      // Übung: finde alle true und entferne sie
      function findTrue(arr){
          let i=0;
          while(i !== -1){
              i = arr.indexOf(true);
              console.log(i);
              arr.splice(i,1);
          }
      }
  
      findTrue(listOfStuff);
      console.log(listOfStuff);
  
      // Alternativ mit filter(), schauen Sie auf die Unterschiede!
      // Array.filter()
      function removeTrue(arr, value){
          return arr.filter(function (newList){
              return newList != value;
          });
      }
    
      let newListOfStuff = removeTrue(listOfStuff, true);
      console.log(newListOfStuff);
  
      // Gute Beispiele für map(), filter() finden sich hier:
      // https://www.mediaevent.de/javascript/array-map.html
  
  
  
  
  
  })();