// pages/api/register.js
import prisma from '../../lib/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Validar que se proporcionen ambos campos
    if (!username || !password) {
      return res.status(400).json({ message: 'Nombre de usuario y contraseña son requeridos.' });
    }

    try {
      // Verificar si el nombre de usuario ya existe
      const existingUser = await prisma.user.findUnique({
        where: { username },
      });

      if (existingUser) {
        return res.status(400).json({ message: 'El nombre de usuario ya existe' });
      }

      // Encriptar la contraseña
      const hashedPassword = await bcrypt.hash(password, 10);

      // Crear un nuevo usuario
      const newUser = await prisma.user.create({
        data: {
          username,
          password: hashedPassword,
        },
      });

      // Crear un token JWT con expiración de una semana
      const token = jwt.sign(
        { id: newUser.id, username: newUser.username },
        process.env.JWT_SECRET, // Asegúrate de tener esta variable de entorno configurada
        { expiresIn: '7d' } // Token expira en 7 días
      );

      return res.status(201).json({ message: 'Usuario creado con éxito', token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
  }

  // Manejo de métodos no permitidos
  return res.status(405).json({ message: 'Método no permitido' });
}
