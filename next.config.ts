import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Habilita el modo estricto de React para identificar problemas en el renderizado
  swcMinify: true, // Usa el compilador SWC para minimizar el código
  poweredByHeader: false, // Oculta el encabezado X-Powered-By por razones de seguridad
  pageExtensions: ["ts", "tsx"], // Define las extensiones permitidas para las páginas
  env: {
    DATABASE_URL: process.env.DATABASE_URL, // URL para conectarte a PostgreSQL
    RABBITMQ_URL: process.env.RABBITMQ_URL, // URL para conectarte a RabbitMQ
    JWT_SECRET: process.env.JWT_SECRET, // Llave secreta para JSON Web Tokens
  },
  images: {
    domains: ["example.com", "another-example.com"], // Dominios permitidos para cargar imágenes
  },
  async redirects() {
    return [
      {
        source: "/old-route",
        destination: "/new-route",
        permanent: true,
      },
    ];
  },
  webpack: (config) => {
     return config;
  },
};

export default nextConfig;
