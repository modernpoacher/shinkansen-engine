import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import * as common from 'shinkansen-engine/components/pinion/common'

chai.use(sinonChai)

describe('shinkansen-engine/components/pinion/common', () => {
  it('is a module', () => {
    return expect(common)
      .to.be.a('module')
  })
})
