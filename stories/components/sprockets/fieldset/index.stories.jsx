import React from 'react'
import PropTypes from 'prop-types'

import {
  FieldsetSprocket
} from '#engine/components/sprockets'
import errors from '#stories/errors'

export default {
  title: 'Stories/Components/Sprockets/Fieldset',
  component: FieldsetSprocket,
  args: {
    title: 'Fieldset',
    description: 'Description',
    errorMessage: 'string'
  },
  argTypes: {
    errorMessage: {
      options: Object.keys(errors),
      mapping: errors,
      control: {
        type: 'radio',
        labels: {
          string: 'String',
          number: 'Number',
          boolean: 'Boolean',
          array: 'Array',
          object: 'Object',
          null: 'Null'
        }
      }
    }
  }
}

export function Default (args) {
  return (
    <FieldsetSprocket
      {...args}
      errorMessage={undefined}
  />
  )
}

export function WithError ({ errorMessage = {}, ...args }) {
  return (
    <FieldsetSprocket
      {...args}
      errorMessage={errorMessage}
    />
  )
}

WithError.propTypes = {
  errorMessage: PropTypes.shape()
}
