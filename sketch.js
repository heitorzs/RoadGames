function setup() {
  createCanvas(600, 400);
  soundtrack.loop();
}

function draw() {
  background(road);
  showAtor();
  showCar();
  moveCar();
  moveAtor();
  reloadCars();
  checkColission();
  showPoints();
  score();
}

