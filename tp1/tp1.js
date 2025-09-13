//Guadalupe Cuello
//comision 1
//https://youtu.be/V9P_4M-KzCM


let img40;
let cant1=5;
let cant2=4;
let colorCirculo;

function preload() {
  img40 = loadImage('data/40.jpg');
}

function setup() {
  createCanvas (800, 400);
  img40.resize(400, 400);
  colorCirculo = color (255);
}


function draw() {
  background (255);
  dibujarGrilla(400, 450, 25, -25, 100, 100);
  image(img40, 0, 0, 400, 400);
  print(mouseX, mouseY);
}
