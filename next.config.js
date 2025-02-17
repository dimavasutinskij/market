/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  async redirects() {
    return [
      {
        source: '/studio/:index*',
        destination: '/studio/:index', // Вказати правильний формат
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
