import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import Pinion from 'shinkansen-engine/components/pinion'

import {
  toZashiki,
  fromDocumentToHash
} from 'shinkansen-engine/transformers/transmission'

import STRING_STRING from 'stories/definitions/string-string'
import STRING_STRING_ENUM from 'stories/definitions/string-string-enum'
import STRING_STRING_ANY_OF from 'stories/definitions/string-string-any-of'
import STRING_STRING_ONE_OF from 'stories/definitions/string-string-one-of'
import STRING_STRING_ALL_OF from 'stories/definitions/string-string-all-of'

const PARAMS = {}

export default {
  title: 'Components/Pinion/String',
  component: Pinion,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

export const StringString = () => (
  <Pinion
    pinion={toZashiki(STRING_STRING, fromDocumentToHash('string', STRING_STRING))}
    params={PARAMS}
  />
)

StringString.storyName = 'String'
StringString.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const StringStringEnum = () => (
  <Pinion
    pinion={toZashiki(STRING_STRING_ENUM, fromDocumentToHash('Three', STRING_STRING_ENUM))}
    params={PARAMS}
  />
)

StringStringEnum.storyName = 'String - Enum'
StringStringEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const StringStringAnyOf = () => (
  <Pinion
    pinion={toZashiki(STRING_STRING_ANY_OF, fromDocumentToHash('three', STRING_STRING_ANY_OF))}
    params={PARAMS}
  />
)

StringStringAnyOf.storyName = 'String - Any Of'
StringStringAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const StringStringOneOf = () => (
  <Pinion
    pinion={toZashiki(STRING_STRING_ONE_OF, fromDocumentToHash('three', STRING_STRING_ONE_OF))}
    params={PARAMS}
  />
)

StringStringOneOf.storyName = 'String - One Of'
StringStringOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const StringStringAllOf = () => (
  <Pinion
    pinion={toZashiki(STRING_STRING_ALL_OF, fromDocumentToHash('string', STRING_STRING_ALL_OF))}
    params={PARAMS}
  />
)

StringStringAllOf.storyName = 'String - All Of'
StringStringAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}
