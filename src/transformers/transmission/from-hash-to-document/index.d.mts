declare module '#engine/transformers/transmission/from-hash-to-document' {
  export { default } from 'shinkansen-transmission/transmission/from-hash-to-document'
}

declare module 'shinkansen-engine/transformers/transmission/from-hash-to-document' {
  export { default } from '#engine/transformers/transmission/from-hash-to-document'
  export * from '#engine/transformers/transmission/from-hash-to-document'
}
