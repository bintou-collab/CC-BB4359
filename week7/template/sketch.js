let pMapper;
let quad0, quad1; // two

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    // create mapper object
    pMapper = createProjectionMapper(this);

    quad0 = pMapper.createQuadMap(200,200); // width height
    quad1 = pMapper.createQuadMap(500,500); 

    // loads calibration in the "maps" directory
    pMapper.load("maps/map.json");
}

function draw() {
    background(0);

    quad0.display("red");
    quad1.displaySketch(bintouBaysmoreSetup);
    //quad0.displaySketch(yourNameTexture);
}

function keyPressed() {
    switch (key) {
        case "c":
            pMapper.toggleCalibration();
            break;
        case "f":
            let fs = fullscreen();
            fullscreen(!fs);
            break;
        case "l":
            pMapper.load("maps/map.json");
            break;

        case "s":
            pMapper.save("map.json");
            break;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

var bg;
let lastMin;
function bintouBaysmoreSetup(pg) {
    pg.rectMode(CENTER);
    bg = color(0,200,255); //starting color
    lastMin = minute();
}
    // put your animation here
function randomColor(pg){
  bg = color(0,random(200),random(255));
}

function bintouBaysmoreTexture(pg) {
  let curMin = minute();
  if (curMin !== lastMin){
    randomColor();
    lastMin = curMin;
  }
  pg.background(bg);
  //first hair puff on the left
  pg.push();
  pg.noStroke();
  pg.translate(150,150);
  let angle = second();
  pg.rotate(angle);
  pg.fill(0); // color of the hair
  pg.polarEllipses(10,90,20,20);
  pg.pop();
  //second hair puff on the right
  pg.push();
  pg.noStroke();
  pg.translate(350,150);
  let angle2 = second();
  pg.rotate(angle2);
  pg.fill(0); // color of the hair
  pg.polarEllipses(10,90,20,20);
  pg.pop();
  pg.translate(width/2, height/2);
  //face
  pg.push();
  pg.noStroke();
  pg.fill(150,75,0); //color of skin
  pg.ellipse(0,0, 200, 240);
  pg.pop();
  //bangs
  pg.push();
  pg.translate(0,-110);
  pg.fill(0,0,0); //color of the hair
  pg.ellipse(0,30,190,80);
  pg.pop();
  //eyebrows
  pg.push();
  pg.fill(0);
  pg.rotate(45);
  pg.rect(-50,30,5,30,10);
  pg.rotate(45);
  pg.rect(-45,-30,5,30,10);
  pg.pop();
  //right lashes
  pg.push();
  pg.rotate(45);
  pg.fill(0);
  pg.rect(20,-50,5,10,5);
  pg.rect(27,-50,5,10,5);
  pg.pop();
  //left lashes
  pg.push();
  pg.rotate(100);
  pg.fill(0);
  pg.rect(-40,-35,5,10,5);
  pg.rect(-48,-33,5,10,5);
  pg.pop();
  //eyes
  let xEye= 40;
  let yEye= 0;
  pg.push();
  pg.stroke(1); //eyeliner color
  pg.strokeWeight(2); //eyeliner thickness
  pg.fill(255,255,255);
  pg.ellipse(-xEye, -yEye, 30, 20);
  pg.ellipse(xEye, yEye, 30, 20);
  pg.pop();
  //irises
  pg.fill(90,30,23);
  pg.ellipse(-xEye, -yEye, 15, 15);
  pg.ellipse(xEye, yEye, 15, 15);
  //nose
  pg.fill(0);
  pg.rect(0,20,5,20,10);  
  //mouth
  pg.fill(255);
  pg.ellipse(15, 70, 20, 20);
  pg.push();
  pg.rotate(-45);
  pg.pop();
  blowingBubble();
  for (i=0; i<60; i++){
     let count= 0;
     if (second()){
       count++;
     }
     if (count%2==0){
       poppedBubble();
     }
   }
}

function poppedBubble(pg){
  pg.push();
  pg.noStroke();
  pg.fill(255,192,203); 
  pg.polarEllipses(4.5,290,130,100);
  pg.pop();
}
function bubbleGum(pg){
  pg.push();
  pg.noStroke();
  pg.fill(255,192,203,200);
  pg.ellipse(0,0,300); 
  pg.pop();
  pg.push();
  pg.rotate(45);
  pg.noStroke();
  pg.fill(255,255,255,200);
  pg.ellipse(-80,-10,50,100); 
  pg.ellipse(-80,70,20,20); 
  pg.pop();
}
function blowingBubble(pg){
  let i=millis()/10000;
  pg.push();
  pg.translate(15,70);
  pg.scale(sin(i));
  bubbleGum();
  pg.pop();
}

