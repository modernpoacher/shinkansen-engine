const {
  expect // @ts-ignore
} = require('chai')

const Sprockets = require('#engine/components/sprockets')

describe('#engine/components/sprockets', () => {
  it('is an object', () => {
    expect(Sprockets)
      .to.be.an('object')
  })
})
