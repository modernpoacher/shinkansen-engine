const sinonChai = require('sinon-chai')

const ErrorSummary = require('shinkansen-engine/components/pinion/error-summary')

import('chai')
  .then(({ use, expect }) => {
    use(sinonChai)

    describe('shinkansen-engine/components/pinion/error-summary', () => {
      it('is a function', () => {
        return expect(ErrorSummary)
          .to.be.a('function')
      })
    })
  })
