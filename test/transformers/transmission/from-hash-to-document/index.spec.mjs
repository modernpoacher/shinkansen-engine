import {
  expect
} from 'chai'

import fromHashToDocument from '#engine/transformers/transmission/from-hash-to-document'

describe('#engine/transformers/transmission/from-hash-to-document', () => {
  it('is a function', () => {
    expect(fromHashToDocument)
      .to.be.a('function')
  })
})
