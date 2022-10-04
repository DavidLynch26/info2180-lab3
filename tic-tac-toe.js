function loadBoard(){
    let parent = document.getElementById("board");
    let childCount = parent.childElementCount;

    for(count = 0; count <= childCount-1; count++){
        parent.children[count].classList.add("square");
        parent.children[count].addEventListener('click', clickHandler);
        parent.children[count].addEventListener('mouseover', hoverHandler);
        parent.children[count].addEventListener('mouseout', hoverHandler);
        moves.push("empty");
    }
    return parent;
}

function isEmpty(position){
    if(moves[position] == "empty"){
        return true;
        
    }else{
        return false;
    }
}

function clickHandler(event){
    index = Array.from(loadBoard().children).indexOf(event.target);
    if(isEmpty(index) == true){
        nextMove(index);
    }
}

function nextMove(position){
    if(currentMove == 2){
        loadBoard().children[position].classList.add("X");
        loadBoard().children[position].innerHTML = "X";
        moves[position] = "X";
        currentMove = 1;
    }else{
        loadBoard().children[position].classList.add("O");
        loadBoard().children[position].innerHTML = "O";
        moves[position] = "O";
        currentMove = 2;
    }
}

function hoverHandler(event){
    index = Array.from(loadBoard().children).indexOf(event.target);
    
    if(event.type == "mouseover"){
        loadBoard().children[index].classList.add("hover");
    }else if(event.type == "mouseout"){
        loadBoard().children[index].classList.remove("hover");
    }
}

var currentMove = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
var moves = [];

window.onload = loadBoard;

// let variables = loadBoard();
// let parent = vars[0];
// var moves = vars[1];
// var currentMove = vars[2];