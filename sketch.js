var bg, brush, sleep, gym, eat, drink, move;
var bgImg, brushImg, sleepImg, gymImg, eatImg, drinkImg, moveImg;
var astronaut;

function preload(){

  bgImg = loadImage("iss.png");
  brushImg = loadImage("brush.png");
  sleepImg = loadImage("sleep.png");
  gymImg = loadAnimation("gym1.png","gym2.png");
  eatImg = loadAnimation("eat1.png","eat2.png");
  drinkImg = loadAnimation("drink1.png","drink2.png");
  moveImg = loadAnimation("move.png","move1.png");
}



function setup() {
  createCanvas(800,400);
  bg = createSprite(400, 200, 10,10);
  bg.addImage(bgImg);
  bg.scale = 0.15;

  astronaut = createSprite(400,250,10,10);
  astronaut.addImage(sleepImg);
  astronaut.scale = 0.1;

}




function draw() {
  background(255,255,255);  

  if (keyCode == UP_ARROW) {
    astronaut = changeImage(brushImg);
  }


if (keyCode == DOWN_ARROW) {
  astronaut = changeImage(eatImg);
}

if (keyCode == RIGHT_ARROW) {
  astronaut = changeImage(drinkImg);
}

if (keyCode == LEFT_ARROW) {
  astronaut = changeImage(gymImg);
}

}
  drawSprites();
}

 