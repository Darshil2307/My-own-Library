var movingRect, fixedRect;

var sq1, sq2;


function setup() {
  createCanvas(800,400);
 movingRect=createSprite(165,150,80,80);
 fixedRect=createSprite(100,150,50,20);

 movingRect.shapeColor="red";
 fixedRect.shapeColor= "green";

 movingRect.debug = true;
 fixedRect.debug = true;
 sq2=createSprite(300,150,50,20);

}

function draw() {
  background(0);  
movingRect.x = mouseX;
movingRect.y = mouseY;

//console.log 

if (isTouching(movingRect, sq2))
{
  text("You Rock!!", 200, 200);
  background("lime");
}
else
{
  movingRect.shapeColor="red";
  sq2.shapeColor= "green";
}

  drawSprites();
}

