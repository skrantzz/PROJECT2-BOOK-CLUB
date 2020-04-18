
var ypos = 0;
var xpos = 0;

currentFrame = 0;

canvasSize = {x:400,y:400};

ellipseSize = {x:80,y:80};

function setup() {
  createCanvas(canvasSize.x,canvasSize.y);
}

function draw() {
  background(220);
  fill(255,0,0);
  ellipse(xpos,ypos,ellipseSize.x,ellipseSize.y);
  
  xpos = (currentFrame * 3) % (canvasSize.x + ellipseSize.x / 2)
  
  ypos = 200 + Math.sin(currentFrame / 20) * 50;
  
  currentFrame ++;
  currentFrame %= Number.MAX_SAFE_INTEGER;
}