// p5.plotSvg + p5.Polar Template

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
  fill(0,0,0); // color of the hair
  polarEllipses(10,90,20,20);
  pop();

  //second hair puff on the right
  push();
  noStroke();
  translate(350,150);
  fill(0,0,0); // color of the hair
  polarEllipses(10,90,20,20);
  pop();

  //text welcoming users and instructing
  textFont('Verdana', 15);
  push();
  fill(0);
  textStyle(BOLD);
  text("Welcome to the Cultural Countdown", 100, 400);
  pop();
  fill(0);
  text("Choose the date and find out how long until then", 60, 420);
 
  translate(width/2, height/2);
  //face
  push();
  noStroke();
  fill(100,65,23); //color of skin
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
  
  //eyes
  let xEye= 40;
  let yEye= 0;
  push();
  fill(255,255,255);
  ellipse(-xEye, -yEye, 30, 20);
  ellipse(xEye, yEye, 30, 20);
  pop();

  fill(90,30,23);
  ellipse(-xEye, -yEye, 15, 15);
  ellipse(xEye, yEye, 15, 15);
 
  //nose
  fill(0);
  rect(0,20,5,20,10);
  
  //mouth
  fill(255);
  rect(0,70,130,50,10);
  
  //time 
  let d = day();
  let h = hour();
  let s = second();
  fill(0);
  textSize(20);
  text(`${d} :`,10,93,130, 60);
  textSize(10);
  text(`day`,0,113,110, 60);

  textSize(20);
  text(`${h} :`,45,93,130, 60);
  textSize(10);
  text(`hours`,35,113,110, 60);

  textSize(20);
  text(`${s}`,94,93,130, 60);
  textSize(10);
  text(`seconds`,75,113,110, 60);
  if (s===10){
    background(128,0,128);
    //ball bounces across the canvas
  }
  if (s===0){
    background(255,0,0);
  }
  
}

/*
This template uses the following sketch as a starting point: 
https://editor.p5js.org/golan/sketches/LRTXmDg2q

Additional references/info:
https://github.com/golanlevin/p5.plotSvg
https://github.com/liz-peng/p5.Polar
https://github.com/golanlevin/p5.plotSvg/blob/main/documentation.md#beginrecordsvg
https://github.com/golanlevin/p5.plotSvg/blob/main/documentation.md#endrecordsvg

*/