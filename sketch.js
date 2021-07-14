var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;


var score = 0;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");

  cloudImg = loadImage("cloud.png")

  Obstacle1 = loadImage("obstacle1.png")
  Obstacle2 = loadImage("obstacle2.png")
  Obstacle3 = loadImage("obstacle3.png")
  Obstacle4 = loadImage("obstacle4.png")
  Obstacle5 = loadImage("obstacle5.png")
  Obstacle6 = loadImage("obstacle6.png")
  
 
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //generate random numbers
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  //set background color
  background(180);
  
  console.log(trex.y)
  
  text("Score: "+ score, 50, 50);
  score = score+Math.round(frameCount/60);
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 161) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds
  spawnClouds();
  spawnObstacles();
  //console.log(frameCount%60);
  drawSprites();
}

//function to spawn the clouds
function spawnClouds(){
 // write your code here 
 if (frameCount%60 == 0) 
 {
    var clouds= createSprite(600, Math.round(random(30, 80)), 40, 30)
    clouds.velocityX = -5;
    clouds.addImage(cloudImg);
    //console.log(clouds.depth);
    //console.log(trex.depth);
    trex.depth = clouds.depth+1;
    clouds.lifetime = 200;
   }
}

function spawnObstacles(){
  // write your code here 
  if (frameCount%80 == 0) 
  {
     var Obstacles= createSprite(600, 170, 40, 30)
     Obstacles.velocityX = -5;
     var rand = Math.round(random(1,6))
     switch(rand){
       case 1: Obstacles.addImage(Obstacle1);break;
       case 2: Obstacles.addImage(Obstacle2);break;
       case 3: Obstacles.addImage(Obstacle3);break;
       case 4: Obstacles.addImage(Obstacle4);break;
       case 5: Obstacles.addImage(Obstacle5);break;
       case 6: Obstacles.addImage(Obstacle6);break;
       default:break;
     }
     Obstacles.scale = 0.5
     Obstacles.lifetime = 200
    }
  }        