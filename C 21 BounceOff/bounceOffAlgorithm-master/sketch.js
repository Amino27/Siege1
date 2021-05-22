var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  gameObject1 = createSprite(100,100,50,50); 
  gameObject1.shapeColor = "green"; 
  gameObject2 = createSprite(200,100,50,50); 
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300,100,50,50); 
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "green";

  gameObject1.velocityX = 5;
  gameObject4.velocityX = -5;

}

function draw() {
  background(0,0,0);  

  bounceOff(gameObject1,gameObject4);

  if (isTouching(movingRect, gameObject3)){ 
    movingRect.shapeColor = "blue"; 
    gameObject3.shapeColor = "blue"; 
  
  } 

  else { 
    
    movingRect.shapeColor = "green"; 
    gameObject3.shapeColor = "green"; 
  
  }

  drawSprites();
}

