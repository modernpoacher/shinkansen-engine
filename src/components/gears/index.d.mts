declare module '#engine/components/gears' {
  export { Gears as default } from 'shinkansen-gears'
}

declare module 'shinkansen-engine/components/gears' {
  export { default } from '#engine/components/gears'
  export * from '#engine/components/gears'
}
