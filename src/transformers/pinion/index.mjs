import debug from 'debug'

const log = debug('shinksansen-engine')

log('`shinkansen` is awake')

export * as checkAnswers from './check-answers/index.mjs'
export * as common from './common/index.mjs'
export * as errorMessage from './error-message/index.mjs'
