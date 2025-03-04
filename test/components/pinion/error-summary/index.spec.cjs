const {
  expect // @ts-ignore
} = require('chai')

const ErrorSummary = require('#engine/components/pinion/error-summary')

describe('#engine/components/pinion/error-summary', () => {
  it('is a function', () => {
    expect(ErrorSummary)
      .to.be.a('function')
  })
})
