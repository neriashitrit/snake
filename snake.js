import{getDirection}from './eventHandler.js'
import{getFood,updateFood}from './food.js'
let snakePart = {x: 11,y:11}
let snakeBody = [snakePart]


snakeBody.push({x: 12,y:11},{x: 13,y:11},{x: 14,y:11})

function grow(snakePart){
snakeBody.unshift(snakePart);
}


export function updateSnake(){
    //console.log("in updatesnake");
    move()
}

function move(){
    //console.log("in move");
    const direction = getDirection();
    snakeBody.unshift({x:snakeBody[0].x + direction.x , y:snakeBody[0].y + direction.y});
    if((snakeBody[0].x==getFood().x)&&(snakeBody[0].y==getFood().y))
    {
 //   grow(getFood())
    updateFood()
    }
    else     snakeBody.pop()

}

export function drawSnake(Board)
{
    
    for (let i = 0; i < snakeBody.length; i++){
    const oneSnakePart = document.createElement('div')
    oneSnakePart.style.gridColumnStart = snakeBody[i].x
    oneSnakePart.style.gridRowStart = snakeBody[i].y
    oneSnakePart.classList.add('snakepiece')
    Board.appendChild (oneSnakePart)
    }
}
