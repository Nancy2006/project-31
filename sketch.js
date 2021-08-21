const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var div1,div2,div3;
var p1,p2,p3,p4,p5,p6,p7,p8;
 var plankos = []

function setup() {
  
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(200,380,400,20);

  div1 = new Division(50,300,10,280);
  div2 = new Division(150,300,10,280);
  div3 = new Division(250,300,10,280);
  div4 = new Division(350,300,10,280);

  for (var j = 75; j <=width; j=j+50) {
    plankos.push(new Planko(j,75));
  }
 
  for (var j = 50; j <=width-10; j=j+50) {
    plankos.push(new Planko(j,175));
  }

  p1= new Planko(40,40,9)
  p2= new Planko(80,40,9);
  p3= new Planko(120,40,9)
  p4= new Planko(160,40,9)
  p5= new Planko(200,40,9)
  p6= new Planko(240,40,9)
  p7= new Planko(280,40,9)
  p8= new Planko(320,40,9)

  p9 = new Planko(60,100,9)
  p10 = new Planko(120,100,9)
  p11= new Planko(180,100,9)
  p12= new Planko(240,100,9)
  p13= new Planko(300,100,9)
  p14= new Planko(360,100,9)

  

}

function draw() {
  background("black");  
  Engine.update(engine);

  if(frameCount%60===0) {
    particles.push(new particles(random(0,800),0))
   }

  ground.display();
  div1.display();
  div2.display();
  div3.display();
  div4.display();

  p1.display();
  p2.display();
  p3.display();
  p4.display();
  p5.display();
  p6.display();
  p7.display();
  p8.display();

  p9.display();
  p10.display();
  p11.display();
  p12.display()
  p13.display();
  p14.display()
  
  for (var k =0; k < particles.length; k++) {
    particles[k].display();
  }

}