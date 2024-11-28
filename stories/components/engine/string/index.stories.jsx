import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import Engine from '#engine/engine'

import STRING_STRING from '#stories/definitions/pinion/string-string'
import STRING_STRING_ENUM from '#stories/definitions/pinion/string-string-enum'
import STRING_STRING_ANY_OF from '#stories/definitions/pinion/string-string-any-of'
import STRING_STRING_ONE_OF from '#stories/definitions/pinion/string-string-one-of'
import STRING_STRING_ALL_OF from '#stories/definitions/pinion/string-string-all-of'

const REVERSE = {
  alpha: 'alpha',
  omega: 'omega'
}

const FORWARD = {
  alpha: 'alpha',
  omega: 'omega'
}

const EXCLUDE = {}

const STRING = {
  STRING_STRING,
  STRING_STRING_ENUM,
  STRING_STRING_ANY_OF,
  STRING_STRING_ONE_OF,
  STRING_STRING_ALL_OF
}

export default {
  title: 'Stories/Engine/String',
  component: Engine,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
  args: {
    pinion: 'STRING_STRING',
    params: 'DEFAULT',
    reverse: 'REVERSE',
    forward: 'FORWARD',
    pattern: '/:alpha/:omega'
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
