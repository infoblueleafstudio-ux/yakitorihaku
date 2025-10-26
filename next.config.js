/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // 開発サーバー用に一時的にコメントアウト
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
