let direction = {x: 0,y:0}
let Lastdirection = {x: 0,y:0}
window.addEventListener('keydown', logKey);


function logKey(e) {
  if((e.code == 'ArrowUp')&&(Lastdirection.y==0))    {direction = { x: 0, y: -1}}; //If the user presses up or down and the currently movement is currently horizontal
  if((e.code == 'ArrowDown')&&(Lastdirection.y==0))  {direction = { x: 0, y: 1 }};
  if((e.code == 'ArrowRight')&&(Lastdirection.x==0)) {direction = { x: 1, y: 0 }};//If the user presses up or down and the currently movement is currently vertical
  if((e.code == 'ArrowLeft') &&(Lastdirection.x==0)) {direction = { x: -1, y: 0}};
}

export function getDirection(){
    Lastdirection = direction;  //If we do not do this the user will be able to change to the allowed direction and then to the forbidden direction before the snake samples the current direction
    return  direction;
}

export function initDirection(){//for firset move
    direction = { x: 0, y: 0}
}
