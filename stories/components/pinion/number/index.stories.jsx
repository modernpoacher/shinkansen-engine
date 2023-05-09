import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import Pinion from 'shinkansen-engine/components/pinion'

import NUMBER_NUMBER from '#stories/definitions/pinion/number-number.json'
import NUMBER_NUMBER_ENUM from '#stories/definitions/pinion/number-number-enum.json'
import NUMBER_NUMBER_ANY_OF from '#stories/definitions/pinion/number-number-any-of.json'
import NUMBER_NUMBER_ONE_OF from '#stories/definitions/pinion/number-number-one-of.json'
import NUMBER_NUMBER_ALL_OF from '#stories/definitions/pinion/number-number-all-of.json'

const NUMBER = {
  NUMBER_NUMBER,
  NUMBER_NUMBER_ENUM,
  NUMBER_NUMBER_ANY_OF,
  NUMBER_NUMBER_ONE_OF,
  NUMBER_NUMBER_ALL_OF
}

export default {
  title: 'Components/Pinion/Number',
  component: Pinion,
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
    }
  }
}

export const Default = (args) => (
  <Pinion
    {...args}
  />
)
