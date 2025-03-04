const {
  expect // @ts-ignore
} = require('chai')

const CheckAnswers = require('#engine/components/pinion/check-answers')

describe('#engine/components/pinion/check-answers', () => {
  it('is a function', () => {
    expect(CheckAnswers)
      .to.be.a('function')
  })
})
