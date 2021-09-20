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

const STRING = {
  STRING_STRING: toZashiki(STRING_STRING, fromDocumentToHash('string', STRING_STRING)),
  STRING_STRING_ENUM: toZashiki(STRING_STRING_ENUM, fromDocumentToHash('Three', STRING_STRING_ENUM)),
  STRING_STRING_ANY_OF: toZashiki(STRING_STRING_ANY_OF, fromDocumentToHash('three', STRING_STRING_ANY_OF)),
  STRING_STRING_ONE_OF: toZashiki(STRING_STRING_ONE_OF, fromDocumentToHash('three', STRING_STRING_ONE_OF)),
  STRING_STRING_ALL_OF: toZashiki(STRING_STRING_ALL_OF, fromDocumentToHash('string', STRING_STRING_ALL_OF))
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
  title: 'Components/Engine/String',
  component: Engine,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
  args: {
    pinion: 'STRING_STRING',
    params: 'DEFAULT'
  },
  argTypes: {
    pinion: {
      options: Object.keys(STRING),
      mapping: STRING,
      control: {
        type: 'radio',
        labels: {
          STRING_STRING: 'String',
          STRING_STRING_ENUM: 'String - Enum',
          STRING_STRING_ANY_OF: 'String - Any Of',
          STRING_STRING_ONE_OF: 'String - One Of',
          STRING_STRING_ALL_OF: 'String - All Of'
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
