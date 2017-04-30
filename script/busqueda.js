var arrayEventos = [["El Rey Le&oacute;n", 55, "29/04/2016", "Teatro", "Musical", 4.5, "Madrid", "Madrid", "reyleon1.jpg"],
    ["Festival de M&eacute;rida", 8.4, "07/07/2016", "Teatro", "Nose", 4, "M&eacute;rida", "Teatro de M&eacute;rida", "festivalmerida1.jpg"],
    ["Mutua Madrid Open", 8, "07/05/2016", "Deportes", "Tenis", 0, "Madrid", "Caja M&aacute;gica", "mutua1.jpg"],
    ["Cleopatra", 7, "30/05/2016", "Exposiciones", "Exposiciones", 3.5, "Madrid", "Arte Canal", "cleopatra1.jpg"],
    ["Chimp&oacute;n", 5, "28/05/2016", "Teatro", "Nose", 5, "Getafe", "Rigoberta Mench&uacute;", "chimpon1.jpg"]
];

var arrayEventosFiltrados = new Array();

var arrayFiltros = new Array();

var arrayCategorias = ["M&uacute;sica", "Cine", "Teatro", "Ferias y congresos", "Exposiciones", "Deportes", "Familiares/Infantil"];

var ordenarPor = 0;

function iniciar(){                         // Funcion que inicializa los elementos necesarios en la busqueda.
    /*
    var a=String(document.URL);
    var partio = a.split("=");
    var busqueda = partio[1].split("&");
    console.log(busqueda);
    $(".miBusqueda").text("Mi búsqueda: "+busqueda[0]);
    */
    
    arrayEventosFiltrados=arrayEventos;
    crearCartas(arrayEventos);                        // Llama al metodo que inserta en el HTML las cartas, y coloca el valor de la busqueda correcto.
    var $range = $(".slider_precio");       // El slider del precio en filtros.
    $range.ionRangeSlider({
        type: "double",
        min: 5,
        max: 100,
        from: 5,
        to: 100
    });

    $("#fechaInicio").datepicker({          // El calendario de fechaInicio en filtros.
        firstDay: 1,
        onSelect: function(dateText, inst) {
        }
    });

    $("#fechaFin").datepicker({             // El calendario de fechaFin en filtros.
        firstDay: 1
    });

    modificarNumResult(arrayEventosFiltrados.length);
    loadingBar();

    $(".dropdown-menu").on('click', 'li a', function(){
      $(".ordenarPor:first-child").text($(this).text());
      $(".ordenarPor:first-child").val($(this).text());
      var numero = $(this).attr('data-value');
      loadingBar();
      ordenarPor = numero;
      filtrar();
   });
}

function crearListas() {                    // Recibe un array y lo introduce como eventos en formato lista

    $("#divEventos").text("");			         // Elimina los eventos actuales
    for(i=0;i<arrayEventosFiltrados.length;i++){
        var div = document.createElement('div');
        div.className = "col-md-12";

        div.innerHTML =
            '<div class="card list list-xs" onclick="window.location.href=\'evento.html\';">' +
            '<div class="list-image list-image-xs">' +
            '<img class="img-responsive" src="images/eventos/'+arrayEventosFiltrados[i][8]+'">' +
            '</div>' +
            '<div class="card-title">'+arrayEventosFiltrados[i][0]+'</div>' +
            '<div class="card-content">' +
            '<div class="card_content_1">' +
            '<span class="catEvento">'+arrayEventosFiltrados[i][3]+'</span>' +
            '<div class="starsEvento"><input class="rating-loading " id="stars'+(i+1)+'"><a id="val'+(i+1)+'">'+arrayEventosFiltrados[i][5]+'</a></div>' +
            '</div>' +
            '<div class="card_content_2">' +
            '<span class="subcatEvento">'+arrayEventosFiltrados[i][4]+'</span>' +
            '<span class="fechaEvento">'+arrayEventosFiltrados[i][2]+'</span>' +
            '</div>' +
            '<div class="card_content_3">' +
            '<div class="card_ubicacion">' +
            '<span class="ciuEvento">'+arrayEventosFiltrados[i][6]+'</span>' +
            '<br>' +
            '<span class="ciuEvento">'+arrayEventosFiltrados[i][7]+'</span>' +
            '</div>' +
            '<span class="card_precio">'+arrayEventosFiltrados[i][1]+'&#8364</span>' +
            '</div>' +
            '</div>' +
            '</div>'
        ;
        document.getElementById('divEventos').appendChild(div);
    }
    iniciarValoraciones(arrayEventosFiltrados.length);
    modificarNumResult(arrayEventosFiltrados.length);
};

function modificarNumResult(num){
    $("#numResultados").text(num+" resultados");
}

function crearCartas() {                    //  introduce como eventos en formato carta el array de filtrados

    $("#divEventos").text("");			         // Elimina los eventos actuales
    
    for(i=0;i<arrayEventosFiltrados.length;i++){
        
        var div = document.createElement('div');
        div.className = "col-md-4";
        div.innerHTML =
            '<div class="card" onclick="window.location.href=\'evento.html\';">' +
            '<div class="card-image">' +
            '<img class="img-responsive" src="images/eventos/'+arrayEventosFiltrados[i][8]+'">' +
            '</div>' +
            '<div class="card-title">'+arrayEventosFiltrados[i][0]+'</div>' +
            '<div class="card-content">' +
            '<div class="card_content_1">' +
            '<span class="catEvento">'+arrayEventosFiltrados[i][3]+'</span>' +
            '<div class="starsEvento"><input class="rating-loading" id="stars'+(i+1)+'"><a id="val'+(i+1)+'">'+arrayEventosFiltrados[i][5]+'</a></div>' +
            '</div>' +
            '<div class="card_content_2">' +
            '<span class="subcatEvento">'+arrayEventosFiltrados[i][4]+'</span>' +
            '<span class="fechaEvento">'+arrayEventosFiltrados[i][2]+'</span>' +
            '</div>' +
            '<div class="card_content_3">' +
            '<div class="card_ubicacion">' +
            '<span class="ciuEvento">'+arrayEventosFiltrados[i][6]+'</span>' +
            '<br>' +
            '<span class="ciuEvento">'+arrayEventosFiltrados[i][7]+'</span>' +
            '</div>' +
            '<span class="card_precio">'+arrayEventosFiltrados[i][1]+'&#8364</span>' +
            '</div>' +
            '</div>' +
            '</div>'
        ;
        document.getElementById('divEventos').appendChild(div);
    }
    iniciarValoraciones(arrayEventosFiltrados.length);
    modificarNumResult(arrayEventosFiltrados.length);
};


function iniciarValoraciones(numero){                                                        // Inicializa las valoraciones de cada evento.
    for(i=1;i<=numero;i++){
        var valoracion=$('#val'+i).text();                                                      // Lee en un elemento del evento la valoracion, escrita.
        $('#val'+i).remove();                                                                        // Elimina dicho elemento.
        $('#stars'+i).rating({displayOnly: true, min: 0, max: 5, step: 0.5, size: 'xs'});   // Inicializa la valoracion.
        $('#stars'+i).rating('update', valoracion).val();                                   // Coloca el numero de estrellas exacto.
    }
}


function loadingBar(){              /* Muestra una barra de cargando */
    $( ".nanobar" ).remove();
    var colorbar = new Nanobar({target: document.getElementById('header')});
    colorbar.go(100);
}

function cambiarListas(){
    $(".vistaLista").addClass("vistaListaSelected");
    $(".vistaCarta").removeClass("vistaCartaSelected");
    loadingBar();
    crearListas();
}
function cambiarCartas(){
    $(".vistaCarta").addClass("vistaCartaSelected");
    $(".vistaLista").removeClass("vistaListaSelected");
    loadingBar();
    crearCartas();
}

function nuevoFiltro(tipo, valor){     /* Observa si dicho filtro ya existe en el array */
    var filtro = new Object();                  // Se crea el nuevo en el array.
    filtro.tipo = tipo;
    filtro.valor = valor;
    arrayFiltros.push(filtro);
    
    filtrar();
}

function deleteFilter(tipo){                        // Tipo es un objeto que contiene un ID, por ejemplo: fechaInicioFilter
    /** Comprobamos si se ha aplicado dicho filtro primero */
    var i, existe=0;
    for(i = 0; i<arrayFiltros.length; i++) {
        if (arrayFiltros[i].tipo === tipo.id) {
            arrayFiltros.splice(i, 1);                  // Se elimina del array.
            $('#'+tipo.id).remove();                // Se elimina el filtro en HTML.
        }
    }
    filtrar();
}

function borrarTodos(){
     $("#filtrosAplicados").empty();
     loadingBar();
     arrayFiltros = [];
     filtrar();
}

function nuevoFechaInicio(){                                        // Crea el elemento filtro Fecha Inicio.
    loadingBar();
    var fecha = $("#fechaInicio").datepicker( "getDate" );          // Obtiene la fecha en Date.

    var dia = fecha.getDate();                                      // Obtiene el dia en numero.
    var mes = (fecha.getMonth() + 1);                               // Obtiene el mes en numero.
    if (dia < 10) dia = "0" + dia;                                  // Coloca el dia con 0X, si X no tiene 2 cifras. Ej: 9 -> 09.
    if (mes < 10) mes = "0" + mes;                                  // Coloca el mes con 0X, si X no tiene 2 cifras. Ej: 9 -> 09.
    var datestring = dia + "/" + mes + "/" + fecha.getFullYear();   // Crea la fecha. Despues, crea el elemento HTML.

    var object= new Object();
    object.id="fechaInicioFilter";
    deleteFilter(object);
    nuevoFiltro("fechaInicioFilter", datestring);                     // Metodo que comprueba si ya existe algun filtro del mismo tipo.

    var filtro = $('<div class="filterDiv" id="fechaInicioFilter" onclick="deleteFilter(this)"><span>Fecha Inicio: ' + datestring + '</span><img class="borrarImg" src="images/delete.png"></div>');
    $("#filtrosAplicados").append(filtro);                            // Lo introduce en en HTML.
}

function nuevoFechaFin(){
    loadingBar();
    var base=document.getElementsByClassName("barra_content2");
    var fecha = $("#fechaFin").datepicker( "getDate" );          // Obtiene la fecha en Date.

    var dia = fecha.getDate();                                      // Obtiene el dia en numero.
    var mes = (fecha.getMonth() + 1);                               // Obtiene el mes en numero.
    if (dia < 10) dia = "0" + dia;                                  // Coloca el dia con 0X, si X no tiene 2 cifras. Ej: 9 -> 09.
    if (mes < 10) mes = "0" + mes;                                  // Coloca el mes con 0X, si X no tiene 2 cifras. Ej: 9 -> 09.
    var datestring = dia + "/" + mes + "/" + fecha.getFullYear();   // Crea la fecha. Despues, crea el elemento HTML.

    var object= new Object();
    object.id="fechaFinFilter";
    deleteFilter(object);
    nuevoFiltro("fechaFinFilter", datestring);                     // Metodo que comprueba si ya existe algun filtro del mismo tipo.

    var filtro = $('<div class="filterDiv" id="fechaFinFilter" onclick="deleteFilter(this)"><span>Fecha Fin: ' + datestring + '</span><img class="borrarImg" src="images/delete.png"></div>');
    $("#filtrosAplicados").append(filtro);                            // Lo introduce en en HTML.
}

function nuevoPrecio(){
    loadingBar();
    var base=document.getElementsByClassName("barra_content2");
    var $slider = $(".slider_precio");          // Obtiene la fecha en Date.
    var data;
    var a=$(".slider_precio").data("ionRangeSlider");
    var euro = "\u20ac";
    var desde = a.result.from; // Desde
    var hasta = a.result.to;   // Hasta
    var price = desde + euro +" - " + hasta + euro;

    var object= new Object();
    object.id="precioFilter";
    deleteFilter(object);
    nuevoFiltro("precioFilter", price);                     // Metodo que comprueba si ya existe algun filtro del mismo tipo.


    var filtro = $('<div class="filterDiv" id="precioFilter" onclick="deleteFilter(this)"><span>Precio: ' + price + '</span><img class="borrarImg" src="images/delete.png"></div>');
    $("#filtrosAplicados").append(filtro);                            // Lo introduce en en HTML.
}

/*************************************** ******************/
function filtrar(){
    arrayEventosFiltrados = arrayEventos.slice();
    console.log("AL PRINCIPIO HAY:");
    console.log(arrayEventosFiltrados);
    for(i=0;i<arrayFiltros.length;i++){
        console.log("hay "+arrayEventosFiltrados.length);
        for(j=0;j<arrayEventosFiltrados.length;j++){
            console.log("soy tipo "+arrayFiltros[i].tipo);
            if(arrayFiltros[i].tipo=="fechaInicioFilter"){
                var fechaInicio = arrayFiltros[i].valor;
                var fechaInicioPartida = fechaInicio.split("/");
                
                var fecha = arrayEventosFiltrados[j][2];
                var fechaPartida = fecha.split("/");    //0 = Dia ; 1 = Mes; 2 = Año
                
                var dateInicio = new Date(fechaInicioPartida[2], fechaInicioPartida[1]-1, fechaInicioPartida[0]);
                var date = new Date(fechaPartida[2], fechaPartida[1]-1, fechaPartida[0]);
                
                console.log(date+" es menor que "+dateInicio);
                if(dateInicio>date){
                    arrayEventosFiltrados.splice(j, 1); // Si es menor que la fecha inicio, lo borro.
                    j--;
                }
            }
            
            if(arrayFiltros[i].tipo=="precioFilter"){
                var precioFiltro = arrayFiltros[i].valor;
                var precioFiltroPartio = precioFiltro.split("-");
                var precioMinimo = precioFiltroPartio[0].split("€");
                precioMinimo = parseFloat(precioMinimo[0]);
                var precioMax = precioFiltroPartio[1].split("€");
                precioMax = parseFloat(precioMax[0]);

                var precio = parseFloat(arrayEventosFiltrados[j][1]);
                console.log(precio+" es menor que "+precioMinimo);
                if(precio<precioMinimo) {
                    arrayEventosFiltrados.splice(j, 1);
                    j--;
                }
                if(precio>precioMax){
                    arrayEventosFiltrados.splice(j, 1);
                    j--;
                }
            }
            
            if(arrayFiltros[i].tipo=="categoriaFilter"){
                var categoriaFiltro = arrayFiltros[i].valor;
                var categoriaReal = arrayEventosFiltrados[j][3];
                console.log(categoriaReal+" y "+categoriaFiltro);
                if(categoriaFiltro!=categoriaReal){
                    arrayEventosFiltrados.splice(j, 1);
                    j--;
                }
            }
            
            if(arrayFiltros[i].tipo=="fechaFinFilter"){
                var fechaInicio = arrayFiltros[i].valor;
                var fechaInicioPartida = fechaInicio.split("/");
                
                var fecha = arrayEventosFiltrados[j][2];
                var fechaPartida = fecha.split("/");                                                    //0 = Dia ; 1 = Mes; 2 = Año
                
                var dateInicio = new Date(fechaInicioPartida[2], fechaInicioPartida[1]-1, fechaInicioPartida[0]);
                var date = new Date(fechaPartida[2], fechaPartida[1]-1, fechaPartida[0]);
                
                if(dateInicio<date){
                    arrayEventosFiltrados.splice(j, 1);                                                 // Si es mayor que la fecha fin, lo borro.
                    j--;
                }
            }
            
        }
        
    }
    if(ordenarPor == 1){            // Ordenar de mayor a menor precio
        arrayEventosFiltrados.sort(function (a, b){
            return (b[1] - a[1])
        })
    }
    else if(ordenarPor == 2){            // Ordenar de menor a mayor precio
        arrayEventosFiltrados.sort(function (a, b){
            return (a[1] - b[1])
        })
    }
    else if(ordenarPor == 3){            // Ordenar de mas recientes a menos       
        arrayEventosFiltrados.sort(function (a, b) {
            function parseDate(str) {
                var parts = str.split("/");
                return new Date(parts[2], parts[1]-1, parts[0]); // months are 0-based
            }
            return parseDate(a[2]) - parseDate(b[2]);
        }); 
    }
    
    if($(".vistaLista").hasClass("vistaListaSelected")) crearListas();      // En funcion del 
    else crearCartas();
    
}

function nuevaCategoria(numero){
    loadingBar();

    var object= new Object();
    object.id="categoriaFilter";

    deleteFilter(object);
    nuevoFiltro("categoriaFilter", arrayCategorias[numero]);                                // Metodo que comprueba si ya existe algun filtro del mismo tipo.

    var filtro = $('<div class="filterDiv" id="categoriaFilter" onclick="deleteFilter(this)"><span>Categor&iacute;a: ' + arrayCategorias[numero] + '</span><img class="borrarImg" src="images/delete.png"></div>');
    $("#filtrosAplicados").append(filtro);                            // Lo introduce en en HTML.
    
}

function ajustarAltura(ajustar){
    var tituloMax=0;
    var i=0;
    $(ajustar).each(function(className) {                                                           // Bucle que recorre todos los que tienen la misma clase.
        if ($(this).height() > tituloMax) { tituloMax = $(this).height(); }                 // Obtiene la altura maxima.
    });
    $(ajustar).height(tituloMax);                                                                           // Modifica la altura de esa clase.

}