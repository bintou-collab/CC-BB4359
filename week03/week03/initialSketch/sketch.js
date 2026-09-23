// For your initial sketch

function setup() {
  createCanvas(100, 100); //100px by 100px?
}
function draw() {
  background(255,0,0);
  //text("Initial Sketch", 100, height/2);
  for (i=0; i<10; i++){
    for (j=0; j<10; j++){
      ellipse(width/2, height/2, 100-i*30+j*20, 200-i*30+j*20);
      if ((i%5==4 && j%5===4) || (i%5==4 && j%5===1)){
        fill(0,255,255);
      }
    else{
      fill(255,255,0);
    }
    }
  }

}
