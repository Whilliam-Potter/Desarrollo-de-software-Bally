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

nombreUsuario: false, 
subNombreUsuario: false, 
apellidoUsuario: false, 
subApellidoUsuario: false, 
generoAdmin: false,
correoUsuario: false, 
GenerarContraseñaUsuario: false,
GenerarUsuarioUsuario: false

}

const validarFormulario = (e) => {
    //console.log(e.target.name);
    switch(e.target.name){

        case "nombreUsuario":
            console.log('Funciona');
            validarCamp(expresiones.nombre, e.target, "nombreUsuario");
        break;

        case "subNombreUsuario":
            console.log('Funciona');
            validarCamp(expresiones.nombre, e.target, "subNombreUsuario");
        break;

        case "apellidoUsuario":
            console.log('Funciona');
            validarCamp(expresiones.nombre, e.target, "apellidoUsuario");
        break;

        case "subApellidoUsuario":
            console.log('Funciona');
            validarCamp(expresiones.nombre, e.target, "subApellidoUsuario");
        break;

        case "correoUsuario":
            console.log('Funciona');
            validarCamp(expresiones.correo, e.target, "correoUsuario");
            validarCorreo2(); // Funcion para la comfirmacion del correo
        break;

        case "comCorreoUsuario":
            console.log('Funciona');
            validarCorreo2(); // Funcion para la comfirmacion del correo
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

    const inputCorreoUsuario = document.getElementById("correoUsuario");
    const inputComCorreoUsuario = document.getElementById("comCorreoUsuario");

    if(inputCorreoUsuario.value !== inputComCorreoUsuario.value){
        document.getElementById(`Grupo__comCorreoUsuario`).classList.add('GrupoAdmin-incorrecto');
        document.getElementById(`Grupo__comCorreoUsuario`).classList.remove('GrupoAdmin-correcto');
        document.querySelector(`#Grupo__comCorreoUsuario i`).classList.add('fa-times-circle');
        document.querySelector(`#Grupo__comCorreoUsuario i`).classList.remove('fa-check-circle');
        document.querySelector(`#Grupo__comCorreoUsuario  .Error_nombreAdmin_imput`).classList.add('Error_nombreAdmin_imput-activo');
        campos['correoUsuario']  = false;
    }else{
        document.getElementById(`Grupo__comCorreoUsuario`).classList.remove('GrupoAdmin-incorrecto');
        document.getElementById(`Grupo__comCorreoUsuario`).classList.add('GrupoAdmin-correcto');
        document.querySelector(`#Grupo__comCorreoUsuario i`).classList.remove('fa-times-circle');
        document.querySelector(`#Grupo__comCorreoUsuario i`).classList.add('fa-check-circle');
        document.querySelector(`#Grupo__comCorreoUsuario  .Error_nombreAdmin_imput`).classList.remove('Error_nombreAdmin_imput-activo');
        campos['correoUsuario']  = true;
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


// Funcion para validar el genero

function validarGenero(){

    const selectGenero = document.getElementById("generoUsuario").value;
    
    if((selectGenero == "")){
        document.getElementById(`Grupo__generoUsuario`).classList.add('GrupoAdmin-incorrecto');
        document.getElementById(`Grupo__generoUsuario`).classList.remove('GrupoAdmin-correcto');
        document.querySelector(`#Grupo__generoUsuario i`).classList.add('fa-times-circle');
        document.querySelector(`#Grupo__generoUsuario i`).classList.remove('fa-check-circle');
        document.querySelector(`#Grupo__generoUsuario  .Error_nombreAdmin_imput`).classList.add('Error_nombreAdmin_imput-activo');
        campos["generoUsuario"]  = false;
    }else{
        document.getElementById(`Grupo__generoUsuario`).classList.remove('GrupoAdmin-incorrecto');
        document.getElementById(`Grupo__generoUsuario`).classList.add('GrupoAdmin-correcto');
        document.querySelector(`#Grupo__generoUsuario i`).classList.remove('fa-times-circle');
        document.querySelector(`#Grupo__generoUsuario i`).classList.add('fa-check-circle');
        document.querySelector(`#Grupo__generoUsuario  .Error_nombreAdmin_imput`).classList.remove('Error_nombreAdmin_imput-activo');
        campos["generoUsuario"]  = true;
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
    formularioAdmin.elements.namedItem("GenerarContraseñaUsuario").value = valor;
    campos["GenerarContraseñaUsuario"]  = true;
};

// Generacion de usuario

const Usuario = document.getElementById("nombreUsuario");

const generarUsu = () => {
    const valor = (Usuario.value+generarPassword(5));
    console.log(Usuario+valor);
    formularioAdmin.elements.namedItem("GenerarUsuarioUsuario").value = valor;
    campos["GenerarUsuarioUsuario"]  = true;
};

formularioAdmin.elements.namedItem("BotonContraseña").addEventListener('click', generarCon);
formularioAdmin.elements.namedItem("BotonUsuario").addEventListener('click', generarUsu);

// Realizar validacion de todo el formulacion con un submit

formularioAdmin.addEventListener('submit', async e =>{

    e.preventDefault();

    if(campos.nombreUsuario && campos.subNombreUsuario 
       &&campos.apellidoUsuario &&campos.subApellidoUsuario
       &&campos.generoUsuario &&campos.correoUsuario 
       && campos.GenerarContraseñaUsuario && campos.GenerarUsuarioUsuario){
        
        //Enviar datos desde JS en formato (json) a flask//

        const nombreUsuario = formularioAdmin["nombreUsuario"].value
        const subNombreUsuario = formularioAdmin["subNombreUsuario"].value
        const apellidoUsuario = formularioAdmin["apellidoUsuario"].value
        const subApellidoUsuario = formularioAdmin["subApellidoUsuario"].value
        const generoUsuario = formularioAdmin["generoUsuario"].value
        const correoUsuario = formularioAdmin["correoUsuario"].value
        const GenerarUsuarioUsuario = formularioAdmin["GenerarUsuarioUsuario"].value
        const GenerarContraseñaUsuario = formularioAdmin["GenerarContraseñaUsuario"].value

        // enviar registro a la base de datos //

        const response = await fetch('api/addDatosUsuario', {
            method: 'POST', 
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                nombreUsuario,
                subNombreUsuario,
                apellidoUsuario,
                subApellidoUsuario,
                generoUsuario,
                correoUsuario,
                GenerarUsuarioUsuario, 
                GenerarContraseñaUsuario 

            })
        });

        const datoU = await response.json()
        console.log(datoU)
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
        campos["nombreUsuario"] = false;
        campos["subNombreUsuario"] = false;
        campos["apellidoUsuario"] = false;
        campos["subApellidoUsuario"] = false;
        campos["generoUsuario"] = false;
        campos["correoUsuario"] = false;
        campos["GenerarContraseñaUsuario"] = false;
        campos["GenerarUsuarioUsuario"] = false;


    }else{
        swal({      
            title: "Mensaje de Error",
            text: "Faltan Casillas por Llenar",
            icon: "error",
            button: "Ok"
        })
    }
});