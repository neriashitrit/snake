const direction = {x: 0,y:0}
window.addEventListener('keydown', logKey);

function logKey(e) {
  if((e.code == 'ArrowUp')&&(direction.y==0)){direction.x = 0; direction.y = -1;}
  if((e.code == 'ArrowDown')&&(direction.y==0)){ direction.x = 0; direction.y = 1;}
  if((e.code == 'ArrowRight')&&(direction.x==0)){ direction.x = 1; direction.y = 0;}
  if((e.code == 'ArrowLeft') &&(direction.x==0)){ direction.x = -1; direction.y = 0;}
  }

export function getDirection(){
return  direction;
}
