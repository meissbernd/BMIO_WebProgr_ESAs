(function(){
    "use strict";

    const gameSelector = document.querySelector("#game-selector select");

    gameSelector.addEventListener(
        "change",
        function(event){
            let select = this;
            // console.log(select);
            let gameFileName = select.value;
            // console.log(gameFileName);

            let request = new XMLHttpRequest();
            request.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    let gameData = JSON.parse(this.responseText);
                    updateGamePanel(gameData);
                }
            }
            request.open("GET", "games/" + gameFileName, true);
            request.send();
        }
    );

    const updateGamePanel = function(gameData){
        let gamePanel = document.querySelector("#game-panel");
        let title = gamePanel.querySelector(".title");
        title.innerHTML = gameData.title;

        let ref = gamePanel.querySelector(".ref");
        let label = ref.querySelector(".label");
        ref.href = gameData.ref;
        label.innerHTML = gameData.ref;

        let description = gamePanel.querySelector(".description");
        description.innerHTML = gameData.description;

    }
})();