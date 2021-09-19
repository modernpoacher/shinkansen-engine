import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import Pinion from 'shinkansen-engine/components/pinion'

import {
  toZashiki,
  fromDocumentToHash
} from 'shinkansen-engine/transformers/transmission'

import NULL_NULL from 'stories/definitions/null-null'
import NULL_NULL_ENUM from 'stories/definitions/null-null-enum'
import NULL_NULL_ANY_OF from 'stories/definitions/null-null-any-of'
import NULL_NULL_ONE_OF from 'stories/definitions/null-null-one-of'
import NULL_NULL_ALL_OF from 'stories/definitions/null-null-all-of'

const PARAMS = {}

export default {
  title: 'Components/Pinion/Null',
  component: Pinion,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

export const NullNull = () => (
  <Pinion
    pinion={toZashiki(NULL_NULL, fromDocumentToHash(null, NULL_NULL))}
    params={PARAMS}
  />
)

NullNull.storyName = 'Null'
NullNull.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NullNullEnum = () => (
  <Pinion
    pinion={toZashiki(NULL_NULL_ENUM, fromDocumentToHash(null, NULL_NULL_ENUM))}
    params={PARAMS}
  />
)

NullNullEnum.storyName = 'Null - Enum'
NullNullEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NullNullAnyOf = () => (
  <Pinion
    pinion={toZashiki(NULL_NULL_ANY_OF, fromDocumentToHash(null, NULL_NULL_ANY_OF))}
    params={PARAMS}
  />
)

NullNullAnyOf.storyName = 'Null - Any Of'
NullNullAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NullNullOneOf = () => (
  <Pinion
    pinion={toZashiki(NULL_NULL_ONE_OF, fromDocumentToHash(null, NULL_NULL_ONE_OF))}
    params={PARAMS}
  />
)

NullNullOneOf.storyName = 'Null - One Of'
NullNullOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NullNullAllOf = () => (
  <Pinion
    pinion={toZashiki(NULL_NULL_ALL_OF, fromDocumentToHash(null, NULL_NULL_ALL_OF))}
    params={PARAMS}
  />
)

NullNullAllOf.storyName = 'Null - All Of'
NullNullAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}
