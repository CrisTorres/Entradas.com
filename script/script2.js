var descuento = 0;

function toggleCheckboxSC(element)
 {
   if (element.checked){
   	var element =document.getElementById('seguroCan');
   	element.innerHTML = "4€";
   	var total =document.getElementById('total');
   	var z = parseFloat(total.innerHTML);
   	var z = z + 4;
   	total.innerHTML = z;

   }
   else{
   	var element =document.getElementById('seguroCan');
   	element.innerHTML = "0€";
   	var total =document.getElementById('total');
   	var z = parseFloat(total.innerHTML);
   	var z = z - 4;
   	total.innerHTML = z;

   }
 }
function toggleCheckboxFT(element)
 {
   if (element.checked){
   	var element =document.getElementById('fanT');
   	element.innerHTML = "5€";
   	var total =document.getElementById('total');
   	var z = parseFloat(total.innerHTML);
   	var z = z + 5;
   	total.innerHTML = z;

   }
   else{
   	var element =document.getElementById('fanT');
   	element.innerHTML = "0€";
   	var total =document.getElementById('total');
   	var z = parseFloat(total.innerHTML);
   	var z = z - 5;
   	total.innerHTML = z;

   }
 }
function toggleCheckboxER(element)
 {
   if (element.checked){
   	var element =document.getElementById('envR');
   	element.innerHTML = "4€";
   	var total =document.getElementById('total');
   	var z = parseFloat(total.innerHTML);
   	var z = z + 4;
   	total.innerHTML = z;

   }
   else{
   	var element =document.getElementById('envR');
   	element.innerHTML = "0€";
   	var total =document.getElementById('total');
   	var z = parseFloat(total.innerHTML);
   	var z = z - 4;
   	total.innerHTML = z;

   }
 }
 function toggleCheckboxED(element)
 {
   if (element.checked){
   	var element =document.getElementById('envD');
   	element.innerHTML = "6€";
   	var total =document.getElementById('total');
   	var z = parseFloat(total.innerHTML);
   	var z = z + 6;
   	total.innerHTML = z;

   }
   else{
   	var element =document.getElementById('envD');
   	element.innerHTML = "0€";
   	var total =document.getElementById('total');
   	var z = parseFloat(total.innerHTML);
   	var z = z - 6;
   	total.innerHTML = z;

   }
 }
 function iniciar(){
   var numero = document.getElementsByClassName("numEntradas");
   for (i=0; i< numero.length; i++){
      numero[i].innerHTML="3" //Cambiar el 3 por la variable recibida como numero de entradas
   }
   var titulo = document.getElementsByClassName("nombre");
   for (i=0; i< titulo.length; i++){
      titulo[i].innerHTML="El Rey León" //Cambiar cabaret por la variable recibida como nombre
   }
   var fecha =document.getElementById('fecha');
   fecha.innerHTML = "15/02/2015"  //Cambiar 15/02/2015 por la variable recibida como fecha

   var hora = document.getElementById("hora");
   hora.innerHTML = "01:00" //Cambiar 21:30 por la variable recibida como hora
   
   var butacas = document.getElementById("butacas");

/* Añade los numero de butacas al resumen de la derecha

   var textnode = document.createTextNode("021");
   butacas.appendChild(textnode);
*/

 	var numero =document.getElementById('numEntradas');
 	var precio =document.getElementById('precioEntradas');
 	var gastosG =document.getElementById('precioGG');
 	numero = parseFloat(numero.innerHTML);
 	precio = parseFloat(precio.innerHTML);
 	gastosG = parseFloat(gastosG.innerHTML);
 	var precioFinal = numero *(precio + gastosG);
 	var total =document.getElementById('total');
 	total.innerHTML = precioFinal;
 }
$(function () {
  $('[data-toggle="popover"]').popover()
})

function funcion(){
	if (descuento ==0){
		var a = document.getElementById('codigoP');
		texto = a.value;
		var n = texto.localeCompare("hola");
		if (n==0){
			var element = document.getElementById('btn');
			element.setAttribute("data-content","¡Enhorabuena!, el código introducido tiene un descuento del 10%");
			var total =document.getElementById('total');
		   	var z = parseFloat(total.innerHTML);
		   	var z = z*0.9;
		   	var conDecimal = z.toFixed(2);
		   	total.innerHTML = conDecimal;	
		   	descuento = descuento +1;
					
		}
	}
	else {
		var element = document.getElementById('btn');
		element.setAttribute("data-content","El descuento ya ha sido aplicado");

	}
}
function continuar(){
	var elem = document.getElementById("nomFuncion").innerHTML;
	var mensaje = "datosUsuario.html?var1=";
	mensaje = mensaje.concat(elem);
	mensaje = mensaje.concat("&var2=");
	elem = document.getElementById("total").innerHTML;	
	mensaje = mensaje.concat(elem);
	mensaje = mensaje.concat("&var3=");
	elem = document.getElementById("fecha").innerHTML;	
	mensaje = mensaje.concat(elem);
	mensaje = mensaje.concat("&var4=");
	elem = document.getElementById("hora").innerHTML;	
	mensaje = mensaje.concat(elem);
	location.href = mensaje;
}
function pasarVariables() {
	pagina= "datosUsuario.html"
	pagina +="?";
	var titulo = document.getElementsByClassName("nombre")[0].innerHTML;
	pagina +="nombre" + "=" + escape(titulo)+"&";
	var numero = document.getElementsByClassName("numEntradas")[0].innerHTML;
	pagina += "numEntradas" + "=" + escape(numero)+"&";
	var total =document.getElementById('total').innerHTML;
	pagina += "total" + "=" + escape(total)+"&";
	var fecha =document.getElementById('fecha').innerHTML;
   var arrfecha = fecha.split("/");
   pagina += "dia" + "=" + escape(arrfecha[0])+"&";
   pagina += "mes" + "=" + escape(arrfecha[1])+"&";
   pagina += "ano" + "=" + escape(arrfecha[2])+"&";
	var hora =document.getElementById('hora').innerHTML;
   var arrHora = hora.split(":");
	pagina += "horas" + "=" + escape(arrHora[0])+"&";
   pagina += "minutos" + "=" + escape(arrHora[1])+"&";
	var butacas =document.getElementById('butacas').children;
	var b = butacas[1].innerHTML;
	for (i=2; i< numero;i++){
		b +="/" +butacas[i].innerHTML;
	}
	pagina += "butacas" + "=" + escape(b)+"&";
   var check = document.getElementsByTagName("input");
   var well = document.getElementsByClassName("well");
   var a = 0;
   var extras="";
   for (i=0; i<check.length;i++){
      if (check[i].type=="checkbox"){
         if (check[i].checked){
            var aux = well[1+i].innerHTML.substring(0,well[1+i].innerHTML.length-4);
            extras+=aux+"/"
         }
      }
   }
   extras = extras.substring(0,extras.length-1);
	pagina += "extras" + "=" + escape(extras)+"&";
	pagina = pagina.substring(0,pagina.length-1);
	location.href=pagina;
}