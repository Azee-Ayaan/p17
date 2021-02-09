var boy,arrow,greenballoon,redballoon,pinkballoon,blueballoon,background;
var bowImage,arrowImage,greenballoonImage,redballoonImage,pinkballoonImage,blueballoonImage,backgroundImage

var score=0

function preload(){
 backgroundImage=loadImage("background0.png")
 arrowImage=loadImage("arrow0.png")
   bowImage=loadImage("bow0.png")
   redballoonImage=loadImage("red_balloon0.png")
  pinkballoonImage=loadImage("pink_balloon0.png")
  greenballoonImage=loadImage("green_balloon0.png")
  blueballoonImage=loadImage("blue_balloon0.png")
   
}

function setup() {
  createCanvas(600, 600);
  background=createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale=2.5
  
  bow=createSprite(480,220,20,5)       
  bow.addImage(bowImage);
  bow.scale=1
  
  redB=new Group();
  pinkB=new Group();
  greenB=new Group();
  blueB=new Group();
  arrowGroup=new Group();
  
  //for(var i=60;i<390;i=i+60){
   // redballoon=createSprite(50,i,1,1)
   // redballoon.addImage(redballoonImage)
   // redballoon.scale=0.1
 // }
//  for(var i=110;i<390;i=i+60){
 //   greenballoon=createSprite(100,i,10,10)
  //  greenballoon.addImage(greenballoonImage)
  //  greenballoon.scale=0.1
//  }
  
  
 // for(var i=130;i<350;i=i+60){
   // blueballoon=createSprite(140,i,1,1)
   // blueballoon.addImage(blueballoonImage)
   // blueballoon.scale=0.1
//  }
  
  
  
  
  //for(var i=180;i<250;i=i+60){
  //  pinkballoon=createSprite(180,i,1,1)
  //  pinkballoon.addImage(pinkballoonImage)
   // pinkballoon.scale=1.2
 // }
  
  //add code here
  
}

function draw() {
background.velocityX=-3
  if(background.x<0){
    background.x=background.width/2
  }
  //add code here
  bow.y=World.mouseY
  if(keyDown("space")){
    createArrow();
  }
  //createContinuesBalloons
  var select_balloon=Math.round(random(1,4))
  if(World.frameCount%100==0){
    if(select_balloon==1){
      redBalloon();
      
    }else if(select_balloon==2){
      greenBalloon();
    }else if(select_balloon==3){
      blueBalloon();
    }else {
      pinkBalloon();
    }
  }
  if(arrowGroup.isTouching(redB)){
    redB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
   }
  if(arrowGroup.isTouching(greenB)){
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
   }
  if(arrowGroup.isTouching(blueB)){
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score=score+4;
   }
  if(arrowGroup.isTouching(pinkB)){
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score=score+2;
   }
  drawSprites();
}
function redBalloon(){
  var red=createSprite(0,Math.round(random(20,370)),10,10)
  red.addImage(redballoonImage)
  red.velocityX=3
  red.lifetime=150
  red.scale=.1
  redB.add(red);
}
  
  function blueBalloon(){
  var blue=createSprite(0,Math.round(random(20,370)),10,10)
  blue.addImage(blueballoonImage)
  blue.velocityX=3
  blue.lifetime=150
  blue.scale=.1
  blueB.add(blue);
}
  
  function greenBalloon(){
  var green=createSprite(0,Math.round(random(20,370)),10,10)
  green.addImage(greenballoonImage)
  green.velocityX=3
  green.lifetime=150
  green.scale=.1
  greenB.add(green);
}
  
  
  function pinkBalloon(){
  var pink=createSprite(0,Math.round(random(20,370)),10,10)
  pink.addImage(pinkballoonImage)
  pink.velocityX=3
  pink.lifetime=150
  pink.scale=1
  pinkB.add(pink);
}
  
  function createArrow(){
    var arrow=createSprite(100,100,60,10);
    arrow.addImage(arrowImage)
    arrow.x=360;
    arrow.y=bow.y;
    arrow.velocityX=-4;
    arrow.lifetime=100
    arrow.scale=.3
    arrowGroup.add(arrow)
    
    
    
    
  }
  
  
