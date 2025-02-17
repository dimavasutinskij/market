module.exports = {
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
