import React from 'react'

import {
  CheckboxCog
} from 'shinkansen-engine/components/cogs'
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
      }
    },
    placeholder: {
      defaultValue: ''
    }
  }
}

export const Checked = (args) => (
  <CheckboxState checked>
    <CheckboxCog {...args} />
  </CheckboxState>
)

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

export const DefaultChecked = (args) => (
  <CheckboxState defaultChecked>
    <CheckboxCog {...args} />
  </CheckboxState>
)

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
