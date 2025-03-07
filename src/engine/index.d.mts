declare module '#engine/engine' {
  import React from 'react'

  export type EngineProps = EngineTypes.EngineProps

  export default class Engine extends React.Component<EngineProps> {}
}

declare module 'shinkansen-engine/engine' {
  export { default } from '#engine/engine'
  export * from '#engine/engine'
}
