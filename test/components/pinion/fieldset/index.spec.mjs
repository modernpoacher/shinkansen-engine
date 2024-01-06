import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import Fieldset from 'shinkansen-engine/components/pinion/fieldset'

use(sinonChai)

describe('shinkansen-engine/components/pinion/fieldset', () => {
  it('is a function', () => {
    return expect(Fieldset)
      .to.be.a('function')
  })
})
