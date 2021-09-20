import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import Pinion from 'shinkansen-engine/components/pinion'

import {
  toZashiki,
  fromDocumentToHash
} from 'shinkansen-engine/transformers/transmission'

import ARRAY_ARRAY_OBJECT_STRING from 'stories/definitions/array-array-object-string'
import ARRAY_ARRAY_OBJECT_STRING_ENUM from 'stories/definitions/array-array-object-string-enum'
import ARRAY_ARRAY_OBJECT_STRING_ANY_OF from 'stories/definitions/array-array-object-string-any-of'
import ARRAY_ARRAY_OBJECT_STRING_ONE_OF from 'stories/definitions/array-array-object-string-one-of'
import ARRAY_ARRAY_OBJECT_STRING_ALL_OF from 'stories/definitions/array-array-object-string-all-of'

import ARRAY_ARRAY_OBJECT_NUMBER from 'stories/definitions/array-array-object-number'
import ARRAY_ARRAY_OBJECT_NUMBER_ENUM from 'stories/definitions/array-array-object-number-enum'
import ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF from 'stories/definitions/array-array-object-number-any-of'
import ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF from 'stories/definitions/array-array-object-number-one-of'
import ARRAY_ARRAY_OBJECT_NUMBER_ALL_OF from 'stories/definitions/array-array-object-number-all-of'

import ARRAY_ARRAY_OBJECT_BOOLEAN from 'stories/definitions/array-array-object-boolean'
import ARRAY_ARRAY_OBJECT_BOOLEAN_ENUM from 'stories/definitions/array-array-object-boolean-enum'
import ARRAY_ARRAY_OBJECT_BOOLEAN_ANY_OF from 'stories/definitions/array-array-object-boolean-any-of'
import ARRAY_ARRAY_OBJECT_BOOLEAN_ONE_OF from 'stories/definitions/array-array-object-boolean-one-of'
import ARRAY_ARRAY_OBJECT_BOOLEAN_ALL_OF from 'stories/definitions/array-array-object-boolean-all-of'

import ARRAY_ARRAY_OBJECT_NULL from 'stories/definitions/array-array-object-null'
import ARRAY_ARRAY_OBJECT_NULL_ENUM from 'stories/definitions/array-array-object-null-enum'
import ARRAY_ARRAY_OBJECT_NULL_ANY_OF from 'stories/definitions/array-array-object-null-any-of'
import ARRAY_ARRAY_OBJECT_NULL_ONE_OF from 'stories/definitions/array-array-object-null-one-of'
import ARRAY_ARRAY_OBJECT_NULL_ALL_OF from 'stories/definitions/array-array-object-null-all-of'

import ARRAY_ARRAY_ARRAY_STRING from 'stories/definitions/array-array-array-string'
import ARRAY_ARRAY_ARRAY_STRING_ENUM from 'stories/definitions/array-array-array-string-enum'
import ARRAY_ARRAY_ARRAY_STRING_ANY_OF from 'stories/definitions/array-array-array-string-any-of'
import ARRAY_ARRAY_ARRAY_STRING_ONE_OF from 'stories/definitions/array-array-array-string-one-of'
import ARRAY_ARRAY_ARRAY_STRING_ALL_OF from 'stories/definitions/array-array-array-string-all-of'

import ARRAY_ARRAY_ARRAY_NUMBER from 'stories/definitions/array-array-array-number'
import ARRAY_ARRAY_ARRAY_NUMBER_ENUM from 'stories/definitions/array-array-array-number-enum'
import ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF from 'stories/definitions/array-array-array-number-any-of'
import ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF from 'stories/definitions/array-array-array-number-one-of'
import ARRAY_ARRAY_ARRAY_NUMBER_ALL_OF from 'stories/definitions/array-array-array-number-all-of'

import ARRAY_ARRAY_ARRAY_BOOLEAN from 'stories/definitions/array-array-array-boolean'
import ARRAY_ARRAY_ARRAY_BOOLEAN_ENUM from 'stories/definitions/array-array-array-boolean-enum'
import ARRAY_ARRAY_ARRAY_BOOLEAN_ANY_OF from 'stories/definitions/array-array-array-boolean-any-of'
import ARRAY_ARRAY_ARRAY_BOOLEAN_ONE_OF from 'stories/definitions/array-array-array-boolean-one-of'
import ARRAY_ARRAY_ARRAY_BOOLEAN_ALL_OF from 'stories/definitions/array-array-array-boolean-all-of'

import ARRAY_ARRAY_ARRAY_NULL from 'stories/definitions/array-array-array-null'
import ARRAY_ARRAY_ARRAY_NULL_ENUM from 'stories/definitions/array-array-array-null-enum'
import ARRAY_ARRAY_ARRAY_NULL_ANY_OF from 'stories/definitions/array-array-array-null-any-of'
import ARRAY_ARRAY_ARRAY_NULL_ONE_OF from 'stories/definitions/array-array-array-null-one-of'
import ARRAY_ARRAY_ARRAY_NULL_ALL_OF from 'stories/definitions/array-array-array-null-all-of'

const ARRAY = {
  ARRAY_ARRAY_OBJECT_STRING: toZashiki(ARRAY_ARRAY_OBJECT_STRING, fromDocumentToHash(['string'], ARRAY_ARRAY_OBJECT_STRING)),
  ARRAY_ARRAY_OBJECT_STRING_ENUM: toZashiki(ARRAY_ARRAY_OBJECT_STRING_ENUM, fromDocumentToHash(['Three'], ARRAY_ARRAY_OBJECT_STRING_ENUM)),
  ARRAY_ARRAY_OBJECT_STRING_ANY_OF: toZashiki(ARRAY_ARRAY_OBJECT_STRING_ANY_OF, fromDocumentToHash(['three'], ARRAY_ARRAY_OBJECT_STRING_ANY_OF)),
  ARRAY_ARRAY_OBJECT_STRING_ONE_OF: toZashiki(ARRAY_ARRAY_OBJECT_STRING_ONE_OF, fromDocumentToHash(['three'], ARRAY_ARRAY_OBJECT_STRING_ONE_OF)),
  ARRAY_ARRAY_OBJECT_STRING_ALL_OF: toZashiki(ARRAY_ARRAY_OBJECT_STRING_ALL_OF, fromDocumentToHash(['string'], ARRAY_ARRAY_OBJECT_STRING_ALL_OF)),

  ARRAY_ARRAY_OBJECT_NUMBER: toZashiki(ARRAY_ARRAY_OBJECT_NUMBER, fromDocumentToHash([3], ARRAY_ARRAY_OBJECT_NUMBER)),
  ARRAY_ARRAY_OBJECT_NUMBER_ENUM: toZashiki(ARRAY_ARRAY_OBJECT_NUMBER_ENUM, fromDocumentToHash([3], ARRAY_ARRAY_OBJECT_NUMBER_ENUM)),
  ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF: toZashiki(ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF, fromDocumentToHash([3], ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF)),
  ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF: toZashiki(ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF, fromDocumentToHash([3], ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF)),
  ARRAY_ARRAY_OBJECT_NUMBER_ALL_OF: toZashiki(ARRAY_ARRAY_OBJECT_NUMBER_ALL_OF, fromDocumentToHash([3], ARRAY_ARRAY_OBJECT_NUMBER_ALL_OF)),

  ARRAY_ARRAY_OBJECT_BOOLEAN: toZashiki(ARRAY_ARRAY_OBJECT_BOOLEAN, fromDocumentToHash([false], ARRAY_ARRAY_OBJECT_BOOLEAN)),
  ARRAY_ARRAY_OBJECT_BOOLEAN_ENUM: toZashiki(ARRAY_ARRAY_OBJECT_BOOLEAN_ENUM, fromDocumentToHash([false], ARRAY_ARRAY_OBJECT_BOOLEAN_ENUM)),
  ARRAY_ARRAY_OBJECT_BOOLEAN_ANY_OF: toZashiki(ARRAY_ARRAY_OBJECT_BOOLEAN_ANY_OF, fromDocumentToHash([false], ARRAY_ARRAY_OBJECT_BOOLEAN_ANY_OF)),
  ARRAY_ARRAY_OBJECT_BOOLEAN_ONE_OF: toZashiki(ARRAY_ARRAY_OBJECT_BOOLEAN_ONE_OF, fromDocumentToHash([false], ARRAY_ARRAY_OBJECT_BOOLEAN_ONE_OF)),
  ARRAY_ARRAY_OBJECT_BOOLEAN_ALL_OF: toZashiki(ARRAY_ARRAY_OBJECT_BOOLEAN_ALL_OF, fromDocumentToHash([false], ARRAY_ARRAY_OBJECT_BOOLEAN_ALL_OF)),

  ARRAY_ARRAY_OBJECT_NULL: toZashiki(ARRAY_ARRAY_OBJECT_NULL, fromDocumentToHash([null], ARRAY_ARRAY_OBJECT_NULL)),
  ARRAY_ARRAY_OBJECT_NULL_ENUM: toZashiki(ARRAY_ARRAY_OBJECT_NULL_ENUM, fromDocumentToHash([null], ARRAY_ARRAY_OBJECT_NULL_ENUM)),
  ARRAY_ARRAY_OBJECT_NULL_ANY_OF: toZashiki(ARRAY_ARRAY_OBJECT_NULL_ANY_OF, fromDocumentToHash([null], ARRAY_ARRAY_OBJECT_NULL_ANY_OF)),
  ARRAY_ARRAY_OBJECT_NULL_ONE_OF: toZashiki(ARRAY_ARRAY_OBJECT_NULL_ONE_OF, fromDocumentToHash([null], ARRAY_ARRAY_OBJECT_NULL_ONE_OF)),
  ARRAY_ARRAY_OBJECT_NULL_ALL_OF: toZashiki(ARRAY_ARRAY_OBJECT_NULL_ALL_OF, fromDocumentToHash([null], ARRAY_ARRAY_OBJECT_NULL_ALL_OF)),

  ARRAY_ARRAY_ARRAY_STRING: toZashiki(ARRAY_ARRAY_ARRAY_STRING, fromDocumentToHash(['string'], ARRAY_ARRAY_ARRAY_STRING)),
  ARRAY_ARRAY_ARRAY_STRING_ENUM: toZashiki(ARRAY_ARRAY_ARRAY_STRING_ENUM, fromDocumentToHash(['Three'], ARRAY_ARRAY_ARRAY_STRING_ENUM)),
  ARRAY_ARRAY_ARRAY_STRING_ANY_OF: toZashiki(ARRAY_ARRAY_ARRAY_STRING_ANY_OF, fromDocumentToHash(['three'], ARRAY_ARRAY_ARRAY_STRING_ANY_OF)),
  ARRAY_ARRAY_ARRAY_STRING_ONE_OF: toZashiki(ARRAY_ARRAY_ARRAY_STRING_ONE_OF, fromDocumentToHash(['three'], ARRAY_ARRAY_ARRAY_STRING_ONE_OF)),
  ARRAY_ARRAY_ARRAY_STRING_ALL_OF: toZashiki(ARRAY_ARRAY_ARRAY_STRING_ALL_OF, fromDocumentToHash(['string'], ARRAY_ARRAY_ARRAY_STRING_ALL_OF)),

  ARRAY_ARRAY_ARRAY_NUMBER: toZashiki(ARRAY_ARRAY_ARRAY_NUMBER, fromDocumentToHash([3], ARRAY_ARRAY_ARRAY_NUMBER)),
  ARRAY_ARRAY_ARRAY_NUMBER_ENUM: toZashiki(ARRAY_ARRAY_ARRAY_NUMBER_ENUM, fromDocumentToHash([3], ARRAY_ARRAY_ARRAY_NUMBER_ENUM)),
  ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF: toZashiki(ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF, fromDocumentToHash([3], ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF)),
  ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF: toZashiki(ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF, fromDocumentToHash([3], ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF)),
  ARRAY_ARRAY_ARRAY_NUMBER_ALL_OF: toZashiki(ARRAY_ARRAY_ARRAY_NUMBER_ALL_OF, fromDocumentToHash([3], ARRAY_ARRAY_ARRAY_NUMBER_ALL_OF)),

  ARRAY_ARRAY_ARRAY_BOOLEAN: toZashiki(ARRAY_ARRAY_ARRAY_BOOLEAN, fromDocumentToHash([false], ARRAY_ARRAY_ARRAY_BOOLEAN)),
  ARRAY_ARRAY_ARRAY_BOOLEAN_ENUM: toZashiki(ARRAY_ARRAY_ARRAY_BOOLEAN_ENUM, fromDocumentToHash([false], ARRAY_ARRAY_ARRAY_BOOLEAN_ENUM)),
  ARRAY_ARRAY_ARRAY_BOOLEAN_ANY_OF: toZashiki(ARRAY_ARRAY_ARRAY_BOOLEAN_ANY_OF, fromDocumentToHash([false], ARRAY_ARRAY_ARRAY_BOOLEAN_ANY_OF)),
  ARRAY_ARRAY_ARRAY_BOOLEAN_ONE_OF: toZashiki(ARRAY_ARRAY_ARRAY_BOOLEAN_ONE_OF, fromDocumentToHash([false], ARRAY_ARRAY_ARRAY_BOOLEAN_ONE_OF)),
  ARRAY_ARRAY_ARRAY_BOOLEAN_ALL_OF: toZashiki(ARRAY_ARRAY_ARRAY_BOOLEAN_ALL_OF, fromDocumentToHash([false], ARRAY_ARRAY_ARRAY_BOOLEAN_ALL_OF)),

  ARRAY_ARRAY_ARRAY_NULL: toZashiki(ARRAY_ARRAY_ARRAY_NULL, fromDocumentToHash([null], ARRAY_ARRAY_ARRAY_NULL)),
  ARRAY_ARRAY_ARRAY_NULL_ENUM: toZashiki(ARRAY_ARRAY_ARRAY_NULL_ENUM, fromDocumentToHash([null], ARRAY_ARRAY_ARRAY_NULL_ENUM)),
  ARRAY_ARRAY_ARRAY_NULL_ANY_OF: toZashiki(ARRAY_ARRAY_ARRAY_NULL_ANY_OF, fromDocumentToHash([null], ARRAY_ARRAY_ARRAY_NULL_ANY_OF)),
  ARRAY_ARRAY_ARRAY_NULL_ONE_OF: toZashiki(ARRAY_ARRAY_ARRAY_NULL_ONE_OF, fromDocumentToHash([null], ARRAY_ARRAY_ARRAY_NULL_ONE_OF)),
  ARRAY_ARRAY_ARRAY_NULL_ALL_OF: toZashiki(ARRAY_ARRAY_ARRAY_NULL_ALL_OF, fromDocumentToHash([null], ARRAY_ARRAY_ARRAY_NULL_ALL_OF))
}

export default {
  title: 'Components/Pinion/Array',
  component: Pinion,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
  args: {
    pinion: 'ARRAY_ARRAY_OBJECT_STRING',
    params: 'DEFAULT'
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
    }
  }
}

export const Default = (args) => (
  <Pinion
    {...args}
  />
)
