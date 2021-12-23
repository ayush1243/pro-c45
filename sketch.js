


function preload()
{
	
}

function setup() {
	createCanvas(600,200);
 ground=createSprite(0,200,600,20);
ground.velocityX=-2;

jack=createSprite(50,180,20,20);


	//Create the Bodies Here.


	
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(ground.x<0){
	  ground.x=ground.width/2;
  }
  drawSprites();
 
}



