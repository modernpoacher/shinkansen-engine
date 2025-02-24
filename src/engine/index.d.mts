declare module '#engine/engine' {
  import React from 'react'
  import type { PinionProps } from 'shinkansen-pinion/pinion'
  import type { GearsProps } from 'shinkansen-gears/gears'

  export type EngineProps = PinionProps & { gears: GearsProps }

  export default class Engine extends React.Component<EngineProps> {}
}

declare module 'shinkansen-engine/engine' {
  export { default } from '#engine/engine'
  export * from '#engine/engine'
}
