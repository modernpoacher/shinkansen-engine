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
  ]
}

export const ObjectString = () => (
  <Engine
    pinion={toZashiki(OBJECT_STRING, fromDocumentToHash({ string: 'string' }, OBJECT_STRING))}
    gears={GEARS}
  />
)

ObjectString.storyName = 'Object - String'
ObjectString.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectStringEnum = () => (
  <Engine
    pinion={toZashiki(OBJECT_STRING_ENUM, fromDocumentToHash({ string: 'Three' }, OBJECT_STRING_ENUM))}
    gears={GEARS}
  />
)

ObjectStringEnum.storyName = 'Object - String - Enum'
ObjectStringEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectStringAnyOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_STRING_ANY_OF, fromDocumentToHash({ string: 'three' }, OBJECT_STRING_ANY_OF))}
    gears={GEARS}
  />
)

ObjectStringAnyOf.storyName = 'Object - String - Any Of'
ObjectStringAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectStringOneOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_STRING_ONE_OF, fromDocumentToHash({ string: 'three' }, OBJECT_STRING_ONE_OF))}
    gears={GEARS}
  />
)

ObjectStringOneOf.storyName = 'Object - String - One Of'
ObjectStringOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectStringAllOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_STRING_ALL_OF, fromDocumentToHash({ string: 'string' }, OBJECT_STRING_ALL_OF))}
    gears={GEARS}
  />
)

ObjectStringAllOf.storyName = 'Object - String - All Of'
ObjectStringAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNumber = () => (
  <Engine
    pinion={toZashiki(OBJECT_NUMBER, fromDocumentToHash({ number: 3 }, OBJECT_NUMBER))}
    gears={GEARS}
  />
)

ObjectNumber.storyName = 'Object - Number'
ObjectNumber.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNumberEnum = () => (
  <Engine
    pinion={toZashiki(OBJECT_NUMBER_ENUM, fromDocumentToHash({ number: 3 }, OBJECT_NUMBER_ENUM))}
    gears={GEARS}
  />
)

ObjectNumberEnum.storyName = 'Object - Number - Enum'
ObjectNumberEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNumberAnyOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_NUMBER_ANY_OF, fromDocumentToHash({ number: 3 }, OBJECT_NUMBER_ANY_OF))}
    gears={GEARS}
  />
)

ObjectNumberAnyOf.storyName = 'Object - Number - Any Of'
ObjectNumberAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNumberOneOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_NUMBER_ONE_OF, fromDocumentToHash({ number: 3 }, OBJECT_NUMBER_ONE_OF))}
    gears={GEARS}
  />
)

ObjectNumberOneOf.storyName = 'Object - Number - One Of'
ObjectNumberOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNumberAllOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_NUMBER_ALL_OF, fromDocumentToHash({ number: 3 }, OBJECT_NUMBER_ALL_OF))}
    gears={GEARS}
  />
)

ObjectNumberAllOf.storyName = 'Object - Number - All Of'
ObjectNumberAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectString = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_STRING, fromDocumentToHash({ array: ['string'] }, OBJECT_ARRAY_OBJECT_STRING))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnObjectString.storyName = 'Object - Array (Items is an object) - String'
ObjectArrayItemsIsAnObjectString.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectStringEnum = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_STRING_ENUM, fromDocumentToHash({ array: ['Three'] }, OBJECT_ARRAY_OBJECT_STRING_ENUM))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnObjectStringEnum.storyName = 'Object - Array (Items is an object) - String - Enum'
ObjectArrayItemsIsAnObjectStringEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectStringAnyOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_STRING_ANY_OF, fromDocumentToHash({ array: ['three'] }, OBJECT_ARRAY_OBJECT_STRING_ANY_OF))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnObjectStringAnyOf.storyName = 'Object - Array (Items is an object) - String - Any Of'
ObjectArrayItemsIsAnObjectStringAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectStringOneOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_STRING_ONE_OF, fromDocumentToHash({ array: ['three'] }, OBJECT_ARRAY_OBJECT_STRING_ONE_OF))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnObjectStringOneOf.storyName = 'Object - Array (Items is an object) - String - One Of'
ObjectArrayItemsIsAnObjectStringOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectStringAllOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_STRING_ALL_OF, fromDocumentToHash({ array: ['string'] }, OBJECT_ARRAY_OBJECT_STRING_ALL_OF))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnObjectStringAllOf.storyName = 'Object - Array (Items is an object) - String - All Of'
ObjectArrayItemsIsAnObjectStringAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNumber = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_NUMBER, fromDocumentToHash({ array: [3] }, OBJECT_ARRAY_OBJECT_NUMBER))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnObjectNumber.storyName = 'Object - Array (Items is an object) - Number'
ObjectArrayItemsIsAnObjectNumber.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNumberEnum = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_NUMBER_ENUM, fromDocumentToHash({ array: [3] }, OBJECT_ARRAY_OBJECT_NUMBER_ENUM))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnObjectNumberEnum.storyName = 'Object - Array (Items is an object) - Number - Enum'
ObjectArrayItemsIsAnObjectNumberEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNumberAnyOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_NUMBER_ANY_OF, fromDocumentToHash({ array: [3] }, OBJECT_ARRAY_OBJECT_NUMBER_ANY_OF))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnObjectNumberAnyOf.storyName = 'Object - Array (Items is an object) - Number - Any Of'
ObjectArrayItemsIsAnObjectNumberAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNumberOneOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_NUMBER_ONE_OF, fromDocumentToHash({ array: [3] }, OBJECT_ARRAY_OBJECT_NUMBER_ONE_OF))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnObjectNumberOneOf.storyName = 'Object - Array (Items is an object) - Number - One Of'
ObjectArrayItemsIsAnObjectNumberOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNumberAllOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_NUMBER_ALL_OF, fromDocumentToHash({ array: [3] }, OBJECT_ARRAY_OBJECT_NUMBER_ALL_OF))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnObjectNumberAllOf.storyName = 'Object - Array (Items is an object) - Number - All Of'
ObjectArrayItemsIsAnObjectNumberAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectBoolean = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_BOOLEAN, fromDocumentToHash({ array: [false] }, OBJECT_ARRAY_OBJECT_BOOLEAN))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnObjectBoolean.storyName = 'Object - Array (Items is an object) - Boolean'
ObjectArrayItemsIsAnObjectBoolean.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectBooleanEnum = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_BOOLEAN_ENUM, fromDocumentToHash({ array: [false] }, OBJECT_ARRAY_OBJECT_BOOLEAN_ENUM))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnObjectBooleanEnum.storyName = 'Object - Array (Items is an object) - Boolean - Enum'
ObjectArrayItemsIsAnObjectBooleanEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectBooleanAnyOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_BOOLEAN_ANY_OF, fromDocumentToHash({ array: [false] }, OBJECT_ARRAY_OBJECT_BOOLEAN_ANY_OF))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnObjectBooleanAnyOf.storyName = 'Object - Array (Items is an object) - Boolean - Any Of'
ObjectArrayItemsIsAnObjectBooleanAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectBooleanOneOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_BOOLEAN_ONE_OF, fromDocumentToHash({ array: [false] }, OBJECT_ARRAY_OBJECT_BOOLEAN_ONE_OF))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnObjectBooleanOneOf.storyName = 'Object - Array (Items is an object) - Boolean - One Of'
ObjectArrayItemsIsAnObjectBooleanOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectBooleanAllOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_BOOLEAN_ALL_OF, fromDocumentToHash({ array: [false] }, OBJECT_ARRAY_OBJECT_BOOLEAN_ALL_OF))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnObjectBooleanAllOf.storyName = 'Object - Array (Items is an object) - Boolean - All Of'
ObjectArrayItemsIsAnObjectBooleanAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNull = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_NULL, fromDocumentToHash({ array: [null] }, OBJECT_ARRAY_OBJECT_NULL))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnObjectNull.storyName = 'Object - Array (Items is an object) - Null'
ObjectArrayItemsIsAnObjectNull.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNullEnum = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_NULL_ENUM, fromDocumentToHash({ array: [null] }, OBJECT_ARRAY_OBJECT_NULL_ENUM))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnObjectNullEnum.storyName = 'Object - Array (Items is an object) - Null - Enum'
ObjectArrayItemsIsAnObjectNullEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNullAnyOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_NULL_ANY_OF, fromDocumentToHash({ array: [null] }, OBJECT_ARRAY_OBJECT_NULL_ANY_OF))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnObjectNullAnyOf.storyName = 'Object - Array (Items is an object) - Null - Any Of'
ObjectArrayItemsIsAnObjectNullAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNullOneOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_NULL_ONE_OF, fromDocumentToHash({ array: [null] }, OBJECT_ARRAY_OBJECT_NULL_ONE_OF))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnObjectNullOneOf.storyName = 'Object - Array (Items is an object) - Null - One Of'
ObjectArrayItemsIsAnObjectNullOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnObjectNullAllOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_OBJECT_NULL_ALL_OF, fromDocumentToHash({ array: [null] }, OBJECT_ARRAY_OBJECT_NULL_ALL_OF))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnObjectNullAllOf.storyName = 'Object - Array (Items is an object) - Null - All Of'
ObjectArrayItemsIsAnObjectNullAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayString = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_STRING, fromDocumentToHash({ array: ['string'] }, OBJECT_ARRAY_ARRAY_STRING))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnArrayString.storyName = 'Object - Array (Items is an array) - String'
ObjectArrayItemsIsAnArrayString.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayStringEnum = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_STRING_ENUM, fromDocumentToHash({ array: ['Three'] }, OBJECT_ARRAY_ARRAY_STRING_ENUM))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnArrayStringEnum.storyName = 'Object - Array (Items is an array) - String - Enum'
ObjectArrayItemsIsAnArrayStringEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayStringAnyOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_STRING_ANY_OF, fromDocumentToHash({ array: ['three'] }, OBJECT_ARRAY_ARRAY_STRING_ANY_OF))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnArrayStringAnyOf.storyName = 'Object - Array (Items is an array) - String - Any Of'
ObjectArrayItemsIsAnArrayStringAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayStringOneOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_STRING_ONE_OF, fromDocumentToHash({ array: ['three'] }, OBJECT_ARRAY_ARRAY_STRING_ONE_OF))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnArrayStringOneOf.storyName = 'Object - Array (Items is an array) - String - One Of'
ObjectArrayItemsIsAnArrayStringOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayStringAllOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_STRING_ALL_OF, fromDocumentToHash({ array: ['string'] }, OBJECT_ARRAY_ARRAY_STRING_ALL_OF))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnArrayStringAllOf.storyName = 'Object - Array (Items is an array) - String - All Of'
ObjectArrayItemsIsAnArrayStringAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNumber = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_NUMBER, fromDocumentToHash({ array: [3] }, OBJECT_ARRAY_ARRAY_NUMBER))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnArrayNumber.storyName = 'Object - Array (Items is an array) - Number'
ObjectArrayItemsIsAnArrayNumber.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNumberEnum = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_NUMBER_ENUM, fromDocumentToHash({ array: [3] }, OBJECT_ARRAY_ARRAY_NUMBER_ENUM))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnArrayNumberEnum.storyName = 'Object - Array (Items is an array) - Number - Enum'
ObjectArrayItemsIsAnArrayNumberEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNumberAnyOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_NUMBER_ANY_OF, fromDocumentToHash({ array: [3] }, OBJECT_ARRAY_ARRAY_NUMBER_ANY_OF))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnArrayNumberAnyOf.storyName = 'Object - Array (Items is an array) - Number - Any Of'
ObjectArrayItemsIsAnArrayNumberAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNumberOneOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_NUMBER_ONE_OF, fromDocumentToHash({ array: [3] }, OBJECT_ARRAY_ARRAY_NUMBER_ONE_OF))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnArrayNumberOneOf.storyName = 'Object - Array (Items is an array) - Number - One Of'
ObjectArrayItemsIsAnArrayNumberOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNumberAllOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_NUMBER_ALL_OF, fromDocumentToHash({ array: [3] }, OBJECT_ARRAY_ARRAY_NUMBER_ALL_OF))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnArrayNumberAllOf.storyName = 'Object - Array (Items is an array) - Number - All Of'
ObjectArrayItemsIsAnArrayNumberAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayBoolean = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_BOOLEAN, fromDocumentToHash({ array: [false] }, OBJECT_ARRAY_ARRAY_BOOLEAN))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnArrayBoolean.storyName = 'Object - Array (Items is an array) - Boolean'
ObjectArrayItemsIsAnArrayBoolean.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayBooleanEnum = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_BOOLEAN_ENUM, fromDocumentToHash({ array: [false] }, OBJECT_ARRAY_ARRAY_BOOLEAN_ENUM))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnArrayBooleanEnum.storyName = 'Object - Array (Items is an array) - Boolean - Enum'
ObjectArrayItemsIsAnArrayBooleanEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayBooleanAnyOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_BOOLEAN_ANY_OF, fromDocumentToHash({ array: [false] }, OBJECT_ARRAY_ARRAY_BOOLEAN_ANY_OF))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnArrayBooleanAnyOf.storyName = 'Object - Array (Items is an array) - Boolean - Any Of'
ObjectArrayItemsIsAnArrayBooleanAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayBooleanOneOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_BOOLEAN_ONE_OF, fromDocumentToHash({ array: [false] }, OBJECT_ARRAY_ARRAY_BOOLEAN_ONE_OF))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnArrayBooleanOneOf.storyName = 'Object - Array (Items is an array) - Boolean - One Of'
ObjectArrayItemsIsAnArrayBooleanOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayBooleanAllOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_BOOLEAN_ALL_OF, fromDocumentToHash({ array: [false] }, OBJECT_ARRAY_ARRAY_BOOLEAN_ALL_OF))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnArrayBooleanAllOf.storyName = 'Object - Array (Items is an array) - Boolean - All Of'
ObjectArrayItemsIsAnArrayBooleanAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNull = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_NULL, fromDocumentToHash({ array: [null] }, OBJECT_ARRAY_ARRAY_NULL))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnArrayNull.storyName = 'Object - Array (Items is an array) - Null'
ObjectArrayItemsIsAnArrayNull.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNullEnum = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_NULL_ENUM, fromDocumentToHash({ array: [null] }, OBJECT_ARRAY_ARRAY_NULL_ENUM))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnArrayNullEnum.storyName = 'Object - Array (Items is an array) - Null - Enum'
ObjectArrayItemsIsAnArrayNullEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNullAnyOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_NULL_ANY_OF, fromDocumentToHash({ array: [null] }, OBJECT_ARRAY_ARRAY_NULL_ANY_OF))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnArrayNullAnyOf.storyName = 'Object - Array (Items is an array) - Null - Any Of'
ObjectArrayItemsIsAnArrayNullAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNullOneOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_NULL_ONE_OF, fromDocumentToHash({ array: [null] }, OBJECT_ARRAY_ARRAY_NULL_ONE_OF))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnArrayNullOneOf.storyName = 'Object - Array (Items is an array) - Null - One Of'
ObjectArrayItemsIsAnArrayNullOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectArrayItemsIsAnArrayNullAllOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_ARRAY_ARRAY_NULL_ALL_OF, fromDocumentToHash({ array: [null] }, OBJECT_ARRAY_ARRAY_NULL_ALL_OF))}
    gears={GEARS}
  />
)

ObjectArrayItemsIsAnArrayNullAllOf.storyName = 'Object - Array (Items is an array) - Null - All Of'
ObjectArrayItemsIsAnArrayNullAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectBoolean = () => (
  <Engine
    pinion={toZashiki(OBJECT_BOOLEAN, fromDocumentToHash({ boolean: false }, OBJECT_BOOLEAN))}
    gears={GEARS}
  />
)

ObjectBoolean.storyName = 'Object - Boolean'
ObjectBoolean.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectBooleanEnum = () => (
  <Engine
    pinion={toZashiki(OBJECT_BOOLEAN_ENUM, fromDocumentToHash({ boolean: false }, OBJECT_BOOLEAN_ENUM))}
    gears={GEARS}
  />
)

ObjectBooleanEnum.storyName = 'Object - Boolean - Enum'
ObjectBooleanEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectBooleanAnyOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_BOOLEAN_ANY_OF, fromDocumentToHash({ boolean: false }, OBJECT_BOOLEAN_ANY_OF))}
    gears={GEARS}
  />
)

ObjectBooleanAnyOf.storyName = 'Object - Boolean - Any Of'
ObjectBooleanAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectBooleanOneOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_BOOLEAN_ONE_OF, fromDocumentToHash({ boolean: false }, OBJECT_BOOLEAN_ONE_OF))}
    gears={GEARS}
  />
)

ObjectBooleanOneOf.storyName = 'Object - Boolean - One Of'
ObjectBooleanOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectBooleanAllOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_BOOLEAN_ALL_OF, fromDocumentToHash({ boolean: false }, OBJECT_BOOLEAN_ALL_OF))}
    gears={GEARS}
  />
)

ObjectBooleanAllOf.storyName = 'Object - Boolean - All Of'
ObjectBooleanAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNull = () => (
  <Engine
    pinion={toZashiki(OBJECT_NULL, fromDocumentToHash({ null: null }, OBJECT_NULL))}
    gears={GEARS}
  />
)

ObjectNull.storyName = 'Object - Null'
ObjectNull.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNullEnum = () => (
  <Engine
    pinion={toZashiki(OBJECT_NULL_ENUM, fromDocumentToHash({ null: null }, OBJECT_NULL_ENUM))}
    gears={GEARS}
  />
)

ObjectNullEnum.storyName = 'Object - Null - Enum'
ObjectNullEnum.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNullAnyOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_NULL_ANY_OF, fromDocumentToHash({ null: null }, OBJECT_NULL_ANY_OF))}
    gears={GEARS}
  />
)

ObjectNullAnyOf.storyName = 'Object - Null - Any Of'
ObjectNullAnyOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNullOneOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_NULL_ONE_OF, fromDocumentToHash({ null: null }, OBJECT_NULL_ONE_OF))}
    gears={GEARS}
  />
)

ObjectNullOneOf.storyName = 'Object - Null - One Of'
ObjectNullOneOf.parameters = {
  controls: { hideNoControlsWarning: true }
}

export const ObjectNullAllOf = () => (
  <Engine
    pinion={toZashiki(OBJECT_NULL_ALL_OF, fromDocumentToHash({ null: null }, OBJECT_NULL_ALL_OF))}
    gears={GEARS}
  />
)

ObjectNullAllOf.storyName = 'Object - Null - All Of'
ObjectNullAllOf.parameters = {
  controls: { hideNoControlsWarning: true }
}
