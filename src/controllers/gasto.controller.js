import { pool } from '../database/db.js';

export const createGasto = async (req,res) => {
    const { idCategoria, idUsuario,Fecha,Monto} = req.body;
    try {
        const [rows] = await pool.query(
          'Call spInsertGasto(?, ?, ?, ?)',
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
export const getGastos = async (req, res) => {
    try {
      // throw new Error('DB Error')
      const [rows] = await pool.query('SELECT * FROM tblGasto');
      res.json(rows);
    } catch (error) {
      return res.status(500).json({
        message: 'No se encontraron Gastos',
      });
    }
  };
  
  // Con esta función consultamos un ingreso por Id Usuario
  export const getGasto = async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT * FROM tblGasto WHERE IdUsuario = ?', [req.params.IdUsuario]);
  
      if (rows.length <= 0)
        return res.status(404).json({
          message: 'No se encontraron Gastos',
        });
      res.json(rows[0]);
      
    } catch (error) {
      return res.status(500).json({
        message: 'Something goes wrong',
      });
    }
  };