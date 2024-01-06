import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import Cogs from 'shinkansen-engine/components/cogs'

use(sinonChai)

describe('shinkansen-engine/components/cogs', () => {
  it('is an object', () => {
    return expect(Cogs)
      .to.be.an('object')
  })
})
