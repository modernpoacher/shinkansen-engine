declare module '#engine/common' {
  export function DEFAULT_HANDLE_CHANGE (): void

  export function DEFAULT_HANDLE_CLICK (): void
}

declare module 'shinkansen-engine/common' {
  export * from '#engine/common'
}
