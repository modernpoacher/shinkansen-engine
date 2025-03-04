const {
  expect // @ts-ignore
} = require('chai')

const Cogs = require('#engine/components/cogs')

describe('#engine/components/cogs', () => {
  it('is an object', () => {
    expect(Cogs)
      .to.be.an('object')
  })
})
