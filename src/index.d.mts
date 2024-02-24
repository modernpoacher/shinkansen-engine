declare module 'shinkansen-engine' {
  export { Cogs } from 'shinkansen-engine/components/cogs'
  export { Sprockets } from 'shinkansen-engine/components/sprockets'
  export { Gears } from 'shinkansen-engine/components/gears'
  export { Pinion } from 'shinkansen-engine/components/pinion'
  export { Rails } from 'shinkansen-engine/components/rails'
  export { Signals } from 'shinkansen-engine/components/signals'
  export { Pantograph } from 'shinkansen-engine/components/pantograph'

  export {
    fromDocumentToHash,
    fromHashToDocument,
    toZashiki
  } from 'shinkansen-engine/transformers/transmission'

  export {
    default as Engine
  } from 'shinkansen-engine/engine'
}
