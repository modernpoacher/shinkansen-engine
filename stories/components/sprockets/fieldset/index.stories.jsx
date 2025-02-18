/**
 *  @typedef {import('shinkansen-sprockets/sprockets/fieldset').FieldsetProps} FieldsetProps
 */

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

/**
 * @param {FieldsetProps} args
 * @returns {React.JSX.Element}
 */
export function Default (args) {
  return (
    <FieldsetSprocket
      {...args}
    />
  )
}

/**
 * @param {FieldsetProps} args
 * @returns {React.JSX.Element}
 */
export function WithError (args) {
  return (
    <FieldsetSprocket
      {...args}
    />
  )
}

WithError.propTypes = {
  errorMessage: PropTypes.shape({})
}
