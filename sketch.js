function setup() {
  createCanvas(500, 500);
  // movemos la funcion del background al setup con el proposito de ir acumulando los dibujos en el loop de dibujo, cuando el backgriund esta en draw corra los elementos que dibujados anteriormente, en setup conserva la capa de color mientras evita borrar los dibujos anteriores
  background(0);
}

function draw() {
  fill(0);
  // noFill();
  stroke(255);
  // stroke(255, 20);
  strokeWeight(2);
  // tamaño del contorno de la linea -trazo

  // agregaremos una condicional que le indique al ordenador dibujar los circulos unicamente si el raton esta haciendo click, para lo que volvemos a usar la condicional if

  // le presentamos una nueva variable que se llamara "mouselsPress" que es una variable especial ya que es un booleno.

  // Una variable booleana, a menudo denominada simplemente "booleano", es un tipo de dato en programación que puede tener uno de dos valores posibles: verdadero (true) o falso (false). Estos dos valores representan las dos opciones binarias fundamentales, y se utilizan para realizar evaluaciones lógicas y tomar decisiones en programas de computadora.}

  // = asignación  // == comparación

  // si el usuario presiona el mouse, es una accion verdadera, procede a realizar la siguiente operación {}

  if (mouseIsPressed == true) {
    // circle(mouseX, mouseY, random(10, 100));
    // aqui colocamos la funcion my pattern
    // al ser una funcion que np es p5 el codigo toma los parametros de la funcion establecida al final
    // le pasamos poscion en x y y , y la dimencion, y la amp, amplitud
    myPattern(mouseX, mouseY, 50, mouseY / 10);
  }
}
function keyPressed() {
  save("dibujo.png");
  background(0);
}
// posicion en x, y, diametro, y amplitud de desplazamiento de los puntos
function myPattern(x, y, d, amp) {
  // agruparemos los comandos y comenzamos a dibujan el poligono con begim shape
  beginShape();
  vertex(x - d / 2 + random(-amp, amp), y - d / 2 + random(-amp, amp)); //0
  vertex(x + d / 2 + random(-amp, amp), y - d / 2 + random(-amp, amp)); //1
  vertex(x + d / 2 + random(-amp, amp), y + d / 2 + random(-amp, amp)); //2
  vertex(x - d / 2 + random(-amp, amp), y + d / 2 + random(-amp, amp)); //3
  endShape(CLOSE);
  // ES NECESARIO CERRAR PARA CONECTAR LOS PUNTOS
}
