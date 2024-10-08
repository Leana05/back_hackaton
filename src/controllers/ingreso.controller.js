import { pool } from '../database/db.js';

export const createIngreso = async (req,res) => {
    const { IdCategoria,IdUsuario,Fecha,Monto} = req.body;
    try {
        const [rows] = await pool.query(
          'Call spInsertIngreso(?, ?, ?, ?)',
          [ IdCategoria,IdUsuario,Fecha,Monto]
        );
    
        res.send({
            IdCategoria,
            IdUsuario,
            Fecha,
            Monto,
            message: 'Ingreso creado con exito',
        });
    
      } catch (error) {
        return res.status(500).json({
          message: 'Something goes wrong',
        });
      }
}

// Esta función nos devuelve todos los usuarios registrados
export const getIngresos = async (req, res) => {
    try {
      // throw new Error('DB Error')
      const [rows] = await pool.query('SELECT * FROM tblIngreso');
      res.json(rows);
    } catch (error) {
      return res.status(500).json({
        message: 'No se encontraron Ingresos',
      });
    }
  };
  
  // Con esta función consultamos un ingreso por Id Usuario
  export const getIngreso = async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT * FROM tblIngreso WHERE IdIngreso = ?', [req.params.IdIngreso]);
  
      if (rows.length <= 0)
        return res.status(404).json({
          message: 'No se encontraron Ingresos',
        });
      res.json(rows[0]);
      
    } catch (error) {
      return res.status(500).json({
        message: 'Something goes wrong',
      });
    }
  };


  //  El pacth nos permite actualizar la información que deseamos, sin tener que vernos obligados a actualizar todos los campos
export const updateIngreso = async (req, res) => {
  const IdIngreso = req.params.IdIngreso;
  const {IdCategoria,Monto} = req.body;
  try {
    // throw new Error(':C')
    const [result] = await pool.query(
      "Call spUpdateIngreso(?,?,?)",
      [IdIngreso,Monto, Ca]
    );
    console.log(result);

    if (result.affectedRows === 0)
      return res.status(404).json({
        message: 'Ingreso not found',
      });

    const [rows] = await pool.query('SELECT * FROM tblIngreso WHERE IdIngreso = ?', [IdIngreso]);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong',
    });
  }
};


// Función para eliminar toda la información relacionada con el usuario
export const deleteIngreso = async (req, res) => {
  const {IdIngreso} = [req.params.IdIngreso];
  try {
    const [result] = await pool.query(
      'Call spDeleteIngreso(?)', [IdIngreso]
    );

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: 'Ingreso no encontrado',
      });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong',
    });
  }
};