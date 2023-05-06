import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import fromHashToDocument from 'shinkansen-engine/transformers/transmission/from-hash-to-document'

chai.use(sinonChai)

describe('shinkansen-engine/transformers/transmission/from-hash-to-document', () => {
  it('is a function', () => {
    return expect(fromHashToDocument)
      .to.be.a('function')
  })
})
