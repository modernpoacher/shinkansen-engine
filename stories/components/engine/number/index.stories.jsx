import React from 'react'
import {
  MemoryRouter
} from 'react-router'

import Engine from '#engine/engine'

import {
  NUMBER_NUMBER,
  NUMBER_NUMBER_ENUM,
  NUMBER_NUMBER_ANY_OF,
  NUMBER_NUMBER_ONE_OF,
  NUMBER_NUMBER_ALL_OF
} from './definitions.mjs'

const REVERSE = {
  alpha: 'alpha',
  omega: 'omega'
}

const FORWARD = {
  alpha: 'alpha',
  omega: 'omega'
}

const EXCLUDE = {}

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
  title: 'Stories/Engine/Number',
  component: Engine,
  decorators,
  args: {
    pinion: 'NUMBER_NUMBER',
    params: 'DEFAULT',
    reverse: 'REVERSE',
    forward: 'FORWARD',
    pattern: '/:alpha/:omega'
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
    reverse: {
      options: ['REVERSE', 'EXCLUDE'],
      mapping: { REVERSE, EXCLUDE },
      control: {
        type: 'radio',
        labels: {
          REVERSE: 'Include',
          EXCLUDE: 'Exclude'
        }
      }
    },
    forward: {
      options: ['FORWARD', 'EXCLUDE'],
      mapping: { FORWARD, EXCLUDE },
      control: {
        type: 'radio',
        labels: {
          FORWARD: 'Include',
          EXCLUDE: 'Exclude'
        }
      }
    }
  }
}

const onChange = () => {}

// @ts-ignore
export function Default ({ pinion, params, reverse, forward, pattern }) {
  return (
    <Engine
      pinion={pinion}
      params={params}
      gears={{ reverse, forward, pattern }}
      onChange={onChange}
    />
  )
}

Default.propTypes = { // @ts-ignore
  ...Engine.propTypes
}
