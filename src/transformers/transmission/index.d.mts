declare module '#engine/transformers/transmission' {
  export { default as fromDocumentToHash } from '#engine/transformers/transmission/from-document-to-hash'
  export { default as fromHashToDocument } from '#engine/transformers/transmission/from-hash-to-document'
  export { default as toZashiki } from '#engine/transformers/transmission/to-zashiki'
}

declare module 'shinkansen-engine/transformers/transmission' {
  export * from '#engine/transformers/transmission'
}
