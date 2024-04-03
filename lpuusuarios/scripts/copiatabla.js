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
            filaDatos.push(celdas[j].innerText);
        }

        datos.push(filaDatos);
    }

    // Abrir la nueva página y pasar los datos como parámetros en la URL
    var urlNuevaPagina = "tablaconpaginacion.html?datos=" + encodeURIComponent(JSON.stringify(datos));
    window.open(urlNuevaPagina);
    window.close("index.html");
}
