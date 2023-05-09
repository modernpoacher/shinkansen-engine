import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import Engine from 'shinkansen-engine/engine'

import NUMBER_NUMBER from '#stories/definitions/pinion/number-number.json'
import NUMBER_NUMBER_ENUM from '#stories/definitions/pinion/number-number-enum.json'
import NUMBER_NUMBER_ANY_OF from '#stories/definitions/pinion/number-number-any-of.json'
import NUMBER_NUMBER_ONE_OF from '#stories/definitions/pinion/number-number-one-of.json'
import NUMBER_NUMBER_ALL_OF from '#stories/definitions/pinion/number-number-all-of.json'

const REVERSE = {
  alpha: 'alpha',
  omega: 'omega'
}

const FORWARD = {
  alpha: 'alpha',
  omega: 'omega'
}

const EXCLUDE = {}

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
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
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
