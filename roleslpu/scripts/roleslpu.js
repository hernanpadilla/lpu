// scripts.js
function agregarasunto() {
    const select = document.getElementById('asunto');
    const rolSeleccionado = select.options[select.selectedIndex].text;

    if (rolSeleccionado) {
        const listaRoles = document.getElementById('lista-asunto');
        const nuevoRol = document.createElement('li');
        nuevoRol.textContent = rolSeleccionado;
        listaRoles.appendChild(nuevoRol);
    }
}

function quitarasunto() {
    const listaRoles = document.getElementById('lista-asunto');
    if (listaRoles.lastChild) {
        listaRoles.removeChild(listaRoles.lastChild);
    }
}
