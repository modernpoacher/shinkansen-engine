import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import {
  fromDocumentToHash,
  fromHashToDocument,
  toZashiki
} from 'shinkansen-engine/transformers/transmission'

use(sinonChai)

describe('shinkansen-engine/transformers/transmission', () => {
  it('is a function', () => {
    return expect(fromDocumentToHash)
      .to.be.a('function')
  })

  it('is a function', () => {
    return expect(fromHashToDocument)
      .to.be.a('function')
  })

  it('is a function', () => {
    return expect(toZashiki)
      .to.be.a('function')
  })
})
