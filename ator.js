let xAtor = 100;
let yAtor = 366;
let collision = false;
let myPoints = 0;

function collided(){
    yAtor = 366;
}
function showPoints(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,0));
  text(myPoints, width / 5, 27);
}
function score(){
  if(yAtor<15){
    pointsound.play();
    myPoints += 1;
    collided();
  }
}


function checkColission(){
  for (let i = 0; i < car.length; i++){
    collision = collideRectCircle(xCar[i], yCar[i], 30, 30, xAtor, yAtor, 15)
    if (collision){
      collidesound.play();
      collided();
    if (checkPoints()){
      myPoints -=1;
    }
      
      
    }
  }
}
function checkPoints(){
  return myPoints > 0;
}
function showAtor(){
  image(ator,xAtor,yAtor, 30,30);
}

function moveAtor(){
  if (keyIsDown(UP_ARROW)){
      yAtor -= 3;
      }
      
  if (keyIsDown(DOWN_ARROW)){
    if (yAtor < 366){
      yAtor += 3;
    }
  }
}


