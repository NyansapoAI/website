const config: import('next-sitemap').IConfig = {
  siteUrl: process.env.SITE_URL || 'https://nyansapoai.net',
  generateRobotsTxt: true, // (optional)
  // ...other options
}
export default config
