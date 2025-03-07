import {
  expect
} from 'chai'

import fromDocumentToHash from '#engine/transformers/transmission/from-document-to-hash'

describe('#engine/transformers/transmission/from-document-to-hash', () => {
  it('is a function', () => {
    expect(fromDocumentToHash)
      .to.be.a('function')
  })
})
