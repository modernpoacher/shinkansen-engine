import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import Engine from 'shinkansen-engine/engine'

import {
  toZashiki,
  fromDocumentToHash
} from 'shinkansen-engine/transformers/transmission'

import NUMBER_NUMBER from 'stories/definitions/number-number'
import NUMBER_NUMBER_ENUM from 'stories/definitions/number-number-enum'
import NUMBER_NUMBER_ANY_OF from 'stories/definitions/number-number-any-of'
import NUMBER_NUMBER_ONE_OF from 'stories/definitions/number-number-one-of'
import NUMBER_NUMBER_ALL_OF from 'stories/definitions/number-number-all-of'

const GEARS = {
  forward: {
    alpha: 'alpha',
    omega: 'omega'
  },
  reverse: {
    alpha: 'alpha',
    omega: 'omega'
  }
}

export default {
  title: 'Components/Engine/Number',
  component: Engine,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

export const NumberNumber = () => (
  <Engine
    pinion={toZashiki(NUMBER_NUMBER, fromDocumentToHash(3, NUMBER_NUMBER))}
    gears={GEARS}
  />
)

NumberNumber.storyName = 'Number'
NumberNumber.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NumberNumberEnum = () => (
  <Engine
    pinion={toZashiki(NUMBER_NUMBER_ENUM, fromDocumentToHash(3, NUMBER_NUMBER_ENUM))}
    gears={GEARS}
  />
)

NumberNumberEnum.storyName = 'Number - Enum'
NumberNumberEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NumberNumberAnyOf = () => (
  <Engine
    pinion={toZashiki(NUMBER_NUMBER_ANY_OF, fromDocumentToHash(3, NUMBER_NUMBER_ANY_OF))}
    gears={GEARS}
  />
)

NumberNumberAnyOf.storyName = 'Number - Any Of'
NumberNumberAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NumberNumberOneOf = () => (
  <Engine
    pinion={toZashiki(NUMBER_NUMBER_ONE_OF, fromDocumentToHash(3, NUMBER_NUMBER_ONE_OF))}
    gears={GEARS}
  />
)

NumberNumberOneOf.storyName = 'Number - One Of'
NumberNumberOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NumberNumberAllOf = () => (
  <Engine
    pinion={toZashiki(NUMBER_NUMBER_ALL_OF, fromDocumentToHash(3, NUMBER_NUMBER_ALL_OF))}
    gears={GEARS}
  />
)

NumberNumberAllOf.storyName = 'Number - All Of'
NumberNumberAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}
