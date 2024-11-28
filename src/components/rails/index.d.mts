declare module '#engine/components/rails' {
  export { Rails as default } from 'shinkansen-rails'
}

declare module 'shinkansen-engine/components/rails' {
  export * from '#engine/components/rails'
}
