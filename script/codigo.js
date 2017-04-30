var imagen = ""
var color = ""
var sel = 0
var id_ant = ""
var precio = 0
var vacio = true
var global_onclick;
var global_onmouseover;
var global_onmousedown;
var numero = 0;
function ponerImagenVacia(id) {
	imagen = document.getElementById(id).src
	document.getElementById(id).src = "./images/vacio.png";
}
function ponerImagenOr(id) {
	document.getElementById(id).src = imagen;
}

function ponerImagenSel(id) {
	document.getElementById(id).src = "./images/butaca_seleccion.png";

	var onclick = document.getElementById(id).onclick;
	global_onclick = onclick;
	var aux1 = document.getElementById(id).onmouseout;
	var aux2 = document.getElementById(id).onmouseover;
	global_onmousedown = aux1;
	global_onmouseover = aux2;
	document.getElementById(id).onmouseout =null;
	document.getElementById(id).onmouseover =null;
	document.getElementById(id).onclick =null;
	if(id == "oro1" || id == "oro2" || id == "palco1" || id == "palco2") precio += 60;
	if(id == "platea1" || id == "platea2" || id == "platea3") precio += 50;
    $('#precio_carrito').text(precio);
	$('#precio_total').text(precio);
	$('#tipo_op').text("seleccionada");
	$('.btn').attr("disabled", false);
	$("#mensaje").fadeIn("slow");
	setTimeout(function(){ $( "#mensaje" ).fadeOut(); }, 1500);
	if(vacio == true) {
		$('.carro_vacio').remove();
		$('#carro_vacio').remove();
		vacio = false;
	}

	if(id == "oro1" || id == "oro2" || id == "palco1" || id == "palco2") {
		$(".dropdown-menu").prepend("<li class=\'"+id+"\'><a><span onclick=\"borrarElemento(\'"+id+"\')\" class=\"glyphicon glyphicon-trash\" aria-hidden='true'></span>Butaca "+id+", 60 &#8364</a></li>");
	} else {
		$(".dropdown-menu").prepend("<li class=\'"+id+"\'><a><span onclick=\"borrarElemento(\'"+id+"\')\" class=\"glyphicon glyphicon-trash\" aria-hidden='true'></span>Butaca "+id+", 50 &#8364</a></li>");
	}
	numero += 1;
	$('#num_carrito').text(numero);
}

function borrarElemento(id) {
	var r = confirm("¿Desea borrar la butaca?");
	if (!(r == true)) {
		return;
	} 
	if(id == "oro1" || id == "oro2" || id == "palco1" || id == "palco2") {
		document.getElementById(id).src = "./images/butaca_palco.PNG";
	} else {
		document.getElementById(id).src = "./images/butaca_plateaA.PNG";
	}
	$('#tipo_op').text("borrada");
	if(id == "oro1" || id == "oro2" || id == "palco1" || id == "palco2") precio -= 60;
	if(id == "platea1" || id == "platea2" || id == "platea3") precio -= 50;
	$('#precio_total').text(precio);
    $('#precio_carrito').text(precio);
	if(precio == 0) { 
		vacio = true;
		$(".dropdown-menu").prepend("<li class=\"carro_vacio\"><a>El carro est&aacute vac&iacuteo</a></li>");
	}
	$("#mensaje").fadeIn("slow");
	setTimeout(function(){ $( "#mensaje" ).fadeOut(); }, 1500);
	document.getElementById(id).onmouseout = global_onmousedown;
	document.getElementById(id).onmouseover = global_onmouseover; 
	document.getElementById(id).onclick = global_onclick;
	numero -= 1;
	$('#num_carrito').text(numero);

	$("."+id).remove();
}

function selecionar_hora(id) {
		if(sel == 0) {
			color = document.getElementById(id).style.background;
			id_ant = id;
			document.getElementById(id).style.background = "#ECF0F1";
			sel = 1;
		} else {
			
			document.getElementById(id_ant).style.background = color;
			id_ant = id;
			document.getElementById(id).style.background = "#ECF0F1";
		}
		
		$('#btn2').attr("disabled", false);
}

$(document).ready(function(){

$( '#btn1' ).tooltip();
$( "#btn1" ).tooltip({
  show: { effect: "blind", duration: 800 }
});


$.datepicker.setDefaults($.datepicker.regional["es"]);
	$("#datepicker").datepicker({
		firstDay: 1
	});
	
	$('#btn1').attr("disabled", true);
	$('#btn2').attr("disabled", true);
	$('#btn3').attr("disabled", true);
	$( ".platea" ).tooltip({
		content: "Precio: 50€"
	});
		$( ".palco" ).tooltip({
		content: "Precio: 60€"
	});
	$("a.ui-state-default").click(function(){ 

	$('#btn1').attr("disabled", false);  
				
	});

	$( "#mensaje" ).hide();     // Por defecto, ocultamos el DIV que contine el mensaje emergente.
}) 

