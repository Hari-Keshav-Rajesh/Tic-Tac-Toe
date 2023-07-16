const grid = document.querySelector(".grid");
board=[[0,0,0],[0,0,0],[0,0,0]];
playerOne = "Player One";
playerTwo = "Player Two";
let activePlayer = playerOne;


for(let i=0;i<3;i++){
    let column=document.createElement("div");
    column.classList.add("column");
    for(let j=0;j<3;j++){
        let row=document.createElement("button");
        row.style.cssText="width:50px;height:50px;";
        row.style.border="thin double white"
        row.classList.add("square");
        column.appendChild(row);
        row.style.width = "50vh";
        row.style.height = "20vh";
        row.style.fontSize = "10vh";
        row.style.backgroundColor = "black";
        row.addEventListener('click',() =>{
            player = getActivePlayer();
            if(player===playerOne){
                row.innerHTML='X';
                board[i][j]='X';
                switchPlayer();
                result();
                row.style.color = "blue";
            }
            else{
                row.innerHTML='O';
                board[i][j]='O';
                switchPlayer();
                result();
                row.style.color = "red";
            }
        row.disabled = true;
        })
    }
    column.style.display="flex";
    column.style.justifyContent="center";
    column.style.alignItems="center";
    grid.appendChild(column);
}

function switchPlayer(){
    activePlayer = (activePlayer === playerOne)? playerTwo:playerOne;
}

function getActivePlayer(){
    return activePlayer;
}


function result(){
    if(
        (board[0][0]==='X'&&board[0][1]==='X'&&board[0][2]==='X')||
        (board[1][0]==='X'&&board[1][1]==='X'&&board[1][2]==='X')||
        (board[2][0]==='X'&&board[2][1]==='X'&&board[2][2]==='X')||
        (board[0][0]==='X'&&board[1][0]==='X'&&board[2][0]==='X')||
        (board[0][1]==='X'&&board[1][1]==='X'&&board[2][1]==='X')||
        (board[0][2]==='X'&&board[1][2]==='X'&&board[2][2]==='X')||
        (board[0][0]==='X'&&board[1][1]==='X'&&board[2][2]==='X')||
        (board[0][2]==='X'&&board[1][1]==='X'&&board[2][0]==='X')===true
    ){
        alert("Player X wins");
        location.reload();
    }

    else if(
        (board[0][0]==='O'&&board[0][1]==='O'&&board[0][2]==='O')||
        (board[1][0]==='O'&&board[1][1]==='O'&&board[1][2]==='O')||
        (board[2][0]==='O'&&board[2][1]==='O'&&board[2][2]==='O')||
        (board[0][0]==='O'&&board[1][0]==='O'&&board[2][0]==='O')||
        (board[0][1]==='O'&&board[1][1]==='O'&&board[2][1]==='O')||
        (board[0][2]==='O'&&board[1][2]==='O'&&board[2][2]==='O')||
        (board[0][0]==='O'&&board[1][1]==='O'&&board[2][2]==='O')||
        (board[0][2]==='O'&&board[1][1]==='O'&&board[2][0]==='O')===true
    ){
        alert("Player Y wins")
        location.reload();
    }
    
    else{
        let tie=true;
        for(i=0;i<3;i++){
            for(j=0;j<3;j++){
                if((board[i][j]===0)===true){
                    tie=false;
                    break;
                }
            }
        }
        if(tie===true){
            alert("The game is a tie");
            location.reload();
        }
    }
}

const restart = document.querySelector(".restart");

restart.addEventListener('click',() =>{
    location.reload();
});

