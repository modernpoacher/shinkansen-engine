import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import Engine from 'shinkansen-engine/engine'

import {
  toZashiki,
  fromDocumentToHash
} from 'shinkansen-engine/transformers/transmission'

import NULL_NULL from 'stories/definitions/null-null'
import NULL_NULL_ENUM from 'stories/definitions/null-null-enum'
import NULL_NULL_ANY_OF from 'stories/definitions/null-null-any-of'
import NULL_NULL_ONE_OF from 'stories/definitions/null-null-one-of'
import NULL_NULL_ALL_OF from 'stories/definitions/null-null-all-of'

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
  title: 'Components/Engine/Null',
  component: Engine,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

export const NullNull = () => (
  <Engine
    pinion={toZashiki(NULL_NULL, fromDocumentToHash(null, NULL_NULL))}
    gears={GEARS}
  />
)

NullNull.storyName = 'Null'
NullNull.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NullNullEnum = () => (
  <Engine
    pinion={toZashiki(NULL_NULL_ENUM, fromDocumentToHash(null, NULL_NULL_ENUM))}
    gears={GEARS}
  />
)

NullNullEnum.storyName = 'Null - Enum'
NullNullEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NullNullAnyOf = () => (
  <Engine
    pinion={toZashiki(NULL_NULL_ANY_OF, fromDocumentToHash(null, NULL_NULL_ANY_OF))}
    gears={GEARS}
  />
)

NullNullAnyOf.storyName = 'Null - Any Of'
NullNullAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NullNullOneOf = () => (
  <Engine
    pinion={toZashiki(NULL_NULL_ONE_OF, fromDocumentToHash(null, NULL_NULL_ONE_OF))}
    gears={GEARS}
  />
)

NullNullOneOf.storyName = 'Null - One Of'
NullNullOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NullNullAllOf = () => (
  <Engine
    pinion={toZashiki(NULL_NULL_ALL_OF, fromDocumentToHash(null, NULL_NULL_ALL_OF))}
    gears={GEARS}
  />
)

NullNullAllOf.storyName = 'Null - All Of'
NullNullAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}
