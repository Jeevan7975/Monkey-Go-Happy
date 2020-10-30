
var monkey , monkey_running;
var banana ,bananaImg, obstacle, obstacleImg;
var FoodGroup, obstacleGroup;
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImg = loadImage("banana.png");
  obstaceImg = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  
  
}

function draw() {
  background(265);
  ground.x = ground.width /2;
  
    if(keyDown("space")&& monkey.y >= 70) {
        monkey.velocityY = -12;
        
    }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  score = score + Math.round(getFrameRate()/60);
  fill("black");
  textSize(15);
  text("Survival Time: " + score, 200, 50);
  
  if(keyDown("shift")){
    monkey.velocityY = 8;
  }
  
  drawSprites();
  createFood();
  createobstacle();
  
}

function createFood() {
  if(frameCount % 60 == 0) {
    banana = createSprite(450, Math.round(random(100, 300), 10, 10))
    banana.addImage(bananaImg);
    banana.scale = 0.1;
    banana.velocityX = -6;
    banana.lifetime = 100;
    
    FoodGroup.add(banana);
  }
  
}
function createobstacle() {
  if(frameCount % 300 == 0) {
    obstacle = createSprite(450,325, 10, 10)
    obstacle.addImage(obstaceImg);
    obstacle.scale = 0.1;
    obstacle.velocityX = -6;
    obstacle.lifetime = 100;
    
    obstacleGroup.add(obstacle);
  }
  
}
