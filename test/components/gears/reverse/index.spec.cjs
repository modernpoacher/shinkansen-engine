const {
  expect // @ts-ignore
} = require('chai')

const Reverse = require('#engine/components/gears/reverse')

describe('#engine/components/gears/reverse', () => {
  it('is a function', () => {
    expect(Reverse)
      .to.be.a('function')
  })
})
