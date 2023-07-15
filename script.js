const grid = document.querySelector(".grid");
board=[[0,0,0],[0,0,0],[0,0,0]];
playerOne = "Player One";
playerTwo = "Player Two";
let activePlayer = playerOne;

for(let i=0;i<3;i++){
    let column=document.createElement("div");
    column.classList.add("column");
    for(let j=0;j<3;j++){
        let row=document.createElement("div");
        row.style.cssText="width:50px;height:50px;";
        row.style.border="thin double red"
        row.classList.add("square");
        column.appendChild(row);
        row.addEventListener('click',() =>{
            player = getActivePlayer();
            if(player===playerOne){
                row.innerHTML='X';
                board[i][j]='X';
                switchPlayer();
            }
            else{
                row.innerHTML='O';
                board[i][j]='O';
                switchPlayer();
            }
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








