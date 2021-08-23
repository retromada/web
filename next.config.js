module.exports = {
  async redirects () {
    return [
      {
        source: '/github',
        destination: 'https://github.com/retromada',
        permanent: true
      },
      {
        source: '/discord',
        destination: 'https://www.discord.gg/UWDFVHT',
        permanent: true
      }
    ]
  }
}
