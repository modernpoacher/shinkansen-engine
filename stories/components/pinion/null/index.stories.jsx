import React from 'react'
import {
  MemoryRouter
} from 'react-router'

import Pinion from '#engine/components/pinion'

import {
  NULL_NULL,
  NULL_NULL_ENUM,
  NULL_NULL_ANY_OF,
  NULL_NULL_ONE_OF,
  NULL_NULL_ALL_OF
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
  decorators,
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
