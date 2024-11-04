// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../lib/prisma"; 
import bcrypt from "bcrypt";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Nombre de usuario", type: "text", placeholder: "Nombre de usuario" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials;

        // Verificar si el usuario existe en la base de datos
        const user = await prisma.user.findUnique({
          where: { username },
        });

        if (!user) {
          throw new Error("Nombre de usuario no encontrado");
        }

        // Comparar la contraseña ingresada con la contraseña encriptada en la base de datos
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
          throw new Error("Contraseña incorrecta");
        }

        // Si la autenticación es exitosa, retornar el objeto de usuario
        return { id: user.id, username: user.username };
      },
    }),
  ],
  session: {
    jwt: true, // Se utiliza JWT para la sesión
    maxAge: 7 * 24 * 60 * 60, // 1 semana
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET, // Se usa el secreto del entorno para firmar el token
  },
  pages: {
    signIn: '/auth/signin', // Ruta personalizada para la página de inicio de sesión
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username; // Agregar el nombre de usuario al token
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.username = token.username; // Agregar el nombre de usuario a la sesión
      }
      return session;
    },
  },
});
