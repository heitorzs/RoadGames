let road;
let ator;
let greenCar;
let blackCar;
let yellowCar;
let soundtrack;
let collidesound;
let pointsound;

function preload(){
  road = loadImage("imagens/estrada.png")
  ator = loadImage("imagens/ator-1.png")
  greenCar = loadImage("imagens/carro-1.png")
  blackCar = loadImage("imagens/carro-2.png")
  yellowCar = loadImage("imagens/carro-3.png")
  car = [greenCar,blackCar,yellowCar,greenCar,blackCar,yellowCar];
  soundtrack = loadSound("sounds/trilha.mp3");
  collidesound = loadSound("sounds/colidiu.mp3");
  pointsound = loadSound("sounds/pontos.wav");


}