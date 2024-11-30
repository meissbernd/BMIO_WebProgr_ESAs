(function init() {
    "use strict";

    console.clear()
    console.log("Start Scrolling Script:");

    // Referenz auf relevante Elemente finden
    const article = document.getElementById("players-pass-gallery");
    const players_fig = article.querySelector('figure');
    const players_img = players_fig.querySelector('img');
    const players_caption = players_fig.querySelector('figcaption');
    console.log("   Spielerbild", players_img);
    console.log("   Spielerbildbeschreibung", players_caption);

    // EventListener hinzufügen
    players_img.addEventListener("click", changeImage, false);


    function changeImage() {
        let url = players_img.src;
        console.log(url);
        players_caption.innerHTML = "Hallo";

        // if(url){
        //     img.src = "pics/sonneSad.jpg";
        //     img.alt = "... oder Ärgernis."
        //     figcaption.innerHTML = "... oder Ärgernis";
        // }
        // else{
        //     img.src = "pics/sonne.png";
        //     img.alt ="Wunderbare Sonne!";
        //     figcaption.innerHTML = "Quelle des Wohlbefindens!"
        // }
    }


})();
