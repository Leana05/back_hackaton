CREATE DATABASE dbSGFP

USE dbSGFP

CREATE TABLE tblUsuario (
	IdUsuario INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    Cedula VARCHAR(10) NOT NULL,
    Correo VARCHAR(50) NOT NULL,
    Contrasena VARCHAR(50) NOT NULL
)

CREATE TABLE tblCategoria (
	IdCategoria INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL
)

CREATE TABLE tblGasto (
	IdGastos INT AUTO_INCREMENT PRIMARY KEY,
    IdCategoria INT NOT NULL,
    IdUsuario INT NOT NULL,
    Fecha DATETIME NOT NULL,
    Monto DECIMAL(20,2) NOT NULL, 
    FOREIGN KEY (IdCategoria) REFERENCES tblCategoria (IdCategoria),
    FOREIGN KEY (IdUsuario) REFERENCES tblUsuario (IdUsuario)
)

CREATE TABLE tblIngreso (
	IdIngreso INT AUTO_INCREMENT PRIMARY KEY,
    IdCategoria INT NOT NULL,
    IdUsuario INT NOT NULL,
    Fecha DATETIME NOT NULL,
    Monto DECIMAL(20,2) NOT NULL, 
    FOREIGN KEY (IdCategoria) REFERENCES tblCategoria (IdCategoria),
    FOREIGN KEY (IdUsuario) REFERENCES tblUsuario (IdUsuario)
)

CREATE TABLE tblMeta (
	IdMeta INT AUTO_INCREMENT PRIMARY KEY,
    IdUsuario INT NOT NULL,
    NombreMeta VARCHAR(50),
    FechaInicio DATETIME NOT NULL,
    FechaFinal DATETIME NOT NULL,
    MontoMeta DECIMAL(20,2) NOT NULL,
    MontoAhorrado DECIMAL(20,2) NOT NULL,
    FOREIGN KEY (IdUsuario) REFERENCES tblUsuario (IdUsuario)
)

CREATE TABLE tblHistorial (
	IdHistorial INT AUTO_INCREMENT PRIMARY KEY,
    IdMeta INT NOT NULL,
    Fecha_Actualizacion DATETIME NOT NULL,
    FOREIGN KEY (IdMeta) REFERENCES tblMeta(IdMeta)
)

CREATE TABLE tblPresupuesto (
	IdPresupuesto INT AUTO_INCREMENT PRIMARY KEY,
    IdCategoria INT NOT NULL,
    Monto DECIMAL(20,2) NOT NULL,
    FOREIGN KEY (IdCategoria) REFERENCES tblCategoria (IdCategoria)
)

