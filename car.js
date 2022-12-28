let xCar = [600,600,600,600,600,600]; 
let yCar = [45, 99,150, 215, 270, 320];
let speedCar = [0.5,1.4,1.8,3,2.9,2.6];


function moveCar(){
  for (let i =0; i<xCar.length; i++){
      xCar[i] -= speedCar[i] +myPoints/2;
  }
  
  
}
function reloadCars(){
  for(let i=0;i<xCar.length;i++){
    if (xCar[i]<-30){
    xCar[i] = 600;
  }
  }
}
function showCar(){
  for (let i =0; i<car.length;i++){
      image(car[i],xCar[i],yCar[i], 30,30);

  }

}
