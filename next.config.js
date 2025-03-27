/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',  // возвращаем обратно
  images: {
    domains: ['picsum.photos'],
    unoptimized: true
  },
}

module.exports = nextConfig