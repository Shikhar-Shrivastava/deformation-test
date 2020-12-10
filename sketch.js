var wall, car;
var speed 
var weight

function setup() {
  createCanvas(1600,400);
  car = createSprite(400, 200, 50, 50);
  wall = createSprite(1400,200,50,200);
  wall.shapeColor= "cyan";
  speed = random(25,150)
  weight= random(200,2500)
}

function draw() {
  background(0);  
  car.velocityX= speed;
  if (wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX= 0

    var deformation = (0.5 * weight* speed *speed)/22500;
    if(deformation > 180 ){
      car.shapeColor="red"
     text("LETHAL the deformation was: "+Math.round(deformation),800,50,textSize(20),fill("red"))
    }
    if(deformation>=80 && deformation<=180){
      car.shapeColor="yellow"
     text("AVERAGE the deformation was: "+Math.round(deformation),800,50,textSize(20),fill("yellow"))
    }
    if(deformation<80){
      car.shapeColor="green"
      text("GOOD the deformation was: "+Math.round(deformation),800,50,textSize(20),fill("green"))
    }
  }

  drawSprites();
}