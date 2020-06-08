import React from 'react'

import {
  storiesOf
} from '@storybook/react'
import StorybookReactRouter from 'storybook-react-router'

import Engine from 'shinkansen-engine/engine'

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

storiesOf('Engine', module)
  .addDecorator(StorybookReactRouter())
  .add('String - String', () => (
    <Engine
      pinion={toZashiki(STRING_STRING, fromDocumentToHash('string'))}
      gears={GEARS}
    />
  ))
  .add('String - String - Enum', () => (
    <Engine
      pinion={toZashiki(STRING_STRING_ENUM, fromDocumentToHash('Three'))}
      gears={GEARS}
    />
  ))
  .add('String - String - Any Of', () => (
    <Engine
      pinion={toZashiki(STRING_STRING_ANY_OF, fromDocumentToHash('three'))}
      gears={GEARS}
    />
  ))
  .add('String - String - One Of', () => (
    <Engine
      pinion={toZashiki(STRING_STRING_ONE_OF, fromDocumentToHash('three'))}
      gears={GEARS}
    />
  ))
  .add('String - String - All Of', () => (
    <Engine
      pinion={toZashiki(STRING_STRING_ALL_OF, fromDocumentToHash('string'))}
      gears={GEARS}
    />
  ))

  .add('Number - Number', () => (
    <Engine
      pinion={toZashiki(NUMBER_NUMBER, fromDocumentToHash(1))}
      gears={GEARS}
    />
  ))
  .add('Number - Number - Enum', () => (
    <Engine
      pinion={toZashiki(NUMBER_NUMBER_ENUM, fromDocumentToHash(3))}
      gears={GEARS}
    />
  ))
  .add('Number - Number - Any Of', () => (
    <Engine
      pinion={toZashiki(NUMBER_NUMBER_ANY_OF, fromDocumentToHash(3))}
      gears={GEARS}
    />
  ))
  .add('Number - Number - One Of', () => (
    <Engine
      pinion={toZashiki(NUMBER_NUMBER_ONE_OF, fromDocumentToHash(3))}
      gears={GEARS}
    />
  ))
  .add('Number - Number - All Of', () => (
    <Engine
      pinion={toZashiki(NUMBER_NUMBER_ALL_OF, fromDocumentToHash(1))}
      gears={GEARS}
    />
  ))

  .add('Object - String', () => (
    <Engine
      pinion={toZashiki(OBJECT_OBJECT_STRING, fromDocumentToHash({ string: 'string' }))}
      gears={GEARS}
    />
  ))
  .add('Object - Number', () => (
    <Engine
      pinion={toZashiki(OBJECT_OBJECT_NUMBER, fromDocumentToHash({ number: 1 }))}
      gears={GEARS}
    />
  ))
  .add('Object - Object', () => (
    <Engine
      pinion={toZashiki(OBJECT_OBJECT_OBJECT, fromDocumentToHash({ string: 'string', number: 1, boolean: true, null: null }))}
      gears={GEARS}
    />
  ))

  .add('Object - Array (Items is an object) - String', () => (
    <Engine
      pinion={toZashiki(OBJECT_OBJECT_ARRAY_OBJECT_STRING, fromDocumentToHash({ array: ['string'] }))}
      gears={GEARS}
    />
  ))
  .add('Object - Array (Items is an object) - Number', () => (
    <Engine
      pinion={toZashiki(OBJECT_OBJECT_ARRAY_OBJECT_NUMBER, fromDocumentToHash({ array: [1] }))}
      gears={GEARS}
    />
  ))
  .add('Object - Array (Items is an object) - Boolean', () => (
    <Engine
      pinion={toZashiki(OBJECT_OBJECT_ARRAY_OBJECT_BOOLEAN, fromDocumentToHash({ array: [true] }))}
      gears={GEARS}
    />
  ))
  .add('Object - Array (Items is an object) - Null', () => (
    <Engine
      pinion={toZashiki(OBJECT_OBJECT_ARRAY_OBJECT_NULL, fromDocumentToHash({ array: [null] }))}
      gears={GEARS}
    />
  ))

  .add('Object - Array (Items is an array) - String', () => (
    <Engine
      pinion={toZashiki(OBJECT_OBJECT_ARRAY_ARRAY_STRING, fromDocumentToHash({ array: ['string'] }))}
      gears={GEARS}
    />
  ))
  .add('Object - Array (Items is an array) - Number', () => (
    <Engine
      pinion={toZashiki(OBJECT_OBJECT_ARRAY_ARRAY_NUMBER, fromDocumentToHash({ array: [1] }))}
      gears={GEARS}
    />
  ))
  .add('Object - Array (Items is an array) - Boolean', () => (
    <Engine
      pinion={toZashiki(OBJECT_OBJECT_ARRAY_ARRAY_BOOLEAN, fromDocumentToHash({ array: [true] }))}
      gears={GEARS}
    />
  ))
  .add('Object - Array (Items is an array) - Null', () => (
    <Engine
      pinion={toZashiki(OBJECT_OBJECT_ARRAY_ARRAY_NULL, fromDocumentToHash({ array: [null] }))}
      gears={GEARS}
    />
  ))

  .add('Object - Boolean', () => (
    <Engine
      pinion={toZashiki(OBJECT_OBJECT_BOOLEAN, fromDocumentToHash({ boolean: true }))}
      gears={GEARS}
    />
  ))
  .add('Object - Null', () => (
    <Engine
      pinion={toZashiki(OBJECT_OBJECT_NULL, fromDocumentToHash({ null: null }))}
      gears={GEARS}
    />
  ))

  .add('Array - Array (Items is an object) - String', () => (
    <Engine
      pinion={toZashiki(ARRAY_ARRAY_OBJECT_STRING, fromDocumentToHash(['string']))}
      gears={GEARS}
    />
  ))
  .add('Array - Array (Items is an object) - String - Enum', () => (
    <Engine
      pinion={toZashiki(ARRAY_ARRAY_OBJECT_STRING_ENUM, fromDocumentToHash(['Three']))}
      gears={GEARS}
    />
  ))
  .add('Array - Array (Items is an object) - String - Any Of', () => (
    <Engine
      pinion={toZashiki(ARRAY_ARRAY_OBJECT_STRING_ANY_OF, fromDocumentToHash(['three']))}
      gears={GEARS}
    />
  ))
  .add('Array - Array (Items is an object) - String - One Of', () => (
    <Engine
      pinion={toZashiki(ARRAY_ARRAY_OBJECT_STRING_ONE_OF, fromDocumentToHash(['three']))}
      gears={GEARS}
    />
  ))

  .add('Array - Array (Items is an object) - Number', () => (
    <Engine
      pinion={toZashiki(ARRAY_ARRAY_OBJECT_NUMBER, fromDocumentToHash([1]))}
      gears={GEARS}
    />
  ))
  .add('Array - Array (Items is an object) - Number - Enum', () => (
    <Engine
      pinion={toZashiki(ARRAY_ARRAY_OBJECT_NUMBER_ENUM, fromDocumentToHash([3]))}
      gears={GEARS}
    />
  ))
  .add('Array - Array (Items is an object) - Number - Any Of', () => (
    <Engine
      pinion={toZashiki(ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF, fromDocumentToHash([3]))}
      gears={GEARS}
    />
  ))
  .add('Array - Array (Items is an object) - Number - One Of', () => (
    <Engine
      pinion={toZashiki(ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF, fromDocumentToHash([3]))}
      gears={GEARS}
    />
  ))

  .add('Array - Array (Items is an object) - Object', () => (
    <Engine
      pinion={toZashiki(ARRAY_ARRAY_OBJECT_OBJECT, fromDocumentToHash([{ string: 'string', number: 1, boolean: true, null: null }]))}
      gears={GEARS}
    />
  ))
  .add('Array - Array (Items is an object) - Array', () => (
    <Engine
      pinion={toZashiki(ARRAY_ARRAY_OBJECT_ARRAY, fromDocumentToHash([['string', 1, true, null]]))}
      gears={GEARS}
    />
  ))
  .add('Array - Array (Items is an object) - Boolean', () => (
    <Engine
      pinion={toZashiki(ARRAY_ARRAY_OBJECT_BOOLEAN, fromDocumentToHash([true]))}
      gears={GEARS}
    />
  ))
  .add('Array - Array (Items is an object) - Null', () => (
    <Engine
      pinion={toZashiki(ARRAY_ARRAY_OBJECT_NULL, fromDocumentToHash([null]))}
      gears={GEARS}
    />
  ))

  .add('Array - Array (Items is an array) - String', () => (
    <Engine
      pinion={toZashiki(ARRAY_ARRAY_ARRAY_STRING, fromDocumentToHash(['string']))}
      gears={GEARS}
    />
  ))
  .add('Array - Array (Items is an array) - String - Enum', () => (
    <Engine
      pinion={toZashiki(ARRAY_ARRAY_ARRAY_STRING_ENUM, fromDocumentToHash(['Three']))}
      gears={GEARS}
    />
  ))
  .add('Array - Array (Items is an array) - String - Any Of', () => (
    <Engine
      pinion={toZashiki(ARRAY_ARRAY_ARRAY_STRING_ANY_OF, fromDocumentToHash(['three']))}
      gears={GEARS}
    />
  ))
  .add('Array - Array (Items is an array) - String - One Of', () => (
    <Engine
      pinion={toZashiki(ARRAY_ARRAY_ARRAY_STRING_ONE_OF, fromDocumentToHash(['three']))}
      gears={GEARS}
    />
  ))

  .add('Array - Array (Items is an array) - Number', () => (
    <Engine
      pinion={toZashiki(ARRAY_ARRAY_ARRAY_NUMBER, fromDocumentToHash([1]))}
      gears={GEARS}
    />
  ))
  .add('Array - Array (Items is an array) - Number - Enum', () => (
    <Engine
      pinion={toZashiki(ARRAY_ARRAY_ARRAY_NUMBER_ENUM, fromDocumentToHash([3]))}
      gears={GEARS}
    />
  ))
  .add('Array - Array (Items is an array) - Number - Any Of', () => (
    <Engine
      pinion={toZashiki(ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF, fromDocumentToHash([3]))}
      gears={GEARS}
    />
  ))
  .add('Array - Array (Items is an array) - Number - One Of', () => (
    <Engine
      pinion={toZashiki(ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF, fromDocumentToHash([3]))}
      gears={GEARS}
    />
  ))

  .add('Array - Array (Items is an array) - Object', () => (
    <Engine
      pinion={toZashiki(ARRAY_ARRAY_ARRAY_OBJECT, fromDocumentToHash([{ string: 'string', number: 1, boolean: true, null: null }]))}
      gears={GEARS}
    />
  ))
  .add('Array - Array (Items is an array) - Array', () => (
    <Engine
      pinion={toZashiki(ARRAY_ARRAY_ARRAY_ARRAY, fromDocumentToHash([['string', 1, true, null]]))}
      gears={GEARS}
    />
  ))
  .add('Array - Array (Items is an array) - Boolean', () => (
    <Engine
      pinion={toZashiki(ARRAY_ARRAY_ARRAY_BOOLEAN, fromDocumentToHash([true]))}
      gears={GEARS}
    />
  ))
  .add('Array - Array (Items is an array) - Null', () => (
    <Engine
      pinion={toZashiki(ARRAY_ARRAY_ARRAY_NULL, fromDocumentToHash([null]))}
      gears={GEARS}
    />
  ))

  .add('Boolean - Boolean', () => (
    <Engine
      pinion={toZashiki(BOOLEAN_BOOLEAN, fromDocumentToHash(true))}
      gears={GEARS}
    />
  ))
  .add('Boolean - Boolean - Enum', () => (
    <Engine
      pinion={toZashiki(BOOLEAN_BOOLEAN_ENUM, fromDocumentToHash(false))}
      gears={GEARS}
    />
  ))
  .add('Boolean - Boolean - Any Of', () => (
    <Engine
      pinion={toZashiki(BOOLEAN_BOOLEAN_ANY_OF, fromDocumentToHash(false))}
      gears={GEARS}
    />
  ))
  .add('Boolean - Boolean - One Of', () => (
    <Engine
      pinion={toZashiki(BOOLEAN_BOOLEAN_ONE_OF, fromDocumentToHash(false))}
      gears={GEARS}
    />
  ))
  .add('Boolean - Boolean - All Of', () => (
    <Engine
      pinion={toZashiki(BOOLEAN_BOOLEAN_ALL_OF, fromDocumentToHash(true))}
      gears={GEARS}
    />
  ))

  .add('Null - Null', () => (
    <Engine
      pinion={toZashiki(NULL_NULL, fromDocumentToHash(null))}
      gears={GEARS}
    />
  ))
  .add('Null - Null - Enum', () => (
    <Engine
      pinion={toZashiki(NULL_NULL_ENUM, fromDocumentToHash(null))}
      gears={GEARS}
    />
  ))
  .add('Null - Null - Any Of', () => (
    <Engine
      pinion={toZashiki(NULL_NULL_ANY_OF, fromDocumentToHash(null))}
      gears={GEARS}
    />
  ))
  .add('Null - Null - One Of', () => (
    <Engine
      pinion={toZashiki(NULL_NULL_ONE_OF, fromDocumentToHash(null))}
      gears={GEARS}
    />
  ))
  .add('Null - Null - All Of', () => (
    <Engine
      pinion={toZashiki(NULL_NULL_ALL_OF, fromDocumentToHash(null))}
      gears={GEARS}
    />
  ))
