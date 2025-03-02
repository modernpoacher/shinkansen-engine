import React from 'react'
import {
  MemoryRouter
} from 'react-router'

import Pinion from '#engine/components/pinion'

import {
  NUMBER_NUMBER,
  NUMBER_NUMBER_ENUM,
  NUMBER_NUMBER_ANY_OF,
  NUMBER_NUMBER_ONE_OF,
  NUMBER_NUMBER_ALL_OF
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

const NUMBER = {
  NUMBER_NUMBER,
  NUMBER_NUMBER_ENUM,
  NUMBER_NUMBER_ANY_OF,
  NUMBER_NUMBER_ONE_OF,
  NUMBER_NUMBER_ALL_OF
}

export default {
  title: 'Stories/Components/Pinion/Number',
  component: Pinion,
  decorators,
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

/**
 *  @param {EngineTypes.Components.Pinion.PinionProps} props
 *  @returns {React.JSX.Element}
 */
export function Default (props) {
  return (
    <Pinion
      {...props}
    />
  )
}
