import {
  expect
} from 'chai'

import {
  fromDocumentToHash,
  fromHashToDocument,
  toZashiki
} from '#engine/transformers/transmission'

describe('#engine/transformers/transmission', () => {
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
