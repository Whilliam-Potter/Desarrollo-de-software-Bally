const formularioProductos = document.getElementById("formularioProductos");
const formularioProductosUpdate = document.getElementById("formularioProductosUpdate");
const Busqueda= document.getElementById("Busqueda");
const inputs = document.querySelectorAll('#formularioProductos');

const expresiones = {
	usuario: /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[@$?¡\-_]){1})\S{8,16}$/, // Letras, numeros, guion y guion_bajo. 8 a 16 digitos.
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[@$?¡\-_]){1})\S{8,200}$/, // Letras, numeros, guion y guion_bajo. 8 a 16 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    identificacion: /^[0-9]{1,10}$/,
	numero: /^\d{0,20}$/, // 7 a 14 numeros.
    fecha: /^(19|20)(((([02468][048])|([13579][26]))-02-29)|(\d{2})-((02-((0[1-9])|1\d|2[0-8]))|((((0[13456789])|1[012]))-((0[1-9])|((1|2)\d)|30))|(((0[13578])|(1[02]))-31)))$/,
    tipoId: /^[a-cA-C0-2]+[.]+[a-cA-C0-2]$/
}

const campos = {

    imagen: false, 
    categoria: false, 
    marca: false, 
    cantidad: false, 
    precio: false,
    
}   

const validarFormulario = (e) => {
    //console.log(e.target.name);
    switch(e.target.name){

        case "imagen":
            console.log('Funciona');
            validarCamp(expresiones.nombre, e.target, "imagen");
        break;

        case "categoria":
            console.log('Funciona');
            validarCamp(expresiones.nombre, e.target, "categoria");
        break;

        case "marca":
            console.log('Funciona');
            validarCamp(expresiones.nombre, e.target, "marca");
        break;

        case "cantidad":
            console.log('Funciona');
            validarCamp(expresiones.numero, e.target, "cantidad");
        break;

        case "precio":
            console.log('Funciona');
            validarCamp(expresiones.numero, e.target, "precio");
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

function validarCategoria(){

    const selectCategoria = document.getElementById("categoria").value;
    
    if((selectCategoria == "")){
        document.getElementById(`Grupo__categoria`).classList.add('GrupoAdmin-incorrecto');
        document.getElementById(`Grupo__categoria`).classList.remove('GrupoAdmin-correcto');
        document.querySelector(`#Grupo__categoria i`).classList.add('fa-times-circle');
        document.querySelector(`#Grupo__categoria i`).classList.remove('fa-check-circle');
        document.querySelector(`#Grupo__categoria  .Error_nombreAdmin_imput`).classList.add('Error_nombreAdmin_imput-activo');
        campos["categoria"]  = false;
    }else{
        document.getElementById(`Grupo__categoria`).classList.remove('GrupoAdmin-incorrecto');
        document.getElementById(`Grupo__categoria`).classList.add('GrupoAdmin-correcto');
        document.querySelector(`#Grupo__categoria i`).classList.remove('fa-times-circle');
        document.querySelector(`#Grupo__categoria i`).classList.add('fa-check-circle');
        document.querySelector(`#Grupo__categoria  .Error_nombreAdmin_imput`).classList.remove('Error_nombreAdmin_imput-activo');
        campos["categoria"]  = true;
    }

}

function validarMarca(){

    const selectMarca = document.getElementById("marca").value;
    
    if((selectMarca == "")){
        document.getElementById(`Grupo__marca`).classList.add('GrupoAdmin-incorrecto');
        document.getElementById(`Grupo__marca`).classList.remove('GrupoAdmin-correcto');
        document.querySelector(`#Grupo__marca i`).classList.add('fa-times-circle');
        document.querySelector(`#Grupo__marca i`).classList.remove('fa-check-circle');
        document.querySelector(`#Grupo__marca  .Error_nombreAdmin_imput`).classList.add('Error_nombreAdmin_imput-activo');
        campos["marca"]  = false;
    }else{
        document.getElementById(`Grupo__marca`).classList.remove('GrupoAdmin-incorrecto');
        document.getElementById(`Grupo__marca`).classList.add('GrupoAdmin-correcto');
        document.querySelector(`#Grupo__marca i`).classList.remove('fa-times-circle');
        document.querySelector(`#Grupo__marca i`).classList.add('fa-check-circle');
        document.querySelector(`#Grupo__marca  .Error_nombreAdmin_imput`).classList.remove('Error_nombreAdmin_imput-activo');
        campos["marca"]  = true;
    }

}

// Control de eventos

inputs.forEach((input) => {

    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

});

// registro de Productos //

formularioProductos.addEventListener('submit', async e =>{

    e.preventDefault();

    if(campos.imagen && campos.categoria && 
       campos.marca && campos.cantidad && campos.precio){
        
        //Enviar datos desde JS en formato (json) a flask//

        const imagen = formularioProductos["imagen"].value
        const categoria = formularioProductos["categoria"].value
        const marca = formularioProductos["marca"].value
        const cantidad = formularioProductos["cantidad"].value
        const precio = formularioProductos["precio"].value

        // enviar registro a la base de datos //

        const response = await fetch('api/addDatosProductosMasculinos', {
            method: 'POST', 
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                imagen,
                categoria,
                marca,
                cantidad,
                precio,

            })
        });

        const dato = await response.json()
        console.log(dato)
        formularioProductos.reset();
        
        document.querySelectorAll('.GrupoAdmin-correcto').forEach((icono) =>{
            icono.classList.remove('GrupoAdmin-correcto')       
        });

        swal({           
            title: "Satisfatorio",
            text: "Se realizo el Registro",
            icon: "success",
            button:"Ok"
        }); 
           
        campos["imagen"] = false;
        campos["categoria"] = false;
        campos["marca"] = false;
        campos["cantidad"] = false;
        campos["precio"] = false;

    }else{
        swal({      
            title: "Mensaje de Error",
            text: "Faltan Casillas por Llenar",
            icon: "error",
            button: "Ok"
        })
    }
});

let users = [];

//let editing = false;

//let userRowid = null;

Estado = true;

window.addEventListener('DOMContentLoaded', async () => {

    const response = await fetch('/api/DatosProductosMasculinos');
    const data = await response.json()
    users = data
    renderUser(users)

});

// renderizar users //

function renderUser(users){

    
    // buscar registro // Nota: Intento fallido, no se puede actulizar la array, y genera un error en la linea 252.
    /*var punto_buscar = 0;

    const Consultar = document.querySelector("#Consultar")  
    Consultar.addEventListener('click', async () => {
        
        punto_buscar = punto_buscar + 1;

        if(punto_buscar == 1){
            const categoria = Busqueda["EntradaDato"].value

            const response = await fetch('api/SearchDatosProductosMasculinos', {
                method: 'POST', 
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                    categoria,

                })
            });
            const dato = await response.json()
            users.pop()
            users = dato;
            console.log("dato = "+users)

            if(dato.categoria == categoria){
                console.log("tabla datos = " + users)  
                Estado = false;
                console.log(Estado)
                users.forEach( user => {
                    const ItemTablaDatos = document.createElement('tr')
                        ItemTablaDatos.innerHTML = `
                        <td class="CajaRegistro"><input id="" name="" type="checkbox"></td>
                        <td><span class="Disponible"></span></td>
                        <td><img src="${user.imagen}" width="60px" height="60px"></td>
                        <td>${user.categoria}</td>
                        <td>${user.marca}</td>
                        <td>${user.cantidad}</td>
                        <td>${user.precio} $</td>
                    `
                    console.log("Tablero = "+ItemTablaDatos)
                    //console.log(user)
                    CuerpoTablaDatos.append(ItemTablaDatos) 
                    punto_buscar = 0; 
                    console.log(punto_buscar)
                    renderUser(users)
                });  
                console.log('Zapatos')
            }else{
                console.log("no hay")
                Estado = true;
                punto_buscar = 0; 
                //renderUser(users)
            } 
        }
    });*/
    
    //renderUser()
    //if(Estado == true){
    
    // Añadir registro //

    const CuerpoTablaDatos = document.querySelector('tbody')
    CuerpoTablaDatos.innerHTML = '' 
    
    users.forEach( user => {
        const ItemTablaDatos = document.createElement('tr')
            ItemTablaDatos.innerHTML = `
            <td class="CajaRegistro"><input id="" name="" type="checkbox"> </td>
            <td><span class="Disponible"></span></td>
            <td><img src="${user.imagen}" width="60px" height="60px"></td>
            <td>${user.categoria}</td>
            <td>${user.marca}</td>
            <td>${user.cantidad}</td>
            <td>${user.precio} $</td>
        `

        var punto = 0;
        //${user.imagen}
        const Marca = ItemTablaDatos.querySelector(".CajaRegistro")

        Marca.addEventListener('change', async (e) =>{
        console.log(Marca)
        console.log("Casilla = "+user.rowid)
            if(e.target.checked){
                punto = punto + 1;
                console.log(punto)
            }else{
                punto = 0;
                console.log(punto)
            }
        
        });

        // Borrar registro //
        const Borrar = document.querySelector("#Borrar") 

        var punto_borrar = 0;
        Borrar.addEventListener('click', async () => {

            //punto_borrar = punto_borrar + 1;

            console.log(punto_borrar)

            if(punto == 1 && punto_borrar == 1){
                console.log("Click = "+user.rowid)
                // se creo una funcion para integrarlo con la librearia de Swall
                async function Eliminar(){
                    const response = await fetch(`/api/deleteDatProductoMasculinos/${user.rowid}`,{
                        method: 'GET'
                    })
                    const data = await response.json()
                    console.log(data)
                    users = users.filter(user => user.rowid !== data.rowid)
                    };
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
                    };
                });

            }else{
                punto_borrar = 0;
                swal({
                    title: "ACCION DENEGADA",
                    text: "Ha ocurrido un problema, debes seleccionar una casilla",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                    })
                console.log(punto_borrar)
                };   
            
        });
        // Actualizar registro

        const Editar = document.querySelector("#Editar") 

        console.log("Casilla = "+user.rowid)  
        var punto_editar = 0;  
        Editar.addEventListener('click', async () => {               

            punto_editar = punto_editar + 1;

            if(punto == 1 && punto_editar == 1){
                console.log(user.rowid)
                // Ventana Modal para la Actualizacion de Registro //
                var Modal_2 = document.getElementById("ModalProducto");
                var spanModal_2 = document.getElementsByClassName("Close_2")[0];
                
                Modal_2.style.display = "block";
                //console.log(user.rowid) 
                spanModal_2.onclick = function() {
            
                    Modal_2.style.display = "none";
                    location.reload()
            
                }   

                const response = await fetch(`/api/getOneDatoProductoMasculino/${user.rowid}`)                   
                const data = await response.json()

                formularioProductosUpdate["imagenProducto"].value = data.imagen;
                formularioProductosUpdate["categoriaProducto"].value = data.categoria;
                formularioProductosUpdate["marcaProducto"].value = data.marca;
                formularioProductosUpdate["cantidadProducto"].value = data.cantidad;
                formularioProductosUpdate["precioProducto"].value = data.precio;

                editing = true;
                userRowid = data.rowid;
                console.log(data)
                console.log("userRowid = "+userRowid)

                formularioProductosUpdate.addEventListener('submit', async e =>{

                    e.preventDefault();
                                            
                        //Enviar datos desde JS en formato (json) a flask//
                        const imagen = formularioProductosUpdate["imagenProducto"].value
                        const categoria = formularioProductosUpdate["categoriaProducto"].value
                        const marca = formularioProductosUpdate["marcaProducto"].value
                        const cantidad = formularioProductosUpdate["cantidadProducto"].value
                        const precio = formularioProductosUpdate["precioProducto"].value
                        
                        if (!editing){
                        const response = await fetch('api/addDatosProductosMasculinos', {
                            method: 'POST', 
                            headers:{
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                
                                imagen,
                                categoria,
                                marca,
                                cantidad,
                                precio, 
                
                            })
                        });
                
                        const dato = await response.json()
                        console.log(dato)
                        }else{
                            const response = await fetch(`/api/updateDatoProducto/${userRowid}`,{
                                method: "PUT",
                                headers:{
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                    
                                    imagen,
                                    categoria,
                                    marca,
                                    cantidad,
                                    precio, 
                        
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
                            });
                        }
                });
                
            }else{
                console.log(user.rowid)
                console.log("Algo salio mal")
                swal({
                    title: "ACCION DENEGADA",
                    text: "Ha ocurrido un problema, debes seleccionar una casilla",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                punto_editar = 0;
                console.log(punto_editar)
                }
            
        })    

        console.log(ItemTablaDatos)
        //console.log(user)
        CuerpoTablaDatos.append(ItemTablaDatos) 
    });
    /*}else{
    console.log("estado false")}*/
};


// Añadir registro //

const Agregar = document.querySelector("#Añadir")  

Agregar.addEventListener('click', async () => {               

    //if(e.target.checked){
        //console.log(user.rowid)
        // Ventana Modal para la Actualizacion de Registro //
        var Modal = document.getElementById("ModalAdmin");
        var spanModal = document.getElementsByClassName("Close")[0];
        
        Modal.style.display = "block";

        spanModal.onclick = function() {
    
            Modal.style.display = "none";
            location.reload()
    
        }   
});