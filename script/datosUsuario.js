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

function validateForm() {
    var a = validateEmail();
    var b = validatePass();
    if (a == true && b == true){
        usuario = "Menganito";
        apellido = "Perez Martín"
        email= document.getElementById('emailR').value;
        telefono = "918887643";
        pasarVariables();
        return true;
    }   
    return false; 
}
function validateForm2() {
    
    var a = validarEmail2();
    var b = validarNombre();
    var c = validarApellido();
    var d = validarDireccion();
    var e = validarLocalidad();
    if (a==true && b==true && c==true && d==true && e==true){
        usuario = document.getElementById('nombre').value;
        apellido = document.getElementById('apellidos').value;
        email= document.getElementById('emailNR').value;
        telefono = document.getElementById('telefono').value;
        pasarVariables();
        return true;
    } 
    return false;
}
function validateEmail(){
    var element = document.getElementById('emailR');
    var x = element.value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        element.setAttribute("style","border:1px solid red");   
        var y = document.getElementById('textoE');
        y.style.visibility = "visible";
        return false;
    }   
    else {
        element.setAttribute("style","border: 1px solid #ccc"); 
        var y = document.getElementById('textoE');
        y.style.visibility = "hidden";
        return true;
    }

}
function validatePass(){
    var element = document.getElementById('passR');
    var x = element.value;
    if (x.length < 4){
        element.setAttribute("style","border:1px solid red");   
        var y = document.getElementById('textoP');
        y.style.visibility = "visible";
        return false
    }
    else {
        element.setAttribute("style","border: 1px solid #ccc"); 
        var y = document.getElementById('textoP');
        y.style.visibility = "hidden";
        return true;
    }
}
function validarEmail2(){
    var correcto = 0;
    var email = document.getElementById('emailNR');
    var x = email.value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        email.setAttribute("style","border:1px solid red");   
        var y = document.getElementById('textoEnR');
        y.style.visibility = "visible";
        correcto = 1;
    }   
    else {
        email.setAttribute("style","border: 1px solid #ccc"); 
        var y = document.getElementById('textoEnR');
        y.style.visibility = "hidden";
    }
    var confEmail = document.getElementById('ConfemailR');
    var y = confEmail.value;
    var n = y.localeCompare(x);
    if (n != 0){
        confEmail.setAttribute("style","border:1px solid red");   
        var y = document.getElementById('textoCE');
        y.style.visibility = "visible";
        return false; 
    }   
    else {
        confEmail.setAttribute("style","border: 1px solid #ccc"); 
        var y = document.getElementById('textoCE');
        y.style.visibility = "hidden";
    }
    if (correcto == 0){
        return true;
    }
    return false;
}
function validarNombre(){
    var nombre =  document.getElementById('nombre');  
    var z = nombre.value;
    var expreg = new RegExp("([A-Za-z]+ ?)+");
    if(!expreg.test(z)){
        nombre.setAttribute("style","border:1px solid red");   
        var y = document.getElementById('textoN');
        y.style.visibility = "visible";
        return false;
    }
    else {
        nombre.setAttribute("style","border: 1px solid #ccc"); 
        var y = document.getElementById('textoN');
        y.style.visibility = "hidden";
        return true;
    }
}
function validarApellido(){
    var apellido =  document.getElementById('apellidos');  
    var z = apellido.value;
    var expreg = new RegExp("([A-Za-z]+ ?)+");
    if(!expreg.test(z)){
        apellido.setAttribute("style","border:1px solid red");   
        var y = document.getElementById('textoA');
        y.style.visibility = "visible";
        return false;

    }
    else {
        apellido.setAttribute("style","border: 1px solid #ccc"); 
        var y = document.getElementById('textoA');
        y.style.visibility = "hidden";
        return true;
    }
}
function validarDireccion(){
    var direccion =  document.getElementById('direccion');  
    var z = direccion.value;
    var expreg = new RegExp("([A-Za-z]+ ?)+");
    if(!expreg.test(z)){
        direccion.setAttribute("style","border:1px solid red");   
        var y = document.getElementById('textoD');
        y.style.visibility = "visible";
        return false;

    }
    else {
        direccion.setAttribute("style","border: 1px solid #ccc"); 
        var y = document.getElementById('textoD');
        y.style.visibility = "hidden";
        return true;
    }

}
function validarLocalidad(){
    var localidad =  document.getElementById('localidad');  
    var z = localidad.value;
    var expreg = new RegExp("([A-Za-z]+ ?)+");
    if(!expreg.test(z)){
        localidad.setAttribute("style","border:1px solid red");   
        var y = document.getElementById('textoL');
        y.style.visibility = "visible";
        return false;

    }
    else {
        localidad.setAttribute("style","border: 1px solid #ccc"); 
        var y = document.getElementById('textoL');
        y.style.visibility = "hidden";
        return true;
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
function iniciar(){
    recogerVariables();
    if (usuario == "Menganito"){
        var em = document.getElementById("emailR");
        em.value = email;
        return;
    }   
    if (usuario != null){
        var em = document.getElementById("emailNR");
        em.value = email;
        var em = document.getElementById("ConfemailR");
        em.value = email;
        var em = document.getElementById("nombre");
        em.value = usuario;   
        var em = document.getElementById("apellidos");
        em.value = unescape(apellido); 
        var em = document.getElementById("telefono");
        em.value = telefono;  
        var em = document.getElementById("sinRegistro");
        em.setAttribute("class", " tab-pane active");
        var em = document.getElementById("tab2");
        em.setAttribute("class", "active");
        var em = document.getElementById("registrado");
        em.setAttribute("class", " tab-pane");
        var em = document.getElementById("tab1");
        em.setAttribute("class", "");
        return;          
    }
}

function pasarVariables() {
	pagina= "datosPago.html"
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
	pagina = pagina.substring(0,pagina.length-1);
	location.href=pagina;
}