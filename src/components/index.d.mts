declare module '#engine/components' {
  export { default as Cogs } from '#engine/components/cogs'
  export { default as Gears } from '#engine/components/gears'
  export { default as Pantograph } from '#engine/components/pantograph'
  export { default as Pinion } from '#engine/components/pinion'
  export { default as Rails } from '#engine/components/rails'
  export { default as Signals } from '#engine/components/signals'
  export { default as Sprockets } from '#engine/components/sprockets'
}

declare module 'shinkansen-engine/components' {
  export * from '#engine/components'
}