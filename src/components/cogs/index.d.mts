declare module '#engine/components/cogs' {
  export { default } from 'shinkansen-cogs'
  export * from 'shinkansen-cogs'
}

declare module 'shinkansen-engine/components/cogs' {
  export { default } from '#engine/components/cogs'
  export * from '#engine/components/cogs'
}
