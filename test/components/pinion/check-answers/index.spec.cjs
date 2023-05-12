const chai = require('chai')
const sinonChai = require('sinon-chai')
const {
  expect
} = chai

const CheckAnswers = require('shinkansen-engine/components/pinion/check-answers')

chai.use(sinonChai)

describe('shinkansen-engine/components/pinion/check-answers', () => {
  it('is a function', () => {
    return expect(CheckAnswers)
      .to.be.a('function')
  })
})
