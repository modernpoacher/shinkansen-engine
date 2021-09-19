import React from 'react'
import {
  MemoryRouter
} from 'react-router-dom'

import Pinion from 'shinkansen-engine/components/pinion'

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

const PARAMS = {}

export default {
  title: 'Components/Pinion/Object',
  component: Pinion,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

export const ObjectString = () => (
  <Pinion
    pinion={toZashiki(OBJECT_STRING, fromDocumentToHash({ string: 'string' }, OBJECT_STRING))}
    params={PARAMS}
  />
)

ObjectString.storyName = 'Object - String'
ObjectString.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectStringEnum = () => (
  <Pinion
    pinion={toZashiki(OBJECT_STRING_ENUM, fromDocumentToHash({ string: 'Three' }, OBJECT_STRING_ENUM))}
    params={PARAMS}
  />
)

ObjectStringEnum.storyName = 'Object - String - Enum'
ObjectStringEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectStringAnyOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_STRING_ANY_OF, fromDocumentToHash({ string: 'three' }, OBJECT_STRING_ANY_OF))}
    params={PARAMS}
  />
)

ObjectStringAnyOf.storyName = 'Object - String - Any Of'
ObjectStringAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectStringOneOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_STRING_ONE_OF, fromDocumentToHash({ string: 'three' }, OBJECT_STRING_ONE_OF))}
    params={PARAMS}
  />
)

ObjectStringOneOf.storyName = 'Object - String - One Of'
ObjectStringOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectStringAllOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_STRING_ALL_OF, fromDocumentToHash({ string: 'string' }, OBJECT_STRING_ALL_OF))}
    params={PARAMS}
  />
)

ObjectStringAllOf.storyName = 'Object - String - All Of'
ObjectStringAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNumber = () => (
  <Pinion
    pinion={toZashiki(OBJECT_NUMBER, fromDocumentToHash({ number: 3 }, OBJECT_NUMBER))}
    params={PARAMS}
  />
)

ObjectNumber.storyName = 'Object - Number'
ObjectNumber.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNumberEnum = () => (
  <Pinion
    pinion={toZashiki(OBJECT_NUMBER_ENUM, fromDocumentToHash({ number: 3 }, OBJECT_NUMBER_ENUM))}
    params={PARAMS}
  />
)

ObjectNumberEnum.storyName = 'Object - Number - Enum'
ObjectNumberEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNumberAnyOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_NUMBER_ANY_OF, fromDocumentToHash({ number: 3 }, OBJECT_NUMBER_ANY_OF))}
    params={PARAMS}
  />
)

ObjectNumberAnyOf.storyName = 'Object - Number - Any Of'
ObjectNumberAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNumberOneOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_NUMBER_ONE_OF, fromDocumentToHash({ number: 3 }, OBJECT_NUMBER_ONE_OF))}
    params={PARAMS}
  />
)

ObjectNumberOneOf.storyName = 'Object - Number - One Of'
ObjectNumberOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNumberAllOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_NUMBER_ALL_OF, fromDocumentToHash({ number: 3 }, OBJECT_NUMBER_ALL_OF))}
    params={PARAMS}
  />
)

ObjectNumberAllOf.storyName = 'Object - Number - All Of'
ObjectNumberAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectString = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_STRING, fromDocumentToHash({ array: ['string'] }, OBJECT_ARRAY_OBJECT_STRING))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectString.storyName = 'Object - Array (Items is an object) - String'
ObjectArrayItemsIsAnObjectString.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectStringEnum = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_STRING_ENUM, fromDocumentToHash({ array: ['Three'] }, OBJECT_ARRAY_OBJECT_STRING_ENUM))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectStringEnum.storyName = 'Object - Array (Items is an object) - String - Enum'
ObjectArrayItemsIsAnObjectStringEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectStringAnyOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_STRING_ANY_OF, fromDocumentToHash({ array: ['three'] }, OBJECT_ARRAY_OBJECT_STRING_ANY_OF))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectStringAnyOf.storyName = 'Object - Array (Items is an object) - String - Any Of'
ObjectArrayItemsIsAnObjectStringAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectStringOneOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_STRING_ONE_OF, fromDocumentToHash({ array: ['three'] }, OBJECT_ARRAY_OBJECT_STRING_ONE_OF))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectStringOneOf.storyName = 'Object - Array (Items is an object) - String - One Of'
ObjectArrayItemsIsAnObjectStringOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectStringAllOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_STRING_ALL_OF, fromDocumentToHash({ array: ['string'] }, OBJECT_ARRAY_OBJECT_STRING_ALL_OF))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectStringAllOf.storyName = 'Object - Array (Items is an object) - String - All Of'
ObjectArrayItemsIsAnObjectStringAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNumber = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_NUMBER, fromDocumentToHash({ array: [3] }, OBJECT_ARRAY_OBJECT_NUMBER))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectNumber.storyName = 'Object - Array (Items is an object) - Number'
ObjectArrayItemsIsAnObjectNumber.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNumberEnum = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_NUMBER_ENUM, fromDocumentToHash({ array: [3] }, OBJECT_ARRAY_OBJECT_NUMBER_ENUM))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectNumberEnum.storyName = 'Object - Array (Items is an object) - Number - Enum'
ObjectArrayItemsIsAnObjectNumberEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNumberAnyOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_NUMBER_ANY_OF, fromDocumentToHash({ array: [3] }, OBJECT_ARRAY_OBJECT_NUMBER_ANY_OF))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectNumberAnyOf.storyName = 'Object - Array (Items is an object) - Number - Any Of'
ObjectArrayItemsIsAnObjectNumberAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNumberOneOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_NUMBER_ONE_OF, fromDocumentToHash({ array: [3] }, OBJECT_ARRAY_OBJECT_NUMBER_ONE_OF))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectNumberOneOf.storyName = 'Object - Array (Items is an object) - Number - One Of'
ObjectArrayItemsIsAnObjectNumberOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNumberAllOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_NUMBER_ALL_OF, fromDocumentToHash({ array: [3] }, OBJECT_ARRAY_OBJECT_NUMBER_ALL_OF))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectNumberAllOf.storyName = 'Object - Array (Items is an object) - Number - All Of'
ObjectArrayItemsIsAnObjectNumberAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectBoolean = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_BOOLEAN, fromDocumentToHash({ array: [false] }, OBJECT_ARRAY_OBJECT_BOOLEAN))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectBoolean.storyName = 'Object - Array (Items is an object) - Boolean'
ObjectArrayItemsIsAnObjectBoolean.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectBooleanEnum = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_BOOLEAN_ENUM, fromDocumentToHash({ array: [false] }, OBJECT_ARRAY_OBJECT_BOOLEAN_ENUM))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectBooleanEnum.storyName = 'Object - Array (Items is an object) - Boolean - Enum'
ObjectArrayItemsIsAnObjectBooleanEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectBooleanAnyOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_BOOLEAN_ANY_OF, fromDocumentToHash({ array: [false] }, OBJECT_ARRAY_OBJECT_BOOLEAN_ANY_OF))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectBooleanAnyOf.storyName = 'Object - Array (Items is an object) - Boolean - Any Of'
ObjectArrayItemsIsAnObjectBooleanAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectBooleanOneOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_BOOLEAN_ONE_OF, fromDocumentToHash({ array: [false] }, OBJECT_ARRAY_OBJECT_BOOLEAN_ONE_OF))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectBooleanOneOf.storyName = 'Object - Array (Items is an object) - Boolean - One Of'
ObjectArrayItemsIsAnObjectBooleanOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectBooleanAllOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_BOOLEAN_ALL_OF, fromDocumentToHash({ array: [false] }, OBJECT_ARRAY_OBJECT_BOOLEAN_ALL_OF))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectBooleanAllOf.storyName = 'Object - Array (Items is an object) - Boolean - All Of'
ObjectArrayItemsIsAnObjectBooleanAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNull = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_NULL, fromDocumentToHash({ array: [null] }, OBJECT_ARRAY_OBJECT_NULL))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectNull.storyName = 'Object - Array (Items is an object) - Null'
ObjectArrayItemsIsAnObjectNull.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNullEnum = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_NULL_ENUM, fromDocumentToHash({ array: [null] }, OBJECT_ARRAY_OBJECT_NULL_ENUM))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectNullEnum.storyName = 'Object - Array (Items is an object) - Null - Enum'
ObjectArrayItemsIsAnObjectNullEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNullAnyOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_NULL_ANY_OF, fromDocumentToHash({ array: [null] }, OBJECT_ARRAY_OBJECT_NULL_ANY_OF))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectNullAnyOf.storyName = 'Object - Array (Items is an object) - Null - Any Of'
ObjectArrayItemsIsAnObjectNullAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNullOneOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_NULL_ONE_OF, fromDocumentToHash({ array: [null] }, OBJECT_ARRAY_OBJECT_NULL_ONE_OF))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectNullOneOf.storyName = 'Object - Array (Items is an object) - Null - One Of'
ObjectArrayItemsIsAnObjectNullOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNullAllOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_NULL_ALL_OF, fromDocumentToHash({ array: [null] }, OBJECT_ARRAY_OBJECT_NULL_ALL_OF))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnObjectNullAllOf.storyName = 'Object - Array (Items is an object) - Null - All Of'
ObjectArrayItemsIsAnObjectNullAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayString = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_STRING, fromDocumentToHash({ array: ['string'] }, OBJECT_ARRAY_ARRAY_STRING))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayString.storyName = 'Object - Array (Items is an array) - String'
ObjectArrayItemsIsAnArrayString.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayStringEnum = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_STRING_ENUM, fromDocumentToHash({ array: ['Three'] }, OBJECT_ARRAY_ARRAY_STRING_ENUM))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayStringEnum.storyName = 'Object - Array (Items is an array) - String - Enum'
ObjectArrayItemsIsAnArrayStringEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayStringAnyOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_STRING_ANY_OF, fromDocumentToHash({ array: ['three'] }, OBJECT_ARRAY_ARRAY_STRING_ANY_OF))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayStringAnyOf.storyName = 'Object - Array (Items is an array) - String - Any Of'
ObjectArrayItemsIsAnArrayStringAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayStringOneOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_STRING_ONE_OF, fromDocumentToHash({ array: ['three'] }, OBJECT_ARRAY_ARRAY_STRING_ONE_OF))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayStringOneOf.storyName = 'Object - Array (Items is an array) - String - One Of'
ObjectArrayItemsIsAnArrayStringOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayStringAllOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_STRING_ALL_OF, fromDocumentToHash({ array: ['string'] }, OBJECT_ARRAY_ARRAY_STRING_ALL_OF))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayStringAllOf.storyName = 'Object - Array (Items is an array) - String - All Of'
ObjectArrayItemsIsAnArrayStringAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNumber = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_NUMBER, fromDocumentToHash({ array: [3] }, OBJECT_ARRAY_ARRAY_NUMBER))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayNumber.storyName = 'Object - Array (Items is an array) - Number'
ObjectArrayItemsIsAnArrayNumber.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNumberEnum = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_NUMBER_ENUM, fromDocumentToHash({ array: [3] }, OBJECT_ARRAY_ARRAY_NUMBER_ENUM))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayNumberEnum.storyName = 'Object - Array (Items is an array) - Number - Enum'
ObjectArrayItemsIsAnArrayNumberEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNumberAnyOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_NUMBER_ANY_OF, fromDocumentToHash({ array: [3] }, OBJECT_ARRAY_ARRAY_NUMBER_ANY_OF))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayNumberAnyOf.storyName = 'Object - Array (Items is an array) - Number - Any Of'
ObjectArrayItemsIsAnArrayNumberAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNumberOneOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_NUMBER_ONE_OF, fromDocumentToHash({ array: [3] }, OBJECT_ARRAY_ARRAY_NUMBER_ONE_OF))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayNumberOneOf.storyName = 'Object - Array (Items is an array) - Number - One Of'
ObjectArrayItemsIsAnArrayNumberOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNumberAllOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_NUMBER_ALL_OF, fromDocumentToHash({ array: [3] }, OBJECT_ARRAY_ARRAY_NUMBER_ALL_OF))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayNumberAllOf.storyName = 'Object - Array (Items is an array) - Number - All Of'
ObjectArrayItemsIsAnArrayNumberAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayBoolean = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_BOOLEAN, fromDocumentToHash({ array: [false] }, OBJECT_ARRAY_ARRAY_BOOLEAN))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayBoolean.storyName = 'Object - Array (Items is an array) - Boolean'
ObjectArrayItemsIsAnArrayBoolean.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayBooleanEnum = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_BOOLEAN_ENUM, fromDocumentToHash({ array: [false] }, OBJECT_ARRAY_ARRAY_BOOLEAN_ENUM))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayBooleanEnum.storyName = 'Object - Array (Items is an array) - Boolean - Enum'
ObjectArrayItemsIsAnArrayBooleanEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayBooleanAnyOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_BOOLEAN_ANY_OF, fromDocumentToHash({ array: [false] }, OBJECT_ARRAY_ARRAY_BOOLEAN_ANY_OF))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayBooleanAnyOf.storyName = 'Object - Array (Items is an array) - Boolean - Any Of'
ObjectArrayItemsIsAnArrayBooleanAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayBooleanOneOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_BOOLEAN_ONE_OF, fromDocumentToHash({ array: [false] }, OBJECT_ARRAY_ARRAY_BOOLEAN_ONE_OF))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayBooleanOneOf.storyName = 'Object - Array (Items is an array) - Boolean - One Of'
ObjectArrayItemsIsAnArrayBooleanOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayBooleanAllOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_BOOLEAN_ALL_OF, fromDocumentToHash({ array: [false] }, OBJECT_ARRAY_ARRAY_BOOLEAN_ALL_OF))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayBooleanAllOf.storyName = 'Object - Array (Items is an array) - Boolean - All Of'
ObjectArrayItemsIsAnArrayBooleanAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNull = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_NULL, fromDocumentToHash({ array: [null] }, OBJECT_ARRAY_ARRAY_NULL))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayNull.storyName = 'Object - Array (Items is an array) - Null'
ObjectArrayItemsIsAnArrayNull.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNullEnum = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_NULL_ENUM, fromDocumentToHash({ array: [null] }, OBJECT_ARRAY_ARRAY_NULL_ENUM))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayNullEnum.storyName = 'Object - Array (Items is an array) - Null - Enum'
ObjectArrayItemsIsAnArrayNullEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNullAnyOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_NULL_ANY_OF, fromDocumentToHash({ array: [null] }, OBJECT_ARRAY_ARRAY_NULL_ANY_OF))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayNullAnyOf.storyName = 'Object - Array (Items is an array) - Null - Any Of'
ObjectArrayItemsIsAnArrayNullAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNullOneOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_NULL_ONE_OF, fromDocumentToHash({ array: [null] }, OBJECT_ARRAY_ARRAY_NULL_ONE_OF))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayNullOneOf.storyName = 'Object - Array (Items is an array) - Null - One Of'
ObjectArrayItemsIsAnArrayNullOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNullAllOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_NULL_ALL_OF, fromDocumentToHash({ array: [null] }, OBJECT_ARRAY_ARRAY_NULL_ALL_OF))}
    params={PARAMS}
  />
)

ObjectArrayItemsIsAnArrayNullAllOf.storyName = 'Object - Array (Items is an array) - Null - All Of'
ObjectArrayItemsIsAnArrayNullAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectBoolean = () => (
  <Pinion
    pinion={toZashiki(OBJECT_BOOLEAN, fromDocumentToHash({ boolean: false }, OBJECT_BOOLEAN))}
    params={PARAMS}
  />
)

ObjectBoolean.storyName = 'Object - Boolean'
ObjectBoolean.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectBooleanEnum = () => (
  <Pinion
    pinion={toZashiki(OBJECT_BOOLEAN_ENUM, fromDocumentToHash({ boolean: false }, OBJECT_BOOLEAN_ENUM))}
    params={PARAMS}
  />
)

ObjectBooleanEnum.storyName = 'Object - Boolean - Enum'
ObjectBooleanEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectBooleanAnyOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_BOOLEAN_ANY_OF, fromDocumentToHash({ boolean: false }, OBJECT_BOOLEAN_ANY_OF))}
    params={PARAMS}
  />
)

ObjectBooleanAnyOf.storyName = 'Object - Boolean - Any Of'
ObjectBooleanAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectBooleanOneOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_BOOLEAN_ONE_OF, fromDocumentToHash({ boolean: false }, OBJECT_BOOLEAN_ONE_OF))}
    params={PARAMS}
  />
)

ObjectBooleanOneOf.storyName = 'Object - Boolean - One Of'
ObjectBooleanOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectBooleanAllOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_BOOLEAN_ALL_OF, fromDocumentToHash({ boolean: false }, OBJECT_BOOLEAN_ALL_OF))}
    params={PARAMS}
  />
)

ObjectBooleanAllOf.storyName = 'Object - Boolean - All Of'
ObjectBooleanAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNull = () => (
  <Pinion
    pinion={toZashiki(OBJECT_NULL, fromDocumentToHash({ null: null }, OBJECT_NULL))}
    params={PARAMS}
  />
)

ObjectNull.storyName = 'Object - Null'
ObjectNull.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNullEnum = () => (
  <Pinion
    pinion={toZashiki(OBJECT_NULL_ENUM, fromDocumentToHash({ null: null }, OBJECT_NULL_ENUM))}
    params={PARAMS}
  />
)

ObjectNullEnum.storyName = 'Object - Null - Enum'
ObjectNullEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNullAnyOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_NULL_ANY_OF, fromDocumentToHash({ null: null }, OBJECT_NULL_ANY_OF))}
    params={PARAMS}
  />
)

ObjectNullAnyOf.storyName = 'Object - Null - Any Of'
ObjectNullAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNullOneOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_NULL_ONE_OF, fromDocumentToHash({ null: null }, OBJECT_NULL_ONE_OF))}
    params={PARAMS}
  />
)

ObjectNullOneOf.storyName = 'Object - Null - One Of'
ObjectNullOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNullAllOf = () => (
  <Pinion
    pinion={toZashiki(OBJECT_NULL_ALL_OF, fromDocumentToHash({ null: null }, OBJECT_NULL_ALL_OF))}
    params={PARAMS}
  />
)

ObjectNullAllOf.storyName = 'Object - Null - All Of'
ObjectNullAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}
