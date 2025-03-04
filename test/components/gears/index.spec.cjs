const {
  expect // @ts-ignore
} = require('chai')

const Gears = require('#engine/components/gears')

describe('#engine/components/gears', () => {
  it('is a function', () => {
    expect(Gears)
      .to.be.a('function')
  })
})
