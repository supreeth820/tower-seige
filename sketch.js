const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
  
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine)
    ground = new Ground(450,390,900,20);
    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);
//stand1 level1 
   block1 = new Block(300,275,30,40);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);
    // stand 2 level1
    block1s = new Block(640,175,30,40);
    block2s = new Block(670,175,30,40);
    block3s = new Block(700,175,30,40);
    block4s= new Block(730,175,30,40);
    block5s = new Block(760,175,30,40);
    ball = Bodies.circle(50,200,20);
    World.add(world.ball);
    slingshot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
background("lightblue");
ground.display();
stand1.display();
stand2.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block1s.display();
block2s.display();
block3s.display();
block4s.display();
block5s.display();
}
