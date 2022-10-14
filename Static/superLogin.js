const FormularioSuperLogin = document.getElementById("FormularioSuperLogin");
const inputs = document.querySelectorAll('#FormularioSuperLogin');

const expresiones = {
	usuario: /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[@$?¡\-_]){1})\S{8,16}$/, // Letras, numeros, guion y guion_bajo. 8 a 16 digitos.
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[@$?¡\-_]){1})\S{8,16}$/, // Letras, numeros, guion y guion_bajo. 8 a 16 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    identificacion: /^[0-9]{1,10}$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    fecha: /^(19|20)(((([02468][048])|([13579][26]))-02-29)|(\d{2})-((02-((0[1-9])|1\d|2[0-8]))|((((0[13456789])|1[012]))-((0[1-9])|((1|2)\d)|30))|(((0[13578])|(1[02]))-31)))$/,
    tipoId: /^[a-cA-C0-2]+[.]+[a-cA-C0-2]$/
}

const campos = {

GenerarContraseñaUsuario: false,
GenerarUsuarioUsuario: false

}

const validarFormulario = (e) => {
    //console.log(e.target.name);
    switch(e.target.name){

        case "GenerarUsuarioUsuario":
            console.log('Funciona');
            validarCamp(expresiones.usuario, e.target, "GenerarUsuarioUsuario");
        break;

        case "GenerarContraseñaUsuario":
            console.log('Funciona');
            validarCamp(expresiones.password, e.target, "GenerarContraseñaUsuario");
        break;

    }
}

// Validacion campos 

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
    
// Control de eventos

inputs.forEach((input) => {

    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

});

FormularioSuperLogin.addEventListener('submit', async e =>{

    e.preventDefault();

    if(campos.GenerarContraseñaUsuario && campos.GenerarUsuarioUsuario){
        
        //Enviar datos desde JS en formato (json) a flask//

        const GenerarUsuarioUsuario = FormularioSuperLogin["GenerarUsuarioUsuario"].value
        const GenerarContraseñaUsuario = FormularioSuperLogin["GenerarContraseñaUsuario"].value

        // enviar registro a la base de datos //

        const response = await fetch('/api/ingresoSesion', {
            method: 'POST', 
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                GenerarUsuarioUsuario, 
                GenerarContraseñaUsuario 

            })
        });

        const datoU = await response.json()
        if(datoU == 'error'){
            swal({      
                title: "Mensaje de Error",
                text: "El usuario no se encuentra registrado",
                icon: "error",
                button: "Ok"
            }) 
        }else{
            console.log(datoU)
            if(datoU == 'Usuario'){
                console.log(datoU)
                FormularioSuperLogin.reset();
                window.location.href = 'http://127.0.0.1:5000/index'
                document.querySelectorAll('.GrupoAdmin-correcto').forEach((icono) =>{
                    icono.classList.remove('GrupoAdmin-correcto')       
                });
            }else{   
                if(datoU == 'Admin'){
                    FormularioSuperLogin.reset();
                    window.location.href = 'http://127.0.0.1:5000/'
                    document.querySelectorAll('.GrupoAdmin-correcto').forEach((icono) =>{
                        icono.classList.remove('GrupoAdmin-correcto')       
                    });
                }
            }    
        }
    }else{
        swal({      
            title: "Mensaje de Error",
            text: "Faltan Casillas por Llenar",
            icon: "error",
            button: "Ok"
        })
    }
});