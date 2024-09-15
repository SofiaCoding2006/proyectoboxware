$(document).ready(function() {
    $('#miTabla').DataTable({
        "searching": false, // Elimina la barra de búsqueda
          "dom":false
    });
     // Para vincular la barra de busqueda creada
     $('#customSearch').on('keyup', function() {
        table.search(this.value).draw(); // Filtra la tabla según el valor ingresado
    });
});


   
