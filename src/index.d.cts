declare module 'shinkansen-engine/components/cogs' {
  export * as Cogs from 'shinkansen-cogs'
}

declare module 'shinkansen-engine/components/sprockets' {
  export * as Sprockets from 'shinkansen-sprockets'
}

declare module 'shinkansen-engine/components/gears' {
  export { Gears } from 'shinkansen-gears'
}

declare module 'shinkansen-engine/components/pinion' {
  export { Pinion } from 'shinkansen-pinion'
}

declare module 'shinkansen-engine/components/rails' {
  export { Rails } from 'shinkansen-rails'
}

declare module 'shinkansen-engine/components/signals' {
  export { Signals } from 'shinkansen-signals'
}

declare module 'shinkansen-engine/components/pantograph' {
  export { Pantograph } from 'shinkansen-pantograph'
}

declare module 'shinkansen-engine/transformers/pinion/check-answers' {
  export * from 'shinkansen-pinion/transformers/check-answers'
  export { default } from 'shinkansen-pinion/transformers/check-answers'
}

declare module 'shinkansen-engine/transformers/pinion/common' {
  export * from 'shinkansen-pinion/transformers/common'
}

declare module 'shinkansen-engine/transformers/pinion/error-message' {
  export * from 'shinkansen-pinion/transformers/error-message'
}

declare module 'shinkansen-engine/transformers/pinion' {
  export * as checkAnswers from 'shinkansen-engine/transformers/pinion/check-answers'
  export * as common from 'shinkansen-engine/transformers/pinion/common'
  export * as errorMessage from 'shinkansen-engine/transformers/pinion/error-message'
}

declare module 'shinkansen-engine/transformers/transmission/from-hash-to-document' {
  export { default } from 'shinkansen-transmission/transmission/from-hash-to-document'
}

declare module 'shinkansen-engine/transformers/transmission/from-document-to-hash' {
  export { default } from 'shinkansen-transmission/transmission/from-document-to-hash'
}

declare module 'shinkansen-engine/transformers/transmission/to-zashiki' {
  export { default } from 'shinkansen-transmission/transmission/to-zashiki'
}

declare module 'shinkansen-engine/transformers/transmission' {
  export { default as fromDocumentToHash } from 'shinkansen-engine/transformers/transmission/from-document-to-hash'
  export { default as fromHashToDocument } from 'shinkansen-engine/transformers/transmission/from-hash-to-document'
  export { default as toZashiki } from 'shinkansen-engine/transformers/transmission/to-zashiki'
}

declare module 'shinkansen-engine/engine' {
  import React from 'react'
  import type { PinionProps } from 'shinkansen-pinion/pinion'
  import type { GearsProps } from 'shinkansen-gears/gears'

  export type EngineProps = PinionProps & { gears: GearsProps }

  export default class Engine extends React.Component<EngineProps> {}
}

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
  } from 'shinkansen-engine/engine/transformers/transmission'

  export {
    default as Engine
  } from 'shinkansen-engine/engine'
}
