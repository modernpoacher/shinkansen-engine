declare module '#engine/components/pinion' {
  export { Pinion as default } from 'shinkansen-pinion'
}

declare module 'shinkansen-engine/components/pinion' {
  export { default } from '#engine/components/pinion'
  export * from '#engine/components/pinion'
}
