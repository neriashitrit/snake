import{getHead,inSnakeBody}from './snake.js'

let food =  {x:0,y:0}
const gridSize = 21;
updateFood();



export function updateFood(){//Chooses a random location for food. If it's on the snake choose an alternate location
food.x = Math.floor((Math.random()*gridSize)+1);  
food.y = Math.floor((Math.random()*gridSize)+1);
    if(badPosition(food)){
        updateFood();
    }
}


export function drawFood(Board)
{
    const foodPiece = document.createElement('div')
    foodPiece.style.gridColumnStart = food.x
    foodPiece.style.gridRowStart = food.y
    foodPiece.classList.add('food')
    Board.appendChild (foodPiece)
}

export function getFood(){
return food;
}
 function badPosition(food){ //Uses a function that checks if the snake's head has hit its body, and adds the head for the testing
     if (food==getHead()|| inSnakeBody(food))
     return true 
 }
