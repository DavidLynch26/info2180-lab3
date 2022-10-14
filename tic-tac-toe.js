function loadBoard(){
    let parent = document.getElementById("board");
    let childAmount = parent.childElementCount;

    let buttons = document.getElementsByClassName("controls");
    let newGame = buttons[0].addEventListener('click', newGameHandler);

    for(childCount = 0; childCount <= childAmount-1; childCount++){
        parent.children[childCount].classList.add("square");
        parent.children[childCount].addEventListener('click', clickHandler);
        parent.children[childCount].addEventListener('mouseover', hoverHandler);
        parent.children[childCount].addEventListener('mouseout', hoverHandler);
    }
    return parent;
}

function isEmpty(position){
    if(playerMoves[0][position] == "0" && playerMoves[1][position] == "0"){
        return true;
    }else{
        return false;
    }
}

function clickHandler(event){
    if(!win){
        index = Array.from(loadBoard().children).indexOf(event.target);
        if(isEmpty(index)){
            nextMove(index);
            moveAmount++;
            if(moveAmount >= 5){
                winChecker();
            }
        }
    }
}

function nextMove(position){
    if(currentMove == 2){
        loadBoard().children[position].classList.add("X");
        loadBoard().children[position].innerHTML = "X";
        playerMoves[1] = playerMoves[1].substring(0, position) + "1" + playerMoves[1].substring(position + 1);
        currentMove = 1;
    }else{
        loadBoard().children[position].classList.add("O");
        loadBoard().children[position].innerHTML = "O";
        playerMoves[0] = playerMoves[0].substring(0, position) + "1" + playerMoves[0].substring(position + 1);
        currentMove = 2;
    }
}

function isHover(event){
    if(event.type == "mouseover"){
        return true
    }else if(event.type == "mouseout"){
        return false
    }
}

function hoverHandler(event){
    index = Array.from(loadBoard().children).indexOf(event.target);
    if(isHover(event)){
        loadBoard().children[index].classList.add("hover");
    }else{
        loadBoard().children[index].classList.remove("hover");
    }
}

function winChecker(){
    for(comboCount = 0; comboCount <= winCombos.length-1; comboCount++){
        if(playerMoves[0] == winCombos[comboCount]){
            document.getElementById("status").classList.add("you-won");
            document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
            win = true;
        }else if(playerMoves[1] == winCombos[comboCount]){
            document.getElementById("status").classList.add("you-won");
            document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
            win = true;
        }
    }
}

function newGameHandler(event){
    if(moveAmount != 0){
        if(event){
            playerMoves = ["000000000", "000000000"];
            moveAmount = 0;
            win = false;
            document.getElementById("status").classList.remove("you-won");
            document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O.";

            for(let count = 0; count <= loadBoard().children.length-1; count++){
                console.log(count)
                loadBoard().children[count].classList.remove("O");
                loadBoard().children[count].innerHTML = "";
                loadBoard().children[count].classList.remove("X");
            }
            // location.reload();
        }
    }
}

var currentMove = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
var playerMoves = ["000000000", "000000000"];
var moveAmount = 0;

const winCombos = [
    "111000000",
    "000111000",
    "000000111",
    "100100100",
    "010010010",
    "001001001",
    "100010001",
    "001010100"
    ]

var win = false;

window.onload = loadBoard;