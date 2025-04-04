/**
 *  @typedef {EngineTypes.Components.Cogs.Cog.Checkbox.CheckboxProps} CheckboxProps
 */

import React from 'react'

import {
  CheckboxCog
} from '#engine/components/cogs'
import errors from '#stories/errors'
import CheckboxState from '#stories/state/checkbox'

export default {
  title: 'Stories/Components/Cogs/Checkbox',
  component: CheckboxCog,
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
 *  @param {CheckboxProps} args
 *  @returns {React.JSX.Element}
 */
export function Checked (args) {
  return (
    <form>
      <CheckboxState checked>
        <CheckboxCog {...args} value='value' />
      </CheckboxState>
    </form>
  )
}

Checked.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'checkbox',
  name: 'checkbox'
}

/**
 *  @param {CheckboxProps} args
 *  @returns {React.JSX.Element}
 */
export function DefaultChecked (args) {
  return (
    <form>
      <CheckboxState defaultChecked>
        <CheckboxCog {...args} value='value' />
      </CheckboxState>
    </form>
  )
}

DefaultChecked.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'checkbox',
  name: 'checkbox'
}
