import {
  expect
} from 'chai'

import fromHashToDocument from 'shinkansen-engine/transformers/transmission/from-hash-to-document'

describe('shinkansen-engine/transformers/transmission/from-hash-to-document', () => {
  it('is a function', () => {
    expect(fromHashToDocument)
      .to.be.a('function')
  })
})
