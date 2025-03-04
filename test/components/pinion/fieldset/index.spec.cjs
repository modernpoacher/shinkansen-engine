const {
  expect // @ts-ignore
} = require('chai')

const Fieldset = require('#engine/components/pinion/fieldset')

describe('#engine/components/pinion/fieldset', () => {
  it('is a function', () => {
    expect(Fieldset)
      .to.be.a('function')
  })
})
