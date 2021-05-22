var fr ,mr;


function setup() {
  createCanvas(800,400);

 mr = createSprite(400, 200, 80, 30);
 mr.shapeColor = "green";


 fr = createSprite(200, 200, 50, 80);
 fr.shapeColor = "green";       
}

function draw() {
  background(255,255,255); 
  
  mr.y = World.mouseY;
  mr.x = World.mouseX;

  console.log(mr.x - fr.x);


  if (mr.x-fr.x < mr.width/2 + fr.width/2 && fr.x - mr.x < mr.width/2 + fr.width/2 &&
    mr.y-fr.y < mr.height/2 + fr.height/2 && fr.y - mr.y < mr.height/2 + fr.height/2){
    fr.shapeColor = "red";
    mr.shapeColor = "red";


  }
  else{
    fr.shapeColor = "green";
    mr.shapeColor = "green";


  }

  
  
  
  drawSprites();
}