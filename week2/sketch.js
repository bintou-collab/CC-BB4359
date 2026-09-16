//global variables
let x = 200;
let y = 100;
let xSpeed = 1;
let ySpeed = 1;
let size = 100;
let bounceSize = 150;

function setup() {
  createCanvas(500, 400); //size of the canvas
  fill(191,0,255); // starting color of the circle
}

function draw() {    
  background(230, 230, 255); // background color
  circle(x, y, size); // starting location = top left corner of canvas
  bouncingCircle(); // call function to start the circle bounceing around the canvas
  x += xSpeed;
  y += ySpeed;
}


function bouncingCircle(){
  if (x > width - size/2 || x< size/2){ // size/2 =make sure it's touching the edges
    fill(random(0,255),0,255); // random colors everytime it hits x axis
    xSpeed = xSpeed * -1;
    if (size<100){
      size+= 1;
    }
  }

  if (y > height - size/2 || y< size/2){ // size/2 =make sure it's touching the edges
    fill(random(0,255),80,50); // random colors everytime it hits y axis
    ySpeed = ySpeed * -1;
    if (size>=100){
      size = size - random(10,30);
    }
  
  }
}
