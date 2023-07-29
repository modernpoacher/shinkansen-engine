const sinonChai = require('sinon-chai')

const CheckAnswers = require('shinkansen-engine/components/pinion/check-answers')

import('chai')
  .then(({ use, expect }) => {
    use(sinonChai)

    describe('shinkansen-engine/components/pinion/check-answers', () => {
      it('is a function', () => {
        return expect(CheckAnswers)
          .to.be.a('function')
      })
    })
  })
