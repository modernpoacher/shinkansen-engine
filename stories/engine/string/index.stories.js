import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import Engine from 'shinkansen-engine/engine'

import {
  toZashiki,
  fromDocumentToHash
} from 'shinkansen-engine/transformers/transmission'

import STRING_STRING from 'stories/definitions/string-string'
import STRING_STRING_ENUM from 'stories/definitions/string-string-enum'
import STRING_STRING_ANY_OF from 'stories/definitions/string-string-any-of'
import STRING_STRING_ONE_OF from 'stories/definitions/string-string-one-of'
import STRING_STRING_ALL_OF from 'stories/definitions/string-string-all-of'

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
  title: 'Components/Engine/String',
  component: Engine,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

export const StringString = () => (
  <Engine
    pinion={toZashiki(STRING_STRING, fromDocumentToHash('string', STRING_STRING))}
    gears={GEARS}
  />
)

StringString.storyName = 'String'
StringString.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const StringStringEnum = () => (
  <Engine
    pinion={toZashiki(STRING_STRING_ENUM, fromDocumentToHash('Three', STRING_STRING_ENUM))}
    gears={GEARS}
  />
)

StringStringEnum.storyName = 'String - Enum'
StringStringEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const StringStringAnyOf = () => (
  <Engine
    pinion={toZashiki(STRING_STRING_ANY_OF, fromDocumentToHash('three', STRING_STRING_ANY_OF))}
    gears={GEARS}
  />
)

StringStringAnyOf.storyName = 'String - Any Of'
StringStringAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const StringStringOneOf = () => (
  <Engine
    pinion={toZashiki(STRING_STRING_ONE_OF, fromDocumentToHash('three', STRING_STRING_ONE_OF))}
    gears={GEARS}
  />
)

StringStringOneOf.storyName = 'String - One Of'
StringStringOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const StringStringAllOf = () => (
  <Engine
    pinion={toZashiki(STRING_STRING_ALL_OF, fromDocumentToHash('string', STRING_STRING_ALL_OF))}
    gears={GEARS}
  />
)

StringStringAllOf.storyName = 'String - All Of'
StringStringAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}
