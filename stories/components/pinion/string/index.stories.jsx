import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import Pinion from 'shinkansen-engine/components/pinion'

import STRING_STRING from '#stories/definitions/pinion/string-string.json'
import STRING_STRING_ENUM from '#stories/definitions/pinion/string-string-enum.json'
import STRING_STRING_ANY_OF from '#stories/definitions/pinion/string-string-any-of.json'
import STRING_STRING_ONE_OF from '#stories/definitions/pinion/string-string-one-of.json'
import STRING_STRING_ALL_OF from '#stories/definitions/pinion/string-string-all-of.json'

const STRING = {
  STRING_STRING,
  STRING_STRING_ENUM,
  STRING_STRING_ANY_OF,
  STRING_STRING_ONE_OF,
  STRING_STRING_ALL_OF
}

export default {
  title: 'Components/Pinion/String',
  component: Pinion,
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
    }
  }
}

export const Default = (args) => (
  <Pinion
    {...args}
  />
)
