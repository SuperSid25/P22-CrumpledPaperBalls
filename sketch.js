var ball;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

   
	engine = Engine.create();
	world = engine.world;
	 //create the bodies here
	 paper = new Paper(100,600,10);

     ground =  new Ground(400,650,800,20);

     leftBin = new Bin(550, 590, 20, 100);
	 rightBin = new Bin(670, 590, 20, 100);
	 
	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  Engine.update(engine);

  paper.display();
  
  ground.display();
  leftBin.display();
  rightBin.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.body.applyForce(paper.body, paper.body.position, {x:85, y:-85})
	}
}



