/*Estructuras de Datos y Métodos
Cine
• Diseñar un algoritmo que recorra las
butacas de una sala de cine y determine
cuántas butacas desocupadas hay
• Suponga que para modelar este
problema, se utiliza un arreglo con
valores lógicos
• La presencia de un valor verdadero (true) en
el arreglo indica que la butaca está ocupada
• La presencia de un valor falso (false) en el
arreglo indica que la butaca está desocupada*/

let butacas: boolean[] = new Array(5);
butacas[0] = false;
butacas[1] = true;
butacas[2] = true;
butacas[3] = false;
butacas[4] = true;
let contadorVacios = 0;
let contadorOcupados = 0;
for (let i = 0; i < butacas.length; i++) {
  if (butacas[i] === false) {
    contadorVacios = contadorVacios + 1;
  }
}
console.log("hay", contadorVacios, "butacas disponibles");

for (let i = 0; i < butacas.length; i++) {
  if (butacas[i] === true) {
    contadorOcupados = contadorOcupados + 1;
  }
}
console.log("hay", contadorOcupados, "butacas ocupadas");
