const {
  expect // @ts-ignore
} = require('chai')

const Engine = require('#engine/engine')

describe('#engine/engine', () => {
  it('is a function', () => {
    expect(Engine)
      .to.be.a('function')
  })
})
