var gamestate = 0;


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var slingshot;
var engine, world;
var box1, pig1;
var backgroundImg;
var platform;
var new_log;
var score = 0;

var birds = [];
var bird2,bird3,bird4;



function preload() {
gettime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150,305,300,170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2); 

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);
    bird2 = new Bird(150,170);
    bird3 = new Bird(100,170);
    bird4 = new Bird(50,170);

    birds = [bird2,bird3,bird4,bird];

    slingshot = new SlingShot(bird.body,{x:200,y:50});



}

function draw(){
    if (backgroundImg){
        background(backgroundImg);
        }
        textSize(35);
        fill("white")
        text("Score: "+score,800,50);
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
  
    slingshot.display();

    bird2.display();
    bird3.display();
    bird4.display();



    
}
function mouseDragged() {
 if (gamestate===0){
    Matter.Body.setPosition(birds[birds.length-1].body, {x:mouseX,y:mouseY})
    Matter.Body.applyForce(birds[birds.length-1].body, birds[birds.length-1].body.position,{x:5,y:-5})
    return false;
}}



function mouseReleased(){
    gamestate = 1;
    slingshot.fly();
    birds.pop();
    return false;
}

function keyPressed(){
   
    if (keyCode === 32&& gamestate === 1){
     gamestate = 0;
     bird.trajectory = [];
     bird.colour = 255;
     Matter.Body.setPosition(bird.body,{x:200,y:50});
        slingshot.attach(bird.body);

    }
}
   async function gettime(){
   var  response = await fetch ("http://worldtimeapi.org/api/timezone/Australia/Melbourne");
   var responsejson = await response.json();
   console.log(responsejson);

   var Datetime = responsejson.datetime;
   var Hour = Datetime.slice(11,13);

   if (Hour>=06 && Hour<=19){
       bg = "sprites/bg.png";
   }
  
   else{
       bg = "sprites/bg2.jpg";
   }
   backgroundImg = loadImage (bg);
}