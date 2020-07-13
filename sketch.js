var roomimg, garimg, plimg, waterimg, foodp1, foodp2, foodp3, zomp1, zomp2, toolp1, toolp2, toolp3, rockp1, runbg;

var player, zombie = [],
  obs, button, g = 0;
var gamestate = "welcome";
var water1, water2, water3, food1, food2, food3, tool1, tool2, tool3;
var ground, i = 0;
var rtime = 7,
  gtime = 7,
  watercount = 0,
  foodcount = 0,
  totfood = 0,
  totwater = 0;

function preload() {
  roomimg = loadImage("sprites/zabg.png");
  garimg = loadImage("sprites/garage.png");
  plimg = loadImage("sprites/player.png");
  waterimg = loadImage("sprites/water.png");
  foodp1 = loadImage("sprites/food1.png");
  foodp2 = loadImage("sprites/food2.png");
  foodp3 = loadImage("sprites/food3.png");
  zomp1 = loadImage("sprites/knife.png");
  rockp1 = loadImage("sprites/rock1.png");
  zomp2 = loadImage("sprites/zombie.gif");
  runbg = loadImage("sprites/runbg.png");
  toolp1 = loadImage("sprites/tool1.png");
  toolp2 = loadImage("sprites/tool2.png");
  toolp3 = loadImage("sprites/tool3.png");

}

function setup() {
  createCanvas(720, 400);

  ground = createSprite(360, 200, 720, 400);
  ground.addImage(runbg);
  ground.scale = 1;

  food1 = createSprite(348, 290, 5, 5);
  food1.addImage(foodp1);
  food1.scale = 0.12;

  food2 = createSprite(150, 280, 5, 5);
  food2.addImage(foodp2);
  food2.scale = 0.10;

  food3 = createSprite(700, 375, 5, 5);
  food3.addImage(foodp3);
  food3.scale = 0.10;

  water1 = createSprite(52, 50, 5, 5);
  water1.addImage(waterimg);
  water1.scale = 0.11;

  water2 = createSprite(654, 230, 5, 5);
  water2.addImage(waterimg);
  water2.scale = 0.08;

  water3 = createSprite(450, 230, 5, 5);
  water3.addImage(waterimg);
  water3.scale = 0.05;
  water3.rotation = 94;

  // tool1 = createSprite(40, 300, 20, 20);
  // tool1.addImage(toolp1);
  // tool1.scale = 0.3;
  
  // tool2 = createSprite(40, 300, 20, 20);
  // tool2.addImage(toolp2);
  // tool2.scale = 0.3;
  
  // tool3 = createSprite(40, 300, 20, 20);
  // tool3.addImage(toolp3);
  // tool3.scale = 0.3;

  player = createSprite(40, 300, 20, 20);
  player.addImage(plimg);
  player.scale = 1;

  frameRate(30);

  button = createButton("START");
  button.position(240, 180);
}

function draw() {
  background("RED");
  console.log(mouseX, mouseY);

  if (gamestate == "welcome") {
    player.visible = true;
    water1.visible = false;
    water2.visible = false;
    water3.visible = false;
    food1.visible = false;
    food2.visible = false;
    food3.visible = false;
    ground.visible = false;
    // food2.visible = false;
    // food2.visible = false;

    strokeWeight(2);
    stroke("BLACK");
    fill("BLACK");
    textSize(18);
    text("ZOMBIE APOCALYPSE", 170, 30);

    noStroke();
    textSize(20);
    text("Something Unknown Has Happened! People Have Suddenly", 0, 70);
    text("Vanished And You Are One Of The Survivors!!! ", 0, 90);
    text("Take Supplies From Your Home And Run Away From The", 0, 110);
    text("Zombies To The Human Shelter", 0, 130);

    button.mousePressed(function() {
      gamestate = "room";
      button.hide();
    })

  } 
  
  else if (gamestate == "room") {
    background(roomimg);
    if(g == 0){
      water1.visible = true;
      water2.visible = true;
      water3.visible = true;
      food1.visible = true;
      food2.visible = true;
      food3.visible = true;
      ground.visible = false;
      g = 1;
    }
      button.hide()

    if (frameCount % 30 == 0) {
      rtime -= 1;
    }
    fill("RED");
    textSize(25);
    text(rtime, 475, 30);

    if (rtime <= 0) {
      gamestate = "garage";
    }

    if(mousePressedOver(water1)){
      water1.visible = false;
    }
    if(mousePressedOver(water2)){
      water2.visible = false;
    }
    if(mousePressedOver(water3)){
      water3.visible = false;
    }
    if(mousePressedOver(food1)){
      food1.visible = false;
    }
    if(mousePressedOver(food2)){
      food2.visible = false;
    }
    if(mousePressedOver(food3)){
      food3.visible = false;
    }

    strokeWeight(3);
    stroke("BLACK");
    fill("RED");
    textSize(18);
    text("FIND ALL THE FOOD AND WATER", 180, 30);
  } 

  else if (gamestate == "garage") {
    background(garimg);
    if(g == 1){
      water1.visible = true;
      water2.visible = true;
      water3.visible = true;
      food1.visible = true;
      food2.visible = true;
      food3.visible = true;
      ground.visible = false;
      g = 0;
    }
      button.hide();

    food1.x = 600;
    food1.y = 220;
    food2.x = 130;
    food2.y = 235;
    food3.x = 360;
    food3.y = 230;
    water1.x = 175;
    water1.y = 118;
    water1.scale = 0.05;
    water2.x = 540;
    water2.y = 250;
    water2.scale = 0.05;
    water3.x = 465;
    water3.y = 145;

    if (frameCount % 30 == 0) {
      gtime -= 1;
    }
    fill("RED");
    textSize(25);
    text(gtime, 475, 30);

    if (gtime <= 0) {
      gamestate = "run";
    }

    if(mousePressedOver(water1)){
      water1.visible = false;
    }
    if(mousePressedOver(water2)){
      water2.visible = false;
    }
    if(mousePressedOver(water3)){
      water3.visible = false;
    }
    if(mousePressedOver(food1)){
      food1.visible = false;
    }
    if(mousePressedOver(food2)){
      food2.visible = false;
    }
    if(mousePressedOver(food3)){
      food3.visible = false;
    }
    
    strokeWeight(3);
    stroke("BLACK");
    fill("RED");
    textSize(18);
    text("FIND ALL THE FOOD AND WATER", 180, 30);
  }
  
  else if (gamestate == "run") {
    background(runbg);
    ground.visible = true;
    water1.visible = false;
    water2.visible = false;
    water3.visible = false;
    food1.visible = false;
    food2.visible = false;
    food3.visible = false;
    button.hide()

    if (frameCount % 150 == 0) {
      zombie[i] = createSprite(50, 330, 10, 10);
      zombie[i].addImage(zomp1);
      zombie[i].scale = 0.8;
    }

    if (frameCount % 100 == 0) {
      obs = createSprite(720, 360, 10, 10);
      obs.velocityX = -4;
      obs.addImage(rockp1);
      obs.scale = 0.2
    }
    player.scale = 0.5;
    player.x = 275
    player.y = 330
    
    ground.velocityX = -4
    if(ground.x < 20){
      ground.x = 360;
    }
  }

  drawSprites();
}