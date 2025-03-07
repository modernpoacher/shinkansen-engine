const {
  expect // @ts-ignore
} = require('chai')

const Pantograph = require('#engine/components/pantograph')

describe('#engine/components/pantograph', () => {
  it('is a function', () => {
    expect(Pantograph)
      .to.be.an('object')
  })
})
