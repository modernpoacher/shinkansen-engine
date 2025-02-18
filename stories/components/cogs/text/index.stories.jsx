/**
 *  @typedef {EngineTypes.Components.Cogs.Cog.Text.TextProps} TextProps
 */

import React from 'react'

import {
  TextCog
} from '#engine/components/cogs'
import errors from '#stories/errors'
import TextState from '#stories/state/text'

export default {
  title: 'Stories/Components/Cogs/Text',
  component: TextCog,
  argTypes: {
    errorMessage: {
      options: Object.keys(errors),
      mapping: errors,
      control: {
        type: 'select',
        labels: {
          string: 'String',
          number: 'Number',
          array: 'Array',
          object: 'Object',
          boolean: 'Boolean',
          null: 'Null'
        }
      },
      description: 'errorMessage'
    },
    placeholder: {
      control: 'text',
      description: 'placeholder'
    }
  }
}

/**
 * @param {TextProps} args
 * @returns {React.JSX.Element}
 */
export function Value (args) {
  return (
    <TextState value='Value'>
      <TextCog {...args} />
    </TextState>
  )
}

Value.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'text',
  name: 'text'
}

/**
 * @param {TextProps} args
 * @returns {React.JSX.Element}
 */
export function DefaultValue (args) {
  return (
    <TextState defaultValue='Default value'>
      <TextCog {...args} />
    </TextState>
  )
}

DefaultValue.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'text',
  name: 'text'
}
