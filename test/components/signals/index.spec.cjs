const {
  expect // @ts-ignore
} = require('chai')

const Signals = require('#engine/components/signals')

describe('#engine/components/signals', () => {
  it('is an object', () => {
    expect(Signals)
      .to.be.an('object')
  })
})
