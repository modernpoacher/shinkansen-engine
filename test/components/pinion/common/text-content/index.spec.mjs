import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'

import TextContent from 'shinkansen-engine/components/pinion/common/text-content'

chai.use(sinonChai)

describe('shinkansen-engine/components/pinion/common/text-content', () => {
  it('is a function', () => {
    return expect(TextContent)
      .to.be.a('function')
  })
})
