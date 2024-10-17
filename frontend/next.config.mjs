/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn2.iconfinder.com','avatar.iran.liara.run'], // Add your image host here
  },
  server: {
    port:3001,
    proxy: {
      "/api": {
        target: "http://localhost:3000"
      }
    }
  },
}
export default nextConfig;
