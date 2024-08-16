import { pool } from '../database/db.js';

// Esta función nos devuelve todos los usuarios registrados
export const getCategories = async (req, res) => {
  try {
    // throw new Error('DB Error')
    const [rows] = await pool.query('SELECT * FROM tblCategoria');
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: 'No se encontraron categorias',
    });
  }
};

// Con esta función traemos una categoria
export const getCategory = async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT * FROM tblCategoria WHERE IdUsuario = ?', [req.params.Id]);
  
      if (rows.length <= 0)
        return res.status(404).json({
          message: 'User not found',
        });
      res.json(rows[0]);
      
    } catch (error) {
      return res.status(500).json({
        message: 'Something goes wrong',
      });
    }
  };


// Esta función nos permite crear una categoria
export const createNewCategory = async (req, res) => {
    const { Nombre } = req.body;
    try {
      const [rows] = await pool.query(
        'Call spInsertCategory(?)',
        [Nombre]
      );
  
      res.send({
        Nombre
      });
  
    } catch (error) {
      return res.status(500).json({
        message: 'Something goes wrong',
      });
    }
  };