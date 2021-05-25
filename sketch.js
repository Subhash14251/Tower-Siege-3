const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const constraint= Matter.Constraint;
var engine, world;
var polygon,polygon_img;
var bg, backgroundImg;
var score=0;

function preload() {

getBackgroundImg();

}


function setup() {
  engine  = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  block1 = new Block(280,275,30,40);  
  block2 = new Block(310,275,30,40);
  block3 = new Block(340,275,30,40);
  block4 = new Block(370,275,30,40);
  block5 = new Block(400,275,30,40);
  block6 = new Block(430,275,30,40);
  block7 = new Block(460,275,30,40);
  block8 = new Block(490,275,30,40);
  //level two
  block9 = new Block(310,235,30,40);
  block10 = new Block(340,235,30,40);
  block11 = new Block(370,235,30,40);
  block12 = new Block(400,235,30,40);
  block13 = new Block(430,235,30,40);
  block14 = new Block(460,235,30,40);
  //level three
  block15 = new Block(340,195,30,40);
  block16 = new Block(370,195,30,40);
  block17 = new Block(400,195,30,40);
  block18 = new Block(430,195,30,40);
  //level four
  block19 = new Block(370,155,30,40);
  block20 = new Block(400,155,30,40);
  //level five
  block21 = new Block(385,115,30,40);
  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  //level two
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  //level three
  blocks9 = new Block(700,95,30,40);


  stand= new Ground(385,305,275,20);
  stand1= new Ground(700,200,200,10);

  hexagon= new Hexagon(100,200,50,50);
  slingshot1= new Slingshot(hexagon.body,{x:120,y:200});


 Engine.update(engine);
 Engine.run(engine);
}

function draw() {
  
  if(backgroundImg)

  background(backgroundImg);  





  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  stroke(15)
  fill("orange")
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
 stroke(15)
 fill("violet")
  block15.display();
  block16.display();
  block17.display();
  block18.display();
    stroke(15)
    fill("green")
  block19.display();
  block20.display();
 stroke(15)
 fill("blue")
  block21.display();

  stroke(15)
  fill("red")
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  stroke(15)
  fill("yellow")
  blocks6.display();
  blocks7.display();
  blocks8.display();
  stroke(15)
  fill("pink")
  blocks9.display();
  blocks9.display();
  stand.display();
  stand1.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();

  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();

  block13.score();
  block14.score();
  block15.score();

  block16.score();

  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();

   hexagon.display();
 slingshot1.display();

text("SCORE"+score,730,40);



}

function mouseDragged(){
  Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot1.fly();
}

function keyPressed()
{
	if(keyCode == 32)
	{
			Matter.Body.setPosition(hexagon.body,{x:100,y:400});
			slingshot1.attach(hexagon.body);
	}
}


async function getBackgroundImg() {
     var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
     var responseJSON=await response.json();
            var datetime= responseJSON.datetime;
            var hour= datetime.slice(11,13);

if(hour >= 06 && hour <= 18){
    bg = rgb(255,153,51);
  } else{
    bg = rgb(55, 43, 43);
  }

backgroundImg=bg;

}

