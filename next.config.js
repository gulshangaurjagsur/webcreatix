/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/review',
        destination: 'https://g.page/r/CQs59OVOCI2YEAI/review',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

