import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import Gears from 'shinkansen-engine/components/gears'

const FORWARD = {
  alpha: 'alpha',
  omega: 'omega'
}

const REVERSE = {
  alpha: 'alpha',
  omega: 'omega'
}

export default {
  title: 'Components/Gears',
  component: Gears,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

export const ReverseForward = () => (
  <Gears
    reverse={REVERSE}
    forward={FORWARD}
  />
)

ReverseForward.storyName = 'Reverse and Forward'
ReverseForward.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const Reverse = () => (
  <Gears
    reverse={REVERSE}
  />
)

Reverse.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const Forward = () => (
  <Gears
    forward={FORWARD}
  />
)

Forward.parameters = {
  controls: { hideNoControlsWarning: true }
}
