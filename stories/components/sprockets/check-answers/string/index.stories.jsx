/**
 *  @typedef {EngineTypes.Components.Sprockets.Sprocket.CheckAnswers.CheckAnswersProps} CheckAnswersProps
 */

import React from 'react'
import PropTypes from 'prop-types'
import {
  MemoryRouter
} from 'react-router'

import {
  CheckAnswersSprocket
} from '#engine/components/sprockets'

import {
  STRING_STRING,
  STRING_STRING_ENUM,
  STRING_STRING_ANY_OF,
  STRING_STRING_ONE_OF,
  STRING_STRING_ALL_OF
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

const STRING = {
  STRING_STRING: [STRING_STRING],
  STRING_STRING_ENUM: [STRING_STRING_ENUM],
  STRING_STRING_ANY_OF: [STRING_STRING_ANY_OF],
  STRING_STRING_ONE_OF: [STRING_STRING_ONE_OF],
  STRING_STRING_ALL_OF: [STRING_STRING_ALL_OF]
}

export default {
  title: 'Stories/Components/Sprockets/Check Answers/String',
  component: CheckAnswersSprocket,
  decorators,
  args: {
    title: 'Check Answers',
    checkAnswers: 'STRING_STRING'
  },
  argTypes: {
    checkAnswers: {
      options: Object.keys(STRING),
      mapping: STRING,
      control: {
        type: 'check',
        labels: {
          STRING_STRING: 'String',
          STRING_STRING_ENUM: 'String - Enum',
          STRING_STRING_ANY_OF: 'String - Any Of',
          STRING_STRING_ONE_OF: 'String - One Of',
          STRING_STRING_ALL_OF: 'String - All Of'
        }
      }
    }
  }
}

/**
 *  @param {CheckAnswersProps} args
 *  @returns {React.JSX.Element}
 */
export function Default ({ checkAnswers = [], ...args }) {
  /**
   *  @type {CheckAnswersProps}
   */
  const props = {
    ...args,
    checkAnswers: checkAnswers.flat()
  }

  return (
    <CheckAnswersSprocket
      {...props}
    />
  )
}

Default.propTypes = {
  checkAnswers: PropTypes.array
}
