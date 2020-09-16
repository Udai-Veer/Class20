var player;
var computer;

function setup() {
  createCanvas(1600,800);

  player = createSprite(400, 400, 60, 80);
  computer = createSprite(800, 400, 60, 80);

   player.shapeColor = "blue";
    computer.shapeColor = "blue";

    player.debug = true
    computer.debug = true
}

function draw() {
  background(0);  

  player.x = World.mouseX
  player.y = World.mouseY

  if (player.x - computer.x < player.width/2 + computer.width/2 
    && computer.x - player.x < computer.width/2 + player.width/2 
    && player.y - computer.y < player.height/2 + computer.height/2
    && computer.y - player.y < computer.height/2 + player.height/2) {
    player.shapeColor = "pink";
    computer.shapeColor = "pink";
  }
else
{
  player.shapeColor = "blue";
    computer.shapeColor = "blue";
}
  drawSprites();
}