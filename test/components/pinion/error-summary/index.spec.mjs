import { use, expect } from 'chai'
import sinonChai from 'sinon-chai'

import ErrorSummary from 'shinkansen-engine/components/pinion/error-summary'

use(sinonChai)

describe('shinkansen-engine/components/pinion/error-summary', () => {
  it('is a function', () => {
    return expect(ErrorSummary)
      .to.be.a('function')
  })
})
