import debug from 'debug'

const log = debug('shinksansen-engine/transformers/transmission')

log('`shinkansen` is awake')

export { default as fromDocumentToHash } from './from-document-to-hash/index.mjs'
export { default as fromHashToDocument } from './from-hash-to-document/index.mjs'
export { default as toZashiki } from './to-zashiki/index.mjs'
