import {
  expect
} from 'chai'

import toZashiki from '#engine/transformers/transmission/to-zashiki'

describe('#engine/transformers/transmission/to-zashiki', () => {
  it('is a function', () => {
    expect(toZashiki)
      .to.be.a('function')
  })
})
