const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body

var devil
var bg , bgImg
var leftLine , bottomLine , rightLine , topLine , line4 , line5 ,line6;
var enemy1
var engine, world;
var ball , rope , ground;
var zombie , zombieImg
var zombie = [];



function preload(){

	bgImg = loadImage("track.jpg")
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	//background image
	// bg = createSprite(windowWidth/2,0,1,1);
	// bg.addImage(bgImg);
	// bg.scale = 2
  
	engine = Engine.create();
	world = engine.world;
   
  ground = new Ground(700, 5000, 1200, 20);

  //making game area
  leftLine = createSprite(windowWidth/10/8,5,20,10000)
  leftLine.shapeColor = "red"

  rightLine = createSprite(windowWidth/10*7.1,5,20,10000)
  rightLine.shapeColor = "red"


  bottomLine = createSprite(740,5000,1450,20)
  bottomLine.shapeColor = "red"

  topLine = createSprite(740,-5000,1450,20)
  topLine.shapeColor = "red"

  enemy1 = createSprite(365,4900,120,12)
  enemy1.shapeColor = "black"
  enemy1.velocityX=0;
  enemy1.velocityX= 20;

 
  devil = createSprite(windowWidth/2, 4800, 80, 80);
  // davil.shapeColor = "green"
  // devil.velocityY = -1
  crona = new Crona(200, 200, 80, 80);

  //  Engine.run(engine);
}


function draw() {
background("black");
Engine.update(engine);

if(frameCount%60===0){
  zombie.push(new Zombie(random(100, 700), 10,10));
  // score++;
}

for (var j = 0; j < zombie.length; j++) {

  zombie[j].display();
}


// form = new Form()
crona.display();
ground.display();
// devil.bounceOff(leftLine);
 if(devil.isTouching){
 devil.bounceOff(leftLine);
 devil.bounceOff(rightLine);
 devil.bounceOff(bottomLine);
 devil.bounceOff(topLine);
 enemy1.bounceOff(devil);

 }

 enemy1.bounceOff(bottomLine);
 enemy1.bounceOff(topLine);
 enemy1.bounceOff(leftLine);
 enemy1.bounceOff(rightLine);

 

if(keyDown("RIGHT"))
{
  devil.x = devil.x + 8;
}
if(keyDown("left"))
{
  devil.x = devil.x - 8;
}
if(keyDown("up"))
{
  devil.y = devil.y - 100;
}
if(keyDown("down"))
{
  devil.y = devil.y + 20;
}


    //  adding gravity
    //  devil.velocityY = devil.velocityY + 2;




  camera.position.x = displayWidth/2;
  camera.position.y = devil.y;
  
  // camera.position.y = displayHeight/2;
  // camera.position.x = devil.x;

  drawSprites();
 
}



