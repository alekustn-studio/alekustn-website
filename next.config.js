/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos'],
    unoptimized: true
  },
  experimental: {
    appDir: true
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          },
        },
        'postcss-loader',
      ],
    });
    return config;
  },
}

module.exports = nextConfig