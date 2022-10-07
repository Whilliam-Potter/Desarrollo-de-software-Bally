from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class BaseDatosAdmin(db.Model):
    
    rowid = db.Column(db.Integer, primary_key=True) #clave primaria, rowid: id de la fila
    nombre = db.Column(db.String(200), unique=True, nullable=False) # unique: valor unico nullable: permitir si el valor puede estar vacio o no
    #subNombre = db.Column(db.String(200), unique=True, nullable=False)
    apellido = db.Column(db.String(200), unique=True, nullable=False)
    #subApellido = db.Column(db.String(200), unique=True, nullable=False)
    #genero = db.Column(db.String(200), unique=True, nullable=False)
    #correo = db.Column(db.String(200), unique=True, nullable=False)
    #tipoIdentificacion = db.Column(db.String(200), unique=True, nullable=False)
    #numeroIdentificacion = db.Column(db.Integer)
    numero = db.Column(db.Integer)
    #nacionalidad = db.Column(db.String(200), unique=True, nullable=False)
    #fechaNacimiento = db.Column(db.String(200), unique=True, nullable=False)
    #usuario = db.Column(db.String(200), unique=True, nullable=False)
    #clave = db.Column(db.String(200), unique=True, nullable=False)

    # def __init__(self, nombre, subNombre, apellido, subApellido, genero, correo, tipoIdentificacion, numeroIdentificacion, numero, nacionalidad, fechaNacimiento, usuario, clave):
    #     super.__init__()
    #     self.nombre = nombre
    #     self.subNombre = subNombre
    #     self.apellido = apellido
    #     self.subApellido = subApellido
    #     self.genero = genero
    #     self.correo = correo
    #     self.tipoIdentificacion = tipoIdentificacion
    #     self.numeroIdentificacion = numeroIdentificacion
    #     self.numero = numero
    #     self.nacionalidad = nacionalidad
    #     self.fechaNacimiento = fechaNacimiento
    #     self.usuario = usuario
    #     self.clave = clave


    # def __str__(self):
    #     return "nombre: {}, subNombre: {}, apellido: {}, subApellido: {}, genero: {}, correo: {}, tipoIdentificacion: {}, numaeroIdentificacion: {}, numero: {}, nacionalidad: {}, fechaNacimiento: {}, usuario: {}, clave: {}".format(
    #     self.nombre,
    #     self.subNombre,
    #     self.apellido,
    #     self.subApellido,
    #     self.genero,
    #     self.correo,
    #     self.tipoIdentificacion,
    #     self.numeroIdentificacion,
    #     self.nacionalidad,
    #     self.fechaNacimiento,
    #     self.usuario,
    #     self.clave
    #     )
    
    # def serialize(self):
    #     return{
    #         "rowid": self.rowid,
    #         "nombre": self.nombre,
    #         "subNombre": self.subNombre,
    #         "apellido": self.genero,
    #         "subApellido": self.subApellido,
    #         "genero": self.genero,
    #         "correo": self.correo,
    #         "tipoIdentificacion": self.tipoIdentificacion, 
    #         "numeroIdentificacion": self.numeroIdentificacion,
    #         "numero": self.numero,
    #         "nacionalidad": self.nacionalidad,
    #         "fechaNacimiento": self.fechaNacimiento,
    #         "usuario": self.usuario,
    #         "clave": self.clave    
    #     }
