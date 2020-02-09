var fixedRect,movingRect;

function setup() {
  createCanvas(1400,800);
  fixedRect=createSprite(700, 400, 50,70);
  fixedRect.shapeColor="yellow";
  movingRect=createSprite(200,200,80,30);
  movingRect.shapeColor="yellow";
  movingRect.velocityX=-10;
  movingRect.velocityY=10;
}

function draw() {
  background(0,0,0); 
 // movingRect.x=World.mouseX;
 // movingRect.y=World.mouseY;
  
if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
  && movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    )
{
  movingRect.velocityX=movingRect.velocityX*(-1);
  fixedRect.velocityX=fixedRect.velocityX*(-1);

  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
}
/*else{
  fixedRect.shapeColor="yellow";
  movingRect.shapeColor="yellow";
}
*/
if(fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2
  &&movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2)
  { 
   movingRect.velocityY=movingRect.velocityY*(-1);
   fixedRect.velocityY=fixedRect.velocityY*(-1);
  }
  drawSprites();
}