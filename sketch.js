var bullet,speed,weight;
var wall,thickness;
var damage;


function setup() {
  createCanvas(1600,400);
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  thickness = Math.round(random(22,83));
  
  wall = createSprite(1350,200,thickness,180);
  wall.shapeColor = "black";

  bullet = createSprite(20, 200, weight, 10);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  
}

function draw() {
  background("lightblue");

  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

  if (colliderCheck(bullet,wall) === true){
    bullet.velocityX = 0;
    if (damage <=10){
      bullet.shapeColor = "green";
    }
    else{
      bullet.shapeColor = "red";
    }
  }

  drawSprites();

}