// app/layout.js (para Next.js 13 y superior)
import React from 'react';

export const metadata = {
  title: 'Mi App',
  description: 'Descripción de mi aplicación',
};

function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
