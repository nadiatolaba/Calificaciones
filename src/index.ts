let name: string = prompt("Ingrese el nombre del estudiante");
let promedio: number = 0;
while (name !== "") {
  let practica: number = Number(prompt("Ingrese la nota práctica"));
  let problemas: number = Number(prompt("Ingrese la nota de los problemas"));
  let teorica: number = Number(prompt("Ingrese la nota de la teoria"));
  if (
    practica >= 0 &&
    practica <= 10 &&
    problemas >= 0 &&
    problemas <= 10 &&
    teorica >= 0 &&
    teorica <= 10
  ) {
    promedio = practica * 0.1 + problemas * 0.5 + teorica * 0.4;
    console.log(name + "  Nota final   " + promedio);
  } else {
    console.log("los datos ingresados son erroneos");
  }
  name = prompt("ingrese el nombre del estudiante");
}
