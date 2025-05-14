let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    for (let i =0; i < 9; i++){
        let title = document.createElement("div");
        title.id = i.toString();
        title.addEventListener("click", selectTile);

        document.getElementById("board").appendChild(title);
    }

    setInterval(setMole, 900);
    setInterval(setPlant, 1000);
    
    
}

function getRandomTile(){
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }


    if(currMoleTile){
        currMoleTile.innerHTML = "";
    }


    let mole = document.createElement("img");
    mole.src = "./derpy.png"

    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id == num){
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant(){
    if (gameOver){
        return;
    }

    if (currPlantTile){
        currPlantTile.innerHTML = ""
    }

    let plant = document.createElement("img");
    plant.src = "./pinkie.png";

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num){
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}


function selectTile() {
    if (gameOver) {
        return;
    }

    if (this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();

    }
    else if (this == currPlantTile) {
        document.getElementById("score").innerText = "GAME OVER:" + score.toString();
        gameOver = true;
    }
}

