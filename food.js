const food =  {x:0,y:0}
const gridSize = 21;
updateFood();



export function updateFood(){
    console.log("in updateFood");
    console.log(food.x ,food.y);
food.x = Math.floor((Math.random()*gridSize)+1);  
food.y = Math.floor((Math.random()*gridSize)+1);
console.log(food.x ,food.y);
}


export function drawFood(Board)
{
    console.log("in drawfood");
    const foodPiece = document.createElement('div')
    foodPiece.style.gridColumnStart = food.x
    foodPiece.style.gridRowStart = food.y
    foodPiece.classList.add('food')
    Board.appendChild (foodPiece)
}

export function getFood(){
return food;
}
