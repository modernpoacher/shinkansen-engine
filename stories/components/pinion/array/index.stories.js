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

const PARAMS = {}

export default {
  title: 'Components/Pinion/Array',
  component: Pinion,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

export const ArrayArrayItemsIsAnObjectString = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_STRING, fromDocumentToHash(['string'], ARRAY_ARRAY_OBJECT_STRING))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectString.storyName = 'Array (Items is an object) - String'
ArrayArrayItemsIsAnObjectString.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectStringEnum = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_STRING_ENUM, fromDocumentToHash(['Three'], ARRAY_ARRAY_OBJECT_STRING_ENUM))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectStringEnum.storyName = 'Array (Items is an object) - String - Enum'
ArrayArrayItemsIsAnObjectStringEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectStringAnyOf = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_STRING_ANY_OF, fromDocumentToHash(['three'], ARRAY_ARRAY_OBJECT_STRING_ANY_OF))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectStringAnyOf.storyName = 'Array (Items is an object) - String - Any Of'
ArrayArrayItemsIsAnObjectStringAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectStringOneOf = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_STRING_ONE_OF, fromDocumentToHash(['three'], ARRAY_ARRAY_OBJECT_STRING_ONE_OF))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectStringOneOf.storyName = 'Array (Items is an object) - String - One Of'
ArrayArrayItemsIsAnObjectStringOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectStringAllOf = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_STRING_ALL_OF, fromDocumentToHash(['string'], ARRAY_ARRAY_OBJECT_STRING_ALL_OF))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectStringAllOf.storyName = 'Array (Items is an object) - String - All Of'
ArrayArrayItemsIsAnObjectStringAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNumber = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_NUMBER, fromDocumentToHash([3], ARRAY_ARRAY_OBJECT_NUMBER))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectNumber.storyName = 'Array (Items is an object) - Number'
ArrayArrayItemsIsAnObjectNumber.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNumberEnum = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_NUMBER_ENUM, fromDocumentToHash([3], ARRAY_ARRAY_OBJECT_NUMBER_ENUM))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectNumberEnum.storyName = 'Array (Items is an object) - Number - Enum'
ArrayArrayItemsIsAnObjectNumberEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNumberAnyOf = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF, fromDocumentToHash([3], ARRAY_ARRAY_OBJECT_NUMBER_ANY_OF))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectNumberAnyOf.storyName = 'Array (Items is an object) - Number - Any Of'
ArrayArrayItemsIsAnObjectNumberAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNumberOneOf = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF, fromDocumentToHash([3], ARRAY_ARRAY_OBJECT_NUMBER_ONE_OF))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectNumberOneOf.storyName = 'Array (Items is an object) - Number - One Of'
ArrayArrayItemsIsAnObjectNumberOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNumberAllOf = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_NUMBER_ALL_OF, fromDocumentToHash([3], ARRAY_ARRAY_OBJECT_NUMBER_ALL_OF))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectNumberAllOf.storyName = 'Array (Items is an object) - Number - All Of'
ArrayArrayItemsIsAnObjectNumberAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectBoolean = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_BOOLEAN, fromDocumentToHash([false], ARRAY_ARRAY_OBJECT_BOOLEAN))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectBoolean.storyName = 'Array (Items is an object) - Boolean'
ArrayArrayItemsIsAnObjectBoolean.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectBooleanEnum = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_BOOLEAN_ENUM, fromDocumentToHash([false], ARRAY_ARRAY_OBJECT_BOOLEAN_ENUM))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectBooleanEnum.storyName = 'Array (Items is an object) - Boolean - Enum'
ArrayArrayItemsIsAnObjectBooleanEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectBooleanAnyOf = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_BOOLEAN_ANY_OF, fromDocumentToHash([false], ARRAY_ARRAY_OBJECT_BOOLEAN_ANY_OF))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectBooleanAnyOf.storyName = 'Array (Items is an object) - Boolean - Any Of'
ArrayArrayItemsIsAnObjectBooleanAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectBooleanOneOf = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_BOOLEAN_ONE_OF, fromDocumentToHash([false], ARRAY_ARRAY_OBJECT_BOOLEAN_ONE_OF))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectBooleanOneOf.storyName = 'Array (Items is an object) - Boolean - One Of'
ArrayArrayItemsIsAnObjectBooleanOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectBooleanAllOf = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_BOOLEAN_ALL_OF, fromDocumentToHash([false], ARRAY_ARRAY_OBJECT_BOOLEAN_ALL_OF))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectBooleanAllOf.storyName = 'Array (Items is an object) - Boolean - All Of'
ArrayArrayItemsIsAnObjectBooleanAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNull = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_NULL, fromDocumentToHash([null], ARRAY_ARRAY_OBJECT_NULL))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectNull.storyName = 'Array (Items is an object) - Null'
ArrayArrayItemsIsAnObjectNull.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNullEnum = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_NULL_ENUM, fromDocumentToHash([null], ARRAY_ARRAY_OBJECT_NULL_ENUM))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectNullEnum.storyName = 'Array (Items is an object) - Null - Enum'
ArrayArrayItemsIsAnObjectNullEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNullAnyOf = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_NULL_ANY_OF, fromDocumentToHash([null], ARRAY_ARRAY_OBJECT_NULL_ANY_OF))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectNullAnyOf.storyName = 'Array (Items is an object) - Null - Any Of'
ArrayArrayItemsIsAnObjectNullAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNullOneOf = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_NULL_ONE_OF, fromDocumentToHash([null], ARRAY_ARRAY_OBJECT_NULL_ONE_OF))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectNullOneOf.storyName = 'Array (Items is an object) - Null - One Of'
ArrayArrayItemsIsAnObjectNullOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnObjectNullAllOf = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_OBJECT_NULL_ALL_OF, fromDocumentToHash([null], ARRAY_ARRAY_OBJECT_NULL_ALL_OF))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnObjectNullAllOf.storyName = 'Array (Items is an object) - Null - All Of'
ArrayArrayItemsIsAnObjectNullAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayString = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_STRING, fromDocumentToHash(['string'], ARRAY_ARRAY_ARRAY_STRING))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayString.storyName = 'Array (Items is an array) - String'
ArrayArrayItemsIsAnArrayString.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayStringEnum = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_STRING_ENUM, fromDocumentToHash(['Three'], ARRAY_ARRAY_ARRAY_STRING_ENUM))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayStringEnum.storyName = 'Array (Items is an array) - String - Enum'
ArrayArrayItemsIsAnArrayStringEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayStringAnyOf = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_STRING_ANY_OF, fromDocumentToHash(['three'], ARRAY_ARRAY_ARRAY_STRING_ANY_OF))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayStringAnyOf.storyName = 'Array (Items is an array) - String - Any Of'
ArrayArrayItemsIsAnArrayStringAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayStringOneOf = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_STRING_ONE_OF, fromDocumentToHash(['three'], ARRAY_ARRAY_ARRAY_STRING_ONE_OF))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayStringOneOf.storyName = 'Array (Items is an array) - String - One Of'
ArrayArrayItemsIsAnArrayStringOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayStringAllOf = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_STRING_ALL_OF, fromDocumentToHash(['string'], ARRAY_ARRAY_ARRAY_STRING_ALL_OF))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayStringAllOf.storyName = 'Array (Items is an array) - String - All Of'
ArrayArrayItemsIsAnArrayStringAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNumber = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_NUMBER, fromDocumentToHash([3], ARRAY_ARRAY_ARRAY_NUMBER))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayNumber.storyName = 'Array (Items is an array) - Number'
ArrayArrayItemsIsAnArrayNumber.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNumberEnum = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_NUMBER_ENUM, fromDocumentToHash([3], ARRAY_ARRAY_ARRAY_NUMBER_ENUM))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayNumberEnum.storyName = 'Array (Items is an array) - Number - Enum'
ArrayArrayItemsIsAnArrayNumberEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNumberAnyOf = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF, fromDocumentToHash([3], ARRAY_ARRAY_ARRAY_NUMBER_ANY_OF))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayNumberAnyOf.storyName = 'Array (Items is an array) - Number - Any Of'
ArrayArrayItemsIsAnArrayNumberAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNumberOneOf = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF, fromDocumentToHash([3], ARRAY_ARRAY_ARRAY_NUMBER_ONE_OF))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayNumberOneOf.storyName = 'Array (Items is an array) - Number - One Of'
ArrayArrayItemsIsAnArrayNumberOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNumberAllOf = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_NUMBER_ALL_OF, fromDocumentToHash([3], ARRAY_ARRAY_ARRAY_NUMBER_ALL_OF))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayNumberAllOf.storyName = 'Array (Items is an array) - Number - All Of'
ArrayArrayItemsIsAnArrayNumberAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayBoolean = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_BOOLEAN, fromDocumentToHash([false], ARRAY_ARRAY_ARRAY_BOOLEAN))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayBoolean.storyName = 'Array (Items is an array) - Boolean'
ArrayArrayItemsIsAnArrayBoolean.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayBooleanEnum = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_BOOLEAN_ENUM, fromDocumentToHash([false], ARRAY_ARRAY_ARRAY_BOOLEAN_ENUM))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayBooleanEnum.storyName = 'Array (Items is an array) - Boolean - Enum'
ArrayArrayItemsIsAnArrayBooleanEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayBooleanAnyOf = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_BOOLEAN_ANY_OF, fromDocumentToHash([false], ARRAY_ARRAY_ARRAY_BOOLEAN_ANY_OF))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayBooleanAnyOf.storyName = 'Array (Items is an array) - Boolean - Any Of'
ArrayArrayItemsIsAnArrayBooleanAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayBooleanOneOf = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_BOOLEAN_ONE_OF, fromDocumentToHash([false], ARRAY_ARRAY_ARRAY_BOOLEAN_ONE_OF))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayBooleanOneOf.storyName = 'Array (Items is an array) - Boolean - One Of'
ArrayArrayItemsIsAnArrayBooleanOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayBooleanAllOf = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_BOOLEAN_ALL_OF, fromDocumentToHash([false], ARRAY_ARRAY_ARRAY_BOOLEAN_ALL_OF))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayBooleanAllOf.storyName = 'Array (Items is an array) - Boolean - All Of'
ArrayArrayItemsIsAnArrayBooleanAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNull = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_NULL, fromDocumentToHash([null], ARRAY_ARRAY_ARRAY_NULL))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayNull.storyName = 'Array (Items is an array) - Null'
ArrayArrayItemsIsAnArrayNull.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNullEnum = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_NULL_ENUM, fromDocumentToHash([null], ARRAY_ARRAY_ARRAY_NULL_ENUM))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayNullEnum.storyName = 'Array (Items is an array) - Null - Enum'
ArrayArrayItemsIsAnArrayNullEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNullAnyOf = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_NULL_ANY_OF, fromDocumentToHash([null], ARRAY_ARRAY_ARRAY_NULL_ANY_OF))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayNullAnyOf.storyName = 'Array (Items is an array) - Null - Any Of'
ArrayArrayItemsIsAnArrayNullAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNullOneOf = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_NULL_ONE_OF, fromDocumentToHash([null], ARRAY_ARRAY_ARRAY_NULL_ONE_OF))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayNullOneOf.storyName = 'Array (Items is an array) - Null - One Of'
ArrayArrayItemsIsAnArrayNullOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ArrayArrayItemsIsAnArrayNullAllOf = () => (
  <Pinion
    pinion={toZashiki(ARRAY_ARRAY_ARRAY_NULL_ALL_OF, fromDocumentToHash([null], ARRAY_ARRAY_ARRAY_NULL_ALL_OF))}
    params={PARAMS}
  />
)

ArrayArrayItemsIsAnArrayNullAllOf.storyName = 'Array (Items is an array) - Null - All Of'
ArrayArrayItemsIsAnArrayNullAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}
