var arrayEventos = [["El Rey Le&oacute;n", 55, "2016-04-29", "Teatro", "Musical", 4.5, "Madrid", "Madrid", "reyleon1.jpg"],
    ["Festival de M&eacute;rida", 8.4, "2016-07-06", "Teatro", "Nose", 4, "M&eacute;rida", "Teatro de M&eacute;rida", "festivalmerida1.jpg"],
    ["Mutua Madrid Open", 8, "2016-05-07", "Deportes", "Tenis", 0, "Madrid", "Caja M&aacute;gica", "mutua1.jpg"],
    ["Cleopatra y la fascinaci&oacute;n", 7, "2016-04-30", "Expo", "Expo", 3.5, "Madrid", "Arte Canal", "cleopatra1.jpg"],
    ["Chimp&oacute;n", 5, "2016-04-28", "Teatro", "Nose", 5, "Getafe", "Rigoberta Mench&uacute;", "chimpon1.jpg"]
];

var arrayEventosPlan = new Array();

function iniciar(){
    crearListas(arrayEventos);                        // Llama al metodo que inserta en el HTML las cartas, y coloca el valor de la busqueda correcto.
	fileDropInit();
}

function crearListas() {                    // Recibe un array y lo introduce como eventos en formato lista

    $("#divEventos").text("");			         // Elimina los eventos actuales
    for(i=0;i<arrayEventos.length;i++){
        var div = document.createElement('div');
        div.className = "row";
        
        div.innerHTML =
            '<div class="col-sm-1 col-md-2"></div>' +
            '<div class="col-md-7" onclick="window.open(\'evento.html\',\'mywindow\');">' +
                '<div class="card list list-xs" >' +
                '<div class="list-image list-image-xs">' +
                    '<img class="img-responsive" src="images/eventos/'+arrayEventos[i][8]+'">' +
                '</div>' +
                '<div class="card-title">'+arrayEventos[i][0]+'</div>' +
                    '<div class="card-content">' +
                        '<div class="card_content_1">' +
                            '<span class="catEvento">'+arrayEventos[i][3]+'</span>' +
                            '<div class="starsEvento"><input class="rating-loading" id="stars'+(i+1)+'"><a id="val'+(i+1)+'">'+arrayEventos[i][5]+'</a></div>' +
                        '</div>' +
                    '<div class="card_content_2">' +
                        '<span class="subcatEvento">'+arrayEventos[i][4]+'</span>' +
                        '<span class="fechaEvento">'+arrayEventos[i][2]+'</span>' +
                    '</div>' +
                    '<div class="card_content_3">' +
                        '<div class="card_ubicacion">' +
                            '<span class="ciuEvento">'+arrayEventos[i][6]+'</span>' +
                            '<br>' +
                            '<span class="ciuEvento">'+arrayEventos[i][7]+'</span>' +
                        '</div>' +
                        '<span class="card_precio">'+arrayEventos[i][1]+'&#8364</span>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '</div>' +
            '<div class="col-sm-1 col-md-1">' +
                '<button type="button" class="btn btn-default btn-lg" id="botonagregar" onclick="anadirAlPlan('+i+')">' +
					'<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>' +
                '</button>' +
            '</div>' +
            '<div class="col-sm-1 col-md-2">' +
            '</div> '
        ;
        document.getElementById('tarjetero').appendChild(div);
    }
    iniciarValoraciones(arrayEventos.length);
    arrayEventosPlan[i]=i;
};



function iniciarValoraciones(numero){                                                       // Inicializa las valoraciones de cada evento.
    for(i=1;i<=numero;i++){
        var valoracion=$('#val'+i).text();                                                  // Lee en un elemento del evento la valoracion, escrita.
        $('#val'+i).remove();                                                               // Elimina dicho elemento.
        $('#stars'+i).rating({displayOnly: true, min: 0, max: 5, step: 0.5, size: 'xs'});   // Inicializa la valoracion.
        $('#stars'+i).rating('update', valoracion).val();                                   // Coloca el numero de estrellas exacto.
    }
}

function anadirAlPlan(i){
    var div = document.createElement('div');
    div.className = "row";
    div.id = "plan"+i;
    div.innerHTML =
		'<div class="col-sm-1 col-md-2"></div>' +
        '<div class="col-md-7" onclick="window.open(\'evento.html\',\'mywindow\');">' +
			'<a href="evento.html"></a>' +
            '<div class="card list list-xs">' +
            '<div class="list-image list-image-xs">' +
                '<img class="img-responsive" src="images/eventos/'+arrayEventos[i][8]+'">' +
            '</div>' +
            '<div class="card-title">'+arrayEventos[i][0]+'</div>' +
                '<div class="card-content">' +
                    '<div class="card_content_1">' +
                        '<span class="catEvento">'+arrayEventos[i][3]+'</span>' +
                        '<div class="starsEvento"><input class="rating-loading " id="starsPlan'+(i+1)+'"><a id="valPlan'+(i+1)+'">'+arrayEventos[i][5]+'</a></div>' +
                    '</div>' +
                '<div class="card_content_2">' +
                    '<span class="subcatEvento">'+arrayEventos[i][4]+'</span>' +
                    '<span class="fechaEvento">'+arrayEventos[i][2]+'</span>' +
                '</div>' +
                '<div class="card_content_3">' +
                    '<div class="card_ubicacion">' +
                        '<span class="ciuEvento">'+arrayEventos[i][6]+'</span>' +
                        '<br>' +
                        '<span class="ciuEvento">'+arrayEventos[i][7]+'</span>' +
                    '</div>' +
                    '<span class="card_precio">'+arrayEventos[i][1]+'&#8364</span>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '</div>' +
        '<div class="col-sm-1 col-md-1">' +
			'<div class="input-group clockpicker">' +
				'<input id="relojPlan" type="text" class="form-control" value="Hora">' +
				'<span class="input-group-addon">' +
				'<span class="glyphicon glyphicon-time"></span>' +
				'</span>' +
			'</div>' +
            '<button type="button" class="btn btn-default btn-lg" id="botonborrar" onclick="borrarDelPlan('+i+')">' +
                '<span class="glyphicon glyphicon-minus" aria-hidden="true"></span>' +
            '</button>' +
        '</div>' +
        '<div class="col-sm-1 col-md-2">' +
        '</div> '
    ;
    document.getElementById('recolectordeplanes').appendChild(div);
    iniciarValoracionesPlan(i+1);
	$('.clockpicker').clockpicker({
		autoclose: true
	});
}

function iniciarValoracionesPlan(i){                                                       // Inicializa las valoraciones de cada evento.
    var valoracion=$('#valPlan'+i).text();                                                  // Lee en un elemento del evento la valoracion, escrita.
    $('#valPlan'+i).remove();                                                               // Elimina dicho elemento.
    $('#starsPlan'+i).rating({displayOnly: true, min: 0, max: 5, step: 0.5, size: 'xs'});   // Inicializa la valoracion.
    $('#starsPlan'+i).rating('update', valoracion).val();                                   // Coloca el numero de estrellas exacto.
}

function borrarDelPlan(i){
    var planBorrar=$('#plan'+i);
    planBorrar.remove();
}

function validatePlan(){
	var a = validateNombrePlan();
	var b = validateDescPlan();
	verPlan(a,b);
}

function verPlan(a,b){
	if (a == true && b == true){
		window.location.href = "vistadelplan.html" ;
	}
}

function validateNombrePlan(){
    var element = document.getElementById('nombreplan');
    var x = element.value;
	
    if (x.length == 0) {
        element.setAttribute("style","border:1px solid red");   
        var z = document.getElementById('formError');
        z.style.visibility = "visible";
		return false;
    }
    else {
        element.setAttribute("style","border: 1px solid #ccc"); 
        var z = document.getElementById('formError');
        z.style.visibility = "hidden";
        return true;
    }
}

function validateDescPlan(){
    var element = document.getElementById('descplan');
	var x = element.value;
	
    if (x.length == 0) {
        element.setAttribute("style","border:1px solid red");
        var z = document.getElementById('formError');
        z.style.visibility = "visible";
		return false;
    }
    else {
        element.setAttribute("style","border: 1px solid #ccc"); 
        var z = document.getElementById('formError');
        z.style.visibility = "hidden";
        return true;
    }
}



function fileDropInit(){
 $('#dropZone').filedrop({
    fallback_id: 'upload_button',   // an identifier of a standard file input element, becomes the target of "click" events on the dropzone
    url: 'upload.php',              // upload handler, handles each file separately, can also be a function taking the file and returning a url
    paramname: 'userfile',          // POST parameter name used on serverside to reference file, can also be a function taking the filename and returning the paramname
    withCredentials: true,          // make a cross-origin request with cookies
    data: {
        param1: 'value1',           // send POST variables
        param2: function(){
            return calculated_data; // calculate data at time of upload
        },
    },
    headers: {          // Send additional request headers
        'header': 'value'
    },
    error: function(err, file) {
        switch(err) {
            case 'BrowserNotSupported':
                alert('browser does not support HTML5 drag and drop')
                break;
            case 'TooManyFiles':
                // user uploaded more than 'maxfiles'
                break;
            case 'FileTooLarge':
                // program encountered a file whose size is greater than 'maxfilesize'
                // FileTooLarge also has access to the file which was too large
                // use file.name to reference the filename of the culprit file
                break;
            case 'FileTypeNotAllowed':
    alert("Tipo no permitido");
                // The file type is not in the specified list 'allowedfiletypes'
                break;
            case 'FileExtensionNotAllowed':
    alert("Extension no permitida");
                // The file extension is not in the specified list 'allowedfileextensions'
                break;
            default:
                break;
        }
    },
    allowedfiletypes: ['image/jpeg','image/png','image/gif'],   // filetypes allowed by Content-Type.  Empty array means no restrictions
    allowedfileextensions: ['.jpg','.jpeg','.png','.gif'], // file extensions allowed. Empty array means no restrictions
    maxfiles: 25,
    maxfilesize: 20,    // max file size in MBs
    dragOver: function() {
        // user dragging files over #dropzone
   $('#dropZone').css('background', 'blue');
    },
    dragLeave: function() {
        // user dragging files out of #dropzone
  $('#dropZone').css('background', 'gray');
    },
    docOver: function() {
  //console.log("HOLAAAA");
        // user dragging files anywhere inside the browser document window
    },
    docLeave: function() {
        // user dragging files out of the browser document window
    },
    drop: function() {
  //alert("LLAMO A PHP¿?");
        // user drops file
    },
    uploadStarted: function(i, file, len){
  console.log("ESTOY SUBEINDO");
        // a file began uploading
        // i = index => 0, 1, 2, 3, 4 etc
        // file is the actual file of the index
        // len = total files user dropped
    },
    uploadFinished: function(i, file, response, time) {
        // response is the data you got back from server in JSON format.
   alert("SUBIDO");
    },
    progressUpdated: function(i, file, progress) {
        // this function is used for large files and updates intermittently
        // progress is the integer value of file being uploaded percentage to completion
    },
    globalProgressUpdated: function(progress) {
        // progress for all the files uploaded on the current instance (percentage)
        // ex: $('#progress div').width(progress+"%");
    },
    speedUpdated: function(i, file, speed) {
        // speed in kb/s
    },
    rename: function(name) {
        // name in string format
        // must return alternate name as string
    },
    beforeEach: function(file) {
        // file is a file object
        // return false to cancel upload
    },
    beforeSend: function(file, i, done) {
        // file is a file object
        // i is the file index
        // call done() to start the upload
    },
    afterAll: function() {
        // runs after all files have been uploaded or otherwise dealt with
    }
});

}