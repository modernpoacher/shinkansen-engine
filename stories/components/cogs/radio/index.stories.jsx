import React from 'react'

import {
  RadioCog
} from 'shinkansen-engine/components/cogs'
import errors from '#stories/errors'
import RadioState from '#stories/state/radio'

export default {
  title: 'Stories/Components/Cogs/Radio',
  component: RadioCog,
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

export const Value = (args) => (
  <RadioState value='value'>
    <RadioCog {...args} id='radio' value='value' />
  </RadioState>
)

Value.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  name: 'radio'
}

export const DefaultValue = (args) => (
  <RadioState defaultValue='value'>
    <RadioCog {...args} id='radio' value='value' />
  </RadioState>
)

DefaultValue.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  name: 'radio'
}
