import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import Engine from '#engine/engine'

import BOOLEAN_BOOLEAN from '#stories/definitions/pinion/boolean-boolean'
import BOOLEAN_BOOLEAN_ENUM from '#stories/definitions/pinion/boolean-boolean-enum'
import BOOLEAN_BOOLEAN_ANY_OF from '#stories/definitions/pinion/boolean-boolean-any-of'
import BOOLEAN_BOOLEAN_ONE_OF from '#stories/definitions/pinion/boolean-boolean-one-of'
import BOOLEAN_BOOLEAN_ALL_OF from '#stories/definitions/pinion/boolean-boolean-all-of'

const REVERSE = {
  alpha: 'alpha',
  omega: 'omega'
}

const FORWARD = {
  alpha: 'alpha',
  omega: 'omega'
}

const EXCLUDE = {}

const BOOLEAN = {
  BOOLEAN_BOOLEAN,
  BOOLEAN_BOOLEAN_ENUM,
  BOOLEAN_BOOLEAN_ANY_OF,
  BOOLEAN_BOOLEAN_ONE_OF,
  BOOLEAN_BOOLEAN_ALL_OF
}

export default {
  title: 'Stories/Engine/Boolean',
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
    params: 'DEFAULT',
    reverse: 'REVERSE',
    forward: 'FORWARD',
    pattern: '/:alpha/:omega'
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
