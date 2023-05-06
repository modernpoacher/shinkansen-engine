import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import fromDocumentToHash from 'shinkansen-engine/transformers/transmission/from-document-to-hash'

chai.use(sinonChai)

describe('shinkansen-engine/transformers/transmission/from-document-to-hash', () => {
  it('is a function', () => {
    return expect(fromDocumentToHash)
      .to.be.a('function')
  })
})
