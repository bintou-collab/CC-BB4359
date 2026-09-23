// p5Polar Template
// https://github.com/liz-peng/p5.Polar
// https://liz-peng.github.io/p5.Polar/
// Review the index.html for the <script></script> 

function setup() {
  createCanvas(100, 100);
}

function draw() {
  background(255,0,0);
  //text("p5.Polar Template", 100, height/2);
  // Insert your drawing here
  setCenter(width/2, height/2);
    fill(0,255,255);
    polarEllipses(5, 10, 45, 0);
    

    // polarEllipses(5, 0, 0, 2, function(...args) {
    //     fill(args[0]*10, args[0]*40, args[0]*40, 255); //color
    //     args[1]= args[0]*90;
    //     args[2] = 20;
    //     args[3] = 10;
    //     return args;     
    // });
    // polarEllipses(5, 0, 0, 2, function(...args) {
    //     fill(args[0]*10, args[0]*40, args[0]*40, 255); //color
    //     args[1]= args[0]*90;
    //     args[2] = 30;
    //     args[3] = 5;
    //     return args;     
    // });

//args[0] = number of ellipses
//args[1]= angle
//args[2]= width 
//args[3]= height
//args[4]= distance
    
  

  



}
