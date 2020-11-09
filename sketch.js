var wall,thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(1200,500);
  speed=random(223,321);
  weight=random(30,52);
thickness=random(22,83)
  car=createSprite(50,200,50,50);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="white";
  car.velocityX=speed;
}

function draw() {
  background(0); 
  if(wall.x-car.x<(car.width=wall.width)/2)
  {

    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509 ;
    if(deformation>180);
    {
      car.shapeColor=rgb(255,0,0);
    }
    if( deformation<180 && deformation>100)
  {car.shapeColor=rgb(230,230,0)
  
  }
  if(deformation<100)
{
 car.shapeColor=rgb(0,255,0);
}
if(hasCollided(bullet,wall))
{bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  
  if(damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }
  if(damage<10)
  {
    wall.shapeColor=color(0,255,0);
  }
}


  }
    drawSprites();
}
function hasCollided(bullet,wall)
{bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge=wallLeftEdge)
{
  return true 
}
return false;
}