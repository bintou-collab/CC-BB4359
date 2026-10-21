
function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent('week5-sketch');
  rectMode(CENTER);
}

function draw() {
  background(0,200,255);
  
  //first hair puff on the left
  push();
  noStroke();
  translate(150,150);
  let angle = second();
  rotate(angle);
  fill(0); // color of the hair
  polarEllipses(10,90,20,20);
  pop();

  //second hair puff on the right
  push();
  noStroke();
  translate(350,150);
  let angle2 = second();
  rotate(angle2);
  fill(0); // color of the hair
  polarEllipses(10,90,20,20);
  pop();
 
  translate(width/2, height/2);
  //face
  push();
  noStroke();
  fill(150,75,0); //color of skin
  ellipse(0,0, 200, 240);
  pop();

  //bangs
  push();
  translate(0,-110);
  fill(0,0,0); // color of the hair
  ellipse(0,30,190,80);
  pop();

  //eyebrows
  push();
  fill(0);
  rotate(45);
  rect(-50,30,5,30,10);

  rotate(45);
  rect(-45,-30,5,30,10);
  pop();

  //right lashes
  push();
  rotate(45);
  fill(0);
  rect(20,-50,5,10,5);
  rect(27,-50,5,10,5);
  pop();

  //left lashes
  push();
  rotate(100);
  fill(0);
  rect(-40,-35,5,10,5);
  rect(-48,-33,5,10,5);
  pop();

  //eyes
  let xEye= 40;
  let yEye= 0;
  push();
  stroke(1); //eyeliner color
  strokeWeight(2); //eyeliner thickness
  fill(255,255,255);
  ellipse(-xEye, -yEye, 30, 20);
  ellipse(xEye, yEye, 30, 20);
  pop();
  //irises
  fill(90,30,23);
  ellipse(-xEye, -yEye, 15, 15);
  ellipse(xEye, yEye, 15, 15);
 
  //nose
  fill(0);
  rect(0,20,5,20,10);
  
  //mouth
  fill(255);
  ellipse(15, 70, 20, 20);
  push();
  rotate(-45);
  pop();

  blowingBubble();
 
}


function bubbleGum(){
  push();
  noStroke();
  fill(255,192,203,200);
  ellipse(0,0,300); // gum 
  pop();

  push();
  rotate(45);
  noStroke();
  fill(255,255,255,200);
  ellipse(-80,-10,50,100); //large light reflection
  ellipse(-80,70,20,20); //small light reflection
  pop();
}

function blowingBubble(){
  let i=millis()/10000;
  push();
  scale(sin(i));
  bubbleGum();
  pop();
}
