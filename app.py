from flask import Flask, jsonify, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from logging import exception

#from logging import exception

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///database\\mainDataBase.db'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)

#//////// Modelo_Clase_BaseDatosAdmin /////////

class BaseDatosAdmin(db.Model):
    
    rowid = db.Column(db.Integer, primary_key=True) #clave primaria, rowid: id de la fila
    nombre = db.Column(db.String(200), unique=False, nullable=False) # unique: valor unico nullable: permitir si el valor puede estar vacio o no
    subNombre = db.Column(db.String(200), unique=False, nullable=False)
    apellido = db.Column(db.String(200), unique=False, nullable=False)
    subApellido = db.Column(db.String(200), unique=False, nullable=False)
    genero = db.Column(db.String(200), unique=False, nullable=False)
    correo = db.Column(db.String(200), unique=False, nullable=False)
    tipoIdentificacion = db.Column(db.String(200), unique=False, nullable=False)
    numeroIdentificacion = db.Column(db.Integer)
    numero = db.Column(db.Integer)
    nacionalidad = db.Column(db.String(200), unique=False, nullable=False)
    fechaNacimiento = db.Column(db.String(200), unique=False, nullable=False)
    usuario = db.Column(db.String(200), unique=False, nullable=False)
    clave = db.Column(db.String(200), unique=False, nullable=False)
    
    def __init__(self, nombre, subNombre, apellido, subApellido, genero, correo, tipoIdentificacion, numeroIdentificacion, numero, nacionalidad, fechaNacimiento, usuario, clave):
        super().__init__()

        self.nombre = nombre #1
        self.subNombre = subNombre #2
        self.apellido = apellido #3
        self.subApellido = subApellido #4
        self.genero = genero #5
        self.correo = correo #6
        self.tipoIdentificacion = tipoIdentificacion #7
        self.numeroIdentificacion = numeroIdentificacion #8
        self.numero = numero #9
        self.nacionalidad = nacionalidad #10
        self.fechaNacimiento = fechaNacimiento #11
        self.usuario = usuario #12
        self.clave = clave #13
    
    def __str__(self):
        return "nombre: {}, subNombre: {}, apellido: {}, subApellido: {}, genero: {}, correo: {}, tipoIdentificacion: {}, numaeroIdentificacion: {}, numero: {}, nacionalidad: {}, fechaNacimiento: {}, usuario: {}, clave: {}".format(
        self.nombre,
        self.subNombre,
        self.apellido,
        self.subApellido,
        self.genero,
        self.correo,
        self.tipoIdentificacion,
        self.numeroIdentificacion,
        self.numero,
        self.nacionalidad,
        self.fechaNacimiento,
        self.usuario,
        self.clave
        )
    
    def serialize(self):
        return{
            "rowid": self.rowid,
            "nombre": self.nombre,
            "subNombre": self.subNombre,
            "apellido": self.apellido,
            "subApellido": self.subApellido,
            "genero": self.genero,
            "correo": self.correo,
            "tipoIdentificacion": self.tipoIdentificacion, 
            "numeroIdentificacion": self.numeroIdentificacion,
            "numero": self.numero,
            "nacionalidad": self.nacionalidad,
            "fechaNacimiento": self.fechaNacimiento,
            "usuario": self.usuario,
            "clave": self.clave    
        }

#//////// Modelo_Clase_Usuario /////////

class  BaseDatosUsuario(db.Model):

    rowid = db.Column(db.Integer, primary_key=True) #clave primaria, rowid: id de la fila
    nombre = db.Column(db.String(200), unique=True, nullable=False) # unique: valor unico nullable: permitir si el valor puede estar vacio o no
    subNombre = db.Column(db.String(200), unique=False, nullable=False)
    apellido = db.Column(db.String(200), unique=False, nullable=False)
    subApellido = db.Column(db.String(200), unique=False, nullable=False)
    genero = db.Column(db.String(200), unique=False, nullable=False)
    correo = db.Column(db.String(200), unique=True, nullable=False)
    usuario = db.Column(db.String(200), unique=False, nullable=False)
    clave = db.Column(db.String(200), unique=False, nullable=False)
    
    def __init__(self, nombre, subNombre, apellido, subApellido, genero, correo, usuario, clave):
        super().__init__()
        self.nombre = nombre #1
        self.subNombre = subNombre #2
        self.apellido = apellido #3
        self.subApellido = subApellido #4
        self.genero = genero #5
        self.correo = correo #6
        self.usuario = usuario #7
        self.clave = clave #78
    
    def __str__(self):
        return "nombre: {}, subNombre: {}, apellido: {}, subApellido: {}, correo: {}, usuario: {}, clave: {}".format(
        self.nombre,
        self.subNombre,
        self.apellido,
        self.subApellido,
        self.genero,
        self.correo,
        self.usuario,
        self.clave
        )
    
    def serialize(self):
        return{
            "rowid": self.rowid,
            "nombre": self.nombre,
            "subNombre": self.subNombre,
            "apellido": self.apellido,
            "subApellido": self.subApellido,
            "genero": self.genero,
            "correo": self.correo,
            "usuario": self.usuario,
            "clave": self.clave    
        }

#///////////// Rutas ////////////////

#Ruta dashboard

@app.route('/')

def home_dasboard():
    return render_template("Dashboard.html")

#Ruta Registro Administrador

@app.route('/Resgistro_Administrador')

def Registro_Admin():
    return render_template("RegistroAdministrador.html")

#Ruta Registro Usuario

@app.route('/Registro_Usuario')

def Registro_Usuario():
    return render_template('RegistroUsuario.html')

#Ruta Gestion Administrador

@app.route('/Gestion_Admin')

def Gestion_Admin():
    return render_template('ActualizacionAdministrador.html')

#Ruta Gestion Usuario

@app.route('/Gestion_Usuario')

def Gestion_Usuario():
    return render_template('ActualizacionUsuario.html')

#Ruta Gestion Producto

@app.route('/Gestion_Productos')

def Gestion_Producto():
    return render_template('ActualizacionProductos.html')

#Ruta login

@app.route('/Login')

def Login():
    return render_template("")

#///////////// Rutas para la Base de Datos Admin ////////////////

# /////// Ruta Get Datos Admin ////////

@app.route("/api/DatosAdministrador", methods=["GET"])
def getDatosAdmin():
    try:
        baseDatosAdministrador = BaseDatosAdmin.query.all()
        toReturn = [rowid.serialize() for rowid in baseDatosAdministrador]
        return jsonify(toReturn), 200
    except Exception:
        exception("[SERVER]: Error ->")
        return jsonify({"msg": "Ha ocurrido un error"}), 500

# /////// Ruta Get un Dato Admin ////////

@app.route("/api/getOneDato/<rowid>")
def getOneDatoAdmin(rowid):
    try:
        getOneDatoAdmin = BaseDatosAdmin.query.filter_by(rowid=int(rowid)).first()
        db.session.commit()
        
        if not getOneDatoAdmin:
            return jsonify({"msg": "La id no existe"}), 200
        else:
            return jsonify(getOneDatoAdmin.serialize()), 200 

    except Exception:
        exception("[SERVER]: Error ->")
        return jsonify({"msg": "Ha ocurrido un error"}), 500

# /////// Ruta update un Dato Admin ////////

@app.route('/api/updatoDatoAdmin/<rowid>', methods=['PUT'])
def UpdateDatoAdmin(rowid):
    try:
        UpdateAdmin = BaseDatosAdmin.query.filter_by(rowid=int(rowid)).first()
        DatosJsAdmin = request.get_json()
        UpdateAdmin.nombre = DatosJsAdmin["nombreAdmin"]
        UpdateAdmin.subNombre = DatosJsAdmin["subNombreAdmin"]
        UpdateAdmin.apellido = DatosJsAdmin["apellidoAdmin"]
        UpdateAdmin.subApellido = DatosJsAdmin["subApellidoAdmin"]
        UpdateAdmin.genero = DatosJsAdmin["generoAdmin"]
        UpdateAdmin.correo = DatosJsAdmin["correoAdmin"]
        UpdateAdmin.tipoIdentificacion = DatosJsAdmin["typeid"]
        UpdateAdmin.numeroIdentificacion = DatosJsAdmin["idAdmin"]
        UpdateAdmin.numero = DatosJsAdmin["numeroAdmin"]
        UpdateAdmin.nacionalidad = DatosJsAdmin["nacionalidadAdmin"]
        UpdateAdmin.fechaNacimiento = DatosJsAdmin["cumpleAdmin"]
        UpdateAdmin.usuario = DatosJsAdmin["GenerarUsuarioAdmin"]
        UpdateAdmin.clave = DatosJsAdmin["GenerarContraseñaAdmin"]
        
        db.session.commit()
        return jsonify(UpdateAdmin.serialize()), 200 
    except Exception:
        exception("[SERVER]: Error ->")
        return jsonify({"msg": "Ha ocurrido un error"}), 500


# /////// Ruta Delete Datos Admin ////////

@app.route("/api/deleteDatoAdmin/<rowid>")
def deleteDatosAdmin(rowid):
    try:
        deleteDatosAdmin = BaseDatosAdmin.query.filter_by(rowid=int(rowid)).first()
        db.session.delete(deleteDatosAdmin)
        db.session.commit()

        return jsonify({"msg": "El id fue eliminado"}), 200 
        
    except Exception:
        exception("[SERVER]: Error ->")
        return jsonify({"msg": "No existe la id"}), 500

# /////// Ruta Post Datos Admin ////////

@app.route('/api/addDatosAdmin', methods=['POST'])

def addDatosAdmin():
    try:
        if request.method == 'POST':
            DatosJsAdmin = request.get_json()
            nombre = DatosJsAdmin["nombreAdmin"]
            subNombre = DatosJsAdmin["subNombreAdmin"]
            apellido = DatosJsAdmin["apellidoAdmin"]
            subApellido = DatosJsAdmin["subApellidoAdmin"]
            genero = DatosJsAdmin["generoAdmin"]
            correo = DatosJsAdmin["correoAdmin"]
            tipoIdentificacion = DatosJsAdmin["typeid"]
            numeroIdentificacion = DatosJsAdmin["idAdmin"]
            numero = DatosJsAdmin["numeroAdmin"]
            nacionalidad = DatosJsAdmin["nacionalidadAdmin"]
            fechaNacimiento = DatosJsAdmin["cumpleAdmin"]
            usuario = DatosJsAdmin["GenerarUsuarioAdmin"]
            clave = DatosJsAdmin["GenerarContraseñaAdmin"]

            baseDatosAdmin = BaseDatosAdmin(nombre, subNombre, apellido, subApellido, genero, correo, tipoIdentificacion, int(numeroIdentificacion), int(numero), nacionalidad, fechaNacimiento, usuario, clave)
            db.session.add(baseDatosAdmin)
            db.session.commit()

            return jsonify(baseDatosAdmin.serialize()), 200 
        else:
            print("Algo paso")
    except Exception:
             exception("\n[SERVER]: ERROR IN RUTE /addDatosAdmin. log: \n")
             return jsonify({"msg": "Algo ha salido mal"}), 500

#///////////// Rutas para la Base de Datos Usuario ////////////////

# /////// Ruta Get Datos Usuario ////////

@app.route("/api/DatosUsuario", methods=["GET"])
def getDatosUsuario():
    try:
        baseDatosUsuario = BaseDatosUsuario.query.all()
        toReturn = [rowid.serialize() for rowid in baseDatosUsuario]
        return jsonify(toReturn), 200
    except Exception:
        exception("[SERVER]: Error ->")
        return jsonify({"msg": "Ha ocurrido un error"}), 500

# /////// Ruta Get un Dato Usuario ////////

@app.route("/api/getOneDatoUsuario/<rowid>")
def getOneDatoUsuario(rowid):
    try:
        getOneDatoUsuario = BaseDatosUsuario.query.filter_by(rowid=int(rowid)).first()
        db.session.commit()
        
        if not getOneDatoUsuario:
            return jsonify({"msg": "La id no existe"}), 200
        else:
            return jsonify(getOneDatoUsuario.serialize()), 200 

    except Exception:
        exception("[SERVER]: Error ->")
        return jsonify({"msg": "Ha ocurrido un error"}), 500

# /////// Ruta update un Dato Usuario ////////

@app.route('/api/updatoDatoUsuario/<rowid>', methods=['PUT'])
def UpdateDatoUsuario(rowid):
    try:
        UpdateUsuario = BaseDatosUsuario.query.filter_by(rowid=int(rowid)).first()
        DatosJsUsuario = request.get_json()
        UpdateUsuario.nombre = DatosJsUsuario["nombreUsuario"]
        UpdateUsuario.subNombre = DatosJsUsuario["subNombreUsuario"]
        UpdateUsuario.apellido = DatosJsUsuario["apellidoUsuario"]
        UpdateUsuario.subApellido = DatosJsUsuario["subApellidoUsuario"]
        UpdateUsuario.genero = DatosJsUsuario["generoUsuario"]
        UpdateUsuario.correo = DatosJsUsuario["correoUsuario"]
        UpdateUsuario.usuario = DatosJsUsuario["GenerarUsuarioUsuario"]
        UpdateUsuario.clave = DatosJsUsuario["GenerarContraseñaUsuario"]
        
        db.session.commit()
        return jsonify(UpdateUsuario.serialize()), 200 
    except Exception:
        exception("[SERVER]: Error ->")
        return jsonify({"msg": "Ha ocurrido un error"}), 500


# /////// Ruta Delete Datos Usuario ////////

@app.route("/api/deleteDatoUsuario/<rowid>")
def deleteDatosUsuario(rowid):
    try:
        deleteDatosUsuario = BaseDatosUsuario.query.filter_by(rowid=int(rowid)).first()
        db.session.delete(deleteDatosUsuario)
        db.session.commit()

        return jsonify({"msg": "El id fue eliminado"}), 200 
        
    except Exception:
        exception("[SERVER]: Error ->")
        return jsonify({"msg": "No existe la id"}), 500

# /////// Ruta Post Datos Usuario ////////

@app.route('/api/addDatosUsuario', methods=['POST'])

def addDatosUsuario():
    try:
        if request.method == 'POST':
            DatosJsUsuario = request.get_json()
            nombre = DatosJsUsuario["nombreUsuario"]
            subNombre = DatosJsUsuario["subNombreUsuario"]
            apellido = DatosJsUsuario["apellidoUsuario"]
            subApellido = DatosJsUsuario["subApellidoUsuario"]
            genero = DatosJsUsuario["generoUsuario"]
            correo = DatosJsUsuario["correoUsuario"]
            usuario = DatosJsUsuario["GenerarUsuarioUsuario"]
            clave = DatosJsUsuario["GenerarContraseñaUsuario"]

            baseDatosUsuario = BaseDatosUsuario(nombre, subNombre, apellido, subApellido, genero, correo, usuario, clave)
            db.session.add(baseDatosUsuario)
            db.session.commit()

            return jsonify(baseDatosUsuario.serialize()), 200 
        else:
            print("Algo paso")
    except Exception:
             exception("\n[SERVER]: ERROR IN RUTE /addDatosAdmin. log: \n")
             return jsonify({"msg": "Algo ha salido mal"}), 500


if __name__ == '__main__':
    app.run(port = 5000, debug = True)