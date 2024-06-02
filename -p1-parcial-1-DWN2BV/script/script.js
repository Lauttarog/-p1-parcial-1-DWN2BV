let discos = new Discos();

document.getElementById("cargar-disco").addEventListener("click", function() {
    discos.cargarPista();
});

document.getElementById("mostrar-discos").addEventListener("click", function() {
    discos.mostrarPistas("#container-pistas");
});