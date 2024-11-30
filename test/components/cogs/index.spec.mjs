import { expect } from 'chai'

import Cogs from 'shinkansen-engine/components/cogs'

describe('shinkansen-engine/components/cogs', () => {
  it('is an object', () => {
    return expect(Cogs)
      .to.be.an('object')
  })
})
