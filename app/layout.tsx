import type { Metadata } from "next";
// Explicitly importing React to resolve the 'Cannot find namespace React' error for React.ReactNode
import React from "react";

export const metadata: Metadata = {
  title: "Sombras del Pensamiento - Transforma tu Percepción",
  description: "Una landing page persuasiva basada en DotCom Secrets para el libro 'Sombras del Pensamiento'.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <script src="https://cdn.tailwindcss.com" async></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet" />
        <style>{`
          body {
            font-family: 'Inter', sans-serif;
            scroll-behavior: smooth;
            margin: 0;
          }
          h1, h2, h3, .font-serif {
            font-family: 'Playfair Display', serif;
          }
        `}</style>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
