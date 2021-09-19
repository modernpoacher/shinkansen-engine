import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import Engine from 'shinkansen-engine/engine'

import {
  toZashiki,
  fromDocumentToHash
} from 'shinkansen-engine/transformers/transmission'

import BOOLEAN_BOOLEAN from 'stories/definitions/boolean-boolean'
import BOOLEAN_BOOLEAN_ENUM from 'stories/definitions/boolean-boolean-enum'
import BOOLEAN_BOOLEAN_ANY_OF from 'stories/definitions/boolean-boolean-any-of'
import BOOLEAN_BOOLEAN_ONE_OF from 'stories/definitions/boolean-boolean-one-of'
import BOOLEAN_BOOLEAN_ALL_OF from 'stories/definitions/boolean-boolean-all-of'

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
  title: 'Components/Engine/Boolean',
  component: Engine,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

export const BooleanBoolean = () => (
  <Engine
    pinion={toZashiki(BOOLEAN_BOOLEAN, fromDocumentToHash(false, BOOLEAN_BOOLEAN))}
    gears={GEARS}
  />
)

BooleanBoolean.storyName = 'Boolean'
BooleanBoolean.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const BooleanBooleanEnum = () => (
  <Engine
    pinion={toZashiki(BOOLEAN_BOOLEAN_ENUM, fromDocumentToHash(false, BOOLEAN_BOOLEAN_ENUM))}
    gears={GEARS}
  />
)

BooleanBooleanEnum.storyName = 'Boolean - Enum'
BooleanBooleanEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const BooleanBooleanAnyOf = () => (
  <Engine
    pinion={toZashiki(BOOLEAN_BOOLEAN_ANY_OF, fromDocumentToHash(false, BOOLEAN_BOOLEAN_ANY_OF))}
    gears={GEARS}
  />
)

BooleanBooleanAnyOf.storyName = 'Boolean - Any Of'
BooleanBooleanAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const BooleanBooleanOneOf = () => (
  <Engine
    pinion={toZashiki(BOOLEAN_BOOLEAN_ONE_OF, fromDocumentToHash(false, BOOLEAN_BOOLEAN_ONE_OF))}
    gears={GEARS}
  />
)

BooleanBooleanOneOf.storyName = 'Boolean - One Of'
BooleanBooleanOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const BooleanBooleanAllOf = () => (
  <Engine
    pinion={toZashiki(BOOLEAN_BOOLEAN_ALL_OF, fromDocumentToHash(false, BOOLEAN_BOOLEAN_ALL_OF))}
    gears={GEARS}
  />
)

BooleanBooleanAllOf.storyName = 'Boolean - All Of'
BooleanBooleanAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}
