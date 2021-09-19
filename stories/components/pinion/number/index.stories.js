import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import Pinion from 'shinkansen-engine/components/pinion'

import {
  toZashiki,
  fromDocumentToHash
} from 'shinkansen-engine/transformers/transmission'

import NUMBER_NUMBER from 'stories/definitions/number-number'
import NUMBER_NUMBER_ENUM from 'stories/definitions/number-number-enum'
import NUMBER_NUMBER_ANY_OF from 'stories/definitions/number-number-any-of'
import NUMBER_NUMBER_ONE_OF from 'stories/definitions/number-number-one-of'
import NUMBER_NUMBER_ALL_OF from 'stories/definitions/number-number-all-of'

const PARAMS = {}

export default {
  title: 'Components/Pinion/Number',
  component: Pinion,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

export const NumberNumber = () => (
  <Pinion
    pinion={toZashiki(NUMBER_NUMBER, fromDocumentToHash(3, NUMBER_NUMBER))}
    params={PARAMS}
  />
)

NumberNumber.storyName = 'Number'
NumberNumber.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NumberNumberEnum = () => (
  <Pinion
    pinion={toZashiki(NUMBER_NUMBER_ENUM, fromDocumentToHash(3, NUMBER_NUMBER_ENUM))}
    params={PARAMS}
  />
)

NumberNumberEnum.storyName = 'Number - Enum'
NumberNumberEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NumberNumberAnyOf = () => (
  <Pinion
    pinion={toZashiki(NUMBER_NUMBER_ANY_OF, fromDocumentToHash(3, NUMBER_NUMBER_ANY_OF))}
    params={PARAMS}
  />
)

NumberNumberAnyOf.storyName = 'Number - Any Of'
NumberNumberAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NumberNumberOneOf = () => (
  <Pinion
    pinion={toZashiki(NUMBER_NUMBER_ONE_OF, fromDocumentToHash(3, NUMBER_NUMBER_ONE_OF))}
    params={PARAMS}
  />
)

NumberNumberOneOf.storyName = 'Number - One Of'
NumberNumberOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const NumberNumberAllOf = () => (
  <Pinion
    pinion={toZashiki(NUMBER_NUMBER_ALL_OF, fromDocumentToHash(3, NUMBER_NUMBER_ALL_OF))}
    params={PARAMS}
  />
)

NumberNumberAllOf.storyName = 'Number - All Of'
NumberNumberAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}
