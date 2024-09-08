function abrirNuevaPagina() {
    // Obtener los datos de la tabla
    var tabla = document.getElementById("myTable");
    var filas = tabla.rows;
    var datos = [];

    // Recorrer las filas y obtener los valores
    for (var i = 1; i < filas.length; i++) {
        var celdas = filas[i].cells;
        var filaDatos = [];

       // Recorrer las celdas y obtener los valores
       for (var j = 0; j < celdas.length; j++) {
        var valor = celdas[j].innerText;

        // Si es la columna "LastLogon" (ajustar el índice según corresponda)
        if (j === 5) {  // Cambia 5 o 4 según el índice de tu columna LastLogon
            //console.log("Procesando columna LastLogon en la fila " + i + ": " + valor);  // Debug

            // Verificar si es un número y convertirlo a texto (si es un timestamp, por ejemplo)
            if (!isNaN(valor)) {
                // Suponiendo que es una fecha timestamp, convertirla a una fecha legible
                var fecha = new Date(parseInt(valor));
                valor = fecha.toLocaleString(); // Convertir la fecha al formato local
            } else {
                valor = valor.toString(); // Convertir cualquier otra cosa a texto
            }
        }

        filaDatos.push(valor);
    }

        datos.push(filaDatos);
    }

    // Abrir la nueva página y pasar los datos como parámetros en la URL
    //var urlNuevaPagina = "tablaconpaginacion.html?datos=" + encodeURIComponent(JSON.stringify(datos));
    //window.open(urlNuevaPagina);
    //window.close("index.html");
    
    // Guardar los datos en localStorage
    localStorage.setItem("datos", JSON.stringify(datos));
    // Abrir la nueva página sin pasar los datos en la URL
    window.open("tablaconpaginacion.html");
    // Cerrar la página actual
    window.close("index.html");
}

