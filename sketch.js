const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform;
var ball;
var slingshot; 

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    ball = new Ball(200,50);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
   
    Engine.update(engine);
    ground.display();
    ball.display();
    platform.display();  
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}
