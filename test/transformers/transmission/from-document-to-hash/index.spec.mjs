import {
  expect
} from 'chai'

import fromDocumentToHash from 'shinkansen-engine/transformers/transmission/from-document-to-hash'

describe('shinkansen-engine/transformers/transmission/from-document-to-hash', () => {
  it('is a function', () => {
    expect(fromDocumentToHash)
      .to.be.a('function')
  })
})
