const chai = require('chai')
const sinonChai = require('sinon-chai')
const {
  expect
} = chai

const Fieldset = require('shinkansen-engine/components/pinion/error-summary')

chai.use(sinonChai)

describe('shinkansen-engine/components/pinion/error-summary', () => {
  it('is a function', () => {
    return expect(Fieldset)
      .to.be.a('function')
  })
})
