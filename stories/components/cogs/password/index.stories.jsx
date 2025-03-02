/**
 *  @typedef {EngineTypes.Components.Cogs.Cog.Password.PasswordProps} PasswordProps
 */

import React from 'react'

import {
  PasswordCog
} from '#engine/components/cogs'
import errors from '#stories/errors'
import PasswordState from '#stories/state/password'

export default {
  title: 'Stories/Components/Cogs/Password',
  component: PasswordCog,
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
 * @param {PasswordProps} args
 * @returns {React.JSX.Element}
 */
export function Value (args) {
  return (
    <form>
      <PasswordState value='password'>
        <PasswordCog {...args} />
      </PasswordState>
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
  id: 'password',
  name: 'password'
}

/**
 * @param {PasswordProps} args
 * @returns {React.JSX.Element}
 */
export function DefaultValue (args) {
  return (
    <form>
      <PasswordState defaultValue='password'>
        <PasswordCog {...args} />
      </PasswordState>
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
  id: 'password',
  name: 'password'
}
