import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import Reverse from 'shinkansen-engine/components/gears/reverse'

use(sinonChai)

describe('shinkansen-engine/components/gears/reverse', () => {
  it('is a function', () => {
    return expect(Reverse)
      .to.be.a('function')
  })
})
