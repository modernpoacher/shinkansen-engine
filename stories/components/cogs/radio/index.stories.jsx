/**
 *  @typedef {EngineTypes.Components.Cogs.Cog.Radio.RadioProps} RadioProps
 */

import React from 'react'

import {
  RadioCog
} from '#engine/components/cogs'
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
 * @param {RadioProps} args
 * @returns {React.JSX.Element}
 */
export function Checked (args) {
  return (
    <RadioState value='two' checked>
      <RadioCog
        {...args}
        id='radio-a'
        value='one'
      />
      <RadioCog
        {...args}
        id='radio-b'
        value='two'
      />
      <RadioCog
        {...args}
        id='radio-c'
        value='three'
      />
    </RadioState>
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
  id: 'radio',
  name: 'radio'
}

/**
 * @param {RadioProps} args
 * @returns {React.JSX.Element}
 */
export function DefaultChecked (args) {
  return (
    <RadioState value='two' defaultChecked>
      <RadioCog
        {...args}
        id='radio-1'
        value='one'
      />
      <RadioCog
        {...args}
        id='radio-2'
        value='two'
      />
      <RadioCog
        {...args}
        id='radio-3'
        value='three'
      />
    </RadioState>
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
  id: 'radio',
  name: 'radio'
}
