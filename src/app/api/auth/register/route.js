import { NextResponse } from 'next/server';
import db from '@/libs/db'
import bcrypt from 'bcrypt';

export async function POST(request) {
  try {
    const data = await request.json();

    // Verificar si el nombre de usuario ya existe
    const usernameFound = await db.User.findUnique({
      where: { 
        name: data.name,
      },
    });

    if (usernameFound) {
      return NextResponse.json(
        { message: "El nombre de usuario ya existe." },
        { status: 400 }
      );
    }

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Crear el nuevo usuario
    const newUser = await db.User.create({
      data: {
        name: data.name,
        password: hashedPassword,
        // Aquí puedes agregar otros campos si es necesario, pero no deben estar en el modelo
      },
    });

    // Eliminar la contraseña del objeto de usuario para la respuesta
    const { password: _, ...userWithoutPassword } = newUser;

    console.log("Usuario creado:", JSON.stringify(userWithoutPassword, null, 2));

    // Enviar respuesta con el usuario sin la contraseña
    return NextResponse.json(userWithoutPassword);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
