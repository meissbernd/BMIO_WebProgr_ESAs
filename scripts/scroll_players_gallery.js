(function init() {
    "use strict";

    // Referenz auf relevante Elemente finden
    const article = document.getElementById("players-passport-gallery");
    const playersFig = article.querySelector('figure');
    const playersImg = playersFig.querySelector('img');
    const playersCaption = playersFig.querySelector('figcaption');

    // EventListener: Click auf Bild ruft Funktion zur Bildänderung auf
    playersImg.addEventListener("click", changeImage, false);

    // EventListener: Bei Mouseover andere css-Klasse setzen
    playersImg.addEventListener("mouseover", event => {
        playersImg.className = "players-gallery-image-hovered";
    });

    // EventListener: Bei Mouseout andere css-Klasse zurücksetzen
    playersImg.addEventListener("mouseout", event => {
        playersImg.className = "players-gallery-image";
    });

    // List der Bilder und Beschreibung
    const playersImages = [
        ['LG.jpg', 'Spielerpass-Foto: LG'],
        ['EvE.jpg', 'Spielerpass-Foto: EvE.'],
        ['JK.jpg', 'Spielerpass-Foto: JK'],
        ['TL.jpg', 'Spielerpass-Foto: TL']
    ];

    let currentIndex = 0;

    function changeImage() {
        let currentFilePath = playersImg.src;
        currentIndex = (currentIndex + 1) % playersImages.length; // Nächster Index
        playersImg.src = replaceFileName(currentFilePath, playersImages[currentIndex][0]); // Bild wechseln
        playersCaption.innerHTML = playersImages[currentIndex][1];  // Beschreibung wechseln
    }

    function replaceFileName(filePath, newFileName) {
        // Regex, um das letzte '/' und alles danach zu finden
        const fileName = /\/[^\/]*$/;
        return filePath.replace(fileName, '/' + newFileName);
    }

})();
