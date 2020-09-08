const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Box1, pig1;
var backgroundImg,platform;
var polygon, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    Box1 = new Box(700,320,70,70);
    Box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    Box1 = new Box(810,260,300, PI/2);

    Box3 = new Box(700,240,70,70);
    Box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    Box3 =  new Box(810,180,300, PI/2);

    Box5 = new Box(810,160,70,70);
    Box4 = new Box(760,120,150, PI/7);
    Box5 = new Box(870,120,150, -PI/7);

    polygon = new circle(50,200,20);

    //Box6 = new Box(230,180,80, PI/2);
    slingshot = new SlingShot(polygon.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    Box1.display();
    Box2.display();
    ground.display();
    pig1.display();
    Box1.display();

    Box3.display();
    Box4.display();
    pig3.display();
    Box3.display();

    Box5.display();
    Box4.display();
    Box5.display();

    polygon.display();
    platform.display();
    //Box6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}