import React from 'react'

import {
  MemoryRouter
} from 'react-router-dom'

import Engine from 'shinkansen-engine/engine'

import ARRAY_ARRAY_OBJECT_STRING from '#stories/definitions/pinion/array-array-object-string.json'
import ARRAY_ARRAY_OBJECT_STRING_ENUM from '#stories/definitions/pinion/array-array-object-string-enum.json'
import ARRAY_ARRAY_OBJECT_STRING_ANY_OF from '#stories/definitions/pinion/array-array-object-string-any-of.json'
import ARRAY_ARRAY_OBJECT_STRING_ONE_OF from '#stories/definitions/pinion/array-array-object-string-one-of.json'
import ARRAY_ARRAY_OBJECT_STRING_ALL_OF from '#stories/definitions/pinion/array-array-object-string-all-of.json'

import ARRAY_ARRAY_OBJECT_NUMBER from '#stories/definitions/pinion/array-array-object-number.json'
import ARRAY_ARRAY_OBJECT_NUMBER_ENUM from '#stories/definitions/pinion/array-array-object-number-enum.json'
import ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF from '#stories/definitions/pinion/array-array-object-number-any-of.json'
import ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF from '#stories/definitions/pinion/array-array-object-number-one-of.json'
import ARRAY_ARRAY_OBJECT_NUMBER_ALL_OF from '#stories/definitions/pinion/array-array-object-number-all-of.json'

import ARRAY_ARRAY_OBJECT_BOOLEAN from '#stories/definitions/pinion/array-array-object-boolean.json'
import ARRAY_ARRAY_OBJECT_BOOLEAN_ENUM from '#stories/definitions/pinion/array-array-object-boolean-enum.json'
import ARRAY_ARRAY_OBJECT_BOOLEAN_ANY_OF from '#stories/definitions/pinion/array-array-object-boolean-any-of.json'
import ARRAY_ARRAY_OBJECT_BOOLEAN_ONE_OF from '#stories/definitions/pinion/array-array-object-boolean-one-of.json'
import ARRAY_ARRAY_OBJECT_BOOLEAN_ALL_OF from '#stories/definitions/pinion/array-array-object-boolean-all-of.json'

import ARRAY_ARRAY_OBJECT_NULL from '#stories/definitions/pinion/array-array-object-null.json'
import ARRAY_ARRAY_OBJECT_NULL_ENUM from '#stories/definitions/pinion/array-array-object-null-enum.json'
import ARRAY_ARRAY_OBJECT_NULL_ANY_OF from '#stories/definitions/pinion/array-array-object-null-any-of.json'
import ARRAY_ARRAY_OBJECT_NULL_ONE_OF from '#stories/definitions/pinion/array-array-object-null-one-of.json'
import ARRAY_ARRAY_OBJECT_NULL_ALL_OF from '#stories/definitions/pinion/array-array-object-null-all-of.json'

import ARRAY_ARRAY_ARRAY_STRING from '#stories/definitions/pinion/array-array-array-string.json'
import ARRAY_ARRAY_ARRAY_STRING_ENUM from '#stories/definitions/pinion/array-array-array-string-enum.json'
import ARRAY_ARRAY_ARRAY_STRING_ANY_OF from '#stories/definitions/pinion/array-array-array-string-any-of.json'
import ARRAY_ARRAY_ARRAY_STRING_ONE_OF from '#stories/definitions/pinion/array-array-array-string-one-of.json'
import ARRAY_ARRAY_ARRAY_STRING_ALL_OF from '#stories/definitions/pinion/array-array-array-string-all-of.json'

import ARRAY_ARRAY_ARRAY_NUMBER from '#stories/definitions/pinion/array-array-array-number.json'
import ARRAY_ARRAY_ARRAY_NUMBER_ENUM from '#stories/definitions/pinion/array-array-array-number-enum.json'
import ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF from '#stories/definitions/pinion/array-array-array-number-any-of.json'
import ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF from '#stories/definitions/pinion/array-array-array-number-one-of.json'
import ARRAY_ARRAY_ARRAY_NUMBER_ALL_OF from '#stories/definitions/pinion/array-array-array-number-all-of.json'

import ARRAY_ARRAY_ARRAY_BOOLEAN from '#stories/definitions/pinion/array-array-array-boolean.json'
import ARRAY_ARRAY_ARRAY_BOOLEAN_ENUM from '#stories/definitions/pinion/array-array-array-boolean-enum.json'
import ARRAY_ARRAY_ARRAY_BOOLEAN_ANY_OF from '#stories/definitions/pinion/array-array-array-boolean-any-of.json'
import ARRAY_ARRAY_ARRAY_BOOLEAN_ONE_OF from '#stories/definitions/pinion/array-array-array-boolean-one-of.json'
import ARRAY_ARRAY_ARRAY_BOOLEAN_ALL_OF from '#stories/definitions/pinion/array-array-array-boolean-all-of.json'

import ARRAY_ARRAY_ARRAY_NULL from '#stories/definitions/pinion/array-array-array-null.json'
import ARRAY_ARRAY_ARRAY_NULL_ENUM from '#stories/definitions/pinion/array-array-array-null-enum.json'
import ARRAY_ARRAY_ARRAY_NULL_ANY_OF from '#stories/definitions/pinion/array-array-array-null-any-of.json'
import ARRAY_ARRAY_ARRAY_NULL_ONE_OF from '#stories/definitions/pinion/array-array-array-null-one-of.json'
import ARRAY_ARRAY_ARRAY_NULL_ALL_OF from '#stories/definitions/pinion/array-array-array-null-all-of.json'

const REVERSE = {
  alpha: 'alpha',
  omega: 'omega'
}

const FORWARD = {
  alpha: 'alpha',
  omega: 'omega'
}

const EXCLUDE = {}

const ARRAY = {
  ARRAY_ARRAY_OBJECT_STRING,
  ARRAY_ARRAY_OBJECT_STRING_ENUM,
  ARRAY_ARRAY_OBJECT_STRING_ANY_OF,
  ARRAY_ARRAY_OBJECT_STRING_ONE_OF,
  ARRAY_ARRAY_OBJECT_STRING_ALL_OF,
  ARRAY_ARRAY_OBJECT_NUMBER,
  ARRAY_ARRAY_OBJECT_NUMBER_ENUM,
  ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF,
  ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF,
  ARRAY_ARRAY_OBJECT_NUMBER_ALL_OF,
  ARRAY_ARRAY_OBJECT_BOOLEAN,
  ARRAY_ARRAY_OBJECT_BOOLEAN_ENUM,
  ARRAY_ARRAY_OBJECT_BOOLEAN_ANY_OF,
  ARRAY_ARRAY_OBJECT_BOOLEAN_ONE_OF,
  ARRAY_ARRAY_OBJECT_BOOLEAN_ALL_OF,
  ARRAY_ARRAY_OBJECT_NULL,
  ARRAY_ARRAY_OBJECT_NULL_ENUM,
  ARRAY_ARRAY_OBJECT_NULL_ANY_OF,
  ARRAY_ARRAY_OBJECT_NULL_ONE_OF,
  ARRAY_ARRAY_OBJECT_NULL_ALL_OF,
  ARRAY_ARRAY_ARRAY_STRING,
  ARRAY_ARRAY_ARRAY_STRING_ENUM,
  ARRAY_ARRAY_ARRAY_STRING_ANY_OF,
  ARRAY_ARRAY_ARRAY_STRING_ONE_OF,
  ARRAY_ARRAY_ARRAY_STRING_ALL_OF,
  ARRAY_ARRAY_ARRAY_NUMBER,
  ARRAY_ARRAY_ARRAY_NUMBER_ENUM,
  ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF,
  ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF,
  ARRAY_ARRAY_ARRAY_NUMBER_ALL_OF,
  ARRAY_ARRAY_ARRAY_BOOLEAN,
  ARRAY_ARRAY_ARRAY_BOOLEAN_ENUM,
  ARRAY_ARRAY_ARRAY_BOOLEAN_ANY_OF,
  ARRAY_ARRAY_ARRAY_BOOLEAN_ONE_OF,
  ARRAY_ARRAY_ARRAY_BOOLEAN_ALL_OF,
  ARRAY_ARRAY_ARRAY_NULL,
  ARRAY_ARRAY_ARRAY_NULL_ENUM,
  ARRAY_ARRAY_ARRAY_NULL_ANY_OF,
  ARRAY_ARRAY_ARRAY_NULL_ONE_OF,
  ARRAY_ARRAY_ARRAY_NULL_ALL_OF
}

export default {
  title: 'Stories/Engine/Array',
  component: Engine,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
  args: {
    pinion: 'ARRAY_ARRAY_OBJECT_STRING',
    params: 'DEFAULT',
    reverse: 'REVERSE',
    forward: 'FORWARD',
    pattern: '/:alpha/:omega'
  },
  argTypes: {
    pinion: {
      options: Object.keys(ARRAY),
      mapping: ARRAY,
      control: {
        type: 'radio',
        labels: {
          ARRAY_ARRAY_OBJECT_STRING: 'Array (Items is an object) - String',
          ARRAY_ARRAY_OBJECT_STRING_ENUM: 'Array (Items is an object) - String - Enum',
          ARRAY_ARRAY_OBJECT_STRING_ANY_OF: 'Array (Items is an object) - String - Any Of',
          ARRAY_ARRAY_OBJECT_STRING_ONE_OF: 'Array (Items is an object) - String - One Of',
          ARRAY_ARRAY_OBJECT_STRING_ALL_OF: 'Array (Items is an object) - String - All Of',
          ARRAY_ARRAY_OBJECT_NUMBER: 'Array (Items is an object) - Number',
          ARRAY_ARRAY_OBJECT_NUMBER_ENUM: 'Array (Items is an object) - Number - Enum',
          ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF: 'Array (Items is an object) - Number - Any Of',
          ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF: 'Array (Items is an object) - Number - One Of',
          ARRAY_ARRAY_OBJECT_NUMBER_ALL_OF: 'Array (Items is an object) - Number - All Of',
          ARRAY_ARRAY_OBJECT_BOOLEAN: 'Array (Items is an object) - Boolean',
          ARRAY_ARRAY_OBJECT_BOOLEAN_ENUM: 'Array (Items is an object) - Boolean - Enum',
          ARRAY_ARRAY_OBJECT_BOOLEAN_ANY_OF: 'Array (Items is an object) - Boolean - Any Of',
          ARRAY_ARRAY_OBJECT_BOOLEAN_ONE_OF: 'Array (Items is an object) - Boolean - One Of',
          ARRAY_ARRAY_OBJECT_BOOLEAN_ALL_OF: 'Array (Items is an object) - Boolean - All Of',
          ARRAY_ARRAY_OBJECT_NULL: 'Array (Items is an object) - Null',
          ARRAY_ARRAY_OBJECT_NULL_ENUM: 'Array (Items is an object) - Null - Enum',
          ARRAY_ARRAY_OBJECT_NULL_ANY_OF: 'Array (Items is an object) - Null - Any Of',
          ARRAY_ARRAY_OBJECT_NULL_ONE_OF: 'Array (Items is an object) - Null - One Of',
          ARRAY_ARRAY_OBJECT_NULL_ALL_OF: 'Array (Items is an object) - Null - All Of',
          ARRAY_ARRAY_ARRAY_STRING: 'Array (Items is an array) - String',
          ARRAY_ARRAY_ARRAY_STRING_ENUM: 'Array (Items is an array) - String - Enum',
          ARRAY_ARRAY_ARRAY_STRING_ANY_OF: 'Array (Items is an array) - String - Any Of',
          ARRAY_ARRAY_ARRAY_STRING_ONE_OF: 'Array (Items is an array) - String - One Of',
          ARRAY_ARRAY_ARRAY_STRING_ALL_OF: 'Array (Items is an array) - String - All Of',
          ARRAY_ARRAY_ARRAY_NUMBER: 'Array (Items is an array) - Number',
          ARRAY_ARRAY_ARRAY_NUMBER_ENUM: 'Array (Items is an array) - Number - Enum',
          ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF: 'Array (Items is an array) - Number - Any Of',
          ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF: 'Array (Items is an array) - Number - One Of',
          ARRAY_ARRAY_ARRAY_NUMBER_ALL_OF: 'Array (Items is an array) - Number - All Of',
          ARRAY_ARRAY_ARRAY_BOOLEAN: 'Array (Items is an array) - Boolean',
          ARRAY_ARRAY_ARRAY_BOOLEAN_ENUM: 'Array (Items is an array) - Boolean - Enum',
          ARRAY_ARRAY_ARRAY_BOOLEAN_ANY_OF: 'Array (Items is an array) - Boolean - Any Of',
          ARRAY_ARRAY_ARRAY_BOOLEAN_ONE_OF: 'Array (Items is an array) - Boolean - One Of',
          ARRAY_ARRAY_ARRAY_BOOLEAN_ALL_OF: 'Array (Items is an array) - Boolean - All Of',
          ARRAY_ARRAY_ARRAY_NULL: 'Array (Items is an array) - Null',
          ARRAY_ARRAY_ARRAY_NULL_ENUM: 'Array (Items is an array) - Null - Enum',
          ARRAY_ARRAY_ARRAY_NULL_ANY_OF: 'Array (Items is an array) - Null - Any Of',
          ARRAY_ARRAY_ARRAY_NULL_ONE_OF: 'Array (Items is an array) - Null - One Of',
          ARRAY_ARRAY_ARRAY_NULL_ALL_OF: 'Array (Items is an array) - Null - All Of'
        }
      }
    },
    params: {
      options: ['DEFAULT', 'ERROR'],
      mapping: { DEFAULT: {}, ERROR: { errors: [{ type: 'UNKNOWN', params: {}, uri: '#/0' }] } },
      control: {
        type: 'radio',
        labels: {
          DEFAULT: 'Default',
          ERROR: 'Error'
        }
      }
    },
    reverse: {
      options: ['REVERSE', 'EXCLUDE'],
      mapping: { REVERSE, EXCLUDE },
      control: {
        type: 'radio',
        labels: {
          REVERSE: 'Include',
          EXCLUDE: 'Exclude'
        }
      }
    },
    forward: {
      options: ['FORWARD', 'EXCLUDE'],
      mapping: { FORWARD, EXCLUDE },
      control: {
        type: 'radio',
        labels: {
          FORWARD: 'Include',
          EXCLUDE: 'Exclude'
        }
      }
    }
  }
}

export const Default = ({ pinion, params, reverse, forward, pattern }) => (
  <Engine
    pinion={pinion}
    params={params}
    gears={{ reverse, forward, pattern }}
  />
)

Default.propTypes = {
  ...Engine.propTypes
}
