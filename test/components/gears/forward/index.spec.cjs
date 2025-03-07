const {
  expect // @ts-ignore
} = require('chai')

const Forward = require('#engine/components/gears/forward')

describe('#engine/components/gears/forward', () => {
  it('is a function', () => {
    expect(Forward)
      .to.be.a('function')
  })
})
