/**
 *  @typedef {EngineTypes.Components.Cogs.Cog.Email.EmailProps} EmailProps
 */

import React from 'react'

import {
  EmailCog
} from '#engine/components/cogs'
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
 *  @param {EmailProps} args
 *  @returns {React.JSX.Element}
 */
export function Value (args) {
  return (
    <form>
      <EmailState value='email@email.com'>
        <EmailCog {...args} />
      </EmailState>
    </form>
  )
}

/**
 *  @param {EmailProps} args
 *  @returns {React.JSX.Element}
 */
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

/**
 *  @param {EmailProps} args
 *  @returns {React.JSX.Element}
 */
export function DefaultValue (args) {
  return (
    <form>
      <EmailState defaultValue='email@email.com'>
        <EmailCog {...args} />
      </EmailState>
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
  id: 'email',
  name: 'email'
}
