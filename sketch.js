const Engine =Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Body=Matter.Body;

var engine,world;
var ground;
var particles=[];
var divisions=[];
var plinkos=[]
var divHeight=250

function setup() {
  createCanvas(700,600);
  engine=Engine.create();
  world=engine.world;

  ground = new Ground(width/2,height,width,20)
 
  // creating Divisions
          for(i=0; i<=width; i+=115)
          {
            divisions.push(new Division(i,height-divHeight/2,10,divHeight))
          }

  // creating plinko 4 rows
          for(p=75; p<=width-30; p+=50)
          {
            plinkos.push(new Plinko(p,50))
          }
          for(p=100; p<=width-30; p+=50)
          {
            plinkos.push(new Plinko(p,120))
          }
          for(p=75; p<=width-30; p+=50)
          {
            plinkos.push(new Plinko(p,190))
          }
          for(p=100; p<=width-30; p+=50)
          {
            plinkos.push(new Plinko(p,260))
          }
}

function draw() {
  background(0);
  Engine.update(engine)
  ground.display() 
  
 // Displaying Divisions
  
    for(var i=0; i<divisions.length;i++)
      {
        fill("yellow")
        divisions[i].display();
      }

  // Displaying plinko rows

      for(var p=0; p<plinkos.length;p++)
      {
        fill(random(0,255),random(0,255),random(0,255))
        plinkos[p].display();
      }

  // creating and displaying particles
      if(frameCount % 30 === 0)
      {
        particles.push(new Particles(random(340,360),10,10))
      }

      for(var k=0; k<particles.length;k++)
      {
        particles[k].display();
      }
  
  drawSprites();
}