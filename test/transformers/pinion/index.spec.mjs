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
    it('is an object', () => {
      expect(checkAnswers)
        .to.be.an('object')
    })
  })

  describe('`common`', () => {
    it('is an object', () => {
      expect(common)
        .to.be.an('object')
    })
  })

  describe('`errorMessage`', () => {
    it('is an object', () => {
      expect(errorMessage)
        .to.be.an('object')
    })
  })
})
