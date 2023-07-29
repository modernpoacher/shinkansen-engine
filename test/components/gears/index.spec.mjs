import { use, expect } from 'chai'
import sinonChai from 'sinon-chai'

import Gears from 'shinkansen-engine/components/gears'

use(sinonChai)

describe('shinkansen-engine/components/gears', () => {
  it('is a function', () => {
    return expect(Gears)
      .to.be.a('function')
  })
})
