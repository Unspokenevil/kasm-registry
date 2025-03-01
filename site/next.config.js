/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'The Nerd You Know',
    description: 'The unofficial store for Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://unspokenevil.github.io/kasm-registry/1.1/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
