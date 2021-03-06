const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

var boxA1, boxA2, boxA3, boxA4, boxA5, boxA6, boxA7;
var boxB1, boxB2, boxB3, boxB4, boxB5, boxB6;
var boxC1, boxC2, boxC3, boxC4, boxC5, boxC6, boxC7, boxC8;
var boxD1, boxD2, boxD3, boxD4, boxD5;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  boxA1 = new Box(600, 100, 70, 70);
  boxA2 = new Box(600, 100, 70, 70);
  boxA3 = new Box(600, 100, 70, 70);
  boxA4 = new Box(600, 100, 70, 70);
  boxA5 = new Box(600, 100, 70, 70);
  boxA6 = new Box(600, 100, 70, 70);
  boxA7 = new Box(600, 100, 70, 70);

  boxB1 = new Box(700, 100, 70, 70);
  boxB2 = new Box(700, 100, 70, 70);
  boxB3 = new Box(700, 100, 70, 70);
  boxB4 = new Box(700, 100, 70, 70);
  boxB5 = new Box(700, 100, 70, 70);
  boxB6 = new Box(700, 100, 70, 70);

  boxC1 = new Box(800, 100, 70, 70);
  boxC2 = new Box(800, 100, 70, 70);
  boxC3 = new Box(800, 100, 70, 70);
  boxC4 = new Box(800, 100, 70, 70);
  boxC5 = new Box(800, 100, 70, 70);
  boxC6 = new Box(800, 100, 70, 70);
  boxC7 = new Box(800, 100, 70, 70);
  boxC8 = new Box(800, 100, 70, 70);

  boxD1 = new Box(900, 100, 70, 70);
  boxD2 = new Box(900, 100, 70, 70);
  boxD3 = new Box(900, 100, 70, 70);
  boxD4 = new Box(900, 100, 70, 70);
  boxD5 = new Box(900, 100, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();

  boxA1.display();
  boxA2.display();
  boxA3.display();
  boxA4.display();
  boxA5.display();
  boxA6.display();
  boxA7.display();

  boxB1.display();
  boxB2.display();
  boxB3.display();
  boxB4.display();
  boxB5.display();
  boxB6.display();

  boxC1.display();
  boxC2.display();
  boxC3.display();
  boxC4.display();
  boxC5.display();
  boxC6.display();
  boxC7.display();
  boxC8.display();

  boxD1.display();
  boxD2.display();
  boxD3.display();
  boxD4.display();
  boxD5.display();

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x: mouseX, y: mouseY});
}