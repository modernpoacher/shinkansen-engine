import React from 'react'

import {
  EmailCog
} from 'shinkansen-engine/components/cogs'
import errors from '#stories/errors'
import EmailState from '#stories/state/email'

export default {
  title: 'Stories/Components/Cogs/Email',
  component: EmailCog,
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
  <EmailState value='email@email.com'>
    <EmailCog {...args} />
  </EmailState>
)

Value.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'email',
  name: 'email'
}

export const DefaultValue = (args) => (
  <EmailState defaultValue='email@email.com'>
    <EmailCog {...args} />
  </EmailState>
)

DefaultValue.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'email',
  name: 'email'
}
