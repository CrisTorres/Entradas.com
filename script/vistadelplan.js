var arrayEventos = [["El Rey Le&oacute;n", 55, "2016-04-29", "Teatro", "Musical", 4.5, "Madrid", "Madrid", "reyleon1.jpg", "16:00"],
    ["Festival de M&eacute;rida", 8.4, "2016-07-06", "Teatro", "Nose", 4, "M&eacute;rida", "Teatro de M&eacute;rida", "festivalmerida1.jpg", "19:00"]
];

var arrayEventosPlan = new Array();

function iniciar(){
	iniciarValoracionPlan();
	crearListas();                     // Llama al metodo que inserta en el HTML las cartas, y coloca el valor de la busqueda correcto.
}

function crearListas() {                    // Recibe un array y lo introduce como eventos en formato lista

    for(i=0;i<arrayEventos.length;i++){
        var div = document.createElement('div');
        div.className = "row";
        
        div.innerHTML =
            '<div class="col-sm-1 col-md-2"></div>' +
            '<div class="col-md-7">' +
                '<div class="card list list-xs" onclick="window.open(\'evento.html\',\'mywindow\');">' +
					'<div class="list-image list-image-xs">' +
						'<img class="img-responsive" src="images/eventos/'+arrayEventos[i][8]+'">' +
					'</div>' +
					'<div class="card-title">'+arrayEventos[i][0]+'</div>' +
						'<div class="card-content">' +
							'<div class="card_content_1">' +
								'<span class="catEvento">'+arrayEventos[i][3]+'</span>' +
								'<div class="starsEvento"><input class="rating-loading " id="stars'+(i+1)+'"><a id="val'+(i+1)+'">'+arrayEventos[i][5]+'</a></div>' +
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
				'<div class="input-group clockpicker" id="hora">' +
					'<input id="horatxt" type="text" class="form-control" value="'+arrayEventos[i][9]+'" disabled>' +
					'<span id="horaicono" class="input-group-addon">' +
						'<span id="horaicono" class="glyphicon glyphicon-time"></span>' +
					'</span>' +
				'</div>' +
            '</div>' +
            '<div class="col-sm-1 col-md-2"></div> '
        ;
        document.getElementById('elplan').appendChild(div);
    }
    iniciarValoraciones(arrayEventos.length);
    arrayEventosPlan[i]=i;
}

function iniciarValoraciones(numero){                                                       // Inicializa las valoraciones de cada evento.
    for(i=1;i<=numero;i++){
        var valoracion=$('#val'+i).text();                                                  // Lee en un elemento del evento la valoracion, escrita.
        $('#val'+i).remove();                                                               // Elimina dicho elemento.
        $('#stars'+i).rating({displayOnly: true, min: 0, max: 5, step: 0.5, size: 'xs'});   // Inicializa la valoracion.
        $('#stars'+i).rating('update', valoracion).val();                                   // Coloca el numero de estrellas exacto.
    }
}

function iniciarValoracionPlan(){                                                       // Inicializa las valoraciones de cada evento.
    var valoracion=$('#valPlan').text();                                                  // Lee en un elemento del evento la valoracion, escrita.
    $('#valPlan').remove();                                                               // Elimina dicho elemento.
    $('#starsPlan').rating({ min: 0, max: 5, step: 0.5, size: 'xs'});   // Inicializa la valoracion.
    $('#starsPlan').rating('update', valoracion).val();                                   // Coloca el numero de estrellas exacto.
}

function addUser(){
	var nombre = document.getElementById('nombreUsr');
	if(nombre==null){
		var div = document.createElement('div');
		div.className = "media";
		div.id = "newUsrPlan";
		
		div.innerHTML= 
				'<div class="media-left">' +
					'<a href="#">' +
					'<img class="media-object" src="http://placehold.it/64x64" alt="64x64">' +
					'</a>' +
				'</div>' +
				'<div class="media-body">' +
					'<h4 id="nombreUsr" class="media-heading txtanimo">UserName UserLastName  @UserTwitterAccount</h4>' +
					'<p class="txtanimo">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>' +
				'</div>'
		;
		var elem = document.getElementById('creabuton');
		elem.innerHTML = "Dejar el plan";
		elem.setAttribute( "onClick", "javascript: eraseUser();" );
		document.getElementById('creatuplan').appendChild(div);
	}
}

function eraseUser(){
	var usr = document.getElementById('newUsrPlan');
	if(!usr){
		alert("No existe");
		return;
	}
	var elem = document.getElementById('creabuton');
	elem.innerHTML = "¡Súmate al plan!";
	elem.setAttribute( "onClick", "javascript: addUser();" );
	usr.parentNode.removeChild(usr);
}