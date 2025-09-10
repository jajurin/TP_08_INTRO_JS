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
      mensaje = `No, no tenemos ${fruta}!`;
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
    // Limpiar resultados anteriores
    document.getElementById('resultado').innerHTML = '';

    // **Ejercicio:** Crear el objeto ciudad
    const ciudad = {
        nombre: "Buenos Aires",
        fechaFundacion: "1536-02-02",
        poblacion: 3075646,
        extension: 203
    };


    mostrarObjeto(ciudad);
}

  
  