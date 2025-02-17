/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Додаємо це для експорту статичних файлів
  images: {
    domains: ["cdn.sanity.io"]
  }
}

module.exports = nextConfig;
