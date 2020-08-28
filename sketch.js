//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();

  //create physical world - from engine please give me access to physical world and store in world variable
  world = engine.world;

  var options = {
    isStatic: true
   }
   var resi = {
     restitution: 3.0
   }

  object = Bodies.rectangle(200,390,200,10,options);

  ball = Bodies.circle(200,200,20,resi);
  World.add(world,ball);
  console.log(ball);
  console.log(object.position.x);
  console.log(object.position.y);
  console.log(object.type);;
  World.add(world,object);
  
  // createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,100,100);
  ellipseMode(RADIUS);  
  ellipse(ball.position.x,ball.position.y,20,20);

  drawSprites();
}
// world engine bodies.