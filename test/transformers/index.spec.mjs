import {
  expect
} from 'chai'

import {
  pinion,
  transmission
} from '#engine/transformers'

describe('#engine/transformers', () => {
  describe('`pinion`', () => {
    it('is an object', () => {
      expect(pinion)
        .to.be.a('module') // an('object')
    })
  })

  describe('`transmission`', () => {
    it('is an object', () => {
      expect(transmission)
        .to.be.a('module') // an('object')
    })
  })
})
