import {
  expect
} from 'chai'

import {
  fromDocumentToHash,
  fromHashToDocument,
  toZashiki
} from 'shinkansen-engine/transformers/transmission'

describe('shinkansen-engine/transformers/transmission', () => {
  it('is a function', () => {
    expect(fromDocumentToHash)
      .to.be.a('function')
  })

  it('is a function', () => {
    expect(fromHashToDocument)
      .to.be.a('function')
  })

  it('is a function', () => {
    expect(toZashiki)
      .to.be.a('function')
  })
})
