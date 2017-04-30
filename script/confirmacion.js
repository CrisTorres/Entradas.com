var nombre;
var apellido;
var numEntradas;
var total;
var dia;
var mes;
var ano;
var horas;
var minutos;
var butacas;
var extras;
var usuario;
var email;
var telefono;
var formaPago;

function iniciar(){
	recogerVariables();
	var n =document.getElementById('nom');
    n.innerHTML = nombre;
    n =document.getElementById('num');
    n.innerHTML = numEntradas;
    n =document.getElementById('pt');
    a = total +"€";
    n.innerHTML = a;
    n =document.getElementById('f');
    if (mes < 10){
    	mes = "0"+mes;
    }
    if (dia < 10){
    	dia = "0"+dia;
    }
    a = dia +"/" + mes + "/" + ano 
    n.innerHTML = a;
    n =document.getElementById('h');
    if (horas < 10){
    	horas = "0"+horas;
    }
    if (minutos < 10){
    	minutos = "0"+minutos;
    }
    a = horas+":"+minutos+"h";
    n.innerHTML = a;
    n =document.getElementById('b');
    n.innerHTML = butacas;
    n =document.getElementById('e');
    var arrayExtras = extras.split("/");
    if (arrayExtras[0] == ""){
        var parent = document.getElementById("extras");
        parent.removeChild(n);

    }
    for (i=0; i< arrayExtras.length; i++){
    	var node = document.createTextNode(arrayExtras[i]);
    	var element = document.createElement("b");
    	element.appendChild(node);
    	var li = document.createElement("li");
    	li.appendChild(element);
    	n.appendChild(li);
    } 
}

function recogerVariables(){
	var cadVariables = location.search.substring(1,location.search.length);
	var arrVariables = cadVariables.split("&");
	for (i=0; i<arrVariables.length; i++) {
		var arrVariableActual = arrVariables[i].split("=");
		if (isNaN(parseFloat(arrVariableActual[1]))){
    		eval(arrVariableActual[0]+"='"+unescape(arrVariableActual[1])+"';");
		}else{
			eval(arrVariableActual[0]+"="+arrVariableActual[1]+";");
		}	
	}
}