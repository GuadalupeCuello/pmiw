function dibujarGrilla(px, px2, py, py2, s, s2 ) {

  //circulos de abajo
  for (let i = 0; i < cant1; i++) {
    for (let j = 0; j < cant1; j++) {
      let x = px + i * s;
      let y = py + j * s;
      fill (colorCirculo);
      stroke(0);
      dibujarCirculo(x, y, 93);
    }
  }

  //circulos de arriba
  for (let i =0; i < cant2; i++) {
    for (let j =0; j < cant1; j++) {
      let x = px2 + i * s2;
      let y = py2 + j * s2;
      fill (colorCirculo);
      stroke(0);
      dibujarCirculo(x, y, 93);
    }
  }


  let brillo = calcularBrillo(colorCirculo);

  if (brillo > 127) {
    print("Color claro");
  } else {
    print("Color oscuro");
  }
}
function dibujarCirculo(x, y, r) {

  for (let radio = r; radio > 0; radio -= 17) {
    let grosor = map(radio, r, 0, 4, 0.5);
    strokeWeight(grosor);
    circle(x, y, radio);
  }
}

function mousePressed() {
  colorCirculo = color(random(255), random(255), random(255));
}

function keyPressed() {
  if (key == 'r' || key == 'R') {
    colorCirculo = color(255);
  }
}

function calcularBrillo(c) {
  let r = red(c);
  let g = green(c);
  let b = blue(c);
  return (r + g + b) / 3.0;
}
