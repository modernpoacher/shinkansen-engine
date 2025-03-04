import {
  expect
} from 'chai'

import {
  Cogs,
  Gears,
  Pinion,
  Rails,
  Signals,
  Pantograph
} from '#engine/components'

describe('#engine/components', () => {
  describe('`Cogs`', () => {
    it('is an object', () => {
      expect(Cogs)
        .to.be.a('object')
    })
  })

  describe('`Gears`', () => {
    it('is a function', () => {
      expect(Gears)
        .to.be.a('function')
    })
  })

  describe('`Pinion`', () => {
    it('is a function', () => {
      expect(Pinion)
        .to.be.a('function')
    })
  })

  describe('`Rails`', () => {
    it('is a function', () => {
      expect(Rails)
        .to.be.a('function')
    })
  })

  describe('`Signals`', () => {
    it('is an object', () => {
      expect(Signals)
        .to.be.an('object')
    })
  })

  describe('`Pantograph`', () => {
    it('is an object', () => {
      expect(Pantograph)
        .to.be.an('object')
    })
  })
})
