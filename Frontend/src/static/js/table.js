$(document).ready(function() {
    var table = $('#miTabla').DataTable({
        searching: false // Desactiva la barra de busqueda de DataTables
    });

    // Para vincular la barra de busqueda creadaE
    $('#customSearch').on('keyup', function() {
        table.search(this.value).draw(); // Filtra la tabla según el valor ingresado
    });
});