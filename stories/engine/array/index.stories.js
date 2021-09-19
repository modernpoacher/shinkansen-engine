import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import Engine from 'shinkansen-engine/engine'

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
  title: 'Components/Engine/Array',
  component: Engine,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

export const ArrayArrayItemsIsAnObjectString = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_STRING, fromDocumentToHash(['string'], ARRAY_ARRAY_OBJECT_STRING))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnObjectString.storyName = 'Array (Items is an object) - String'
ArrayArrayItemsIsAnObjectString.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectStringEnum = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_STRING_ENUM, fromDocumentToHash(['Three'], ARRAY_ARRAY_OBJECT_STRING_ENUM))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnObjectStringEnum.storyName = 'Array (Items is an object) - String - Enum'
ArrayArrayItemsIsAnObjectStringEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectStringAnyOf = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_STRING_ANY_OF, fromDocumentToHash(['three'], ARRAY_ARRAY_OBJECT_STRING_ANY_OF))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnObjectStringAnyOf.storyName = 'Array (Items is an object) - String - Any Of'
ArrayArrayItemsIsAnObjectStringAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectStringOneOf = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_STRING_ONE_OF, fromDocumentToHash(['three'], ARRAY_ARRAY_OBJECT_STRING_ONE_OF))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnObjectStringOneOf.storyName = 'Array (Items is an object) - String - One Of'
ArrayArrayItemsIsAnObjectStringOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectStringAllOf = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_STRING_ALL_OF, fromDocumentToHash(['string'], ARRAY_ARRAY_OBJECT_STRING_ALL_OF))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnObjectStringAllOf.storyName = 'Array (Items is an object) - String - All Of'
ArrayArrayItemsIsAnObjectStringAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNumber = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_NUMBER, fromDocumentToHash([3], ARRAY_ARRAY_OBJECT_NUMBER))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnObjectNumber.storyName = 'Array (Items is an object) - Number'
ArrayArrayItemsIsAnObjectNumber.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNumberEnum = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_NUMBER_ENUM, fromDocumentToHash([3], ARRAY_ARRAY_OBJECT_NUMBER_ENUM))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnObjectNumberEnum.storyName = 'Array (Items is an object) - Number - Enum'
ArrayArrayItemsIsAnObjectNumberEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNumberAnyOf = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF, fromDocumentToHash([3], ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnObjectNumberAnyOf.storyName = 'Array (Items is an object) - Number - Any Of'
ArrayArrayItemsIsAnObjectNumberAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNumberOneOf = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF, fromDocumentToHash([3], ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnObjectNumberOneOf.storyName = 'Array (Items is an object) - Number - One Of'
ArrayArrayItemsIsAnObjectNumberOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNumberAllOf = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_NUMBER_ALL_OF, fromDocumentToHash([3], ARRAY_ARRAY_OBJECT_NUMBER_ALL_OF))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnObjectNumberAllOf.storyName = 'Array (Items is an object) - Number - All Of'
ArrayArrayItemsIsAnObjectNumberAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectBoolean = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_BOOLEAN, fromDocumentToHash([false], ARRAY_ARRAY_OBJECT_BOOLEAN))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnObjectBoolean.storyName = 'Array (Items is an object) - Boolean'
ArrayArrayItemsIsAnObjectBoolean.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectBooleanEnum = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_BOOLEAN_ENUM, fromDocumentToHash([false], ARRAY_ARRAY_OBJECT_BOOLEAN_ENUM))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnObjectBooleanEnum.storyName = 'Array (Items is an object) - Boolean - Enum'
ArrayArrayItemsIsAnObjectBooleanEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectBooleanAnyOf = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_BOOLEAN_ANY_OF, fromDocumentToHash([false], ARRAY_ARRAY_OBJECT_BOOLEAN_ANY_OF))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnObjectBooleanAnyOf.storyName = 'Array (Items is an object) - Boolean - Any Of'
ArrayArrayItemsIsAnObjectBooleanAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectBooleanOneOf = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_BOOLEAN_ONE_OF, fromDocumentToHash([false], ARRAY_ARRAY_OBJECT_BOOLEAN_ONE_OF))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnObjectBooleanOneOf.storyName = 'Array (Items is an object) - Boolean - One Of'
ArrayArrayItemsIsAnObjectBooleanOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectBooleanAllOf = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_BOOLEAN_ALL_OF, fromDocumentToHash([false], ARRAY_ARRAY_OBJECT_BOOLEAN_ALL_OF))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnObjectBooleanAllOf.storyName = 'Array (Items is an object) - Boolean - All Of'
ArrayArrayItemsIsAnObjectBooleanAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNull = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_NULL, fromDocumentToHash([null], ARRAY_ARRAY_OBJECT_NULL))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnObjectNull.storyName = 'Array (Items is an object) - Null'
ArrayArrayItemsIsAnObjectNull.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNullEnum = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_NULL_ENUM, fromDocumentToHash([null], ARRAY_ARRAY_OBJECT_NULL_ENUM))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnObjectNullEnum.storyName = 'Array (Items is an object) - Null - Enum'
ArrayArrayItemsIsAnObjectNullEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNullAnyOf = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_NULL_ANY_OF, fromDocumentToHash([null], ARRAY_ARRAY_OBJECT_NULL_ANY_OF))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnObjectNullAnyOf.storyName = 'Array (Items is an object) - Null - Any Of'
ArrayArrayItemsIsAnObjectNullAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNullOneOf = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_NULL_ONE_OF, fromDocumentToHash([null], ARRAY_ARRAY_OBJECT_NULL_ONE_OF))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnObjectNullOneOf.storyName = 'Array (Items is an object) - Null - One Of'
ArrayArrayItemsIsAnObjectNullOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNullAllOf = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_NULL_ALL_OF, fromDocumentToHash([null], ARRAY_ARRAY_OBJECT_NULL_ALL_OF))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnObjectNullAllOf.storyName = 'Array (Items is an object) - Null - All Of'
ArrayArrayItemsIsAnObjectNullAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayString = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_STRING, fromDocumentToHash(['string'], ARRAY_ARRAY_ARRAY_STRING))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnArrayString.storyName = 'Array (Items is an array) - String'
ArrayArrayItemsIsAnArrayString.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayStringEnum = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_STRING_ENUM, fromDocumentToHash(['Three'], ARRAY_ARRAY_ARRAY_STRING_ENUM))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnArrayStringEnum.storyName = 'Array (Items is an array) - String - Enum'
ArrayArrayItemsIsAnArrayStringEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayStringAnyOf = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_STRING_ANY_OF, fromDocumentToHash(['three'], ARRAY_ARRAY_ARRAY_STRING_ANY_OF))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnArrayStringAnyOf.storyName = 'Array (Items is an array) - String - Any Of'
ArrayArrayItemsIsAnArrayStringAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayStringOneOf = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_STRING_ONE_OF, fromDocumentToHash(['three'], ARRAY_ARRAY_ARRAY_STRING_ONE_OF))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnArrayStringOneOf.storyName = 'Array (Items is an array) - String - One Of'
ArrayArrayItemsIsAnArrayStringOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayStringAllOf = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_STRING_ALL_OF, fromDocumentToHash(['string'], ARRAY_ARRAY_ARRAY_STRING_ALL_OF))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnArrayStringAllOf.storyName = 'Array (Items is an array) - String - All Of'
ArrayArrayItemsIsAnArrayStringAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNumber = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_NUMBER, fromDocumentToHash([3], ARRAY_ARRAY_ARRAY_NUMBER))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnArrayNumber.storyName = 'Array (Items is an array) - Number'
ArrayArrayItemsIsAnArrayNumber.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNumberEnum = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_NUMBER_ENUM, fromDocumentToHash([3], ARRAY_ARRAY_ARRAY_NUMBER_ENUM))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnArrayNumberEnum.storyName = 'Array (Items is an array) - Number - Enum'
ArrayArrayItemsIsAnArrayNumberEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNumberAnyOf = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF, fromDocumentToHash([3], ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnArrayNumberAnyOf.storyName = 'Array (Items is an array) - Number - Any Of'
ArrayArrayItemsIsAnArrayNumberAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNumberOneOf = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF, fromDocumentToHash([3], ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnArrayNumberOneOf.storyName = 'Array (Items is an array) - Number - One Of'
ArrayArrayItemsIsAnArrayNumberOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNumberAllOf = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_NUMBER_ALL_OF, fromDocumentToHash([3], ARRAY_ARRAY_ARRAY_NUMBER_ALL_OF))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnArrayNumberAllOf.storyName = 'Array (Items is an array) - Number - All Of'
ArrayArrayItemsIsAnArrayNumberAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayBoolean = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_BOOLEAN, fromDocumentToHash([false], ARRAY_ARRAY_ARRAY_BOOLEAN))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnArrayBoolean.storyName = 'Array (Items is an array) - Boolean'
ArrayArrayItemsIsAnArrayBoolean.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayBooleanEnum = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_BOOLEAN_ENUM, fromDocumentToHash([false], ARRAY_ARRAY_ARRAY_BOOLEAN_ENUM))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnArrayBooleanEnum.storyName = 'Array (Items is an array) - Boolean - Enum'
ArrayArrayItemsIsAnArrayBooleanEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayBooleanAnyOf = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_BOOLEAN_ANY_OF, fromDocumentToHash([false], ARRAY_ARRAY_ARRAY_BOOLEAN_ANY_OF))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnArrayBooleanAnyOf.storyName = 'Array (Items is an array) - Boolean - Any Of'
ArrayArrayItemsIsAnArrayBooleanAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayBooleanOneOf = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_BOOLEAN_ONE_OF, fromDocumentToHash([false], ARRAY_ARRAY_ARRAY_BOOLEAN_ONE_OF))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnArrayBooleanOneOf.storyName = 'Array (Items is an array) - Boolean - One Of'
ArrayArrayItemsIsAnArrayBooleanOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayBooleanAllOf = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_BOOLEAN_ALL_OF, fromDocumentToHash([false], ARRAY_ARRAY_ARRAY_BOOLEAN_ALL_OF))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnArrayBooleanAllOf.storyName = 'Array (Items is an array) - Boolean - All Of'
ArrayArrayItemsIsAnArrayBooleanAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNull = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_NULL, fromDocumentToHash([null], ARRAY_ARRAY_ARRAY_NULL))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnArrayNull.storyName = 'Array (Items is an array) - Null'
ArrayArrayItemsIsAnArrayNull.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNullEnum = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_NULL_ENUM, fromDocumentToHash([null], ARRAY_ARRAY_ARRAY_NULL_ENUM))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnArrayNullEnum.storyName = 'Array (Items is an array) - Null - Enum'
ArrayArrayItemsIsAnArrayNullEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNullAnyOf = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_NULL_ANY_OF, fromDocumentToHash([null], ARRAY_ARRAY_ARRAY_NULL_ANY_OF))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnArrayNullAnyOf.storyName = 'Array (Items is an array) - Null - Any Of'
ArrayArrayItemsIsAnArrayNullAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNullOneOf = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_NULL_ONE_OF, fromDocumentToHash([null], ARRAY_ARRAY_ARRAY_NULL_ONE_OF))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnArrayNullOneOf.storyName = 'Array (Items is an array) - Null - One Of'
ArrayArrayItemsIsAnArrayNullOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNullAllOf = () => (
  <Engine
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_NULL_ALL_OF, fromDocumentToHash([null], ARRAY_ARRAY_ARRAY_NULL_ALL_OF))}
    gears={GEARS}
  />
)

ArrayArrayItemsIsAnArrayNullAllOf.storyName = 'Array (Items is an array) - Null - All Of'
ArrayArrayItemsIsAnArrayNullAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}
