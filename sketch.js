const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1;
var carromBoardImg;
var ball1,striker;

function preload(){

carromBoardImg=loadImage("images/carrom-board.png");

}

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    ball1=new Ball(300,300,15);
    striker= new Ball(300,500,25);
   
//ground=new Ground(200,390,600,20);
//box1=new Box(200,300,50,50);
//box2=new Box(240,100,50,100);
   

   
}

function draw(){
    background(carromBoardImg);
    Engine.update(engine);
    
  //  ground.display();
 //   box1.display();
  //  box2.display();
  ball1.display();
  striker.display();

  
}