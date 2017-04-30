/**************************** Variables globales **********************************************/
 var expresiones = {							/* Array que tiene todas las expresiones regulares a utilizar */
	Usuario : /^([a-zA-Z0-9_.-]{5,20})$/i,
	Contraseña : /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
	NombreUsr : /^([a-z ñáéíóú]{3,15})$/i,
	ApellidoUsr : /^([a-z ñáéíóú]{3,30})$/i,
	email : /^([a-zA-Z0-9_.-]{3,20})+([@]{1,1})+([a-zA-Z0-9_.-]{3,20})+([.]{1,1})+([a-z]{2,4})$/i,
	telefono : /^([0-9]{9,9})$/i,
    ContraseñaR : /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    DNI : /^([0-9]{8,8})+([a-zA-Z]{1,1})$/i,
    Fecha: /^([0-9]{2,2})+([/]{1,1})+([0-9]{2,2})+([/]{1,1})+([0-9]{4,4})$/i,
    Localidad : /^([a-z ñáéíóú]{3,30})$/i,
    CP: /^([0-9]{5,5})$/i,
    Pais: /^([a-z ñáéíóú]{3,30})$/i
    
    
}; 
 var inputName=[								/* Array que contiene el nombre de todos los inputs */
	'Usuario',
	'Contraseña',
	'NombreUsr',
	'ApellidoUsr',
	'email',
	'telefono',
    'ContraseñaR',
    'DNI',
    'Fecha',
    'Localidad',
    'CP',
    'Pais',
    'Usr',
    'Pass',
    
   
	
]

 var inputTip=[								/* Array que contiene el tip de todos los inputs */
	'El nombre de usuario tendrá de 5 a 20 caracteres mínimo, pudiendo ser letras, números, o algunos de los caracteres especiales',
	'La contraseña tendrá mínimo 8 caracteres, teniendo al menos una mayúscula, una minúscula, y un número',
	'Un nombre de usuario tendrá de 3 a 15 letras',
	'Un apellido de usuario tendrá de 3 a 30 letras',
	'Un e-mail será una cadena compuesta por los siguientes caracteres, de 3 a 20 caracteres, un símbolo @, de 3 a 20 caracteres, un punto y de 2 a 4 letras minúsculas',
	'Un télefono está compuesto por 9 números',
    'La contraseña repetida debe ser igual  a la introducida en el campo de contraseña',
    'El DNI está compuesto por ocho números y una letra',
    'La fecha será día/mes/año',
    'La localidad tendrá de 3 a 30 letras',
    'El código postal se compone de 5 números',
    'El pais tendrá de 3 a 30 letras',
	
]
/**************************** Funciones **********************************************/

function iniciar(){
    iniciarValoracion();
    validador();
    pista();
    $( "input" ).keyup(function() {
        buttonFunction();
    });
    $( "#datepicker" ).datepicker({          // El calendario de fechaInicio en filtros.
        firstDay: 1,
        onSelect: function(dateText, inst) {
            console.log(dateText);
        }
    });
}



function iniciarValoracion(){                                                       // Inicializa las valoraciones de cada evento.    
    var valoracion=$('#val').text();                                                  // Lee en un elemento del evento la valoracion, escrita.
    console.log(valoracion);
    $('#val').remove();                                                               // Elimina dicho elemento.
    $('#stars').rating({displayOnly: true, min: 0, max: 5, step: 0.5, size: 'xs'});   // Inicializa la valoracion.
    $('#stars').rating('update', valoracion).val();                                   // Coloca el numero de estrellas exacto.
}


function validador(){						/* Va a observar si se tiene que comprobar la validacion de algun input */
	for(var i=0;i<14;i++){
        if(i<12){   //validar todos menos login
            $("input[name='"+inputName[i]+"']").keyup({param1: inputName[i], param2: expresiones[inputName[i]]}, valida);
        }
        else{   //validar login
            $("input[name='"+inputName[i]+"']").keyup({ param1: i},validaLogin);
        }
	}
}
function validaLogin(event){
    var i=event.data.param1;
	if(i==12){
        if($("input[name='"+inputName[i]+"']").val()=='Miguelon'){
            $("input[name='"+inputName[i]+"']").removeClass("incorrect");
            $("input[name='"+inputName[i]+"']").addClass("correct");
            
        }
        else{
            $("input[name='"+inputName[i]+"']").removeClass("correct");
            $("input[name='"+inputName[i]+"']").addClass("incorrect");
            

        }
    }
    else{
        if($("input[name='"+inputName[i]+"']").val()=='M1gu3l0N'){
            $("input[name='"+inputName[i]+"']").removeClass("incorrect");
            $("input[name='"+inputName[i]+"']").addClass("correct");
           
        }
        else{
            $("input[name='"+inputName[i]+"']").removeClass("correct");
            $("input[name='"+inputName[i]+"']").addClass("incorrect");
           
        }
    }
}
function log(){
    var a=0;
    for(var i=12;i<14;i++){
        if($("input[name='"+inputName[i]+"']").hasClass("correct")){
            a=1;
        }
    }
    if(a==1){
        $("p[id='note']").remove(); 
        location.href="./perfil.html";
    }
    else{
       $("p[id='note']").remove(); 
       $(".nota").append("<p id='note'>Nota: El nombre de usuario o la contrase&ntilde;a introducidos son incorrectos </p>");
       
    }
    
}
function valida(event){						/* Esta funcion va a validar con los valores pasados en validador() */
	var nombre=event.data.param1;
	var expresion=event.data.param2;
	if(expresion.test($("input[name='"+nombre+"']").val())){
		$("input[name='"+nombre+"']").removeClass("invalid");
		$("input[name='"+nombre+"']").addClass("valid");
		$("input[name='"+nombre+"']").css("background", "#F5F5F5 url('./images/valid.png') no-repeat 90% center");
		$("input[name='"+nombre+"']").css("border", "2px solid green");
	}
	else{
		$("input[name='"+nombre+"']").removeClass("valid");
		$("input[name='"+nombre+"']").addClass("invalid");
		$("input[name='"+nombre+"']").css("background", "#F5F5F5 url('./images/invalid.png') no-repeat 90% center");
		$("input[name='"+nombre+"']").css("border", "2px solid red");
	}
	if($("input[name='"+nombre+"']").val().length==0){
		if($("input[name='"+nombre+"']").hasClass("optional")){
			$("input[name='"+nombre+"']").removeClass("invalid");
			$("input[name='"+nombre+"']").css("background", "#F5F5F5");
			$("input[name='"+nombre+"']").css("border", "2px solid #ccc"); 
			
		}
	}
    if(nombre==inputName[6]){
        if($("input[name='"+nombre+"']").val() == $("input[name='Contraseña']").val()){
            $("input[name='"+nombre+"']").removeClass("invalid");
            $("input[name='"+nombre+"']").addClass("valid");
            $("input[name='"+nombre+"']").css("background", "#F5F5F5 url('./images/valid.png') no-repeat 90% center");
            $("input[name='"+nombre+"']").css("border", "2px solid green");
        }
        else{
            $("input[name='"+nombre+"']").removeClass("valid");
            $("input[name='"+nombre+"']").addClass("invalid");
            $("input[name='"+nombre+"']").css("background", "#F5F5F5 url('./images/invalid.png') no-repeat 90% center");
            $("input[name='"+nombre+"']").css("border", "2px solid red");
	}
        
    }
}

function pista(){						/* Va a observar si se tiene que comprobar la validacion de algun input */
	for(var i=0;i<12;i++){
		$("input[name='"+inputName[i]+"']").keyup({param1: inputName[i], param2: inputTip[i]}, addTip);
	}
}
function addTip(event){						/* Esta funcion va a validar con los valores pasados en validador() */
	var nombre=event.data.param1;
	var tip=event.data.param2;
	
    if($("input[name='"+nombre+"']").hasClass("invalid")){
        $("p[id='"+nombre+"']").remove();
        $(".tip").append("<p id='"+nombre+"'>"+tip+"</p>");
        
    }
    else{
        $("p[id='"+nombre+"']").remove(); 
        
    }
        
    
}

function buttonFunction(){
    var a=0; //input obligatorios validos=0 invalidos(o sin nada)=1
    var b=0; //input opcionales validos(o sin nada)=0 invalidos=1
    for(var i=0;i<12;i++){
        var imput=$("input[name='"+inputName[i]+"']");
		if(imput.hasClass("required")){
            if(!imput.hasClass("valid")){
                a=1;
            }
        }
        else if(imput.hasClass("optional")){
            if(imput.hasClass("invalid")){
                b=1;
            }
        }
	}
    if(a==0){
        $('.action').attr("disabled", false);
        $('.action').attr("onclick", "return true");
    }
    else{
        $('.action').attr("disabled", true);
        $('.action').attr("onclick", "return false");
    }
    if(b==0){
        $("p[id='note']").remove(); 
    }
    else{
       $("p[id='note']").remove(); 
       $(".nota").append("<p id='note'>Nota: Hay campos opcionales invalidos, si continuas tu registro sin ponerlos correctamente, estos no seran almacenados </p>");
    }
    
}

