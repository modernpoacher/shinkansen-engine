import { use, expect } from 'chai'
import sinonChai from 'sinon-chai'

import Rails from 'shinkansen-engine/components/rails'

use(sinonChai)

describe('shinkansen-engine/components/rails', () => {
  it('is a function', () => {
    return expect(Rails)
      .to.be.a('function')
  })
})
