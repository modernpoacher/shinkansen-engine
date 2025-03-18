import React from 'react'
import PropTypes from 'prop-types'
import snapshotOf from 'react-component-snapshot'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import Engine from '#engine/engine'

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
 *  @param {{
 *    to: string | { pathname: string },
 *    children: React.ReactNode | React.ReactNode[]
 *  }} prop
 *  @returns {React.JSX.Element}
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

  describe('<Engine />', () => {
    describe('With required props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: engine
          }
        } = render(
          <Engine
            pinion={MOCK_PINION}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        expect(engine)
          .toBeInstanceOf(HTMLDivElement)
      })

      it('matches the snapshot', () => {
        const {
          container: {
            firstElementChild: engine
          }
        } = render(
          <Engine
            pinion={MOCK_PINION}
            params={MOCK_PARAMS}
            gears={MOCK_GEARS}
            onChange={MOCK_ON_CHANGE}
          />
        )

        expect(snapshotOf(engine))
          .toMatchSnapshot()
      })
    })

    describe('With additional props', () => {
      describe('Prop `pinion` is `STRING_STRING`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={STRING_STRING}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={STRING_STRING}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `STRING_STRING_ENUM`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={STRING_STRING_ENUM}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={STRING_STRING_ENUM}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `STRING_STRING_ANY_OF`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={STRING_STRING_ANY_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={STRING_STRING_ANY_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `STRING_STRING_ONE_OF`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={STRING_STRING_ONE_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={STRING_STRING_ONE_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `STRING_STRING_ALL_OF`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={STRING_STRING_ALL_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={STRING_STRING_ALL_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `NUMBER_NUMBER`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={NUMBER_NUMBER}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={NUMBER_NUMBER}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `NUMBER_NUMBER_ENUM`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={NUMBER_NUMBER_ENUM}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={NUMBER_NUMBER_ENUM}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `NUMBER_NUMBER_ANY_OF`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={NUMBER_NUMBER_ANY_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={NUMBER_NUMBER_ANY_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `NUMBER_NUMBER_ONE_OF`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={NUMBER_NUMBER_ONE_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={NUMBER_NUMBER_ONE_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `NUMBER_NUMBER_ALL_OF`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={NUMBER_NUMBER_ALL_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={NUMBER_NUMBER_ALL_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `OBJECT_ARRAY_STRING`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={OBJECT_ARRAY_STRING}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={OBJECT_ARRAY_STRING}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `OBJECT_ARRAY_NUMBER`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={OBJECT_ARRAY_NUMBER}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={OBJECT_ARRAY_NUMBER}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `OBJECT_ARRAY_BOOLEAN`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={OBJECT_ARRAY_BOOLEAN}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={OBJECT_ARRAY_BOOLEAN}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `OBJECT_ARRAY_NULL`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={OBJECT_ARRAY_NULL}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={OBJECT_ARRAY_NULL}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `ARRAY_ARRAY_STRING`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={ARRAY_ARRAY_STRING}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={ARRAY_ARRAY_STRING}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `ARRAY_ARRAY_STRING_ENUM`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={ARRAY_ARRAY_STRING_ENUM}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={ARRAY_ARRAY_STRING_ENUM}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `ARRAY_ARRAY_STRING_ANY_OF`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={ARRAY_ARRAY_STRING_ANY_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={ARRAY_ARRAY_STRING_ANY_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `ARRAY_ARRAY_STRING_ONE_OF`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={ARRAY_ARRAY_STRING_ONE_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={ARRAY_ARRAY_STRING_ONE_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `ARRAY_ARRAY_NUMBER`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={ARRAY_ARRAY_NUMBER}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={ARRAY_ARRAY_NUMBER}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `ARRAY_ARRAY_NUMBER_ENUM`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={ARRAY_ARRAY_NUMBER_ENUM}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={ARRAY_ARRAY_NUMBER_ENUM}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `ARRAY_ARRAY_NUMBER_ANY_OF`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={ARRAY_ARRAY_NUMBER_ANY_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={ARRAY_ARRAY_NUMBER_ANY_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `ARRAY_ARRAY_NUMBER_ONE_OF`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={ARRAY_ARRAY_NUMBER_ONE_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={ARRAY_ARRAY_NUMBER_ONE_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `ARRAY_ARRAY_OBJECT`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={ARRAY_ARRAY_OBJECT}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={ARRAY_ARRAY_OBJECT}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `ARRAY_ARRAY_ARRAY`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={ARRAY_ARRAY_ARRAY}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={ARRAY_ARRAY_ARRAY}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `ARRAY_ARRAY_BOOLEAN`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={ARRAY_ARRAY_BOOLEAN}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={ARRAY_ARRAY_BOOLEAN}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `ARRAY_ARRAY_NULL`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={ARRAY_ARRAY_NULL}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={ARRAY_ARRAY_NULL}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `BOOLEAN_BOOLEAN`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={BOOLEAN_BOOLEAN}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={BOOLEAN_BOOLEAN}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `BOOLEAN_BOOLEAN_ENUM`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={BOOLEAN_BOOLEAN_ENUM}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={BOOLEAN_BOOLEAN_ENUM}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `BOOLEAN_BOOLEAN_ANY_OF`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={BOOLEAN_BOOLEAN_ANY_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={BOOLEAN_BOOLEAN_ANY_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `BOOLEAN_BOOLEAN_ONE_OF`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={BOOLEAN_BOOLEAN_ONE_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={BOOLEAN_BOOLEAN_ONE_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `BOOLEAN_BOOLEAN_ALL_OF`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={BOOLEAN_BOOLEAN_ALL_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={BOOLEAN_BOOLEAN_ALL_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `NULL_NULL`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={NULL_NULL}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={NULL_NULL}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `NULL_NULL_ENUM`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={NULL_NULL_ENUM}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={NULL_NULL_ENUM}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `NULL_NULL_ANY_OF`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={NULL_NULL_ANY_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={NULL_NULL_ANY_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `NULL_NULL_ONE_OF`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={NULL_NULL_ONE_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={NULL_NULL_ONE_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })

      describe('Prop `pinion` is `NULL_NULL_ALL_OF`', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={NULL_NULL_ALL_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(engine)
            .toBeInstanceOf(HTMLDivElement)
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: engine
            }
          } = render(
            <Engine
              pinion={NULL_NULL_ALL_OF}
              params={MOCK_PARAMS}
              gears={MOCK_GEARS}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(engine))
            .toMatchSnapshot()
        })
      })
    })
  })
})
