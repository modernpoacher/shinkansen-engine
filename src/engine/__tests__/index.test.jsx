import React from 'react'
import PropTypes from 'prop-types'
import renderer from 'react-test-renderer'

import Component from '#engine/engine'

import {
  STRING_STRING,
  STRING_STRING_ENUM,
  STRING_STRING_ANY_OF,
  STRING_STRING_ONE_OF,
  STRING_STRING_ALL_OF,
  NUMBER_NUMBER,
  NUMBER_NUMBER_ENUM,
  NUMBER_NUMBER_ANY_OF,
  NUMBER_NUMBER_ONE_OF,
  NUMBER_NUMBER_ALL_OF,
  OBJECT_ARRAY_STRING,
  OBJECT_ARRAY_NUMBER,
  OBJECT_ARRAY_BOOLEAN,
  OBJECT_ARRAY_NULL,
  ARRAY_ARRAY_STRING,
  ARRAY_ARRAY_STRING_ENUM,
  ARRAY_ARRAY_STRING_ANY_OF,
  ARRAY_ARRAY_STRING_ONE_OF,
  ARRAY_ARRAY_NUMBER,
  ARRAY_ARRAY_NUMBER_ENUM,
  ARRAY_ARRAY_NUMBER_ANY_OF,
  ARRAY_ARRAY_NUMBER_ONE_OF,
  ARRAY_ARRAY_OBJECT,
  ARRAY_ARRAY_ARRAY,
  ARRAY_ARRAY_BOOLEAN,
  ARRAY_ARRAY_NULL,
  BOOLEAN_BOOLEAN,
  BOOLEAN_BOOLEAN_ENUM,
  BOOLEAN_BOOLEAN_ANY_OF,
  BOOLEAN_BOOLEAN_ONE_OF,
  BOOLEAN_BOOLEAN_ALL_OF,
  NULL_NULL,
  NULL_NULL_ENUM,
  NULL_NULL_ANY_OF,
  NULL_NULL_ONE_OF,
  NULL_NULL_ALL_OF
} from './definitions.mjs'

/**
 * @param {{
 *  to: string | { pathname: string },
 *  children: React.ReactNode | React.ReactNode[]
 * }} prop
 * @returns {React.JSX.Element}
 */
function MockLink ({ to, children }) {
  if (typeof to === 'string') {
    return (
      <a href={to} className='mock-link'>
        {children}
      </a>
    )
  }

  const {
    pathname
  } = to

  return (
    <a href={pathname} className='mock-link'>
      {children}
    </a>
  )
}

MockLink.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      pathname: PropTypes.string
    })
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node
    )
  ])
}

jest.mock('react-router', () => {
  return {
    __esModule: true,
    Link: MockLink
  }
})

describe('#engine/engine', () => {
  const MOCK_PINION = {
    meta: { type: 'MOCK', uri: '#/' },
    elements: { title: 'MOCK TITLE', field: { id: 'MOCK ID' } }
  }

  const MOCK_PARAMS = {
    components: {},
    errors: []
  }

  const MOCK_GEARS = {
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

  const MOCK_ON_CHANGE = jest.fn()

  describe('<Component />', () => {
    describe('With required props', () => {
      it('renders', () => {
        const component = (
          <Component
            pinion={MOCK_PINION}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
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
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `STRING_STRING_ENUM`', () => {
        const component = (
          <Component
            pinion={STRING_STRING_ENUM}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `STRING_STRING_ANY_OF`', () => {
        const component = (
          <Component
            pinion={STRING_STRING_ANY_OF}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `STRING_STRING_ONE_OF`', () => {
        const component = (
          <Component
            pinion={STRING_STRING_ONE_OF}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `STRING_STRING_ALL_OF`', () => {
        const component = (
          <Component
            pinion={STRING_STRING_ALL_OF}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `NUMBER_NUMBER`', () => {
        const component = (
          <Component
            pinion={NUMBER_NUMBER}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `NUMBER_NUMBER_ENUM`', () => {
        const component = (
          <Component
            pinion={NUMBER_NUMBER_ENUM}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `NUMBER_NUMBER_ANY_OF`', () => {
        const component = (
          <Component
            pinion={NUMBER_NUMBER_ANY_OF}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `NUMBER_NUMBER_ONE_OF`', () => {
        const component = (
          <Component
            pinion={NUMBER_NUMBER_ONE_OF}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `NUMBER_NUMBER_ALL_OF`', () => {
        const component = (
          <Component
            pinion={NUMBER_NUMBER_ALL_OF}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `OBJECT_ARRAY_STRING`', () => {
        const component = (
          <Component
            pinion={OBJECT_ARRAY_STRING}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `OBJECT_ARRAY_NUMBER`', () => {
        const component = (
          <Component
            pinion={OBJECT_ARRAY_NUMBER}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `OBJECT_ARRAY_BOOLEAN`', () => {
        const component = (
          <Component
            pinion={OBJECT_ARRAY_BOOLEAN}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `OBJECT_ARRAY_NULL`', () => {
        const component = (
          <Component
            pinion={OBJECT_ARRAY_NULL}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_STRING`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_STRING}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_STRING_ENUM`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_STRING_ENUM}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_STRING_ANY_OF`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_STRING_ANY_OF}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_STRING_ONE_OF`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_STRING_ONE_OF}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_NUMBER`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_NUMBER}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_NUMBER_ENUM`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_NUMBER_ENUM}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_NUMBER_ANY_OF`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_NUMBER_ANY_OF}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_NUMBER_ONE_OF`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_NUMBER_ONE_OF}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_OBJECT`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_OBJECT}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_ARRAY`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_ARRAY}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_BOOLEAN`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_BOOLEAN}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `ARRAY_ARRAY_NULL`', () => {
        const component = (
          <Component
            pinion={ARRAY_ARRAY_NULL}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `BOOLEAN_BOOLEAN`', () => {
        const component = (
          <Component
            pinion={BOOLEAN_BOOLEAN}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `BOOLEAN_BOOLEAN_ENUM`', () => {
        const component = (
          <Component
            pinion={BOOLEAN_BOOLEAN_ENUM}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `BOOLEAN_BOOLEAN_ANY_OF`', () => {
        const component = (
          <Component
            pinion={BOOLEAN_BOOLEAN_ANY_OF}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `BOOLEAN_BOOLEAN_ONE_OF`', () => {
        const component = (
          <Component
            pinion={BOOLEAN_BOOLEAN_ONE_OF}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `BOOLEAN_BOOLEAN_ALL_OF`', () => {
        const component = (
          <Component
            pinion={BOOLEAN_BOOLEAN_ALL_OF}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `NULL_NULL`', () => {
        const component = (
          <Component
            pinion={NULL_NULL}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `NULL_NULL_ENUM`', () => {
        const component = (
          <Component
            pinion={NULL_NULL_ENUM}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `NULL_NULL_ANY_OF`', () => {
        const component = (
          <Component
            pinion={NULL_NULL_ANY_OF}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `NULL_NULL_ONE_OF`', () => {
        const component = (
          <Component
            pinion={NULL_NULL_ONE_OF}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      it('renders `NULL_NULL_ALL_OF`', () => {
        const component = (
          <Component
            pinion={NULL_NULL_ALL_OF}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })
  })
})
