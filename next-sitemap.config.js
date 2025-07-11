/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://www.webcreatix.com', // 🔁 Replace with your live domain
  generateRobotsTxt: true,
  sitemapSize: 5000,
  outDir: './out', // for static export
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/server-sitemap.xml'], // optional
};

module.exports = config;
