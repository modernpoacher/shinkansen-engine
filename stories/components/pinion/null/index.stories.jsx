import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import Pinion from '#engine/components/pinion'

import NULL_NULL from '#stories/definitions/pinion/null-null'
import NULL_NULL_ENUM from '#stories/definitions/pinion/null-null-enum'
import NULL_NULL_ANY_OF from '#stories/definitions/pinion/null-null-any-of'
import NULL_NULL_ONE_OF from '#stories/definitions/pinion/null-null-one-of'
import NULL_NULL_ALL_OF from '#stories/definitions/pinion/null-null-all-of'

const NULL = {
  NULL_NULL,
  NULL_NULL_ENUM,
  NULL_NULL_ANY_OF,
  NULL_NULL_ONE_OF,
  NULL_NULL_ALL_OF
}

export default {
  title: 'Stories/Components/Pinion/Null',
  component: Pinion,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
  args: {
    pinion: 'NULL_NULL',
    params: 'DEFAULT'
  },
  argTypes: {
    pinion: {
      options: Object.keys(NULL),
      mapping: NULL,
      control: {
        type: 'radio',
        labels: {
          NULL_NULL: 'Null',
          NULL_NULL_ENUM: 'Null - Enum',
          NULL_NULL_ANY_OF: 'Null - Any Of',
          NULL_NULL_ONE_OF: 'Null - One Of',
          NULL_NULL_ALL_OF: 'Null - All Of'
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
