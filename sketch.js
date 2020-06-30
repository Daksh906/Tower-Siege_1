const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  engine = Engine.create();
	world = engine.world;


  createCanvas(1000,400);
  
  ground1 = new Ground(500,height,1000,20);

  ground2 = new Ground(400,330,300,10);

  ground3 = new Ground(800,280,200,10)

  
  
  polygon1 = new Polygon(50,200,40,40);


  slingshot = new SlingShot(polygon1.body,{x:100,y:200})
 
//level1
  box1 = new Box(330,275,30,30,"blue");
  box2 = new Box(360,275,30,30,"blue");
  box3 = new Box(390,275,30,30,"blue");
  box4 = new Box(420,275,30,30,"blue");
  box5 = new Box(450,275,30,30,"blue");
  box10 = new Box(300,275,30,30,"blue");
  box12 = new Box(480,275,30,30,"blue");

  //level2
  box6 = new Box(360,195,30,30,"pink");
  box7 = new Box(390,195,30,30,"pink");
  box8 = new Box(420,195,30,30,"pink");
  box11 = new Box(330,195,30,30,"pink");
  box13 = new Box(450,195,30,30,"pink");

  //level3
  box9 = new Box(390,155,30,30,"green");
  box14 = new Box(360,155,30,30,"green")
  box15 = new Box(420,155,30,30,"green");
 
 //level4
 box16 = new Box(390,115,30,30,"grey");

 //level1.0
 box17 = new Box(730,275,30,30,"blue");
 box18 = new Box(760,275,30,30,"sea blue");
 box19 = new Box(790,275,30,30,"purple");
 box20 = new Box(820,275,30,30,"yellow");
 box21 = new Box(850,275,30,30,"red");

 //level2.0
 box22 = new Box(760,195,30,30,"grey");
 box23 = new Box(790,195,30,30,"green");
 box24 = new Box(820,195,30,30,"pink");

 //level3.0
 box25 = new Box(790,155,30,30,"orange")
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  polygon1.display();
  ground1.display();
  ground2.display();
  ground3.display();
  slingshot.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box17.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  drawSprites();
  
}
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x:mouseX , y:mouseY});
}


function mouseReleased(){
  slingshot.fly();
}