let snakePart = {x: 10,y:10}
let snakeBody = {snakePart}
//const Board = document.getElementById('board');

/*function graw(snakePart){
snakeBody.unshift(snakePart);
draw(Board);
}*/



export function drawSnake(Board)
{
    console.log("in drawsnake");
    const oneSnakePart = document.createElement('div')
    oneSnakePart.style.gridColumnStart = snakePart.x
    oneSnakePart.style.gridRowStart = snakePart.y
    oneSnakePart.classList.add('snakepiece')
    Board.appendChild (oneSnakePart)
    console.log("end drawsnake");

}

