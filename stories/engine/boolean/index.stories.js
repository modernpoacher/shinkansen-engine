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

const BOOLEAN = {
  BOOLEAN_BOOLEAN: toZashiki(BOOLEAN_BOOLEAN, fromDocumentToHash(false, BOOLEAN_BOOLEAN)),
  BOOLEAN_BOOLEAN_ENUM: toZashiki(BOOLEAN_BOOLEAN_ENUM, fromDocumentToHash(false, BOOLEAN_BOOLEAN_ENUM)),
  BOOLEAN_BOOLEAN_ANY_OF: toZashiki(BOOLEAN_BOOLEAN_ANY_OF, fromDocumentToHash(false, BOOLEAN_BOOLEAN_ANY_OF)),
  BOOLEAN_BOOLEAN_ONE_OF: toZashiki(BOOLEAN_BOOLEAN_ONE_OF, fromDocumentToHash(false, BOOLEAN_BOOLEAN_ONE_OF)),
  BOOLEAN_BOOLEAN_ALL_OF: toZashiki(BOOLEAN_BOOLEAN_ALL_OF, fromDocumentToHash(false, BOOLEAN_BOOLEAN_ALL_OF))
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
  title: 'Components/Engine/Boolean',
  component: Engine,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
  args: {
    pinion: 'BOOLEAN_BOOLEAN',
    params: 'DEFAULT'
  },
  argTypes: {
    pinion: {
      options: Object.keys(BOOLEAN),
      mapping: BOOLEAN,
      control: {
        type: 'radio',
        labels: {
          BOOLEAN_BOOLEAN: 'Boolean',
          BOOLEAN_BOOLEAN_ENUM: 'Boolean - Enum',
          BOOLEAN_BOOLEAN_ANY_OF: 'Boolean - Any Of',
          BOOLEAN_BOOLEAN_ONE_OF: 'Boolean - One Of',
          BOOLEAN_BOOLEAN_ALL_OF: 'Boolean - All Of'
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
