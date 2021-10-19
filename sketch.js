let xChanging = 0;
let speed = 0;

function preload() {
  atm = loadModel('ATM.obj', true);

dollar = loadModel('dollar.obj', true);
}

function setup() {
  createCanvas(800, 800, WEBGL);
  background(0);
}

function mouseClicked() {
  // if mouse location is within the atm location

  if (mouseX > 100 && mouseX <800 & mouseY > 100 && mouseY < 800) {
    if (speed === 0) {
      // console.log('testing');
      // push();
      // stroke(color(133,187,101));
      // fill(color(34,141,87));
      // translate(xChanging, 160);
      // rotateX(170);
      // rotateY(170);
      // scale(.3);
      // model(dollar);
      // pop();
      // xChanging = xChanging - speed;
      speed = -1;
    } else {
      speed = 0;
    }

  }


  // then draw dollar bill


  // else, do nothing

}

function draw() {
  background(0);
  angleMode(DEGREES);


  push();
  stroke(color(133,187,101));
  fill(color(34,141,87));
  translate(160 + xChanging, 160);
  xChanging = xChanging + speed;
  if (xChanging < (width/2 + 160)*-1){
    //draw new dollar bill
    speed = 0;
    xChanging = 0;
    //   push();
    //     translate(160 + xChanging, 160);
    //   rotateX(170);
    // rotateY(170);
    // // rotateY(frameCount * 0.01)
    // scale(.3);
    // model(dollar);
    // pop();
    console.log('edge')
  }
  // console.log(xChanging);
  // rotateZ(frameCount * 0.01)
  // rotateX(frameCount * 0.01)
  rotateX(170);
  rotateY(170);
  // rotateY(frameCount * 0.01)
  scale(.3);
  model(dollar);
  pop();



  push();
  stroke(color(500));
  fill(color(169,169,169));
  translate(280, 260);
  // rotateZ(frameCount * 0.01)
  // rotateX(frameCount * 0.01)
  rotateX(170);
  rotateY(270);
  // rotateY(frameCount * 0.01)
  scale(2);
  model(atm);
  pop();



}
