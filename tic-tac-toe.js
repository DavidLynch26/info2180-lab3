window.onload = loadBoard;

function loadBoard(){
        let parent = document.getElementById("board");
        let childCount = parent.childElementCount;
        for(count = 0; count <= childCount-1; count++){
            parent.children[count].classList.add("square");
        }
        // parent = document.getElementById("board");
        // childCount = parent.childElementCount
        // console.log(childCount)
    // for(count = 1;count <= childCount; count++){
    //     parent.children[count].
    // }
}

// parent = document.getElementById("board");
// childCount = parent.childElementCount
// console.log(childCount)