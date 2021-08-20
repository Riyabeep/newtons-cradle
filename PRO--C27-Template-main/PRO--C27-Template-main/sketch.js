
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(350,100,300,30);
	bobObject1 = new bob(250,300)
	bobObject2 = new bob(300,300)
	bobObject3 = new bob(350,300)
	bobObject4 = new bob(400,300)
	bobObject5 = new bob(450,300)
	
	
	rope1=new rope(bob1.body,roofObject.body,-100, 0)
		World.add (world,rope1)

	rope2=new rope(bob2.body,roofObject.body,-50, 0)
		World.add (world,rope2)
	
	rope3=new rope(bob3.body,roofObject.body,0, 0)
		World.add (world,rope3)
	
	rope4=new rope(bob4.body,roofObject.body,50, 0)
		World.add (world,rope4)
	
	rope5=new rope(bob5.body,roofObject.body,100, 0)
		World.add (world,rope5)
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
}
function keyPressed(){
if (keyCode===32){
	Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-730,y:0})
}



}





