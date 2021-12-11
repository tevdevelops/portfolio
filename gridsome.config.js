// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/_variables.scss'),
        path.resolve(__dirname, './src/assets/sass/_mixins.scss'),
        path.resolve(__dirname, './src/assets/sass/_resets.scss'),
        path.resolve(__dirname, './src/assets/sass/_fonts.scss'),
        path.resolve(__dirname, './src/assets/sass/_globals.scss'),
        path.resolve(__dirname, './src/assets/sass/_utilities.scss'),
      ],
    })
}

module.exports = {
  siteName: 'TevDevelops | Tevin Rivera',
  siteDescription:
    'Tevin Rivera is a Full Stack Web Developer based in Philadeplhia, PA. Currently employed at King & Partners. Contact for Freelance opportunities.',
  plugins: [
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: '',
        enabled: false,
        debug: true,
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',
      },
    },
  ],
  templates: {
    BlogPost: '/blog/:slug',
  },
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach((type) => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })

    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()
    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]',
      })
  },
}
