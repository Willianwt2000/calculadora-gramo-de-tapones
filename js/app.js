const pesoGramos = document.getElementById('pesoG');
const cantidadTapa = document.getElementById('cantidadTapa');
const cantidadEmpacar = document.getElementById('cantidadEmpacar');
const screenPorDefecto = document.getElementById('screenPorDefecto');
const screenRedondeado = document.getElementById('screenRedondeado');
const btn = document.querySelector('button');
const btnClear= document.querySelector('#clear');



const calcularGramo = () => {
  try {
    let pesoG = parseFloat(pesoGramos.value);
    let cantidadTapones = parseInt(cantidadTapa.value);
    let cantidadEmpaque = parseInt(cantidadEmpacar.value);

    if (!pesoG || !cantidadTapones || !cantidadEmpaque) {
      throw new Error("Por favor complete todos los campos");
    }

    let resultado = (pesoG / cantidadTapones) * (cantidadEmpaque / 454);

    screenPorDefecto.innerHTML = `${resultado.toFixed(4)} LB`;
    screenRedondeado.innerHTML = `${Math.round(resultado)} LB`;
  } catch (error) {
    alert(error.message)
  }


};
function inputsClear() {
  pesoGramos.value = '';
  cantidadTapa.value = '';
  cantidadEmpacar.value = '';
  screenPorDefecto.innerHTML = '';
  screenRedondeado.innerHTML = '';
}



btn.addEventListener('click', calcularGramo);
btnClear.addEventListener('click', inputsClear);