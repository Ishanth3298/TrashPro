
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var block1, block2, block3;
var ground;
var ball;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	block1 = new Block(500, 680, 50,10);
	ground = new Ground(450, 700, 1000, 15);
	ball = new Ball(500, 500, 10, 10);
	block2 = new Block(470, 660, 10, 50);
	block3 = new Block(520, 660, 10,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  block1.display();
  ground.display();
  ball.display();
  block2.display();
  block3.display();
}
function keyPressed() {
	if (keyPressed(UP_ARROW)) {
		Matter.Body.applyForce(ball.body.ball.body.position,{x:85, y:-85})
	}
}



