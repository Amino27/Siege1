var space,spaceImg;
var obstaclesGroup, obstacle;

var rocket,rocketImg;

var gamestate = "Play";

function preload() {
  spaceImg = loadImage("space.png");
  obstacleImg = loadImage("obstacle.png");
  rocketImg = loadImage("rocket.png");
  
}


function setup() {
  createCanvas(600,600);
  
  space = createSprite(600,300);
  space.addImage("space",spaceImg);
  space.velocityY = 1;
  
  rocket = createSprite(200,200,5,5);
  rocket.addImage("rocket",rocketImg);
  rocket.scale = 0.3;
  
  
  obstaclesGroup = new Group();
}


function draw(){
  background(0);
  
  if(gamestate === "Play"){
    
    if(space.y > 400){
    space.y = 300;
      
  }
    
    
    
    rocket.x =World.mouseX;
    
   spawnObstacles();
    
    if(obstaclesGroup.isTouching(rocket)||rocket.y > 600){
      rocket.destroy();
      
      
    fill("red");
    stroke("white");
    textSize(50);
    text("GAME OVER",200,300);
    }
      
}
  
  
  drawSprites();
  
  
  }
 

  



function spawnObstacles(){
if(frameCount % 240 === 0){
    obstacle = createSprite(200,-50);
    obstacle.addImage(obstacleImg);
    obstacle.velocityY = 1;
    obstacle.lifetime = 800;
    obstaclesGroup.add(obstacle);
    obstacle.x = Math.round(random(120,400));
  
  
}
  
}






