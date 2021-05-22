var tower,towerImg;
var door,doorImg,doorsGroup;

var climber,climberImg,climbersGroup;

var ghost,ghostImg;

var invisibleBlock,invisibleBlocksGroup;

var gamestate = "Play";

function preload(){
  
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  
  ghostImg = loadImage("ghost-standing.png");
  
  spookySound = loadSound("spooky.wav"); 
}



function setup(){
  createCanvas(600,600);
  
  spookySound.loop(); 
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  ghost = createSprite(200,200,50,50);
  ghost.addImage("ghost",ghostImg);
  ghost.scale = 0.3;
  
  doorsGroup = new Group(); 
  climbersGroup= new Group();
  invisibleBlocksGroup = new Group();
  
  
}


function draw(){
  background(0);
  
  if(gamestate === "Play"){
    
    if(tower.y > 400){
      tower.y = 300;
      
    } 
    if(keyDown("RIGHT_ARROW")){
      ghost.x = ghost.x +3;
      
    }
  
   if(keyDown("LEFT_ARROW")){
      ghost.x = ghost.x -3;
     
    }
    if(keyDown("space")){
      ghost.velocityY = -5;
      
    }
    
    ghost.velocityY = ghost.velocityY +0.8;
    
    spawnDoors();
    
    if (climbersGroup.isTouching(ghost)){
    ghost.velocityY = 0;
      
    }
    
    if(invisibleBlocksGroup.isTouching(ghost)||ghost.y > 600){
      ghost.destroy();
      gamestate = "End";
    }
    
    drawSprites();
    
  }
  else if(gamestate === "End"){
    
    fill("red");
    stroke("white");
    textSize(50);
    text("GAME OVER",200,300);
    
    
  }
  
  
  
}

function spawnDoors(){
   
  if(frameCount % 240 === 0){
    door = createSprite(200,-50);
    door.addImage(doorImg);
    door.velocityY = 1;
    door.lifetime = 800;
    doorsGroup.add(door);
    door.x = Math.round(random(120,400));
    
    climber = createSprite(200,10);
    climber.addImage(climberImg);
    climber.velocityY = 1;
    climber.lifetime = 800;
    climbersGroup.add(climber);
    climber.x = door.x;
    
    invisibleBlock = createSprite(200,10);
    invisibleBlock.velocityY = 1;
    invisibleBlock.lifetime = 800;
    invisibleBlocksGroup.add(invisibleBlock);
    invisibleBlock.x = door.x;
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    invisibleBlock.debug = true;
    
    ghost.depth = door.depth;
    ghost.depth += 1;
  }
  
  
}