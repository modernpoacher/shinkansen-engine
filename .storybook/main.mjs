/**
 *  @type {import('@storybook/react-webpack5').StorybookConfig}
 */

export default {
  stories: [
    '../stories/**/*.stories.jsx'
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-webpack5-compiler-babel',
    '@storybook/addon-docs'
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  docs: {},

  webpackFinal (config) {
    const {
      module: {
        rules = []
      } = {}
    } = config

    rules.push({
      test: /\.(cjs|jsx|mjs)$/,
      use: {
        loader: 'babel-loader'
      },
      include: [
        /node_modules\/shinkansen/
      ],
      exclude: [
        /node_modules\/(?!shinkansen)/
      ]
    })

    return config
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
}
