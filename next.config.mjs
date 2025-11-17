/** @type {import('next').NextConfig} */

const nextConfig = {
  // --- ESSENCIAL PARA GITHUB PAGES ---
  // Habilita a exportação estática (SSG)
  output: 'export',

  // DESCOMENTE a linha abaixo se o repo NÃO estiver em username.github.io
  // (ex.: se for renyaguilar80.github.io/collab, use basePath: '/collab')
  // basePath: '/collab',

  // O 'trailingSlash: true' é opcional, mas às vezes
  // ajuda a evitar problemas de rotas 404 entre /sobre e /sobre/
  trailingSlash: true,

  // Desativa a otimização de imagens do Next.js, pois ela
  // não funciona na exportação estática.
  // Use a tag <img /> normal ou exporte suas imagens.
  images: {
    unoptimized: true,
  },

  reactStrictMode: true,
};

export default nextConfig;
