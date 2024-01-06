import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import Forward from 'shinkansen-engine/components/gears/forward'

use(sinonChai)

describe('shinkansen-engine/components/gears/forward', () => {
  it('is a function', () => {
    return expect(Forward)
      .to.be.a('function')
  })
})
