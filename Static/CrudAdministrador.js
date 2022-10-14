const formularioEditAdmin = document.getElementById("formularioEditAdmin");
const inputs = document.querySelectorAll('#formularioEditAdmin');

const expresiones = {
	usuario: /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[@$?¡\-_]){1})\S{8,16}$/, // Letras, numeros, guion y guion_bajo. 8 a 16 digitos.
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[@$?¡\-_]){1})\S{8,200}$/, // Letras, numeros, guion y guion_bajo. 8 a 16 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    identificacion: /^[0-9]{1,10}$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    fecha: /^(19|20)(((([02468][048])|([13579][26]))-02-29)|(\d{2})-((02-((0[1-9])|1\d|2[0-8]))|((((0[13456789])|1[012]))-((0[1-9])|((1|2)\d)|30))|(((0[13578])|(1[02]))-31)))$/,
    tipoId: /^[a-cA-C0-2]+[.]+[a-cA-C0-2]$/
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

// Validacion

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

        case "generoAdmin":
            console.log('Funciona');
            validarCamp(expresiones.nombre, e.target, "generoAdmin");
        break;

        case "correoAdmin":
            console.log('Funciona');
            validarCamp(expresiones.correo, e.target, "correoAdmin");
        break;

        case "typeid":
            console.log('Funciona');
            validarCamp(expresiones.tipoId, e.target, "typeid");
        break;

        case "idAdmin":
            console.log('Funciona');
            validarCamp(expresiones.identificacion, e.target, "idAdmin");
        break;

        case "numeroAdmin":
            console.log('Funciona');
            validarCamp(expresiones.telefono, e.target, "numeroAdmin");
        break;

        case "nacionalidadAdmin":
            console.log('Funciona');
            validarCamp(expresiones.nombre, e.target, "nacionalidadAdmin");
        break;

        case "cumpleAdmin":
            console.log('Funciona');
            validarCamp(expresiones.fecha, e.target, "cumpleAdmin");
        break;

        case "GenerarContraseñaAdmin":
            console.log('Funciona');
            validarCamp(expresiones.password, e.target, "GenerarContraseñaAdmin");
        break;

        case "GenerarUsuarioAdmin":
            console.log('Funciona');
            validarCamp(expresiones.usuario, e.target, "GenerarUsuarioAdmin");
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

inputs.forEach((input) => {

    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

});

let users = [];

let editing = false;

let userRowid = null;

window.addEventListener('DOMContentLoaded', async () => {

    const response = await fetch('/api/DatosAdministrador');
    const data = await response.json()
    users = data
    renderUser(users)

});

// renderizar users

function renderUser(users){

    // Añadir registro //

    const CuerpoTablaDatos= document.querySelector('tbody')
    CuerpoTablaDatos.innerHTML = '' 
    console.log(users)

    users.forEach( user => {
        const ItemTablaDatos = document.createElement('tr')
        ItemTablaDatos.innerHTML = `
            <td class="CajaRegistro"><input id="" name="" type="checkbox"> </td>
            <td></td>
            <td><span class="Disponible"></span></td>
            <td>${user.usuario}</td>
            <td>${user.nombre}</td>
            <td>${user.apellido}</td>
            <td>Admin</td>
            <td>${user.nacionalidad}</td>
            <td>${user.correo}</td>
        `
        // Borrar registro //

        const Marca = ItemTablaDatos.querySelector(".CajaRegistro")
        const Borrar = document.querySelector("#Borrar")  
        console.log(Marca)

        Marca.addEventListener('change', async (e) =>{
            console.log("Casilla = "+user.rowid)
            Borrar.addEventListener('click', async () => {
                console.log(user.rowid)
                if(e.target.checked){
                    console.log("Click = "+user.rowid)
                    // se creo una funcion para integrarlo con la librearia de Swall
                    async function Eliminar(){
                        const response = await fetch(`/api/deleteDatoAdmin/${user.rowid}`,{
                            method: 'GET'
                        })
                        const data = await response.json()
                        console.log(data)
                        users = users.filter(user => user.rowid !== data.rowid)
                        }
                    swal({
                        title: "ESTAS SEGURO?",
                        text: "Una vez eliminado, el registro no se podra recuperar",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      })
                      .then((willDelete) => {
                        if (willDelete) {
                          swal({
                            title: "PROCESO REALIZADO!!",
                            text: "Se a Eliminado el Registro ${user.rowid}",
                            icon: "success"    
                          })
                          .then(Eliminar())
                          .then(function(){location.reload();});
                        } else {
                          swal({title:"Tu registro no ha sido borrado!",icon: "success"})
                          .then(function(){location.reload();});
                        }
                      });
                }else{
                    console.log(user.rowid)
                    swal({
                        title: "ACCION DENEGADA",
                        text: "Ha ocurrido un problema, debes seleccionar una casilla",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      })
                    console.log("Algo salio mal")
                }
            })    
        });
        
        // Actualizar registro

        const Editar = document.querySelector("#Editar")  
        Marca.addEventListener('change', async (e) =>{
            console.log("Casilla = "+user.rowid)    
            Editar.addEventListener('click', async () => {               

                if(e.target.checked){
                    console.log(user.rowid)
                    // Ventana Modal para la Actualizacion de Registro //
                    var Modal = document.getElementById("ModalAdmin");
                    var spanModal = document.getElementsByClassName("Close")[0];
                    
                    Modal.style.display = "block";
                    //console.log(user.rowid) 
                    spanModal.onclick = function() {
                
                        Modal.style.display = "none";
                        location.reload()
                
                    }   
    
                    const response = await fetch(`/api/getOneDato/${user.rowid}`)                   
                    const data = await response.json()

                    formularioEditAdmin["nombreAdmin"].value = data.nombre;
                    formularioEditAdmin["subNombreAdmin"].value = data.subNombre;
                    formularioEditAdmin["apellidoAdmin"].value = data.apellido;
                    formularioEditAdmin["subApellidoAdmin"].value = data.subApellido;
                    formularioEditAdmin["generoAdmin"].value = data.genero;
                    formularioEditAdmin["correoAdmin"].value = data.correo;
                    formularioEditAdmin["typeid"].value = data.tipoIdentificacion;
                    formularioEditAdmin["idAdmin"].value = data.numeroIdentificacion;
                    formularioEditAdmin["numeroAdmin"].value = data.numero;
                    formularioEditAdmin["nacionalidadAdmin"].value = data.nacionalidad;
                    formularioEditAdmin["cumpleAdmin"].value = data.fechaNacimiento;
                    formularioEditAdmin["GenerarUsuarioAdmin"].value = data.usuario;
                    formularioEditAdmin["GenerarContraseñaAdmin"].value = data.clave;

                    editing = true;
                    userRowid = data.rowid;
                    console.log(data)
                    console.log("userRowid = "+userRowid)

                    formularioEditAdmin.addEventListener('submit', async e =>{

                        e.preventDefault();
                                                
                            //Enviar datos desde JS en formato (json) a flask//
                            const nombreAdmin = formularioEditAdmin["nombreAdmin"].value
                            const subNombreAdmin = formularioEditAdmin["subNombreAdmin"].value
                            const apellidoAdmin = formularioEditAdmin["apellidoAdmin"].value
                            const subApellidoAdmin = formularioEditAdmin["subApellidoAdmin"].value
                            const generoAdmin = formularioEditAdmin["generoAdmin"].value
                            const correoAdmin = formularioEditAdmin["correoAdmin"].value
                            const typeid = formularioEditAdmin["typeid"].value
                            const idAdmin = formularioEditAdmin["idAdmin"].value
                            const numeroAdmin = formularioEditAdmin["numeroAdmin"].value
                            const nacionalidadAdmin = formularioEditAdmin["nacionalidadAdmin"].value
                            const cumpleAdmin = formularioEditAdmin["cumpleAdmin"].value
                            const GenerarUsuarioAdmin = formularioEditAdmin["GenerarUsuarioAdmin"].value
                            const GenerarContraseñaAdmin = formularioEditAdmin["GenerarContraseñaAdmin"].value
                            
                            if (!editing){
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
                        }else{
                            const response = await fetch(`/api/updatoDatoAdmin/${userRowid}`,{
                                method: "PUT",
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
                            })
                            const data = await response.json();
                            console.log('updating')
                            console.log(data)                                            
                            swal({           
                                title: "Satisfatorio",
                                text: `Se a Actualizado el Registro ${user.rowid}`,
                                icon: "success",
                                button:"Ok"
                            })
                            .then(function(){ location.reload(); 
                            } );
                        }
                    });
                    
                }else{
                    console.log(user.rowid)
                    console.log("Algo salio mal")
                }
            })    
        
        });

        // Buscar registro //
        
        console.log(ItemTablaDatos)
        //console.log(user)
        CuerpoTablaDatos.append(ItemTablaDatos)   
    });
};