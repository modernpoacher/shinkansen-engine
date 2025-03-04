import {
  expect
} from 'chai'

import {
  pinion,
  transmission
} from '#engine/transformers'

describe('#engine/transformers', () => {
  describe('`pinion`', () => {
    it('is a module', () => {
      expect(pinion)
        .to.be.a('module')
    })
  })

  describe('`transmission`', () => {
    it('is a module', () => {
      expect(transmission)
        .to.be.a('module')
    })
  })
})
