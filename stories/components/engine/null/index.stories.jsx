import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import Engine from 'shinkansen-engine/engine'

import NULL_NULL from '#stories/definitions/pinion/null-null.json'
import NULL_NULL_ENUM from '#stories/definitions/pinion/null-null-enum.json'
import NULL_NULL_ANY_OF from '#stories/definitions/pinion/null-null-any-of.json'
import NULL_NULL_ONE_OF from '#stories/definitions/pinion/null-null-one-of.json'
import NULL_NULL_ALL_OF from '#stories/definitions/pinion/null-null-all-of.json'

const REVERSE = {
  alpha: 'alpha',
  omega: 'omega'
}

const FORWARD = {
  alpha: 'alpha',
  omega: 'omega'
}

const EXCLUDE = {}

const NULL = {
  NULL_NULL,
  NULL_NULL_ENUM,
  NULL_NULL_ANY_OF,
  NULL_NULL_ONE_OF,
  NULL_NULL_ALL_OF
}

export default {
  title: 'Components/Engine/Null',
  component: Engine,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
  args: {
    pinion: 'NULL_NULL',
    params: 'DEFAULT',
    reverse: 'REVERSE',
    forward: 'FORWARD',
    pattern: '/:alpha/:omega'
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

export const Default = ({ pinion, params, reverse, forward, pattern }) => (
  <Engine
    pinion={pinion}
    params={params}
    gears={{ reverse, forward, pattern }}
  />
)

Default.propTypes = {
  ...Engine.propTypes
}
