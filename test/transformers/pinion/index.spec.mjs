import {
  expect
} from 'chai'

import {
  checkAnswers,
  common,
  errorMessage
} from '#engine/transformers/pinion'

describe('#engine/transformers/pinion', () => {
  describe('`checkAnswers`', () => {
    it('is a module', () => {
      expect(checkAnswers)
        .to.be.a('module')
    })
  })

  describe('`common`', () => {
    it('is a module', () => {
      expect(common)
        .to.be.a('module')
    })
  })

  describe('`errorMessage`', () => {
    it('is a module', () => {
      expect(errorMessage)
        .to.be.a('module')
    })
  })
})
