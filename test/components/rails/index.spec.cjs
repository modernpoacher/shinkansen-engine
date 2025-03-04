const {
  expect // @ts-ignore
} = require('chai')

const Rails = require('#engine/components/rails')

describe('#engine/components/rails', () => {
  it('is a function', () => {
    expect(Rails)
      .to.be.a('function')
  })
})
