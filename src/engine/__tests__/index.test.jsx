import React from 'react'
import PropTypes from 'prop-types'
import renderer from 'react-test-renderer'

import Component from '#engine/engine'

import STRING_STRING from './definitions/string-string.json'
import STRING_STRING_ENUM from './definitions/string-string-enum.json'
import STRING_STRING_ANY_OF from './definitions/string-string-any-of.json'
import STRING_STRING_ONE_OF from './definitions/string-string-one-of.json'
import STRING_STRING_ALL_OF from './definitions/string-string-all-of.json'

import NUMBER_NUMBER from './definitions/number-number.json'
import NUMBER_NUMBER_ENUM from './definitions/number-number-enum.json'
import NUMBER_NUMBER_ANY_OF from './definitions/number-number-any-of.json'
import NUMBER_NUMBER_ONE_OF from './definitions/number-number-one-of.json'
import NUMBER_NUMBER_ALL_OF from './definitions/number-number-all-of.json'

import OBJECT_ARRAY_STRING from './definitions/object-array-string.json'
import OBJECT_ARRAY_NUMBER from './definitions/object-array-number.json'
import OBJECT_ARRAY_BOOLEAN from './definitions/object-array-boolean.json'
import OBJECT_ARRAY_NULL from './definitions/object-array-null.json'

import ARRAY_ARRAY_STRING from './definitions/array-array-string.json'
import ARRAY_ARRAY_STRING_ENUM from './definitions/array-array-string-enum.json'
import ARRAY_ARRAY_STRING_ANY_OF from './definitions/array-array-string-any-of.json'
import ARRAY_ARRAY_STRING_ONE_OF from './definitions/array-array-string-one-of.json'

import ARRAY_ARRAY_NUMBER from './definitions/array-array-number.json'
import ARRAY_ARRAY_NUMBER_ENUM from './definitions/array-array-number-enum.json'
import ARRAY_ARRAY_NUMBER_ANY_OF from './definitions/array-array-number-any-of.json'
import ARRAY_ARRAY_NUMBER_ONE_OF from './definitions/array-array-number-one-of.json'

import ARRAY_ARRAY_OBJECT from './definitions/array-array-object.json'
import ARRAY_ARRAY_ARRAY from './definitions/array-array-array.json'
import ARRAY_ARRAY_BOOLEAN from './definitions/array-array-boolean.json'
import ARRAY_ARRAY_NULL from './definitions/array-array-null.json'

import BOOLEAN_BOOLEAN from './definitions/boolean-boolean.json'
import BOOLEAN_BOOLEAN_ENUM from './definitions/boolean-boolean-enum.json'
import BOOLEAN_BOOLEAN_ANY_OF from './definitions/boolean-boolean-any-of.json'
import BOOLEAN_BOOLEAN_ONE_OF from './definitions/boolean-boolean-one-of.json'
import BOOLEAN_BOOLEAN_ALL_OF from './definitions/boolean-boolean-all-of.json'

import NULL_NULL from './definitions/null-null.json'
import NULL_NULL_ENUM from './definitions/null-null-enum.json'
import NULL_NULL_ANY_OF from './definitions/null-null-any-of.json'
import NULL_NULL_ONE_OF from './definitions/null-null-one-of.json'
import NULL_NULL_ALL_OF from './definitions/null-null-all-of.json'

const GEARS = {
  reverse: {
    alpha: 'alpha',
    omega: 'omega'
  },
  forward: {
    alpha: 'alpha',
    omega: 'omega'
  },
  pattern: '/:alpha/:omega'
}

function MockLink ({ to, children }) {
  return (
    <a href={to} className='mock-link'>
      {children}
    </a>
  )
}

MockLink.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape()
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node
    )
  ])
}

jest.mock('react-router-dom', () => {
  return {
    __esModule: true,
    Link: MockLink
  }
})

describe('#engine/engine', () => {
  describe('<Component />', () => {
    describe('With required props', () => {
      it('renders', () => {
        const component = (
          <Component
            pinion={{ meta: {}, elements: { title: 'MOCK TITLE', field: { id: 'MOCK ID' } } }}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('With additional props', () => {
      it('renders `STRING_STRING`', () => {
        const component = (
          <Component
            pinion={STRING_STRING}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `STRING_STRING_ENUM`', () => {
        const component = (
          <Component
            pinion={STRING_STRING_ENUM}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `STRING_STRING_ANY_OF`', () => {
        const component = (
          <Component
            pinion={STRING_STRING_ANY_OF}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `STRING_STRING_ONE_OF`', () => {
        const component = (
          <Component
            pinion={STRING_STRING_ONE_OF}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `STRING_STRING_ALL_OF`', () => {
        const component = (
          <Component
            pinion={STRING_STRING_ALL_OF}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `NUMBER_NUMBER`', () => {
        const component = (
          <Component
            pinion={NUMBER_NUMBER}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `NUMBER_NUMBER_ENUM`', () => {
        const component = (
          <Component
            pinion={NUMBER_NUMBER_ENUM}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `NUMBER_NUMBER_ANY_OF`', () => {
        const component = (
          <Component
            pinion={NUMBER_NUMBER_ANY_OF}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `NUMBER_NUMBER_ONE_OF`', () => {
        const component = (
          <Component
            pinion={NUMBER_NUMBER_ONE_OF}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `NUMBER_NUMBER_ALL_OF`', () => {
        const component = (
          <Component
            pinion={NUMBER_NUMBER_ALL_OF}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `OBJECT_ARRAY_STRING`', () => {
        const component = (
          <Component
            pinion={OBJECT_ARRAY_STRING}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `OBJECT_ARRAY_NUMBER`', () => {
        const component = (
          <Component
            pinion={OBJECT_ARRAY_NUMBER}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `OBJECT_ARRAY_BOOLEAN`', () => {
        const component = (
          <Component
            pinion={OBJECT_ARRAY_BOOLEAN}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `OBJECT_ARRAY_NULL`', () => {
        const component = (
          <Component
            pinion={OBJECT_ARRAY_NULL}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_STRING`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_STRING}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_STRING_ENUM`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_STRING_ENUM}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_STRING_ANY_OF`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_STRING_ANY_OF}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_STRING_ONE_OF`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_STRING_ONE_OF}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_NUMBER`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_NUMBER}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_NUMBER_ENUM`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_NUMBER_ENUM}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_NUMBER_ANY_OF`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_NUMBER_ANY_OF}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_NUMBER_ONE_OF`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_NUMBER_ONE_OF}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_OBJECT`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_OBJECT}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_ARRAY`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_ARRAY}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_BOOLEAN`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_BOOLEAN}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_NULL`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_NULL}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `BOOLEAN_BOOLEAN`', () => {
        const component = (
          <Component
            pinion={BOOLEAN_BOOLEAN}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `BOOLEAN_BOOLEAN_ENUM`', () => {
        const component = (
          <Component
            pinion={BOOLEAN_BOOLEAN_ENUM}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `BOOLEAN_BOOLEAN_ANY_OF`', () => {
        const component = (
          <Component
            pinion={BOOLEAN_BOOLEAN_ANY_OF}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `BOOLEAN_BOOLEAN_ONE_OF`', () => {
        const component = (
          <Component
            pinion={BOOLEAN_BOOLEAN_ONE_OF}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `BOOLEAN_BOOLEAN_ALL_OF`', () => {
        const component = (
          <Component
            pinion={BOOLEAN_BOOLEAN_ALL_OF}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `NULL_NULL`', () => {
        const component = (
          <Component
            pinion={NULL_NULL}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `NULL_NULL_ENUM`', () => {
        const component = (
          <Component
            pinion={NULL_NULL_ENUM}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `NULL_NULL_ANY_OF`', () => {
        const component = (
          <Component
            pinion={NULL_NULL_ANY_OF}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `NULL_NULL_ONE_OF`', () => {
        const component = (
          <Component
            pinion={NULL_NULL_ONE_OF}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `NULL_NULL_ALL_OF`', () => {
        const component = (
          <Component
            pinion={NULL_NULL_ALL_OF}
            params={{}}
            gears={GEARS}
            onChange={jest.fn()}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })
  })
})
