import {
  expect
} from 'chai'

import {
  Cogs,
  Gears,
  Pinion,
  Rails,
  Signals,
  Pantograph,
  Engine,
  fromDocumentToHash,
  fromHashToDocument,
  toZashiki
} from '#engine'

describe('#engine', () => {
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

  describe('`Engine`', () => {
    it('is a function', () => {
      expect(Engine)
        .to.be.a('function')
    })
  })

  describe('`fromDocumentToHash`', () => {
    it('is a function', () => {
      expect(fromDocumentToHash)
        .to.be.a('function')
    })
  })

  describe('`fromHashToDocument`', () => {
    it('is a function', () => {
      expect(fromHashToDocument)
        .to.be.a('function')
    })
  })

  describe('`toZashiki`', () => {
    it('is a function', () => {
      expect(toZashiki)
        .to.be.a('function')
    })
  })
})
