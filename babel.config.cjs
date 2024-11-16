const debug = require('debug')

const log = debug('shinkansen-engine')

const {
  env: {
    NODE_ENV = 'development'
  }
} = process

log('`shinkansen` is awake')

function env () {
  log({ NODE_ENV })

  return (
    NODE_ENV === 'production'
  )
}

const presets = [
  [
    '@babel/env',
    {
      targets: {
        node: 'current',
        browsers: [
          'last 4 versions',
          'safari >= 9',
          'ios >= 8',
          'ie >= 9',
          '> 2%'
        ]
      },
      useBuiltIns: 'usage',
      corejs: 3
    }
  ],
  '@babel/react'
]

const plugins = [
  '@babel/syntax-jsx',
  [
    'module-resolver', {
      alias: {
        /**
         *  Storybook - Engine
         */
        '#stories/state/checkbox': './stories/state/checkbox/index.jsx',
        '#stories/state/email': './stories/state/email/index.jsx',
        '#stories/state/number': './stories/state/number/index.jsx',
        '#stories/state/password': './stories/state/password/index.jsx',
        '#stories/state/radio': './stories/state/radio/index.jsx',
        '#stories/state/select': './stories/state/select/index.jsx',
        '#stories/state/text': './stories/state/text/index.jsx',
        '#stories/state/textarea': './stories/state/textarea/index.jsx',
        '#stories/state': './stories/state/index.jsx',
        '#stories/errors': './stories/errors.mjs',
        '#stories': './stories'
      }
    }
  ]
]

module.exports = (api) => {
  if (api) api.cache.using(env)

  return {
    presets,
    plugins,
    ignore: [
      /node_modules\/(?!shinkansen|@modernpoacher)/
    ]
  }
}
