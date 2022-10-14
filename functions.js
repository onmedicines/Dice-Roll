function throwDiceClick() {
    var randNum1 = Math.ceil(Math.random() * 6);
    do {
        var randNum2 = Math.ceil(Math.random() * 6);
    } while (randNum2 === randNum1);
    var classRemove1 = document.querySelector("#dice .fa1").classList[3];
    var classRemove2 = document.querySelector("#dice .fa2").classList[3];
    document.querySelector("#dice .fa1").classList.remove(classRemove1);
    document.querySelector("#dice .fa2").classList.remove(classRemove2);
    var classAdd1 = "fa-dice-";
    var classAdd2 = "fa-dice-";
    if (randNum1 === 1) {
        classAdd1 += "one"
    } else if (randNum1 === 2) {
        classAdd1 += "two";
    } else if (randNum1 === 3) {
        classAdd1 += "three";
    } else if (randNum1 === 4) {
        classAdd1 += "four";
    } else if (randNum1 === 5) {
        classAdd1 += "five";
    } else if (randNum1 === 6) {
        classAdd1 += "six";
    }

    if (randNum2 === 1) {
        classAdd2 += "one"
    } else if (randNum2 === 2) {
        classAdd2 += "two";
    } else if (randNum2 === 3) {
        classAdd2 += "three";
    } else if (randNum2 === 4) {
        classAdd2 += "four";
    } else if (randNum2 === 5) {
        classAdd2 += "five";
    } else if (randNum2 === 6) {
        classAdd2 += "six";
    }

    document.querySelector("#dice .fa1").classList.add(classAdd1);
    document.querySelector("#dice .fa2").classList.add(classAdd2);
    if (randNum1 > randNum2) {
        document.querySelector(".headingTitle").textContent = "🚩Player 1 Wins";
    } else {
        document.querySelector(".headingTitle").textContent = "Player 2 Wins🚩";

    }

    document.querySelector(".headingTitle").classList.add("titleChangeOnDiceThrow");
}

function newGameClick() {
    var classRemove1 = document.querySelector("#dice .fa1").classList[3];
    var classRemove2 = document.querySelector("#dice .fa2").classList[3];
    document.querySelector("#dice .fa1").classList.remove(classRemove1);
    document.querySelector("#dice .fa2").classList.remove(classRemove2);

    document.querySelector("#dice .fa1").classList.add("fa-dice-one");
    document.querySelector("#dice .fa2").classList.add("fa-dice-one");
    document.querySelector(".headingTitle").textContent = "Dice Roll";

    document.querySelector(".headingTitle").classList.remove("titleChangeOnDiceThrow");
}
