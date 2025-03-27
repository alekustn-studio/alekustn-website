/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos'], // Разрешаем загрузку изображений с picsum.photos
    unoptimized: true
  },
}

module.exports = nextConfig 