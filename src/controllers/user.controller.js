//En esta seccion se haran las solicitudes para que un cliente  cree su usuario

import { pool } from '../database/db.js';

// Esta función nos devuelve todos los usuarios registrados
export const getUsers = async (req, res) => {
  try {
    // throw new Error('DB Error')
    const [rows] = await pool.query('SELECT * FROM tblUsuario');
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: 'No se encontraron usuarios',
    });
  }
};

// Con esta función consultados un usuario por su ID
export const getUser = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM tblUsuario WHERE IdUsuario = ?', [req.params.Id]);

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

// Esta función nos permite crear un usuario
export const createNewUser = async (req, res) => {
  const { nombre, cedula, correo, contrasena} = req.body;
  try {
    const [rows] = await pool.query(
      'Call spInsertUsuario(?, ?, ?, ?)',
      [nombre, cedula, correo, contrasena]
    );

    res.send({
      nombre,
      correo
    });

  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong',
    });
  }
};
