
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var mango1,mango2,mango3,mango4,mango5,mango6;
var boy,boyImg
var launcherObject
var launchForce=100;
var mango

function preload()
{
	boyImg = loadImage("Images/boy.png");
	
}

function setup() {
	createCanvas(1300,600);


	engine = Engine.create();
	world  = engine.world;
	tree=new Tree(1050,580)
	stone=new Stone(235,420,30,30)
	mango1 =  new Mango(1100,100)
	mango2 =  new Mango(1170,130)
	mango3 =  new Mango(1010,140)
	mango4 =  new Mango(1000,70)
	mango5 =  new Mango(1100,70)
groundnew=new ground(width/2,600)
	//Create the Bodies Here.
    launchernew=new Launcher(stone.body,{x:235,y:420})

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  image(boyImg,200,340,200,300)
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
  groundnew.display();
  stone.display();
  launchernew.display();
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body , {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
	launchernew.fly();
  }
  function keyPressed(){
	  if(keyCode===32){
		Matter.Body.setPosition(stone.body , {x:235 , y:420});
	 launchernew.attach(stone.body);
	  }
  }



