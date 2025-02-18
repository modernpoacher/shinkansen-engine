import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import Pinion from '#engine/components/pinion'

import {
  STRING_STRING,
  STRING_STRING_ENUM,
  STRING_STRING_ANY_OF,
  STRING_STRING_ONE_OF,
  STRING_STRING_ALL_OF
} from './definitions.mjs'

/**
 *  @type {Array<(Story: () => React.JSX.Element) => React.JSX.Element>}
 */
const decorators = [
  (Story) => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  )
]

const STRING = {
  STRING_STRING,
  STRING_STRING_ENUM,
  STRING_STRING_ANY_OF,
  STRING_STRING_ONE_OF,
  STRING_STRING_ALL_OF
}

export default {
  title: 'Stories/Components/Pinion/String',
  component: Pinion,
  decorators,
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
    }
  }
}

export const Default = (args) => (
  <Pinion
    {...args}
  />
)
