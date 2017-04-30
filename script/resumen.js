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
    n =document.getElementsByClassName('pt');
    a = total +"€";
    for(i=0; i< n.length;i++){
    	 n[i].innerHTML = a;
    } 
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
    n =document.getElementById('n');
    aux = usuario +" "+apellido;
    n.innerHTML = aux;
    n =document.getElementById('t');
    n.innerHTML = telefono;
    n =document.getElementById('em');
    n.innerHTML = email;
    n =document.getElementById('mp');
    n.innerHTML = formaPago;
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
function pasarVariables(destino) {
	pagina= destino;
	pagina +="?";
	pagina +="nombre" + "=" + escape(nombre)+"&";
	pagina +="apellido" + "=" + escape(apellido)+"&";
	pagina += "numEntradas" + "=" + escape(numEntradas)+"&";
	pagina += "total" + "=" + escape(total)+"&";
	pagina += "dia" + "=" + escape(dia)+"&";
    pagina += "mes" + "=" + escape(mes)+"&";
    pagina += "ano" + "=" + escape(ano)+"&";
	pagina += "horas" + "=" + escape(horas)+"&";
    pagina += "minutos" + "=" + escape(minutos)+"&";
	pagina += "butacas" + "=" + escape(butacas)+"&";
    pagina += "extras" + "=" + escape(extras)+"&";
    pagina += "usuario" + "=" + escape(usuario)+"&";
    pagina += "email" + "=" + escape(email)+"&";
    pagina += "telefono" + "=" + escape(telefono)+"&";
    pagina += "formaPago" + "=" + escape(formaPago)+"&";
	pagina = pagina.substring(0,pagina.length-1);
	location.href=pagina;
}