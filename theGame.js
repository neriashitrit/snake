import{drawSnake,updateSnake}from './snake.js'
import{drawFood,updateFood}from './food.js'

const Board = document.getElementById('board');
//const gridSize = Board.

let howManyLives = 3
let secondsPassed;
let oldTimeStamp = 0;


function init (timeStamp)
{
    if (howManyLives==0)
      {
        if (confirm('Game over. Press ok to restart.')) {
          window.location = '/'
        }
        return
      } 

   window.requestAnimationFrame(init);
   secondsPassed = (timeStamp - oldTimeStamp) / 1000;
   
    if (secondsPassed<1)return;
    oldTimeStamp = timeStamp;
   
    update()
    draw(Board)
    
    

}

window.requestAnimationFrame(init);

function update(){
    //console.log("in update");
    updateSnake()
    //updateFood()
    /*if(outsideGrid() || snakeIntersection())
    {
        howManyLives-=1
        emptySnake()
    }*/
}

function draw(Board)
{
//console.log("in draw");
Board.innerHTML = ''
drawSnake(Board)
drawFood(Board)



}
