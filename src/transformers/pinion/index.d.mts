declare module '#engine/transformers/pinion' {
  export * as checkAnswers from '#engine/transformers/pinion/check-answers'
  export * as common from '#engine/transformers/pinion/common'
  export * as errorMessage from '#engine/transformers/pinion/error-message'
}

declare module 'shinkansen-engine/transformers/pinion' {
  export * from '#engine/transformers/pinion'
}
