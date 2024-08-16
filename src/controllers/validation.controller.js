import { pool } from '../database/db.js';

// Esta función nos valida si un usuario esta en la base de datos
export const getValUser = async (req, res) => {
    const {correo} = req.params
    const {contrasena} = req. params
    console.log(correo,contrasena)
    try {
        const [rows] = await pool.query('SELECT cedula FROM tblUsuario WHERE correo = ? AND contrasena = ?', [
          correo,
          contrasena,
        ]);

        if (rows.length <= 0)
            return res.status(404).json({
            message: 'El usuario no está registrado',
            });
      res.json({val: true, cedula: rows[0].cedula});

    } catch (error) {
        return res.status(500).json({
        message: 'Error en el Sistema',
        });
    }
};