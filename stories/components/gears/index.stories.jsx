import React from 'react'

import {
  MemoryRouter
} from 'react-router'

import Gears from '#engine/components/gears'

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

export default {
  title: 'Stories/Components/Gears',
  component: Gears,
  decorators,
  args: {
    reverse: 'REVERSE',
    forward: 'FORWARD',
    pattern: '/:alpha/:omega'
  },
  argTypes: {
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

/**
 *  @param {EngineTypes.Components.Gears.GearsProps} props
 *  @returns {React.JSX.Element}
 */
export function Default (props) {
  return (
    <Gears
      {...props}
    />
  )
}

Default.propTypes = {
  ...Gears.propTypes
}
