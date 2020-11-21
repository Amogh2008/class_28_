
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree;
var mango1,mango2,mango3,mongo4;
var boy, boyImage;
var stone;
var launcherObject;

const Constraint = Matter.Constraint;
const Render = Matter.Render;



function preload()
{

boyImage = loadImage("sprites/boy.png");
}	

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.

	



	boy = createSprite(100,400,30,30);
	boy.addImage(boyImage);
	boy.scale = 0.1;


	tree = new Tree(600,350,400,400);
	tree.scale = 3;

	
	mango1 = new Mango(500,365,50);
	mango2 = new Mango(700,350,50);
	mango3 = new Mango(700,200,50);
	mango4 = new Mango(500,200,50);

	stone = new Stone(50,350,50,50);

	launcherObject = new Launcher(stone.body, {x:50, y:350});

	

	var render = Render.create({
		element : document.body,
		engine : engine,
		options :{
			width:1300,
			height:600,
			wireFrames:false
		}
	});
	

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(1000);

  textSize(25);
  text("press space to get a second chance to play",50, 50);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  tree.display();

  stone.display();

  launcherObject.display();



 
drawSprites();
 
}


function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased(){
  launcherObject.fly();
     //distance=int(dist(stone.x,stone.y,mango1.x,mango1.y));
}


