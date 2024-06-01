

document.getElementById("enviar").addEventListener("click", function(event){
    event.preventDefault(); // Evita que el formulario se envíe por defecto
    var dato1 = document.getElementById("correo").value; // Obtiene el valor del input
    var dato2 = document.getElementById("clave").value
    if (dato1 == "" || dato2 ==""){
        mensaje = "*Completar campos obligatorios"  
        var mensajeElement = document.getElementById("cartel");
        mensajeElement.textContent = mensaje;
    } else{
        window.location.href = "inicio.html"

    }
  

});

/*

links a para consumo de las API'S

https://my-api.plantnet.org/v2/languages?api-key=2b10NpHum4OcyGR1pzPmTfEjuu
https://my-api.plantnet.org/v2/species?api-key=2b10NpHum4OcyGR1pzPmTfEjuu


*/

