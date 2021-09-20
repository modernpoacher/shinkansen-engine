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

const NUMBER = {
  NUMBER_NUMBER: toZashiki(NUMBER_NUMBER, fromDocumentToHash(3, NUMBER_NUMBER)),
  NUMBER_NUMBER_ENUM: toZashiki(NUMBER_NUMBER_ENUM, fromDocumentToHash(3, NUMBER_NUMBER_ENUM)),
  NUMBER_NUMBER_ANY_OF: toZashiki(NUMBER_NUMBER_ANY_OF, fromDocumentToHash(3, NUMBER_NUMBER_ANY_OF)),
  NUMBER_NUMBER_ONE_OF: toZashiki(NUMBER_NUMBER_ONE_OF, fromDocumentToHash(3, NUMBER_NUMBER_ONE_OF)),
  NUMBER_NUMBER_ALL_OF: toZashiki(NUMBER_NUMBER_ALL_OF, fromDocumentToHash(3, NUMBER_NUMBER_ALL_OF))
}

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
  ],
  args: {
    pinion: 'NUMBER_NUMBER',
    params: 'DEFAULT'
  },
  argTypes: {
    pinion: {
      options: Object.keys(NUMBER),
      mapping: NUMBER,
      control: {
        type: 'radio',
        labels: {
          NUMBER_NUMBER: 'Number',
          NUMBER_NUMBER_ENUM: 'Number - Enum',
          NUMBER_NUMBER_ANY_OF: 'Number - Any Of',
          NUMBER_NUMBER_ONE_OF: 'Number - One Of',
          NUMBER_NUMBER_ALL_OF: 'Number - All Of'
        }
      }
    },
    params: {
      options: ['DEFAULT', 'ERROR'],
      mapping: { DEFAULT: {}, ERROR: { errors: [{ type: 'UNKNOWN', params: {}, uri: '#/' }] } },
      control: {
        type: 'radio',
        labels: {
          DEFAULT: 'Default',
          ERROR: 'Error'
        }
      }
    },
    gears: { control: null }
  }
}

export const Default = (args) => (
  <Engine
    {...args}
    gears={GEARS}
  />
)
