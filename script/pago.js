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

function validarForm() { 
	  var a = validarNumTarjeta();
	  var b = validarTitular();
	  var c = validarCVV();
	  if (a==true && b==true && c==true){
	  	formaPago ="Tarjeta de crédito";
	  	pasarVariables();
	  	return true;
	  }
	  else{
	  	return false;
	  }
}
function validarForm2() { 
	  var a = validarPIN();
	  var b = validarCheck();
	  if (a==true && b==true){
	  	formaPago ="PaySafeCard";
	  	pasarVariables();
	  	return true;
	  }
	  else{
	  	return false;
	  }
}
function pagoPaypal(){
		formaPago ="Pay-Pal";
	  	pasarVariables();
}
function validarNumTarjeta(){
	  var m = document.getElementById("numTarjeta");
	  var x = m.value;
	  var expreg = new RegExp("[0-9]{4}[-]?[0-9]{4}[-]?[0-9]{4}[-]?[0-9]{4}");
	  if(expreg.test(x)) {
	    m.setAttribute("style","border: 1px solid #ccc"); 
        var y = document.getElementById('numT');
        y.style.visibility = "hidden";
        return true;
      }  
	  else{
	    m.setAttribute("style","border:1px solid red");   
        var y = document.getElementById('numT');
        y.style.visibility = "visible";
        return false;
      } 
}
function validarTitular(){
	  var m = document.getElementById("nomTitular");
	  var x = m.value;
	  var expreg = new RegExp("([A-Za-z]+ ?)+");
	  if(expreg.test(x)) {
	    m.setAttribute("style","border: 1px solid #ccc"); 
        var y = document.getElementById('titular');
        y.style.visibility = "hidden";
        return true;
      }  
	  else{
	    m.setAttribute("style","border:1px solid red");   
        var y = document.getElementById('titular');
        y.style.visibility = "visible";
        return false;

      } 
}
function validarCVV(){
	  var m = document.getElementById("cvc");
	  var x = m.value;
	  var expreg = new RegExp("[0-9]{3}[0-9]?");
	  if(expreg.test(x)) {
	    m.setAttribute("style","border: 1px solid #ccc"); 
        var y = document.getElementById('cvv');
        y.style.visibility = "hidden";
        return true;
      }  
	  else{
	    m.setAttribute("style","border:1px solid red");   
        var y = document.getElementById('cvv');
        y.style.visibility = "visible";
        return false;
      } 
}
function validarPIN(){
	var ids = ["psc1", "psc2", "psc3", "psc4"];
	var ok = 0;
	for (i=0; i<ids.length; i++){
	  var m = document.getElementById(ids[i]);
	  var x = m.value;
	  var expreg = new RegExp("[0-9]{4}");
	  if(expreg.test(x)) {
	    m.setAttribute("style","border: 1px solid #ccc"); 
        var y = document.getElementById('errorCvv');
        y.style.visibility = "hidden";
        
      }  
	  else{
	    m.setAttribute("style","border:1px solid red");   
        var y = document.getElementById('errorCvv');
        y.style.visibility = "visible";
        ok = 1;      
      } 
	} 
	if (ok == 0){
		return true;
	}	
	else{
		return false;
	}
}
function validarCheck(){
	var element = document.getElementById("check");
	if (element.checked){
		var y = document.getElementById('condG');
        y.style.visibility = "hidden";		
		return true;
	}	
	else {
		var y = document.getElementById('condG');
        y.style.visibility = "visible";
        return false;

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
function pasarVariables() {
	pagina= "registro4.html"
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




