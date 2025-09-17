
function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const fechaNac = new Date(fechaNacimiento);
  
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();
  

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
      edad--;
    }
  
    return edad;

  }

  const frutas = [
    "manzana", "banana", "pera", "uva", "sandía",
    "naranja", "kiwi", "mango", "frutilla", "cereza"
  ];
  

  function buscarFruta(fruta) {
    return frutas.includes(fruta.toLowerCase());
  }
  
function mostrarEnDOM(contenido) {
    const divResultado = document.getElementById('resultado');
    divResultado.innerHTML += contenido + '<br>';
}

function mostrarObjeto(obj) {
    for (let clave in obj) {
        if (obj.hasOwnProperty(clave)) {
            mostrarEnDOM(` ${clave} : `);
            mostrarEnDOM(` ${obj[clave]}`);
        }
    }
}
