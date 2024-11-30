(function init(){
    "use strict";

    const figcaption = document.querySelector("figcaption");
    const img = document.querySelector("img");
    // console.log(img);
    // console.log(img.alt);
    // console.log(img.src);

    function changeImage(){
        let url = img.src.match("sonne.png");
        // console.log(url);
        if(url){
            img.src = "pics/sonneSad.jpg";
            img.alt = "... oder Ärgernis."
            figcaption.innerHTML = "... oder Ärgernis";
        }
        else{    
            img.src = "pics/sonne.png";
            img.alt ="Wunderbare Sonne!";
            figcaption.innerHTML = "Quelle des Wohlbefindens!"
        }
    }
    // Einmaliger Funktionsaufruf
    //changeImage();

    // Funktionsaufruf auf ein event
    // addEventListener("event", Funktionsreferenz, propagation);
    img.addEventListener("click",changeImage,false);

    /* ************************************************ */
    const domNodesClass = document.getElementsByClassName("em");
    const domNodesQuery = document.querySelectorAll("em");
    const domNodesTag = document.getElementsByTagName("em");
    // console.log(domNodesClass);
    // console.log(domNodesQuery);
    // console.log(domNodesTag);

    function markIt(el){el.className = "mark";}
    const markItArrow = el => el.className = "mark";

    for(let i=0; i<domNodesClass.length; i++){
        domNodesClass[i].addEventListener("click",
                                        e => {
                                            markItArrow(e.target);
                                            console.log(e.target);
                                        }, 
                                        false
        );
    }

    /* ************************************************ */
    // Informationen vom Anwender speichern und verarbeiten
    // let user = prompt("Hallo Anwender! Wer bist Du?"); 
    // alert("Nett Dich kennenzulernen, " + user + "!");

    function changeSky(){
        let sky = prompt("Wie ist der Himmel bei Dir?");
        console.log(sky, typeof sky);
        if(sky === null){
            alert("Abbrechen ist nicht erlaubt!");
            changeSky();
        }
        else if(sky.toLowerCase() === "hell")
            img.parentElement.className = "happy";
        else if(sky.toLowerCase() === "dunkel")
            img.parentElement.className = "sad";
        else{
            alert("Ungültige Angabe! Antworte 'hell' oder 'dunkel.");
            changeSky();
        }
    }
    
    changeSky();

})();