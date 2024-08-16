USE dbSGFP

DELIMITER // /*Procedimiento para crear usuario*/
CREATE PROCEDURE spInsertUsuario(
    IN pNombre VARCHAR(50),
    IN pCedula VARCHAR(10),
    IN pCorreo VARCHAR(50),
    IN pContrasena VARCHAR(50)
)

BEGIN 
	-- Insertar un nuevo usuario en la tabla tblUsuario
    INSERT INTO tblUsuario (Nombre, Cedula, Correo, Contrasena)
    VALUES (pNombre, pCedula, pCorreo, pContrasena);
//
DELIMITER ;

/*--------------------------------------------------*/

DELIMITER // /*Procedimiento para crear categoria*/
CREATE PROCEDURE spInsertCategory(
    IN pNombre VARCHAR(50)
)

BEGIN 
	-- Insertar un nuevo usuario en la tabla tblCategoria
    INSERT INTO tblCategoria (Nombre)
    VALUES (pNombre);
//
DELIMITER ;

/*--------------------------------------------------*/

DELIMITER // /*Procedimiento para crear gasto*/
CREATE PROCEDURE spInsertGasto(
    IN pIdCategoria INT,
    IN pIdUsuario INT,
    IN pFecha DATETIME,
    IN pMonto DECIMAL(20,2)
)

BEGIN 
	-- Insertar un nuevo usuario en la tabla tblGasto
    INSERT INTO tblGasto (IdCategoria, IdUsuario, Fecha, Monto)
    VALUES (pIdCategoria, pIdUsuario, pFecha, pMonto);
//
DELIMITER ;

/*--------------------------------------------------*/

DELIMITER // /*Procedimiento para crear ingreso*/
CREATE PROCEDURE spInsertIngreso(
    IN pIdCategoria INT,
    IN pIdUsuario INT,
    IN pFecha DATETIME,
    IN pMonto DECIMAL(20,2)
)

BEGIN 
	-- Insertar un nuevo usuario en la tabla tblIngreso
    INSERT INTO tblIngreso (IdCategoria, IdUsuario, Fecha, Monto)
    VALUES (pIdCategoria, pIdUsuario, pFecha, pMonto);
//
DELIMITER ;

/*--------------------------------------------------*/

DELIMITER // /*Procedimiento para crear meta*/
CREATE PROCEDURE spInsertMeta(
    IN pIdUsuario INT,
    IN pFechaInicio DATETIME,
    IN pFechaFinal DATETIME,
    IN pMontoMeta DECIMAL(20,2),
    IN pMontoAhorrado DECIMAL(20,2)
)

BEGIN 
	-- Insertar un nuevo usuario en la tabla tblMeta
    INSERT INTO tblMeta (IdUsuario, NombreMeta, FechaInicio, FechaFinal, MontoMeta, MontoAhorrado))
    VALUES (pIdUsuario, pFechaInicio, pFechaFinal, pMontoMeta, pMontoAhorrado);
//
DELIMITER ;

/*--------------------------------------------------*/

DELIMITER // /*Procedimiento para crear historial*/
CREATE PROCEDURE spInsertHistorial(
    IN pIdMeta INT,
    IN pFecha_Actualizacion DATETIME
)

BEGIN 
	-- Insertar un nuevo usuario en la tabla tblhistoria
    INSERT INTO tblHistorial (IdMeta, Fecha_Actualizacion)
    VALUES (pIdMeta, pFecha_Actualizacion<
    );
//
DELIMITER ;

/*--------------------------------------------------*/

/*Procedimiento para modificar categoria y monto de gasto*/

DELIMITER //

CREATE PROCEDURE spUpdateGasto(
    IN pIdGastos INT,
    IN pMonto DECIMAL(20,2),
    IN pIdCategoria INT
)
BEGIN
    -- Actualizar el monto y la categoría en la tabla tblGasto
    UPDATE tblGasto
    SET Monto = pMonto, 
        IdCategoria = pIdCategoria
    WHERE IdGastos = pIdGastos;
END;
//

DELIMITER ;

/*--------------------------------------------------*/

/*Procedimiento para modificar categoria y monto de ingreso*/

DELIMITER //

CREATE PROCEDURE spUpdateIngreso(
    IN pIdIngreso INT,
    IN pMonto DECIMAL(20,2),
    IN pIdCategoria INT
)
BEGIN
    -- Actualizar el monto y la categoría en la tabla tblGasto
    UPDATE tblIngreso
    SET Monto = pMonto, 
        IdCategoria = pIdCategoria
    WHERE IdIngreso = pIdIngreso;
END;
//

DELIMITER ;




