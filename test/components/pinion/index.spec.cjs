const {
  expect // @ts-ignore
} = require('chai')

const Pinion = require('#engine/components/pinion')

describe('#engine/components/pinion', () => {
  it('is a function', () => {
    expect(Pinion)
      .to.be.a('function')
  })
})
