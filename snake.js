import{getDirection}from './eventHandler.js'
import{getFood,updateFood}from './food.js'
import{faster}from './theGame.js'

let snakePart = {x: 11,y:11}
let snakeBody = [snakePart]
let score = 0;
let nextLevel = 3;
const scoreElement = document.querySelector(".score");

export function updateSnake(){
    
    const direction = getDirection();
    //Increases the snake in another part in the direction it is now advancing.
    snakeBody.unshift({x:snakeBody[0].x + direction.x , y:snakeBody[0].y + direction.y});
    //If the snake ate in this step, update new food, raise the score and do not lower the part we added earlier
    //If the snake didnt ate in this step, remove from the tail the part we added earlier
    if((snakeBody[0].x==getFood().x)&&(snakeBody[0].y==getFood().y)) 
    {
    updateFood()
    score += 10;
    scoreElement.innerHTML = `score:${score}`;
    }
    else     snakeBody.pop()    
    if (nextLevel<snakeBody.length) {
        nextLevel*=2;
        faster()
    }

}

export function drawSnake(Board)
{
    
    for (let i = 0; i < snakeBody.length; i++){
    const oneSnakePart = document.createElement('div')
    oneSnakePart.style.gridColumnStart = snakeBody[i].x
    oneSnakePart.style.gridRowStart = snakeBody[i].y
    if (i==0){ oneSnakePart.classList.add('snakhead')} //draw the head separately
    else {oneSnakePart.classList.add('snakepiece')}
    Board.appendChild (oneSnakePart)
    }
}

export function inSnakeBody(snakeHead){ //Checks whether a particular location is already in the snake's body
    for (let i = 1; i < snakeBody.length; i++){
        if (snakeBody[i].x==snakeHead.x&&snakeBody[i].y==snakeHead.y)
        return true;
    }
}

export function getHead(){
    return snakeBody[0];
 }

export function emptySnake(){
    snakeBody =  [snakePart];
    updateFood()
}
