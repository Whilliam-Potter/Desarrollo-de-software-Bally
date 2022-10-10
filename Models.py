from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# class BaseDatosAdmin(db.Model):
    
#     rowid = db.Column(db.Integer, primary_key=True) #clave primaria, rowid: id de la fila
#     nombre = db.Column(db.String(200), unique=False, nullable=False) # unique: valor unico nullable: permitir si el valor puede estar vacio o no
#     subNombre = db.Column(db.String(200), unique=False, nullable=False)
#     apellido = db.Column(db.String(200), unique=False, nullable=False)
#     subApellido = db.Column(db.String(200), unique=False, nullable=False)
#     genero = db.Column(db.String(200), unique=False, nullable=False)
#     correo = db.Column(db.String(200), unique=False, nullable=False)
#     tipoIdentificacion = db.Column(db.String(200), unique=False, nullable=False)
#     numeroIdentificacion = db.Column(db.Integer)
#     numero = db.Column(db.Integer)
#     nacionalidad = db.Column(db.String(200), unique=False, nullable=False)
#     fechaNacimiento = db.Column(db.String(200), unique=False, nullable=False)
#     usuario = db.Column(db.String(200), unique=False, nullable=False)
#     clave = db.Column(db.String(200), unique=False, nullable=False)
    
#     def __init__(self, nombre, subNombre, apellido, subApellido, genero, correo, tipoIdentificacion, numeroIdentificacion, numero, nacionalidad, fechaNacimiento, usuario, clave):
#         super().__init__()
#         self.nombre = nombre #1
#         self.subNombre = subNombre #2
#         self.apellido = apellido #3
#         self.subApellido = subApellido #4
#         self.genero = genero #5
#         self.correo = correo #6
#         self.tipoIdentificacion = tipoIdentificacion #7
#         self.numeroIdentificacion = numeroIdentificacion #8
#         self.numero = numero #9
#         self.nacionalidad = nacionalidad #10
#         self.fechaNacimiento = fechaNacimiento #11
#         self.usuario = usuario #12
#         self.clave = clave #13
    
#     def __str__(self):
#         return "nombre: {}, subNombre: {}, apellido: {}, subApellido: {}, genero: {}, correo: {}, tipoIdentificacion: {}, numaeroIdentificacion: {}, numero: {}, nacionalidad: {}, fechaNacimiento: {}, usuario: {}, clave: {}".format(
#         self.nombre,
#         self.subNombre,
#         self.apellido,
#         self.subApellido,
#         self.genero,
#         self.correo,
#         self.tipoIdentificacion,
#         self.numeroIdentificacion,
#         self.nacionalidad,
#         self.fechaNacimiento,
#         self.usuario,
#         self.clave
#         )
    
#     def serialize(self):
#         return{
#             "rowid": self.rowid,
#             "nombre": self.nombre,
#             "subNombre": self.subNombre,
#             "apellido": self.genero,
#             "subApellido": self.subApellido,
#             "genero": self.genero,
#             "correo": self.correo,
#             "tipoIdentificacion": self.tipoIdentificacion, 
#             "numeroIdentificacion": self.numeroIdentificacion,
#             "numero": self.numero,
#             "nacionalidad": self.nacionalidad,
#             "fechaNacimiento": self.fechaNacimiento,
#             "usuario": self.usuario,
#             "clave": self.clave    
#         }
