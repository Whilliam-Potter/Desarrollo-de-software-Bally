const formularioAdmin = document.getElementById("formularioAdmin");
const inputs = document.querySelectorAll('#formularioAdmin');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    identificacion: /^[0-9]{1,10}$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {

nombreAdmin: false, 
subNombreAdmin: false, 
apellidoAdmin: false, 
subApellidoAdmin: false, 
generoAdmin: false,
correoAdmin: false, 
idAdmin: false, 
numeroAdmin: false, 
typeid: false,
nacionalidadAdmin: false,
cumpleAdmin: false,
GenerarContraseñaAdmin: false,
GenerarUsuarioAdmin: false

}

const validarFormulario = (e) => {
    //console.log(e.target.name);
    switch(e.target.name){

        case "nombreAdmin":
            console.log('Funciona');
            validarCamp(expresiones.nombre, e.target, "nombreAdmin");
        break;

        case "subNombreAdmin":
            console.log('Funciona');
            validarCamp(expresiones.nombre, e.target, "subNombreAdmin");
        break;

        case "apellidoAdmin":
            console.log('Funciona');
            validarCamp(expresiones.nombre, e.target, "apellidoAdmin");
        break;

        case "subApellidoAdmin":
            console.log('Funciona');
            validarCamp(expresiones.nombre, e.target, "subApellidoAdmin");
        break;

        case "correoAdmin":
            console.log('Funciona');
            validarCamp(expresiones.correo, e.target, "correoAdmin");
            validarCorreo2(); // Funcion para la comfirmacion del correo
        break;

        case "comCorreoAdmin":
            console.log('Funciona');
            validarCorreo2(); // Funcion para la comfirmacion del correo
        break;

        case "idAdmin":
            console.log('Funciona');
            validarCamp(expresiones.identificacion, e.target, "idAdmin");
        break;

        case "numeroAdmin":
            console.log('Funciona');
            validarCamp(expresiones.telefono, e.target, "numeroAdmin");
        break;

    }
}

const validarCamp = (expresion, input, campo) => {

    if(expresion.test(input.value)){
        document.getElementById(`Grupo__${campo}`).classList.remove('GrupoAdmin-incorrecto');
        document.getElementById(`Grupo__${campo}`).classList.add('GrupoAdmin-correcto');
        document.querySelector(`#Grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#Grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#Grupo__${campo}  .Error_nombreAdmin_imput`).classList.remove('Error_nombreAdmin_imput-activo');
        campos[campo]  = true;
    } else {
        document.getElementById(`Grupo__${campo}`).classList.add('GrupoAdmin-incorrecto');
        document.getElementById(`Grupo__${campo}`).classList.remove('GrupoAdmin-correcto');
        document.querySelector(`#Grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#Grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#Grupo__${campo}  .Error_nombreAdmin_imput`).classList.add('Error_nombreAdmin_imput-activo');
        campos[campo]  = false;
    }
}

// Confirmar correo

const validarCorreo2 = () =>{

    const inputCorreoAdmin = document.getElementById("correoAdmin");
    const inputComCorreoAdmin = document.getElementById("comCorreoAdmin");

    if(inputCorreoAdmin.value !== inputComCorreoAdmin.value){
        document.getElementById(`Grupo__comCorreoAdmin`).classList.add('GrupoAdmin-incorrecto');
        document.getElementById(`Grupo__comCorreoAdmin`).classList.remove('GrupoAdmin-correcto');
        document.querySelector(`#Grupo__comCorreoAdmin i`).classList.add('fa-times-circle');
        document.querySelector(`#Grupo__comCorreoAdmin i`).classList.remove('fa-check-circle');
        document.querySelector(`#Grupo__comCorreoAdmin  .Error_nombreAdmin_imput`).classList.add('Error_nombreAdmin_imput-activo');
        campos['correoAdmin']  = false;
    }else{
        document.getElementById(`Grupo__comCorreoAdmin`).classList.remove('GrupoAdmin-incorrecto');
        document.getElementById(`Grupo__comCorreoAdmin`).classList.add('GrupoAdmin-correcto');
        document.querySelector(`#Grupo__comCorreoAdmin i`).classList.remove('fa-times-circle');
        document.querySelector(`#Grupo__comCorreoAdmin i`).classList.add('fa-check-circle');
        document.querySelector(`#Grupo__comCorreoAdmin  .Error_nombreAdmin_imput`).classList.remove('Error_nombreAdmin_imput-activo');
        campos['correoAdmin']  = true;
    }
}

// Base para la generacion de la contraseña

const base = "abcdefghijkmnopqrstuvwxyzABCDEFGHIJKMNOPQRSTUVWXTZ0123456789!#$%";

// Generar Contraseña 

function generarPassword(lenght = 12){
    let result = "";
    for(let i = 0; i <= lenght; i++){
        result += base.charAt(Math.floor(Math.random()*base.length));
    }   
    return result;
};

// Funcion validar tipo de id

function validarTypeId(){

    const selectTypeid = document.getElementById("typeid").value;
    
    if((selectTypeid == "")){
        document.getElementById(`Grupo__typeid`).classList.add('GrupoAdmin-incorrecto');
        document.getElementById(`Grupo__typeid`).classList.remove('GrupoAdmin-correcto');
        document.querySelector(`#Grupo__typeid i`).classList.add('fa-times-circle');
        document.querySelector(`#Grupo__typeid i`).classList.remove('fa-check-circle');
        document.querySelector(`#Grupo__typeid  .Error_nombreAdmin_imput`).classList.add('Error_nombreAdmin_imput-activo');
        campos["typeid"]  = false;
    }else{
        document.getElementById(`Grupo__typeid`).classList.remove('GrupoAdmin-incorrecto');
        document.getElementById(`Grupo__typeid`).classList.add('GrupoAdmin-correcto');
        document.querySelector(`#Grupo__typeid i`).classList.remove('fa-times-circle');
        document.querySelector(`#Grupo__typeid i`).classList.add('fa-check-circle');
        document.querySelector(`#Grupo__typeid  .Error_nombreAdmin_imput`).classList.remove('Error_nombreAdmin_imput-activo');
        campos["typeid"]  = true;
    }

}

// Funcion para validar el genero

function validarGenero(){

    const selectGenero = document.getElementById("generoAdmin").value;
    
    if((selectGenero == "")){
        document.getElementById(`Grupo__generoAdmin`).classList.add('GrupoAdmin-incorrecto');
        document.getElementById(`Grupo__generoAdmin`).classList.remove('GrupoAdmin-correcto');
        document.querySelector(`#Grupo__generoAdmin i`).classList.add('fa-times-circle');
        document.querySelector(`#Grupo__generoAdmin i`).classList.remove('fa-check-circle');
        document.querySelector(`#Grupo__generoAdmin  .Error_nombreAdmin_imput`).classList.add('Error_nombreAdmin_imput-activo');
        campos["generoAdmin"]  = false;
    }else{
        document.getElementById(`Grupo__generoAdmin`).classList.remove('GrupoAdmin-incorrecto');
        document.getElementById(`Grupo__generoAdmin`).classList.add('GrupoAdmin-correcto');
        document.querySelector(`#Grupo__generoAdmin i`).classList.remove('fa-times-circle');
        document.querySelector(`#Grupo__generoAdmin i`).classList.add('fa-check-circle');
        document.querySelector(`#Grupo__generoAdmin  .Error_nombreAdmin_imput`).classList.remove('Error_nombreAdmin_imput-activo');
        campos["generoAdmin"]  = true;
    }

}

// Funcion para validar la nacionalidad

function validarNacionalidad(){

    const selectNacionalidad = document.getElementById("nacionalidadAdmin").value;
    
    if((selectNacionalidad == "")){
        document.getElementById(`Grupo__nacionalidadAdmin`).classList.add('GrupoAdmin-incorrecto');
        document.getElementById(`Grupo__nacionalidadAdmin`).classList.remove('GrupoAdmin-correcto');
        document.querySelector(`#Grupo__nacionalidadAdmin i`).classList.add('fa-times-circle');
        document.querySelector(`#Grupo__nacionalidadAdmin i`).classList.remove('fa-check-circle');
        document.querySelector(`#Grupo__nacionalidadAdmin  .Error_nombreAdmin_imput`).classList.add('Error_nombreAdmin_imput-activo');
        campos["nacionalidadAdmin"]  = false;
    }else{
        document.getElementById(`Grupo__nacionalidadAdmin`).classList.remove('GrupoAdmin-incorrecto');
        document.getElementById(`Grupo__nacionalidadAdmin`).classList.add('GrupoAdmin-correcto');
        document.querySelector(`#Grupo__nacionalidadAdmin i`).classList.remove('fa-times-circle');
        document.querySelector(`#Grupo__nacionalidadAdmin i`).classList.add('fa-check-circle');
        document.querySelector(`#Grupo__nacionalidadAdmin  .Error_nombreAdmin_imput`).classList.remove('Error_nombreAdmin_imput-activo');
        campos["nacionalidadAdmin"]  = true;
    }

}

// Funcion para validar la fecha

function validarFecha(){

    const selectFecha = document.getElementById("cumpleAdmin").value;
    
    if((selectFecha == "")){
        document.getElementById(`Grupo__cumpleAdmin`).classList.add('GrupoAdmin-incorrecto');
        document.getElementById(`Grupo__cumpleAdmin`).classList.remove('GrupoAdmin-correcto');
        document.querySelector(`#Grupo__cumpleAdmin i`).classList.add('fa-times-circle');
        document.querySelector(`#Grupo__cumpleAdmin i`).classList.remove('fa-check-circle');
        document.querySelector(`#Grupo__cumpleAdmin  .Error_nombreAdmin_imput`).classList.add('Error_nombreAdmin_imput-activo');
        campos["cumpleAdmin"]  = false;
    }else{
        document.getElementById(`Grupo__cumpleAdmin`).classList.remove('GrupoAdmin-incorrecto');
        document.getElementById(`Grupo__cumpleAdmin`).classList.add('GrupoAdmin-correcto');
        document.querySelector(`#Grupo__cumpleAdmin i`).classList.remove('fa-times-circle');
        document.querySelector(`#Grupo__cumpleAdmin i`).classList.add('fa-check-circle');
        document.querySelector(`#Grupo__cumpleAdmin  .Error_nombreAdmin_imput`).classList.remove('Error_nombreAdmin_imput-activo');
        campos["cumpleAdmin"]  = true;
    }

}

// Control de eventos

inputs.forEach((input) => {

    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

});

// Generacion de contraseña de usuario

const generarCon = () => {
    const valor = generarPassword();
    console.log(valor);
    formularioAdmin.elements.namedItem("GenerarContraseñaAdmin").value = valor;
    campos["GenerarContraseñaAdmin"]  = true;
};

// Generacion de usuario

const Usuario = document.getElementById("nombreAdmin");

const generarUsu = () => {
    const valor = (Usuario.value+generarPassword(5));
    console.log(Usuario+valor);
    formularioAdmin.elements.namedItem("GenerarUsuarioAdmin").value = valor;
    campos["GenerarUsuarioAdmin"]  = true;
};

formularioAdmin.elements.namedItem("BotonContraseña").addEventListener('click', generarCon);
formularioAdmin.elements.namedItem("BotonUsuario").addEventListener('click', generarUsu);

// Realizar validacion de todo el formulacion con un submit

formularioAdmin.addEventListener('submit', async e =>{

    e.preventDefault();

    if(campos.nombreAdmin && campos.subNombreAdmin 
       &&campos.apellidoAdmin &&campos.subApellidoAdmin
       &&campos.correoAdmin && campos.idAdmin 
       && campos.numeroAdmin && campos.typeid
       && campos.generoAdmin && campos.nacionalidadAdmin 
       && campos.cumpleAdmin && campos.GenerarContraseñaAdmin && campos.GenerarUsuarioAdmin){
        
        //Enviar datos desde JS en formato (json) a flask//

        const nombreAdmin = formularioAdmin["nombreAdmin"].value
        const subNombreAdmin = formularioAdmin["subNombreAdmin"].value
        const apellidoAdmin = formularioAdmin["apellidoAdmin"].value
        const subApellidoAdmin = formularioAdmin["subApellidoAdmin"].value
        const generoAdmin = formularioAdmin["generoAdmin"].value
        const correoAdmin = formularioAdmin["correoAdmin"].value
        const typeid = formularioAdmin["typeid"].value
        const idAdmin = formularioAdmin["idAdmin"].value
        const numeroAdmin = formularioAdmin["numeroAdmin"].value
        const nacionalidadAdmin = formularioAdmin["nacionalidadAdmin"].value
        const cumpleAdmin = formularioAdmin["cumpleAdmin"].value
        const GenerarUsuarioAdmin = formularioAdmin["GenerarUsuarioAdmin"].value
        const GenerarContraseñaAdmin = formularioAdmin["GenerarContraseñaAdmin"].value

        // enviar registro a la base de datos //

        const response = await fetch('api/addDatosAdmin', {
            method: 'POST', 
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                nombreAdmin,
                subNombreAdmin,
                apellidoAdmin,
                subApellidoAdmin,
                generoAdmin,
                correoAdmin,
                typeid,
                idAdmin, 
                numeroAdmin,
                nacionalidadAdmin, 
                cumpleAdmin,
                GenerarUsuarioAdmin, 
                GenerarContraseñaAdmin 

            })
        });

        const dato = await response.json()
        console.log(dato)
        //console.log(nombreAdmin, subNombreAdmin, apellidoAdmin, subApellidoAdmin, generoAdmin, 
            //correoAdmin, typeid, idAdmin, numeroAdmin, nacionalidadAdmin, cumpleAdmin, GenerarUsuarioAdmin, GenerarContraseñaAdmin)     
        formularioAdmin.reset();
        
        document.querySelectorAll('.GrupoAdmin-correcto').forEach((icono) =>{
            icono.classList.remove('GrupoAdmin-correcto')       
        });

        swal({           
            title: "Satisfatorio",
            text: "Se realizo el Registro",
            icon: "success",
            button:"Ok"
        }); 
           
        campos["GenerarContraseñaAdmin"] = false;
        campos["GenerarUsuarioAdmin"] = false;
        campos["apellidoAdmin"] = false;
        campos["correoAdmin"] = false;
        campos["cumpleAdmin"] = false;
        campos["generoAdmin"] = false;
        campos["idAdmin"] = false;
        campos["nacionalidadAdmin"] = false;
        campos["nombreAdmin"] = false;
        campos["subNombreAdmin"] = false;
        campos["numeroAdmin"] = false;
        campos["subApellidoAdmin"] = false;
        campos["typeid"] = false;

    }else{
        swal({      
            title: "Mensaje de Error",
            text: "Faltan Casillas por Llenar",
            icon: "error",
            button: "Ok"
        })
    }
});