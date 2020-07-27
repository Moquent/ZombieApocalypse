var roomimg, garimg, plimg, waterimg, foodp1, foodp2, foodp3, zomp1, zomp2, toolp1, toolp2, toolp3, rockp1, runbg;

var player, zombie = [], p = 0,
  obs, button, invisg;
var gamestate = "welcome";
var water1, water2, water3, food1, food2;
var ground, i = 0;
var rtime = 5,
  gtime = 5,
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
  zomp1 = loadImage("sprites/zombie.gif");
  rockp1 = loadImage("sprites/rock1.png");
  zomp2 = loadImage("sprites/zombie.gif");
  runbg = loadImage("sprites/runbg.png");
}

function setup() {
  createCanvas(720, 400);

  ground = createSprite(360, 200, 720, 400);
  ground.addImage(runbg);
  ground.scale = 1;

  invisg = createSprite(360, 390, 1000, 20);
  invisg.visible = false;

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

  player = createSprite(40, 300, 20, 20);
  player.addImage(plimg);
  player.scale = 1;

  obsgrp = createGroup();

  frameRate(30);

  button = createButton("START");
  button.position(240, 180);
}

function draw() {
  background("RED");
  console.log(mouseX, mouseY);

  if (gamestate == "welcome") {
    background("red");
    water1.visible = false;
    water2.visible = false;
    water3.visible = false
    food1.visible = false;
    food2.visible = false;
    food3.visible = false;
    ground.visible = false;
    player.visible = true;

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
    if(p == 0){  
      water1.visible = true;
      water2.visible = true;
      water3.visible = true
      food1.visible = true;
      food2.visible = true;
      food3.visible = true;
      p = 1;
    }

    if (frameCount % 30 == 0) {
      rtime -= 1;
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
    
    fill("RED");
    textSize(25);
    text(rtime, 475, 30);

    if (rtime <= 0) {
      gamestate = "garage";
    }
    strokeWeight(3);
    stroke("BLACK");
    fill("RED");
    textSize(18);
    text("FIND ALL THE FOOD AND WATER", 180, 30);
  } 
  
  else if (gamestate == "garage") {
    background(garimg);
    if(p == 1){  
      water1.visible = true;
      water2.visible = true;
      water3.visible = true
      food1.visible = true;
      food2.visible = true;
      food3.visible = true;
      p = 2;
    }

    if (frameCount % 30 == 0) {
      gtime -= 1;
    }
    fill("RED");
    textSize(25);
    text(gtime, 475, 30);

    if (gtime <= 0) {
      gamestate = "run";
    }

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
    background("yellow");
    if(p == 2 || p == 0){
      water1.visible = false;
      water2.visible = false;
      water3.visible = false
      food1.visible = false;
      food2.visible = false;
      food3.visible = false;
      ground.visible = true;
      player.scale = 0.7;
      player.x = 275
      player.y = 330
      button.hide()
      p = 3;
    }
    player.setCollider("rectangle", 0, 0, 110, 200);
    player.debug = true;

    if (frameCount % 150 == 0) {
      zombie[i] = createSprite(50, 330, 10, 10);
      zombie[i].addImage(zomp1);
      zombie[i].scale = 0.8;
    }

    if(keyDown("space") && player.y >= 300){
      player.velocityY = -20;
    }

    player.velocityY += 1;
    if (frameCount % 100 == 0) {
      obs = createSprite(720, 360, 50, 50);
      obs.velocityX = -6;
      obs.addImage(rockp1);
      obs.scale = 0.2
      obsgrp.add(obs);
      obs.debug = true;
    }
    
    player.collide(invisg);

    if(obsgrp.isTouching(player)){
      gamestate = "over";
    }
    ground.velocityX = -6;
    if(ground.x < 0){
      ground.x = 360;
    }
  }
  else if (gamestate = "over"){
    background("black");
    player.scale = 0.7;
    player.x = 275
    player.y = 330
    water1.visible = false;
    water2.visible = false;
    water3.visible = false
    food1.visible = false;
    food2.visible = false;
    food3.visible = false;
    button.hide()
    ground.visible = false;
    textSize(30);
    fill("RED");
    text("GAME OVER", 260, 150)
    text("THANK YOU FOR PLAYING", 170, 220)

    var playagain;
    playagain = createButton("PLAY AGAIN");
    playagain.position(380, 280);
    playagain.mousePressed(function() {
      gamestate = "welcome";
      playagain.hide();
    })

  }

  drawSprites();
}