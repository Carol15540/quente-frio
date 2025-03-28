let x;
let y;

function setup() {
  createCanvas(600, 600);
  x = random(300);
  x = int(x);
  y = random(300);
  y = int(y);
}

function draw() {
  background(00, 083, 79);
  x = x + random(-5,5);
  y = y + random(-5,5);
  x = constrain(x,0,400);
  y = constrain(y,0,400);
  let distancia;
  distancia = dist(mouseX, mouseY, x, y);
  
  fill(0, 253, 290);
  circle(mouseX, mouseY, distancia);
  //circle(x, y, 10);

  if (distancia < 3) {
    text("Encontrei!", 200, 200);
    noLoop();
  }
}
