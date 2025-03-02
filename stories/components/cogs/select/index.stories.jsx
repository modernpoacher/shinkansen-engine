/**
 *  @typedef {EngineTypes.Components.Cogs.Cog.Select.SelectProps} SelectProps
 */

import React from 'react'

import {
  SelectCog
} from '#engine/components/cogs'
import errors from '#stories/errors'
import SelectState from '#stories/state/select'

export default {
  title: 'Stories/Components/Cogs/Select',
  component: SelectCog,
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
 * @param {SelectProps} args
 * @returns {React.JSX.Element}
 */
export function Value (args) {
  return (
    <form>
      <SelectState value='one'>
        <SelectCog {...args}>
          <option value='one'>One</option>
          <option value='two'>Two</option>
          <option value='three'>Three</option>
        </SelectCog>
      </SelectState>
    </form>
  )
}

/**
 * @param {SelectProps} args
 * @returns {React.JSX.Element}
 */
Value.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'select',
  name: 'select'
}

/**
 * @param {SelectProps} args
 * @returns {React.JSX.Element}
 */
export function DefaultValue (args) {
  return (
    <form>
      <SelectState defaultValue='one'>
        <SelectCog {...args}>
          <option value='one'>One</option>
          <option value='two'>Two</option>
          <option value='three'>Three</option>
        </SelectCog>
      </SelectState>
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
  id: 'select',
  name: 'select'
}

/**
 * @param {SelectProps} args
 * @returns {React.JSX.Element}
 */
export function MultipleValue (args) {
  return (
    <form>
      <SelectState value={['one', 'three']}>
        <SelectCog multiple {...args}>
          <option value='one'>One</option>
          <option value='two'>Two</option>
          <option value='three'>Three</option>
          <option value='four'>Four</option>
          <option value='five'>Five</option>
          <option value='six'>Six</option>
        </SelectCog>
      </SelectState>
    </form>
  )
}

MultipleValue.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'select',
  name: 'select'
}

/**
 * @param {SelectProps} args
 * @returns {React.JSX.Element}
 */
export function MultipleDefaultValue (args) {
  return (
    <form>
      <SelectState defaultValue={['one', 'three']}>
        <SelectCog multiple {...args}>
          <option value='one'>One</option>
          <option value='two'>Two</option>
          <option value='three'>Three</option>
          <option value='four'>Four</option>
          <option value='five'>Five</option>
          <option value='six'>Six</option>
        </SelectCog>
      </SelectState>
    </form>
  )
}

MultipleDefaultValue.args = {
  title: 'Title',
  description: 'Description',
  required: false,
  disabled: false,
  readOnly: false,
  tabIndex: 0,
  accessKey: 'A',
  id: 'select',
  name: 'select'
}
