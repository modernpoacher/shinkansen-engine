import { use, expect } from 'chai'
import sinonChai from 'sinon-chai'

import Pinion from 'shinkansen-engine/components/pinion'

use(sinonChai)

describe('shinkansen-engine/components/pinion', () => {
  it('is a function', () => {
    return expect(Pinion)
      .to.be.a('function')
  })
})
