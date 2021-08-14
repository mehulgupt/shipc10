var ship, ship_running, edges;
var seapng;

function preload(){
  ship_running = loadAnimation("ship1.png","ship3.png","ship4.png");
  seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  ship = createSprite(50,160,20,50);
  ship.addAnimation("running", ship_running);
  
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  ship.scale = 0.5;
  sea=createSprite(200,180,400,20)

  ship.x = 50
}


function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the trex
  console.log(ship.y)
  
  //jump when space key is pressed
  if(keyDown("space")){
    ship.velocityY = -10;
  }
  
  ship.velocityY = ship.velocityY + 0.5;
  ship.collide(ground)
  //stop ship from falling down
  ship.collide(edges[3])
  drawSprites();
}
