import React from 'react'

import { storiesOf } from '@storybook/react'

import Pinion from 'shinkansen-engine/components/pinion'

import {
  toZashiki,
  fromDocumentToHash
} from 'shinkansen-engine/transformers/transmission'

import STRING_STRING from 'stories/definitions/string-string'
import STRING_STRING_ENUM from 'stories/definitions/string-string-enum'
import STRING_STRING_ANY_OF from 'stories/definitions/string-string-any-of'
import STRING_STRING_ONE_OF from 'stories/definitions/string-string-one-of'
import STRING_STRING_ALL_OF from 'stories/definitions/string-string-all-of'

import NUMBER_NUMBER from 'stories/definitions/number-number'
import NUMBER_NUMBER_ENUM from 'stories/definitions/number-number-enum'
import NUMBER_NUMBER_ANY_OF from 'stories/definitions/number-number-any-of'
import NUMBER_NUMBER_ONE_OF from 'stories/definitions/number-number-one-of'
import NUMBER_NUMBER_ALL_OF from 'stories/definitions/number-number-all-of'

import OBJECT_OBJECT_STRING from 'stories/definitions/object-object-string'
import OBJECT_OBJECT_NUMBER from 'stories/definitions/object-object-number'
import OBJECT_OBJECT_OBJECT from 'stories/definitions/object-object-object'

import OBJECT_OBJECT_ARRAY_OBJECT_STRING from 'stories/definitions/object-object-array-object-string'
import OBJECT_OBJECT_ARRAY_OBJECT_NUMBER from 'stories/definitions/object-object-array-object-number'
import OBJECT_OBJECT_ARRAY_OBJECT_BOOLEAN from 'stories/definitions/object-object-array-object-boolean'
import OBJECT_OBJECT_ARRAY_OBJECT_NULL from 'stories/definitions/object-object-array-object-null'

import OBJECT_OBJECT_ARRAY_ARRAY_STRING from 'stories/definitions/object-object-array-array-string'
import OBJECT_OBJECT_ARRAY_ARRAY_NUMBER from 'stories/definitions/object-object-array-array-number'
import OBJECT_OBJECT_ARRAY_ARRAY_BOOLEAN from 'stories/definitions/object-object-array-array-boolean'
import OBJECT_OBJECT_ARRAY_ARRAY_NULL from 'stories/definitions/object-object-array-array-null'

import OBJECT_OBJECT_BOOLEAN from 'stories/definitions/object-object-boolean'
import OBJECT_OBJECT_NULL from 'stories/definitions/object-object-null'

import ARRAY_ARRAY_OBJECT_STRING from 'stories/definitions/array-array-object-string'
import ARRAY_ARRAY_OBJECT_STRING_ENUM from 'stories/definitions/array-array-object-string-enum'
import ARRAY_ARRAY_OBJECT_STRING_ANY_OF from 'stories/definitions/array-array-object-string-any-of'
import ARRAY_ARRAY_OBJECT_STRING_ONE_OF from 'stories/definitions/array-array-object-string-one-of'

import ARRAY_ARRAY_OBJECT_NUMBER from 'stories/definitions/array-array-object-number'
import ARRAY_ARRAY_OBJECT_NUMBER_ENUM from 'stories/definitions/array-array-object-number-enum'
import ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF from 'stories/definitions/array-array-object-number-any-of'
import ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF from 'stories/definitions/array-array-object-number-one-of'

import ARRAY_ARRAY_OBJECT_OBJECT from 'stories/definitions/array-array-object-object'
import ARRAY_ARRAY_OBJECT_ARRAY from 'stories/definitions/array-array-object-array'
import ARRAY_ARRAY_OBJECT_BOOLEAN from 'stories/definitions/array-array-object-boolean'
import ARRAY_ARRAY_OBJECT_NULL from 'stories/definitions/array-array-object-null'

import ARRAY_ARRAY_ARRAY_STRING from 'stories/definitions/array-array-array-string'
import ARRAY_ARRAY_ARRAY_STRING_ENUM from 'stories/definitions/array-array-array-string-enum'
import ARRAY_ARRAY_ARRAY_STRING_ANY_OF from 'stories/definitions/array-array-array-string-any-of'
import ARRAY_ARRAY_ARRAY_STRING_ONE_OF from 'stories/definitions/array-array-array-string-one-of'

import ARRAY_ARRAY_ARRAY_NUMBER from 'stories/definitions/array-array-array-number'
import ARRAY_ARRAY_ARRAY_NUMBER_ENUM from 'stories/definitions/array-array-array-number-enum'
import ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF from 'stories/definitions/array-array-array-number-any-of'
import ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF from 'stories/definitions/array-array-array-number-one-of'

import ARRAY_ARRAY_ARRAY_OBJECT from 'stories/definitions/array-array-array-object'
import ARRAY_ARRAY_ARRAY_ARRAY from 'stories/definitions/array-array-array-array'
import ARRAY_ARRAY_ARRAY_BOOLEAN from 'stories/definitions/array-array-array-boolean'
import ARRAY_ARRAY_ARRAY_NULL from 'stories/definitions/array-array-array-null'

import BOOLEAN_BOOLEAN from 'stories/definitions/boolean-boolean'
import BOOLEAN_BOOLEAN_ENUM from 'stories/definitions/boolean-boolean-enum'
import BOOLEAN_BOOLEAN_ANY_OF from 'stories/definitions/boolean-boolean-any-of'
import BOOLEAN_BOOLEAN_ONE_OF from 'stories/definitions/boolean-boolean-one-of'
import BOOLEAN_BOOLEAN_ALL_OF from 'stories/definitions/boolean-boolean-all-of'

import NULL_NULL from 'stories/definitions/null-null'
import NULL_NULL_ENUM from 'stories/definitions/null-null-enum'
import NULL_NULL_ANY_OF from 'stories/definitions/null-null-any-of'
import NULL_NULL_ONE_OF from 'stories/definitions/null-null-one-of'
import NULL_NULL_ALL_OF from 'stories/definitions/null-null-all-of'

storiesOf('Pinion', module)
  .add('String - String', () => (
    <Pinion
      pinion={toZashiki(STRING_STRING, fromDocumentToHash('string'))}
      params={{}}
    />
  ))
  .add('String - String - Enum', () => (
    <Pinion
      pinion={toZashiki(STRING_STRING_ENUM, fromDocumentToHash('Three'))}
      params={{}}
    />
  ))
  .add('String - String - Any Of', () => (
    <Pinion
      pinion={toZashiki(STRING_STRING_ANY_OF, fromDocumentToHash('three'))}
      params={{}}
    />
  ))
  .add('String - String - One Of', () => (
    <Pinion
      pinion={toZashiki(STRING_STRING_ONE_OF, fromDocumentToHash('three'))}
      params={{}}
    />
  ))
  .add('String - String - All Of', () => (
    <Pinion
      pinion={toZashiki(STRING_STRING_ALL_OF, fromDocumentToHash('string'))}
      params={{}}
    />
  ))

  .add('Number - Number', () => (
    <Pinion
      pinion={toZashiki(NUMBER_NUMBER, fromDocumentToHash(1))}
      params={{}}
    />
  ))
  .add('Number - Number - Enum', () => (
    <Pinion
      pinion={toZashiki(NUMBER_NUMBER_ENUM, fromDocumentToHash(3))}
      params={{}}
    />
  ))
  .add('Number - Number - Any Of', () => (
    <Pinion
      pinion={toZashiki(NUMBER_NUMBER_ANY_OF, fromDocumentToHash(3))}
      params={{}}
    />
  ))
  .add('Number - Number - One Of', () => (
    <Pinion
      pinion={toZashiki(NUMBER_NUMBER_ONE_OF, fromDocumentToHash(3))}
      params={{}}
    />
  ))
  .add('Number - Number - All Of', () => (
    <Pinion
      pinion={toZashiki(NUMBER_NUMBER_ALL_OF, fromDocumentToHash(1))}
      params={{}}
    />
  ))

  .add('Object - String', () => (
    <Pinion
      pinion={toZashiki(OBJECT_OBJECT_STRING, fromDocumentToHash({ string: 'string' }))}
      params={{}}
    />
  ))
  .add('Object - Number', () => (
    <Pinion
      pinion={toZashiki(OBJECT_OBJECT_NUMBER, fromDocumentToHash({ number: 1 }))}
      params={{}}
    />
  ))
  .add('Object - Object', () => (
    <Pinion
      pinion={toZashiki(OBJECT_OBJECT_OBJECT, fromDocumentToHash({ string: 'string', number: 1, boolean: true, null: null }))}
      params={{}}
    />
  ))

  .add('Object - Array (Items is an object) - String', () => (
    <Pinion
      pinion={toZashiki(OBJECT_OBJECT_ARRAY_OBJECT_STRING, fromDocumentToHash({ array: ['string'] }))}
      params={{}}
    />
  ))
  .add('Object - Array (Items is an object) - Number', () => (
    <Pinion
      pinion={toZashiki(OBJECT_OBJECT_ARRAY_OBJECT_NUMBER, fromDocumentToHash({ array: [1] }))}
      params={{}}
    />
  ))
  .add('Object - Array (Items is an object) - Boolean', () => (
    <Pinion
      pinion={toZashiki(OBJECT_OBJECT_ARRAY_OBJECT_BOOLEAN, fromDocumentToHash({ array: [true] }))}
      params={{}}
    />
  ))
  .add('Object - Array (Items is an object) - Null', () => (
    <Pinion
      pinion={toZashiki(OBJECT_OBJECT_ARRAY_OBJECT_NULL, fromDocumentToHash({ array: [null] }))}
      params={{}}
    />
  ))

  .add('Object - Array (Items is an array) - String', () => (
    <Pinion
      pinion={toZashiki(OBJECT_OBJECT_ARRAY_ARRAY_STRING, fromDocumentToHash({ array: ['string'] }))}
      params={{}}
    />
  ))
  .add('Object - Array (Items is an array) - Number', () => (
    <Pinion
      pinion={toZashiki(OBJECT_OBJECT_ARRAY_ARRAY_NUMBER, fromDocumentToHash({ array: [1] }))}
      params={{}}
    />
  ))
  .add('Object - Array (Items is an array) - Boolean', () => (
    <Pinion
      pinion={toZashiki(OBJECT_OBJECT_ARRAY_ARRAY_BOOLEAN, fromDocumentToHash({ array: [true] }))}
      params={{}}
    />
  ))
  .add('Object - Array (Items is an array) - Null', () => (
    <Pinion
      pinion={toZashiki(OBJECT_OBJECT_ARRAY_ARRAY_NULL, fromDocumentToHash({ array: [null] }))}
      params={{}}
    />
  ))

  .add('Object - Boolean', () => (
    <Pinion
      pinion={toZashiki(OBJECT_OBJECT_BOOLEAN, fromDocumentToHash({ boolean: true }))}
      params={{}}
    />
  ))
  .add('Object - Null', () => (
    <Pinion
      pinion={toZashiki(OBJECT_OBJECT_NULL, fromDocumentToHash({ null: null }))}
      params={{}}
    />
  ))

  .add('Array - Array (Items is an object) - String', () => (
    <Pinion
      pinion={toZashiki(ARRAY_ARRAY_OBJECT_STRING, fromDocumentToHash(['string']))}
      params={{}}
    />
  ))
  .add('Array - Array (Items is an object) - String - Enum', () => (
    <Pinion
      pinion={toZashiki(ARRAY_ARRAY_OBJECT_STRING_ENUM, fromDocumentToHash(['Three']))}
      params={{}}
    />
  ))
  .add('Array - Array (Items is an object) - String - Any Of', () => (
    <Pinion
      pinion={toZashiki(ARRAY_ARRAY_OBJECT_STRING_ANY_OF, fromDocumentToHash(['three']))}
      params={{}}
    />
  ))
  .add('Array - Array (Items is an object) - String - One Of', () => (
    <Pinion
      pinion={toZashiki(ARRAY_ARRAY_OBJECT_STRING_ONE_OF, fromDocumentToHash(['three']))}
      params={{}}
    />
  ))

  .add('Array - Array (Items is an object) - Number', () => (
    <Pinion
      pinion={toZashiki(ARRAY_ARRAY_OBJECT_NUMBER, fromDocumentToHash([1]))}
      params={{}}
    />
  ))
  .add('Array - Array (Items is an object) - Number - Enum', () => (
    <Pinion
      pinion={toZashiki(ARRAY_ARRAY_OBJECT_NUMBER_ENUM, fromDocumentToHash([3]))}
      params={{}}
    />
  ))
  .add('Array - Array (Items is an object) - Number - Any Of', () => (
    <Pinion
      pinion={toZashiki(ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF, fromDocumentToHash([3]))}
      params={{}}
    />
  ))
  .add('Array - Array (Items is an object) - Number - One Of', () => (
    <Pinion
      pinion={toZashiki(ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF, fromDocumentToHash([3]))}
      params={{}}
    />
  ))

  .add('Array - Array (Items is an object) - Object', () => (
    <Pinion
      pinion={toZashiki(ARRAY_ARRAY_OBJECT_OBJECT, fromDocumentToHash([{ string: 'string', number: 1, boolean: true, null: null }]))}
      params={{}}
    />
  ))
  .add('Array - Array (Items is an object) - Array', () => (
    <Pinion
      pinion={toZashiki(ARRAY_ARRAY_OBJECT_ARRAY, fromDocumentToHash([['string', 1, true, null]]))}
      params={{}}
    />
  ))
  .add('Array - Array (Items is an object) - Boolean', () => (
    <Pinion
      pinion={toZashiki(ARRAY_ARRAY_OBJECT_BOOLEAN, fromDocumentToHash([true]))}
      params={{}}
    />
  ))
  .add('Array - Array (Items is an object) - Null', () => (
    <Pinion
      pinion={toZashiki(ARRAY_ARRAY_OBJECT_NULL, fromDocumentToHash([null]))}
      params={{}}
    />
  ))

  .add('Array - Array (Items is an array) - String', () => (
    <Pinion
      pinion={toZashiki(ARRAY_ARRAY_ARRAY_STRING, fromDocumentToHash(['string']))}
      params={{}}
    />
  ))
  .add('Array - Array (Items is an array) - String - Enum', () => (
    <Pinion
      pinion={toZashiki(ARRAY_ARRAY_ARRAY_STRING_ENUM, fromDocumentToHash(['Three']))}
      params={{}}
    />
  ))
  .add('Array - Array (Items is an array) - String - Any Of', () => (
    <Pinion
      pinion={toZashiki(ARRAY_ARRAY_ARRAY_STRING_ANY_OF, fromDocumentToHash(['three']))}
      params={{}}
    />
  ))
  .add('Array - Array (Items is an array) - String - One Of', () => (
    <Pinion
      pinion={toZashiki(ARRAY_ARRAY_ARRAY_STRING_ONE_OF, fromDocumentToHash(['three']))}
      params={{}}
    />
  ))

  .add('Array - Array (Items is an array) - Number', () => (
    <Pinion
      pinion={toZashiki(ARRAY_ARRAY_ARRAY_NUMBER, fromDocumentToHash([1]))}
      params={{}}
    />
  ))
  .add('Array - Array (Items is an array) - Number - Enum', () => (
    <Pinion
      pinion={toZashiki(ARRAY_ARRAY_ARRAY_NUMBER_ENUM, fromDocumentToHash([3]))}
      params={{}}
    />
  ))
  .add('Array - Array (Items is an array) - Number - Any Of', () => (
    <Pinion
      pinion={toZashiki(ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF, fromDocumentToHash([3]))}
      params={{}}
    />
  ))
  .add('Array - Array (Items is an array) - Number - One Of', () => (
    <Pinion
      pinion={toZashiki(ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF, fromDocumentToHash([3]))}
      params={{}}
    />
  ))

  .add('Array - Array (Items is an array) - Object', () => (
    <Pinion
      pinion={toZashiki(ARRAY_ARRAY_ARRAY_OBJECT, fromDocumentToHash([{ string: 'string', number: 1, boolean: true, null: null }]))}
      params={{}}
    />
  ))
  .add('Array - Array (Items is an array) - Array', () => (
    <Pinion
      pinion={toZashiki(ARRAY_ARRAY_ARRAY_ARRAY, fromDocumentToHash([['string', 1, true, null]]))}
      params={{}}
    />
  ))
  .add('Array - Array (Items is an array) - Boolean', () => (
    <Pinion
      pinion={toZashiki(ARRAY_ARRAY_ARRAY_BOOLEAN, fromDocumentToHash([true]))}
      params={{}}
    />
  ))
  .add('Array - Array (Items is an array) - Null', () => (
    <Pinion
      pinion={toZashiki(ARRAY_ARRAY_ARRAY_NULL, fromDocumentToHash([null]))}
      params={{}}
    />
  ))

  .add('Boolean - Boolean', () => (
    <Pinion
      pinion={toZashiki(BOOLEAN_BOOLEAN, fromDocumentToHash(true))}
      params={{}}
    />
  ))
  .add('Boolean - Boolean - Enum', () => (
    <Pinion
      pinion={toZashiki(BOOLEAN_BOOLEAN_ENUM, fromDocumentToHash(false))}
      params={{}}
    />
  ))
  .add('Boolean - Boolean - Any Of', () => (
    <Pinion
      pinion={toZashiki(BOOLEAN_BOOLEAN_ANY_OF, fromDocumentToHash(false))}
      params={{}}
    />
  ))
  .add('Boolean - Boolean - One Of', () => (
    <Pinion
      pinion={toZashiki(BOOLEAN_BOOLEAN_ONE_OF, fromDocumentToHash(false))}
      params={{}}
    />
  ))
  .add('Boolean - Boolean - All Of', () => (
    <Pinion
      pinion={toZashiki(BOOLEAN_BOOLEAN_ALL_OF, fromDocumentToHash(true))}
      params={{}}
    />
  ))

  .add('Null - Null', () => (
    <Pinion
      pinion={toZashiki(NULL_NULL, fromDocumentToHash(null))}
      params={{}}
    />
  ))
  .add('Null - Null - Enum', () => (
    <Pinion
      pinion={toZashiki(NULL_NULL_ENUM, fromDocumentToHash(null))}
      params={{}}
    />
  ))
  .add('Null - Null - Any Of', () => (
    <Pinion
      pinion={toZashiki(NULL_NULL_ANY_OF, fromDocumentToHash(null))}
      params={{}}
    />
  ))
  .add('Null - Null - One Of', () => (
    <Pinion
      pinion={toZashiki(NULL_NULL_ONE_OF, fromDocumentToHash(null))}
      params={{}}
    />
  ))
  .add('Null - Null - All Of', () => (
    <Pinion
      pinion={toZashiki(NULL_NULL_ALL_OF, fromDocumentToHash(null))}
      params={{}}
    />
  ))
