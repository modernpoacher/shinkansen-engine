declare module '#engine/components/pantograph' {
  export { Pantograph as default } from 'shinkansen-pantograph'
}

declare module 'shinkansen-engine/components/pantograph' {
  export { default } from '#engine/components/pantograph'
  export * from '#engine/components/pantograph'
}
