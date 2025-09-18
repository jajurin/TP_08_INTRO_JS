function calcularEdadUsuario() {
    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;
  
    if (!nombre || !fecha) {
      document.getElementById("resultado").innerText = "Por favor ingresa  nombre y tu fecha nacimiento.";
      return;
    }
  
    const edad = calcularEdad(fecha);
  
    document.getElementById("resultado").innerText =
      `Hola ${nombre}, tienes ${edad} años!`;
      console.log( `Hola ${nombre}, tienes ${edad} años!`)

  }

  function buscarFrutaUsuario() {
    const fruta = document.getElementById("fruta").value.trim();
  
    if (!fruta) {
      document.getElementById("resultado").innerText =
        "Por favor ingresa el nombre de una fruta.";
      return;
    }
  
    let mensaje = "";
    if (buscarFruta(fruta)) {
      mensaje = `Sí, tenemos ${fruta}!`;
    } else {
      mensaje = `No, no tenemos ${fruta} ñieri!`;
    }
  
 
    document.getElementById("resultado").innerText = mensaje;
  
    console.log(mensaje);
  }

  function compararDatos() {
    let mensaje = "";
  
   
    const comparacion1 = (10 == "10");
    mensaje += `A. 10 == "10" ➝ ${comparacion1}\n`;
  
   
    const comparacion2 = (10 === "10");
    mensaje += `B. 10 === "10" ➝ ${comparacion2}\n`;

    mensaje += "Diferencia: '==' compara solo el valor, '===' compara valor y tipo.\n\n";
  

    mensaje += `C. typeof 10.6 ➝ ${typeof 10.6}\n\n`;
  
   
    const comparacion3 = (true == 1);
    mensaje += `D. true == 1 ➝ ${comparacion3}\n`;
    mensaje += "Conclusión: con '==' se hace conversión implícita. JavaScript considera true equivalente a 1.\n";
  
  
    document.getElementById("resultado").innerText = mensaje;
  
   
    console.log(mensaje);
  }
  function hacerEjercicioCiudad() {

    document.getElementById('resultado').innerHTML = '';


    const ciudad = {
        nombre: "Buenos Aires",
        fechaFundacion: "1536-02-02",
        poblacion: 3075646,
        extension: 203
    };


    mostrarObjeto(ciudad);
}


  
function doblar() {

  const input = document.getElementById("numeros").value;


  const array = input.split(",").map(num => Number(num));


  const duplicados = array.map(num => num * 2);


  document.getElementById("resultado").textContent = "Resultado: [" + duplicados.join(", ") + "]";
}
function dibujarTriangulo() {
  

  mostrarEnDOM("*");
  mostrarEnDOM("**");
  mostrarEnDOM("***");
  mostrarEnDOM("****");
  mostrarEnDOM("*****");


  console.log("*\n**\n***\n****\n*****");

  mostrarEnDOM("----*----");
  mostrarEnDOM("---***---");
  mostrarEnDOM("--*****--");
  mostrarEnDOM("-*******-");
  mostrarEnDOM("*********");


  console.log("----*----\n---***---\n--*****--\n-*******-\n*********");
}
function filtrarNombres() {

  document.getElementById('resultado').innerHTML = "";


  const input = prompt("Ingresa una lista de nombres separados por coma:");



  const nombres = input.split(",");

  const nombresConA = nombres.filter(nombre => nombre[0]?.toUpperCase() === 'A');

  if (nombresConA.length === 0) {
      mostrarEnDOM("No hay nombres que empiecen con la letra A.");
  } else {
      mostrarEnDOM("Nombres que empiezan con A:");
      nombresConA.forEach(nombre => mostrarEnDOM(nombre));
  }
}
function reemplazarPalabra() {
  
  document.getElementById('resultado').innerHTML = "";


  const texto = prompt("Ingresa una cadena de texto:");


  const palabraOriginal = prompt("Ingresa la palabra que deseas reemplazar:");


  const palabraNueva = prompt("Ingresa la palabra de reemplazo:");
  


  const resultado = texto.replaceAll(palabraOriginal, palabraNueva);


  mostrarEnDOM("Texto original: " + texto);
  mostrarEnDOM("Texto modificado: " + resultado);
}

function mostrarSubcadena() {

  document.getElementById('resultado').innerHTML = "";

  const texto = prompt("Ingresa una cadena de texto:");


  const numero = prompt("Ingresa un número:");



  const numeroNuevo = Number(numero);

  if (isNaN(numeroNuevo) || (numeroNuevo < 0 )|| numeroNuevo>texto.length) {
      mostrarEnDOM("El número ingresado no es válido.");
      return;
  }


  const resultado = texto.slice(0, numeroNuevo);

 
  mostrarEnDOM("Cadena original: " + texto);
  mostrarEnDOM("Primeros " + numeroNuevo + " caracteres: " + resultado);
}

function stringConSeparador() {

  document.getElementById("resultado").innerHTML = "";


  const input = prompt("Ingresa una lista de elementos separados por coma:");

  if (!input) {
    mostrarEnDOM("No ingresaste nada esta vez.");
    return;
  }

  const array = input.split(",");


  const resultado = array.join(" - ");


  mostrarEnDOM("Resultado dado: " + resultado);
}

function calcularRecaudacion() {

  document.getElementById("resultado").innerHTML = "";


  const input = prompt('Ingresa los pedidos asi "nombre:total", separados por coma.');

  if (!input) {
    mostrarEnDOM("No ingresaste nada denuevo.");
    return;
  }


  const pedidos = input.split(",");

  let total = 0;


  pedidos.forEach(pedido => {

    const [nombre, monto] = pedido.split(":");

    const valor = parseFloat(monto);

    if (!isNaN(valor)) {
      total += valor;
    }
  });


  mostrarEnDOM("Recaudación total: " + total.toFixed(2));
}