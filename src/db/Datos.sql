/*Datos*/
Use dbSGFP

INSERT INTO tblUsuario (Nombre, Cedula, Correo, Contrasena)
VALUES ("Pepito", "1", "pepito@gmail.com", "pepito1")

INSERT INTO tblCategoria (Nombre)
VALUES ("Comida")

INSERT INTO tblGasto (IdCategoria, IdUsuario, Fecha, Monto)
VALUES (1, 1, "2023-08-16", 5000)

INSERT INTO tblIngreso (IdCategoria, IdUsuario, Fecha, Monto)
VALUES (1, 1, "2023-08-16", 10000)

INSERT INTO tblMeta (IdUsuario, NombreMeta, FechaInicio, FechaFinal, MontoMeta, MontoAhorrado)
VALUES (1, "Buso", "2024-08-16", "2024-12-16", 100000, 40000)

INSERT INTO tblHistorial (IdMeta, Fecha_Actualizacion)
VALUES (1, "2024-08-16")

INSERT INTO tblPresupuesto (IdCategoria, Monto)
VALUES (1, 10000)

