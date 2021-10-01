const withPlugins = require('next-compose-plugins')
const withMDX = require('@next/mdx')()

module.exports = withPlugins([[withMDX]], {
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/retromada',
        permanent: true
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/UWDFVHT',
        permanent: true
      },
      {
        source: '/steam',
        destination: 'https://steamcommunity.com/groups/retromada',
        permanent: true
      },
      {
        source: '/instagram',
        destination: 'https://instagram.com/retromada_sys',
        permanent: true
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/retromada',
        permanent: true
      },
      {
        source: '/tumblr',
        destination: 'https://retromada.tumblr.com',
        permanent: true
      },
      {
        source: '/mastodon',
        destination: 'https://mastodon.social/@retromada',
        permanent: true
      }
    ]
  }
})
