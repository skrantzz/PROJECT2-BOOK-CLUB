// import { create } from "handlebars";
maxVel = 3.5;

maxRot = 0.5;

maxDistance = 1000;


impulseMultiplier = 0.05;

function createSquare() {
  return {
    size : Math.ceil(Math.random() * 60 + 10),
    posX : Math.ceil(Math.random() * (windowWidth - 200) + 50),
    posY : Math.ceil(Math.random() * (windowHeight - 200) + 50),
    mouseModifierX: Math.random() * 200 - 100,
    mouseModifierY: Math.random() * 200 - 100,
    rot : Math.floor(Math.random() * 360),
    mouseModifierX : Math.random() * 176 - 88,
    mouseModifierY : Math.random() * 176 - 88,
    velX : 0,
    velY : 0,
    rotVel: 0
  };
}

var mySquares;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  mySquares = [createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare(),createSquare()];
  canvas.parent('p5-bg-wrapper');
  angleMode(DEGREES);
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);

  for (let i = 0; i < mySquares.length; i++) {
    const mySquare = mySquares[i];

    if(mySquare.posX >= windowWidth - mySquare.size/2) {
      mySquare.posX = Math.ceil(Math.random() * (windowWidth - 200) + 50)
    }

    if(mySquare.posY >= windowHeight - mySquare.size/2) {
      mySquare.posY = Math.ceil(Math.random() * (windowHeight - 200) + 50)
    }
  }
}

function draw() {
  background(255,127,80);
  noFill();
  stroke(255,255,255)
  
  //Physics calculations
  
    //Velocity addition
  
      //X
  for (let i = 0; i < mySquares.length; i++) {
    let mySquare = mySquares[i];

    //Vector stuff
    let vector = [mouseX + mySquare.mouseModifierX - mySquare.posX,mouseY + mySquare.mouseModifierY - mySquare.posY];
    let magnitude = Math.sqrt(Math.pow(mouseX - mySquare.posX,2) + Math.pow(mouseY - mySquare.posY,2));
    let unitVector = [vector[0]/magnitude,vector[1]/magnitude];

    if (!(mySquare.velX > maxVel && mySquare.posX > mouseX) && 
        !(mySquare.velX < -1 * maxVel && mySquare.posX < mouseX) && 
        (Math.abs(magnitude) < maxDistance))
    {
      mySquare.velX += unitVector[0] * impulseMultiplier;
      mySquare.velX = Math.min(mySquare.velX,maxVel);
      mySquare.velX = Math.max(mySquare.velX,-maxVel);
    }
    
    if (mySquare.posX < mySquare.size/2 && mySquare.velX < 0.0) {
      mySquare.velX = 0;
      mySquare.posX = mySquare.size/2;
    }
      
    if (mySquare.posX > windowWidth - mySquare.size/2 && mySquare.velX > 0.0) {
      mySquare.velX = 0;
      mySquare.posX = windowWidth - mySquare.size/2;
    }
    
        //Y
    
    if (!(mySquare.velY > maxVel && mySquare.posY > mouseX) && 
        !(mySquare.velY < -1 * maxVel && mySquare.posY < mouseX) && 
        (Math.abs(magnitude) < maxDistance))
    {
      
      mySquare.velY += (unitVector[1]) * impulseMultiplier;

      mySquare.velY = Math.min(mySquare.velY,maxVel);
      mySquare.velY = Math.max(mySquare.velY,maxVel * -1);
    }
    
    if (mySquare.posY < mySquare.size/2 && mySquare.velY < 0.0) {
      mySquare.velY = 0;
      mySquare.posY = mySquare.size/2;
    }
      
    if (mySquare.posY > windowHeight - mySquare.size/2 && mySquare.velY > 0.0) {
      mySquare.velY = 0;
      mySquare.posY = windowHeight - mySquare.size/2;
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
    //rotate(mySquare.rot);
    rect(mySquare.posX - (mySquare.size/2),mySquare.posY - (mySquare.size/2),mySquare.size,mySquare.size);
  }
}