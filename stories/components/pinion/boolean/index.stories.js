import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import Pinion from 'shinkansen-engine/components/pinion'

import {
  toZashiki,
  fromDocumentToHash
} from 'shinkansen-engine/transformers/transmission'

import BOOLEAN_BOOLEAN from 'stories/definitions/boolean-boolean'
import BOOLEAN_BOOLEAN_ENUM from 'stories/definitions/boolean-boolean-enum'
import BOOLEAN_BOOLEAN_ANY_OF from 'stories/definitions/boolean-boolean-any-of'
import BOOLEAN_BOOLEAN_ONE_OF from 'stories/definitions/boolean-boolean-one-of'
import BOOLEAN_BOOLEAN_ALL_OF from 'stories/definitions/boolean-boolean-all-of'

const PARAMS = {}

export default {
  title: 'Components/Pinion/Boolean',
  component: Pinion,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

export const BooleanBoolean = () => (
  <Pinion
    pinion={toZashiki(BOOLEAN_BOOLEAN, fromDocumentToHash(false, BOOLEAN_BOOLEAN))}
    params={PARAMS}
  />
)

BooleanBoolean.storyName = 'Boolean'
BooleanBoolean.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const BooleanBooleanEnum = () => (
  <Pinion
    pinion={toZashiki(BOOLEAN_BOOLEAN_ENUM, fromDocumentToHash(false, BOOLEAN_BOOLEAN_ENUM))}
    params={PARAMS}
  />
)

BooleanBooleanEnum.storyName = 'Boolean - Enum'
BooleanBooleanEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const BooleanBooleanAnyOf = () => (
  <Pinion
    pinion={toZashiki(BOOLEAN_BOOLEAN_ANY_OF, fromDocumentToHash(false, BOOLEAN_BOOLEAN_ANY_OF))}
    params={PARAMS}
  />
)

BooleanBooleanAnyOf.storyName = 'Boolean - Any Of'
BooleanBooleanAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const BooleanBooleanOneOf = () => (
  <Pinion
    pinion={toZashiki(BOOLEAN_BOOLEAN_ONE_OF, fromDocumentToHash(false, BOOLEAN_BOOLEAN_ONE_OF))}
    params={PARAMS}
  />
)

BooleanBooleanOneOf.storyName = 'Boolean - One Of'
BooleanBooleanOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const BooleanBooleanAllOf = () => (
  <Pinion
    pinion={toZashiki(BOOLEAN_BOOLEAN_ALL_OF, fromDocumentToHash(false, BOOLEAN_BOOLEAN_ALL_OF))}
    params={PARAMS}
  />
)

BooleanBooleanAllOf.storyName = 'Boolean - All Of'
BooleanBooleanAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}
