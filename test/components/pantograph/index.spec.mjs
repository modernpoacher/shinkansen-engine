import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import Pantograph from 'shinkansen-engine/components/pantograph'

use(sinonChai)

describe('shinkansen-engine/components/pantograph', () => {
  it('is a function', () => {
    return expect(Pantograph)
      .to.be.an('object')
  })
})
