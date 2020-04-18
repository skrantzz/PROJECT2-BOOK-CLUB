maxVel = 100;

maxRot = 0.5;

maxDistance = 500;

impulseDivisor = 10000;

canvasSize = 400;

var mySquare = {posX: 50, posY: 50, rot: 0, velX: 0, velY: 0, rotVel: 0};

function setup() {
  createCanvas(canvasSize, canvasSize);
  angleMode(DEGREES);
}

function draw() {
  background(255,127,80);
  noFill();
  stroke(255,255,255)
  
  //Physics calculations
  
    //Velocity addition
  
      //X
  const distanceX = mouseX - mySquare.posX;
  
  if (!(mySquare.velX > maxVel && mySquare.posX > mouseX) && 
      !(mySquare.velX < -1 * maxVel && mySquare.posX < mouseX) && 
      (Math.abs(distanceX) < maxDistance))
  {
    const distanceDifferenceX = maxDistance*Math.sign(distanceX) - distanceX;
    
    mySquare.velX += (distanceDifferenceX) / impulseDivisor;

    mySquare.velX = Math.min(mySquare.velX,maxVel);
    mySquare.velX = Math.max(mySquare.velX,maxVel * -1);
  }
  
  if (mySquare.posX < 25 && mySquare.velX < 0.0) {
    mySquare.velX = 0;
    mySquare.posX = 25;
  }
    
  if (mySquare.posX > canvasSize - 25 && mySquare.velX > 0.0) {
    mySquare.velX = 0;
    mySquare.posX = canvasSize - 25;
  }
  
      //Y
  const distanceY = mouseY - mySquare.posY;
  
  if (!(mySquare.velY > maxVel && mySquare.posY > mouseX) && 
      !(mySquare.velY < -1 * maxVel && mySquare.posY < mouseX) && 
      (Math.abs(distanceY) < maxDistance))
  {
    const distanceDifferenceY = maxDistance*Math.sign(distanceY) - distanceY;
    
    mySquare.velY += (distanceDifferenceY) / impulseDivisor;

    mySquare.velY = Math.min(mySquare.velY,maxVel);
    mySquare.velY = Math.max(mySquare.velY,maxVel * -1);
  }
  
  if (mySquare.posY < 25 && mySquare.velY < 0.0) {
    mySquare.velY = 0;
    mySquare.posY = 25;
  }
    
  if (mySquare.posY > canvasSize - 25 && mySquare.velY > 0.0) {
    mySquare.velY = 0;
    mySquare.posY = canvasSize - 25;
  }
  
  // rot
  //this code is crap but it works so ok
  if (!(mySquare.rot > maxRot && mySquare.posX > mouseX) &&
      !(mySquare.rot < -1 * maxRot && mySquare.posX < mouseX))
  {
    if (mySquare.posX > mouseX) {
      mySquare.rotVel += 0.01;
    }
    
    if (mySquare.posX < mouseX) {
      mySquare.rotVel -= 0.01;
    }
  }
    // Velocity modifying the location;
  
  mySquare.posX += mySquare.velX;
  mySquare.posY += mySquare.velY;
  mySquare.rot += mySquare.rotVel;
  translate(mySquare.posX,mySquare.posY);
  rotate(mySquare.rot);
  rect(-25,-25,50,50);
}