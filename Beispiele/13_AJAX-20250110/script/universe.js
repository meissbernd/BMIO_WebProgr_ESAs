(function init(){
    "use strict";
    const universePanel = document.getElementById("universe");
    const universe = document.querySelectorAll("#universe p");
    console.log(universe);
    for(let i=0; i<universe.length; i++){
        universe[i].addEventListener("click",
            function(e){
                let p = this;
                console.log(this);
                let pData = p.id;
                /* 1. */
                let request = new XMLHttpRequest();
                console.log(request);
                /* 2. */
                request.onreadystatechange = function(){
                    if(this.readyState == 4 && this.status == 200){
                        let universeData = JSON.parse(this.responseText);
                        console.log(universeData);
                        updateUniverse(universeData,p);
                    }
                };
            /* 3. */
            request.open("GET", "universe/" + pData + ".json", true);
            /* 4. */
            request.send();
            }
        );
    
    }
    
    /* 2. */
    const updateUniverse = function(universeData,universeP){
        // alert("inside updateUniverse");
        console.log(universeP);
        let text = document.createElement("p");
        text.appendChild(document.createTextNode(universeData.description));
        universeP.appendChild(text);

        // Built in Konstruktor 
        let pic = new Image(100);
        pic.src = "universe/pics/" + universeData.pic;
        universeP.appendChild(pic);
    }
})();