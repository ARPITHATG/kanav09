const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);


  ground = new Ground(200,200,400,10)
  
}

function draw() 
{
  background(0);
  Engine.update(engine);

  ground.display()
}

