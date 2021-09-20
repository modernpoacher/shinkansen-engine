import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import Engine from 'shinkansen-engine/engine'

import {
  toZashiki,
  fromDocumentToHash
} from 'shinkansen-engine/transformers/transmission'

import OBJECT_STRING from 'stories/definitions/object-string'
import OBJECT_STRING_ENUM from 'stories/definitions/object-string-enum'
import OBJECT_STRING_ANY_OF from 'stories/definitions/object-string-any-of'
import OBJECT_STRING_ONE_OF from 'stories/definitions/object-string-one-of'
import OBJECT_STRING_ALL_OF from 'stories/definitions/object-string-all-of'

import OBJECT_NUMBER from 'stories/definitions/object-number'
import OBJECT_NUMBER_ENUM from 'stories/definitions/object-number-enum'
import OBJECT_NUMBER_ANY_OF from 'stories/definitions/object-number-any-of'
import OBJECT_NUMBER_ONE_OF from 'stories/definitions/object-number-one-of'
import OBJECT_NUMBER_ALL_OF from 'stories/definitions/object-number-all-of'

import OBJECT_ARRAY_OBJECT_STRING from 'stories/definitions/object-array-object-string'
import OBJECT_ARRAY_OBJECT_STRING_ENUM from 'stories/definitions/object-array-object-string-enum'
import OBJECT_ARRAY_OBJECT_STRING_ANY_OF from 'stories/definitions/object-array-object-string-any-of'
import OBJECT_ARRAY_OBJECT_STRING_ONE_OF from 'stories/definitions/object-array-object-string-one-of'
import OBJECT_ARRAY_OBJECT_STRING_ALL_OF from 'stories/definitions/object-array-object-string-all-of'

import OBJECT_ARRAY_OBJECT_NUMBER from 'stories/definitions/object-array-object-number'
import OBJECT_ARRAY_OBJECT_NUMBER_ENUM from 'stories/definitions/object-array-object-number-enum'
import OBJECT_ARRAY_OBJECT_NUMBER_ANY_OF from 'stories/definitions/object-array-object-number-any-of'
import OBJECT_ARRAY_OBJECT_NUMBER_ONE_OF from 'stories/definitions/object-array-object-number-one-of'
import OBJECT_ARRAY_OBJECT_NUMBER_ALL_OF from 'stories/definitions/object-array-object-number-all-of'

import OBJECT_ARRAY_OBJECT_BOOLEAN from 'stories/definitions/object-array-object-boolean'
import OBJECT_ARRAY_OBJECT_BOOLEAN_ENUM from 'stories/definitions/object-array-object-boolean-enum'
import OBJECT_ARRAY_OBJECT_BOOLEAN_ANY_OF from 'stories/definitions/object-array-object-boolean-any-of'
import OBJECT_ARRAY_OBJECT_BOOLEAN_ONE_OF from 'stories/definitions/object-array-object-boolean-one-of'
import OBJECT_ARRAY_OBJECT_BOOLEAN_ALL_OF from 'stories/definitions/object-array-object-boolean-all-of'

import OBJECT_ARRAY_OBJECT_NULL from 'stories/definitions/object-array-object-null'
import OBJECT_ARRAY_OBJECT_NULL_ENUM from 'stories/definitions/object-array-object-null-enum'
import OBJECT_ARRAY_OBJECT_NULL_ANY_OF from 'stories/definitions/object-array-object-null-any-of'
import OBJECT_ARRAY_OBJECT_NULL_ONE_OF from 'stories/definitions/object-array-object-null-one-of'
import OBJECT_ARRAY_OBJECT_NULL_ALL_OF from 'stories/definitions/object-array-object-null-all-of'

import OBJECT_ARRAY_ARRAY_STRING from 'stories/definitions/object-array-array-string'
import OBJECT_ARRAY_ARRAY_STRING_ENUM from 'stories/definitions/object-array-array-string-enum'
import OBJECT_ARRAY_ARRAY_STRING_ANY_OF from 'stories/definitions/object-array-array-string-any-of'
import OBJECT_ARRAY_ARRAY_STRING_ONE_OF from 'stories/definitions/object-array-array-string-one-of'
import OBJECT_ARRAY_ARRAY_STRING_ALL_OF from 'stories/definitions/object-array-array-string-all-of'

import OBJECT_ARRAY_ARRAY_NUMBER from 'stories/definitions/object-array-array-number'
import OBJECT_ARRAY_ARRAY_NUMBER_ENUM from 'stories/definitions/object-array-array-number-enum'
import OBJECT_ARRAY_ARRAY_NUMBER_ANY_OF from 'stories/definitions/object-array-array-number-any-of'
import OBJECT_ARRAY_ARRAY_NUMBER_ONE_OF from 'stories/definitions/object-array-array-number-one-of'
import OBJECT_ARRAY_ARRAY_NUMBER_ALL_OF from 'stories/definitions/object-array-array-number-all-of'

import OBJECT_ARRAY_ARRAY_BOOLEAN from 'stories/definitions/object-array-array-boolean'
import OBJECT_ARRAY_ARRAY_BOOLEAN_ENUM from 'stories/definitions/object-array-array-boolean-enum'
import OBJECT_ARRAY_ARRAY_BOOLEAN_ANY_OF from 'stories/definitions/object-array-array-boolean-any-of'
import OBJECT_ARRAY_ARRAY_BOOLEAN_ONE_OF from 'stories/definitions/object-array-array-boolean-one-of'
import OBJECT_ARRAY_ARRAY_BOOLEAN_ALL_OF from 'stories/definitions/object-array-array-boolean-all-of'

import OBJECT_ARRAY_ARRAY_NULL from 'stories/definitions/object-array-array-null'
import OBJECT_ARRAY_ARRAY_NULL_ENUM from 'stories/definitions/object-array-array-null-enum'
import OBJECT_ARRAY_ARRAY_NULL_ANY_OF from 'stories/definitions/object-array-array-null-any-of'
import OBJECT_ARRAY_ARRAY_NULL_ONE_OF from 'stories/definitions/object-array-array-null-one-of'
import OBJECT_ARRAY_ARRAY_NULL_ALL_OF from 'stories/definitions/object-array-array-null-all-of'

import OBJECT_BOOLEAN from 'stories/definitions/object-boolean'
import OBJECT_BOOLEAN_ENUM from 'stories/definitions/object-boolean-enum'
import OBJECT_BOOLEAN_ANY_OF from 'stories/definitions/object-boolean-any-of'
import OBJECT_BOOLEAN_ONE_OF from 'stories/definitions/object-boolean-one-of'
import OBJECT_BOOLEAN_ALL_OF from 'stories/definitions/object-boolean-all-of'

import OBJECT_NULL from 'stories/definitions/object-null'
import OBJECT_NULL_ENUM from 'stories/definitions/object-null-enum'
import OBJECT_NULL_ANY_OF from 'stories/definitions/object-null-any-of'
import OBJECT_NULL_ONE_OF from 'stories/definitions/object-null-one-of'
import OBJECT_NULL_ALL_OF from 'stories/definitions/object-null-all-of'

const OBJECT = {
  OBJECT_STRING: toZashiki(OBJECT_STRING, fromDocumentToHash({ string: 'string' }, OBJECT_STRING)),
  OBJECT_STRING_ENUM: toZashiki(OBJECT_STRING_ENUM, fromDocumentToHash({ string: 'Three' }, OBJECT_STRING_ENUM)),
  OBJECT_STRING_ANY_OF: toZashiki(OBJECT_STRING_ANY_OF, fromDocumentToHash({ string: 'three' }, OBJECT_STRING_ANY_OF)),
  OBJECT_STRING_ONE_OF: toZashiki(OBJECT_STRING_ONE_OF, fromDocumentToHash({ string: 'three' }, OBJECT_STRING_ONE_OF)),
  OBJECT_STRING_ALL_OF: toZashiki(OBJECT_STRING_ALL_OF, fromDocumentToHash({ string: 'string' }, OBJECT_STRING_ALL_OF)),

  OBJECT_NUMBER: toZashiki(OBJECT_NUMBER, fromDocumentToHash({ number: 3 }, OBJECT_NUMBER)),
  OBJECT_NUMBER_ENUM: toZashiki(OBJECT_NUMBER_ENUM, fromDocumentToHash({ number: 3 }, OBJECT_NUMBER_ENUM)),
  OBJECT_NUMBER_ANY_OF: toZashiki(OBJECT_NUMBER_ANY_OF, fromDocumentToHash({ number: 3 }, OBJECT_NUMBER_ANY_OF)),
  OBJECT_NUMBER_ONE_OF: toZashiki(OBJECT_NUMBER_ONE_OF, fromDocumentToHash({ number: 3 }, OBJECT_NUMBER_ONE_OF)),
  OBJECT_NUMBER_ALL_OF: toZashiki(OBJECT_NUMBER_ALL_OF, fromDocumentToHash({ number: 3 }, OBJECT_NUMBER_ALL_OF)),

  OBJECT_ARRAY_OBJECT_STRING: toZashiki(OBJECT_ARRAY_OBJECT_STRING, fromDocumentToHash({ array: ['string'] }, OBJECT_ARRAY_OBJECT_STRING)),
  OBJECT_ARRAY_OBJECT_STRING_ENUM: toZashiki(OBJECT_ARRAY_OBJECT_STRING_ENUM, fromDocumentToHash({ array: ['Three'] }, OBJECT_ARRAY_OBJECT_STRING_ENUM)),
  OBJECT_ARRAY_OBJECT_STRING_ANY_OF: toZashiki(OBJECT_ARRAY_OBJECT_STRING_ANY_OF, fromDocumentToHash({ array: ['three'] }, OBJECT_ARRAY_OBJECT_STRING_ANY_OF)),
  OBJECT_ARRAY_OBJECT_STRING_ONE_OF: toZashiki(OBJECT_ARRAY_OBJECT_STRING_ONE_OF, fromDocumentToHash({ array: ['three'] }, OBJECT_ARRAY_OBJECT_STRING_ONE_OF)),
  OBJECT_ARRAY_OBJECT_STRING_ALL_OF: toZashiki(OBJECT_ARRAY_OBJECT_STRING_ALL_OF, fromDocumentToHash({ array: ['string'] }, OBJECT_ARRAY_OBJECT_STRING_ALL_OF)),

  OBJECT_ARRAY_OBJECT_NUMBER: toZashiki(OBJECT_ARRAY_OBJECT_NUMBER, fromDocumentToHash({ array: [3] }, OBJECT_ARRAY_OBJECT_NUMBER)),
  OBJECT_ARRAY_OBJECT_NUMBER_ENUM: toZashiki(OBJECT_ARRAY_OBJECT_NUMBER_ENUM, fromDocumentToHash({ array: [3] }, OBJECT_ARRAY_OBJECT_NUMBER_ENUM)),
  OBJECT_ARRAY_OBJECT_NUMBER_ANY_OF: toZashiki(OBJECT_ARRAY_OBJECT_NUMBER_ANY_OF, fromDocumentToHash({ array: [3] }, OBJECT_ARRAY_OBJECT_NUMBER_ANY_OF)),
  OBJECT_ARRAY_OBJECT_NUMBER_ONE_OF: toZashiki(OBJECT_ARRAY_OBJECT_NUMBER_ONE_OF, fromDocumentToHash({ array: [3] }, OBJECT_ARRAY_OBJECT_NUMBER_ONE_OF)),
  OBJECT_ARRAY_OBJECT_NUMBER_ALL_OF: toZashiki(OBJECT_ARRAY_OBJECT_NUMBER_ALL_OF, fromDocumentToHash({ array: [3] }, OBJECT_ARRAY_OBJECT_NUMBER_ALL_OF)),

  OBJECT_ARRAY_OBJECT_BOOLEAN: toZashiki(OBJECT_ARRAY_OBJECT_BOOLEAN, fromDocumentToHash({ array: [false] }, OBJECT_ARRAY_OBJECT_BOOLEAN)),
  OBJECT_ARRAY_OBJECT_BOOLEAN_ENUM: toZashiki(OBJECT_ARRAY_OBJECT_BOOLEAN_ENUM, fromDocumentToHash({ array: [false] }, OBJECT_ARRAY_OBJECT_BOOLEAN_ENUM)),
  OBJECT_ARRAY_OBJECT_BOOLEAN_ANY_OF: toZashiki(OBJECT_ARRAY_OBJECT_BOOLEAN_ANY_OF, fromDocumentToHash({ array: [false] }, OBJECT_ARRAY_OBJECT_BOOLEAN_ANY_OF)),
  OBJECT_ARRAY_OBJECT_BOOLEAN_ONE_OF: toZashiki(OBJECT_ARRAY_OBJECT_BOOLEAN_ONE_OF, fromDocumentToHash({ array: [false] }, OBJECT_ARRAY_OBJECT_BOOLEAN_ONE_OF)),
  OBJECT_ARRAY_OBJECT_BOOLEAN_ALL_OF: toZashiki(OBJECT_ARRAY_OBJECT_BOOLEAN_ALL_OF, fromDocumentToHash({ array: [false] }, OBJECT_ARRAY_OBJECT_BOOLEAN_ALL_OF)),

  OBJECT_ARRAY_OBJECT_NULL: toZashiki(OBJECT_ARRAY_OBJECT_NULL, fromDocumentToHash({ array: [null] }, OBJECT_ARRAY_OBJECT_NULL)),
  OBJECT_ARRAY_OBJECT_NULL_ENUM: toZashiki(OBJECT_ARRAY_OBJECT_NULL_ENUM, fromDocumentToHash({ array: [null] }, OBJECT_ARRAY_OBJECT_NULL_ENUM)),
  OBJECT_ARRAY_OBJECT_NULL_ANY_OF: toZashiki(OBJECT_ARRAY_OBJECT_NULL_ANY_OF, fromDocumentToHash({ array: [null] }, OBJECT_ARRAY_OBJECT_NULL_ANY_OF)),
  OBJECT_ARRAY_OBJECT_NULL_ONE_OF: toZashiki(OBJECT_ARRAY_OBJECT_NULL_ONE_OF, fromDocumentToHash({ array: [null] }, OBJECT_ARRAY_OBJECT_NULL_ONE_OF)),
  OBJECT_ARRAY_OBJECT_NULL_ALL_OF: toZashiki(OBJECT_ARRAY_OBJECT_NULL_ALL_OF, fromDocumentToHash({ array: [null] }, OBJECT_ARRAY_OBJECT_NULL_ALL_OF)),

  OBJECT_ARRAY_ARRAY_STRING: toZashiki(OBJECT_ARRAY_ARRAY_STRING, fromDocumentToHash({ array: ['string'] }, OBJECT_ARRAY_ARRAY_STRING)),
  OBJECT_ARRAY_ARRAY_STRING_ENUM: toZashiki(OBJECT_ARRAY_ARRAY_STRING_ENUM, fromDocumentToHash({ array: ['Three'] }, OBJECT_ARRAY_ARRAY_STRING_ENUM)),
  OBJECT_ARRAY_ARRAY_STRING_ANY_OF: toZashiki(OBJECT_ARRAY_ARRAY_STRING_ANY_OF, fromDocumentToHash({ array: ['three'] }, OBJECT_ARRAY_ARRAY_STRING_ANY_OF)),
  OBJECT_ARRAY_ARRAY_STRING_ONE_OF: toZashiki(OBJECT_ARRAY_ARRAY_STRING_ONE_OF, fromDocumentToHash({ array: ['three'] }, OBJECT_ARRAY_ARRAY_STRING_ONE_OF)),
  OBJECT_ARRAY_ARRAY_STRING_ALL_OF: toZashiki(OBJECT_ARRAY_ARRAY_STRING_ALL_OF, fromDocumentToHash({ array: ['string'] }, OBJECT_ARRAY_ARRAY_STRING_ALL_OF)),

  OBJECT_ARRAY_ARRAY_NUMBER: toZashiki(OBJECT_ARRAY_ARRAY_NUMBER, fromDocumentToHash({ array: [3] }, OBJECT_ARRAY_ARRAY_NUMBER)),
  OBJECT_ARRAY_ARRAY_NUMBER_ENUM: toZashiki(OBJECT_ARRAY_ARRAY_NUMBER_ENUM, fromDocumentToHash({ array: [3] }, OBJECT_ARRAY_ARRAY_NUMBER_ENUM)),
  OBJECT_ARRAY_ARRAY_NUMBER_ANY_OF: toZashiki(OBJECT_ARRAY_ARRAY_NUMBER_ANY_OF, fromDocumentToHash({ array: [3] }, OBJECT_ARRAY_ARRAY_NUMBER_ANY_OF)),
  OBJECT_ARRAY_ARRAY_NUMBER_ONE_OF: toZashiki(OBJECT_ARRAY_ARRAY_NUMBER_ONE_OF, fromDocumentToHash({ array: [3] }, OBJECT_ARRAY_ARRAY_NUMBER_ONE_OF)),
  OBJECT_ARRAY_ARRAY_NUMBER_ALL_OF: toZashiki(OBJECT_ARRAY_ARRAY_NUMBER_ALL_OF, fromDocumentToHash({ array: [3] }, OBJECT_ARRAY_ARRAY_NUMBER_ALL_OF)),

  OBJECT_ARRAY_ARRAY_BOOLEAN: toZashiki(OBJECT_ARRAY_ARRAY_BOOLEAN, fromDocumentToHash({ array: [false] }, OBJECT_ARRAY_ARRAY_BOOLEAN)),
  OBJECT_ARRAY_ARRAY_BOOLEAN_ENUM: toZashiki(OBJECT_ARRAY_ARRAY_BOOLEAN_ENUM, fromDocumentToHash({ array: [false] }, OBJECT_ARRAY_ARRAY_BOOLEAN_ENUM)),
  OBJECT_ARRAY_ARRAY_BOOLEAN_ANY_OF: toZashiki(OBJECT_ARRAY_ARRAY_BOOLEAN_ANY_OF, fromDocumentToHash({ array: [false] }, OBJECT_ARRAY_ARRAY_BOOLEAN_ANY_OF)),
  OBJECT_ARRAY_ARRAY_BOOLEAN_ONE_OF: toZashiki(OBJECT_ARRAY_ARRAY_BOOLEAN_ONE_OF, fromDocumentToHash({ array: [false] }, OBJECT_ARRAY_ARRAY_BOOLEAN_ONE_OF)),
  OBJECT_ARRAY_ARRAY_BOOLEAN_ALL_OF: toZashiki(OBJECT_ARRAY_ARRAY_BOOLEAN_ALL_OF, fromDocumentToHash({ array: [false] }, OBJECT_ARRAY_ARRAY_BOOLEAN_ALL_OF)),

  OBJECT_ARRAY_ARRAY_NULL: toZashiki(OBJECT_ARRAY_ARRAY_NULL, fromDocumentToHash({ array: [null] }, OBJECT_ARRAY_ARRAY_NULL)),
  OBJECT_ARRAY_ARRAY_NULL_ENUM: toZashiki(OBJECT_ARRAY_ARRAY_NULL_ENUM, fromDocumentToHash({ array: [null] }, OBJECT_ARRAY_ARRAY_NULL_ENUM)),
  OBJECT_ARRAY_ARRAY_NULL_ANY_OF: toZashiki(OBJECT_ARRAY_ARRAY_NULL_ANY_OF, fromDocumentToHash({ array: [null] }, OBJECT_ARRAY_ARRAY_NULL_ANY_OF)),
  OBJECT_ARRAY_ARRAY_NULL_ONE_OF: toZashiki(OBJECT_ARRAY_ARRAY_NULL_ONE_OF, fromDocumentToHash({ array: [null] }, OBJECT_ARRAY_ARRAY_NULL_ONE_OF)),
  OBJECT_ARRAY_ARRAY_NULL_ALL_OF: toZashiki(OBJECT_ARRAY_ARRAY_NULL_ALL_OF, fromDocumentToHash({ array: [null] }, OBJECT_ARRAY_ARRAY_NULL_ALL_OF)),

  OBJECT_BOOLEAN: toZashiki(OBJECT_BOOLEAN, fromDocumentToHash({ boolean: false }, OBJECT_BOOLEAN)),
  OBJECT_BOOLEAN_ENUM: toZashiki(OBJECT_BOOLEAN_ENUM, fromDocumentToHash({ boolean: false }, OBJECT_BOOLEAN_ENUM)),
  OBJECT_BOOLEAN_ANY_OF: toZashiki(OBJECT_BOOLEAN_ANY_OF, fromDocumentToHash({ boolean: false }, OBJECT_BOOLEAN_ANY_OF)),
  OBJECT_BOOLEAN_ONE_OF: toZashiki(OBJECT_BOOLEAN_ONE_OF, fromDocumentToHash({ boolean: false }, OBJECT_BOOLEAN_ONE_OF)),
  OBJECT_BOOLEAN_ALL_OF: toZashiki(OBJECT_BOOLEAN_ALL_OF, fromDocumentToHash({ boolean: false }, OBJECT_BOOLEAN_ALL_OF)),

  OBJECT_NULL: toZashiki(OBJECT_NULL, fromDocumentToHash({ null: null }, OBJECT_NULL)),
  OBJECT_NULL_ENUM: toZashiki(OBJECT_NULL_ENUM, fromDocumentToHash({ null: null }, OBJECT_NULL_ENUM)),
  OBJECT_NULL_ANY_OF: toZashiki(OBJECT_NULL_ANY_OF, fromDocumentToHash({ null: null }, OBJECT_NULL_ANY_OF)),
  OBJECT_NULL_ONE_OF: toZashiki(OBJECT_NULL_ONE_OF, fromDocumentToHash({ null: null }, OBJECT_NULL_ONE_OF)),
  OBJECT_NULL_ALL_OF: toZashiki(OBJECT_NULL_ALL_OF, fromDocumentToHash({ null: null }, OBJECT_NULL_ALL_OF))
}

const GEARS = {
  forward: {
    alpha: 'alpha',
    omega: 'omega'
  },
  reverse: {
    alpha: 'alpha',
    omega: 'omega'
  }
}

export default {
  title: 'Components/Engine/Object',
  component: Engine,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
  args: {
    pinion: 'OBJECT_STRING',
    params: 'DEFAULT'
  },
  argTypes: {
    pinion: {
      options: Object.keys(OBJECT),
      mapping: OBJECT,
      control: {
        type: 'radio',
        labels: {
          OBJECT_STRING: 'Object - String',
          OBJECT_STRING_ENUM: 'Object - String - Enum',
          OBJECT_STRING_ANY_OF: 'Object - String - Any Of',
          OBJECT_STRING_ONE_OF: 'Object - String - One Of',
          OBJECT_STRING_ALL_OF: 'Object - String - All Of',
          OBJECT_NUMBER: 'Object - Number',
          OBJECT_NUMBER_ENUM: 'Object - Number - Enum',
          OBJECT_NUMBER_ANY_OF: 'Object - Number - Any Of',
          OBJECT_NUMBER_ONE_OF: 'Object - Number - One Of',
          OBJECT_NUMBER_ALL_OF: 'Object - Number - All Of',
          OBJECT_ARRAY_OBJECT_STRING: 'Object - Array (Items is an object) - String',
          OBJECT_ARRAY_OBJECT_STRING_ENUM: 'Object - Array (Items is an object) - String - Enum',
          OBJECT_ARRAY_OBJECT_STRING_ANY_OF: 'Object - Array (Items is an object) - String - Any Of',
          OBJECT_ARRAY_OBJECT_STRING_ONE_OF: 'Object - Array (Items is an object) - String - One Of',
          OBJECT_ARRAY_OBJECT_STRING_ALL_OF: 'Object - Array (Items is an object) - String - All Of',
          OBJECT_ARRAY_OBJECT_NUMBER: 'Object - Array (Items is an object) - Number',
          OBJECT_ARRAY_OBJECT_NUMBER_ENUM: 'Object - Array (Items is an object) - Number - Enum',
          OBJECT_ARRAY_OBJECT_NUMBER_ANY_OF: 'Object - Array (Items is an object) - Number - Any Of',
          OBJECT_ARRAY_OBJECT_NUMBER_ONE_OF: 'Object - Array (Items is an object) - Number - One Of',
          OBJECT_ARRAY_OBJECT_NUMBER_ALL_OF: 'Object - Array (Items is an object) - Number - All Of',
          OBJECT_ARRAY_OBJECT_BOOLEAN: 'Object - Array (Items is an object) - Boolean',
          OBJECT_ARRAY_OBJECT_BOOLEAN_ENUM: 'Object - Array (Items is an object) - Boolean - Enum',
          OBJECT_ARRAY_OBJECT_BOOLEAN_ANY_OF: 'Object - Array (Items is an object) - Boolean - Any Of',
          OBJECT_ARRAY_OBJECT_BOOLEAN_ONE_OF: 'Object - Array (Items is an object) - Boolean - One Of',
          OBJECT_ARRAY_OBJECT_BOOLEAN_ALL_OF: 'Object - Array (Items is an object) - Boolean - All Of',
          OBJECT_ARRAY_OBJECT_NULL: 'Object - Array (Items is an object) - Null',
          OBJECT_ARRAY_OBJECT_NULL_ENUM: 'Object - Array (Items is an object) - Null - Enum',
          OBJECT_ARRAY_OBJECT_NULL_ANY_OF: 'Object - Array (Items is an object) - Null - Any Of',
          OBJECT_ARRAY_OBJECT_NULL_ONE_OF: 'Object - Array (Items is an object) - Null - One Of',
          OBJECT_ARRAY_OBJECT_NULL_ALL_OF: 'Object - Array (Items is an object) - Null - All Of',
          OBJECT_ARRAY_ARRAY_STRING: 'Object - Array (Items is an array) - String',
          OBJECT_ARRAY_ARRAY_STRING_ENUM: 'Object - Array (Items is an array) - String - Enum',
          OBJECT_ARRAY_ARRAY_STRING_ANY_OF: 'Object - Array (Items is an array) - String - Any Of',
          OBJECT_ARRAY_ARRAY_STRING_ONE_OF: 'Object - Array (Items is an array) - String - One Of',
          OBJECT_ARRAY_ARRAY_STRING_ALL_OF: 'Object - Array (Items is an array) - String - All Of',
          OBJECT_ARRAY_ARRAY_NUMBER: 'Object - Array (Items is an array) - Number',
          OBJECT_ARRAY_ARRAY_NUMBER_ENUM: 'Object - Array (Items is an array) - Number - Enum',
          OBJECT_ARRAY_ARRAY_NUMBER_ANY_OF: 'Object - Array (Items is an array) - Number - Any Of',
          OBJECT_ARRAY_ARRAY_NUMBER_ONE_OF: 'Object - Array (Items is an array) - Number - One Of',
          OBJECT_ARRAY_ARRAY_NUMBER_ALL_OF: 'Object - Array (Items is an array) - Number - All Of',
          OBJECT_ARRAY_ARRAY_BOOLEAN: 'Object - Array (Items is an array) - Boolean',
          OBJECT_ARRAY_ARRAY_BOOLEAN_ENUM: 'Object - Array (Items is an array) - Boolean - Enum',
          OBJECT_ARRAY_ARRAY_BOOLEAN_ANY_OF: 'Object - Array (Items is an array) - Boolean - Any Of',
          OBJECT_ARRAY_ARRAY_BOOLEAN_ONE_OF: 'Object - Array (Items is an array) - Boolean - One Of',
          OBJECT_ARRAY_ARRAY_BOOLEAN_ALL_OF: 'Object - Array (Items is an array) - Boolean - All Of',
          OBJECT_ARRAY_ARRAY_NULL: 'Object - Array (Items is an array) - Null',
          OBJECT_ARRAY_ARRAY_NULL_ENUM: 'Object - Array (Items is an array) - Null - Enum',
          OBJECT_ARRAY_ARRAY_NULL_ANY_OF: 'Object - Array (Items is an array) - Null - Any Of',
          OBJECT_ARRAY_ARRAY_NULL_ONE_OF: 'Object - Array (Items is an array) - Null - One Of',
          OBJECT_ARRAY_ARRAY_NULL_ALL_OF: 'Object - Array (Items is an array) - Null - All Of',
          OBJECT_BOOLEAN: 'Object - Boolean',
          OBJECT_BOOLEAN_ENUM: 'Object - Boolean - Enum',
          OBJECT_BOOLEAN_ANY_OF: 'Object - Boolean - Any Of',
          OBJECT_BOOLEAN_ONE_OF: 'Object - Boolean - One Of',
          OBJECT_BOOLEAN_ALL_OF: 'Object - Boolean - All Of',
          OBJECT_NULL: 'Object - Null',
          OBJECT_NULL_ENUM: 'Object - Null - Enum',
          OBJECT_NULL_ANY_OF: 'Object - Null - Any Of',
          OBJECT_NULL_ONE_OF: 'Object - Null - One Of',
          OBJECT_NULL_ALL_OF: 'Object - Null - All Of'
        }
      }
    },
    params: {
      options: ['DEFAULT', 'ERROR'],
      mapping: { DEFAULT: {}, ERROR: { errors: [{ type: 'UNKNOWN', params: {}, uri: '#/' }] } },
      control: {
        type: 'radio',
        labels: {
          DEFAULT: 'Default',
          ERROR: 'Error'
        }
      }
    },
    gears: { control: null }
  }
}

const hasError = (params) => Reflect.has(params, 'errors')
const getError = ({ meta: { schema: { properties = {} } = {} } = {} }) => {
  let error = { errors: [{ type: 'UNKNOWN', params: {}, uri: '#/' }] }

  if (Reflect.has(properties, 'string')) error = { errors: [{ type: 'UNKNOWN', params: {}, uri: '#/string' }] }

  if (Reflect.has(properties, 'number')) error = { errors: [{ type: 'UNKNOWN', params: {}, uri: '#/number' }] }

  if (Reflect.has(properties, 'array')) error = { errors: [{ type: 'UNKNOWN', params: {}, uri: '#/array/0' }] }

  if (Reflect.has(properties, 'boolean')) error = { errors: [{ type: 'UNKNOWN', params: {}, uri: '#/boolean' }] }

  if (Reflect.has(properties, 'null')) error = { errors: [{ type: 'UNKNOWN', params: {}, uri: '#/null' }] }

  return error
}

export const Default = ({ pinion, params: P }) => {
  const params = hasError(P) ? getError(pinion) : P

  return (
    <Engine
      pinion={pinion}
      params={params}
      gears={GEARS}
    />
  )
}

Default.propTypes = {
  ...Engine.propTypes
}
