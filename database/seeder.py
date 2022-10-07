import sqlite3 as sql

DB_PATH = "Project/database/baseDatosAdmin.db"

# Funcion, crear base de datos

def createDB():

    conn = sql.connect(DB_PATH) #conectar la base de datos
    cursor = conn.cursor()
    cursor.execute(

        # """CREATE TABLE baseDatosAdmin(

        #     nombre text, subNombre text,
        #     apellido text, subApellido text,
        #     genero text, correo text,
        #     tipoIdentificacion text, numeroIdentificacion integer,
        #     numero integer, nacionalidad text,
        #     fechaNacimiento text, usuario text,
        #     clave text

        # )"""
        """CREATE TABLE baseDatosAdmin(

             nombre text, apellido text, 
             numero integer

         )"""

    )

    conn.commit() #realizar cambios
    conn.close() #cerrar la conexion

def addValues():

    conn = sql.connect(DB_PATH)
    cursor = conn.cursor()
    #addAdmin = [("Pedro","Samuel","Vermudez","Meza","Masculino","PedroS@gmail.com","C.C",88080413252,3102896275,"Colombia","02/02/1992","Pedros5xC$3","#v1yKg5#73%#s")]
    addAdmin = [("Pedro","Vermudez",3102896275)]

    #cursor.executemany("""INSERT INTO baseDatosAdmin VALUES (?, ?, ?, ? ,?, ?, ?, ?, ?, ? ,?, ?, ?)""",addAdmin)
    cursor.executemany("""INSERT INTO baseDatosAdmin VALUES (?, ?, ?)""",addAdmin)
    conn.commit()
    conn.close()


if __name__ == "__main__":
    createDB()
    addValues()