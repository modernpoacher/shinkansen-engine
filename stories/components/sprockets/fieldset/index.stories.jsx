import React from 'react'

import {
  FieldsetSprocket
} from 'shinkansen-engine/components/sprockets'
import errors from '#stories/errors'

export default {
  title: 'Stories/Components/Sprockets/Fieldset',
  component: FieldsetSprocket,
  argTypes: {
    errorMessage: {
      options: Object.keys(errors),
      mapping: errors,
      control: {
        type: 'radio',
        labels: {
          string: 'String',
          number: 'Number',
          boolean: 'Boolean',
          array: 'Array',
          object: 'Object',
          null: 'Null'
        }
      }
    },
    children: {
      control: {
        type: null
      }
    }
  }
}

export const Fieldset = (args) => (
  <FieldsetSprocket
    {...args}
  />
)

Fieldset.args = {
  title: 'Title',
  description: 'Description'
}
