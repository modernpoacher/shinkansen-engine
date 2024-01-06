import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import fromDocumentToHash from 'shinkansen-engine/transformers/transmission/from-document-to-hash'

use(sinonChai)

describe('shinkansen-engine/transformers/transmission/from-document-to-hash', () => {
  it('is a function', () => {
    return expect(fromDocumentToHash)
      .to.be.a('function')
  })
})
