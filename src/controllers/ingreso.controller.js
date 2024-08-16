import { pool } from '../database/db.js';

export const createIngreso = async (req,res) => {
    const { idCategoria, idUsuario,Fecha,Monto} = req.body;
    try {
        const [rows] = await pool.query(
          'Call spInsertUsuario(?, ?, ?, ?)',
          [ idCategoria, idUsuario,Fecha,Monto]
        );
    
        res.send({
            idCategoria, 
            idUsuario,
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
      const [rows] = await pool.query('SELECT * FROM tblIngreso WHERE IdUsuario = ?', [req.params.IdUsuario]);
  
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