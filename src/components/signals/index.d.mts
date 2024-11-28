declare module '#engine/components/signals' {
  export { Signals as default } from 'shinkansen-signals'
}

declare module 'shinkansen-engine/components/signals' {
  export * from '#engine/components/signals'
}
