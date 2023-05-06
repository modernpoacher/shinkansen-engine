module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.jsx'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  webpackFinal (config) {
    const {
      module: {
        rules = []
      } = {}
    } = config

    rules.push({
      test: /\.(mjs|jsx|cjs)$/,
      use: {
        loader: 'babel-loader'
      },
      include: [
        /node_modules\/shinkansen-/
      ],
      exclude: [
        /node_modules\/(?!shinkansen-)/
      ]
    })

    return config
  }
}
