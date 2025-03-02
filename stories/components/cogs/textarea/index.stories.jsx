/**
 *  @typedef {EngineTypes.Components.Cogs.Cog.Textarea.TextareaProps} TextareaProps
 */

import React from 'react'

import {
  TextareaCog
} from '#engine/components/cogs'
import errors from '#stories/errors'
import TextareaState from '#stories/state/textarea'

export default {
  title: 'Stories/Components/Cogs/Textarea',
  component: TextareaCog,
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
 * @param {TextareaProps} args
 * @returns {React.JSX.Element}
 */
export function Value (args) {
  return (
    <form>
      <TextareaState value='Value'>
        <TextareaCog {...args} />
      </TextareaState>
    </form>
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
  id: 'textarea',
  name: 'textarea'
}

/**
 * @param {TextareaProps} args
 * @returns {React.JSX.Element}
 */
export function DefaultValue (args) {
  return (
    <form>
      <TextareaState defaultValue='Default value'>
        <TextareaCog {...args} />
      </TextareaState>
    </form>
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
  id: 'textarea',
  name: 'textarea'
}
