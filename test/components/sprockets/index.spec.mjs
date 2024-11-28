import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import Sprockets from 'shinkansen-engine/components/sprockets'

use(sinonChai)

describe('shinkansen-engine/components/sprockets', () => {
  it('is an object', () => {
    return expect(Sprockets)
      .to.be.an('object')
  })
})
