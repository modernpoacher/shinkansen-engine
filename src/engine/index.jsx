import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Pinion from 'shinkansen-engine/components/pinion'
import Gears from 'shinkansen-engine/components/gears'

import {
  DEFAULT_HANDLE_CHANGE
} from 'shinkansen-engine/common'

const DEFAULT_PARAMS = {}

const DEFAULT_GEARS = {}

export default class Engine extends Component {
  render () {
    const {
      pinion,
      params = DEFAULT_PARAMS,
      onChange = DEFAULT_HANDLE_CHANGE,
      gears: {
        reverse,
        forward,
        pattern
      } = DEFAULT_GEARS
    } = this.props

    return (
      <div className='shinkansen-engine'>
        <Pinion
          pinion={pinion}
          params={params}
          onChange={onChange}
        />
        <Gears
          reverse={reverse}
          forward={forward}
          pattern={pattern}
        />
      </div>
    )
  }
}

Engine.propTypes = {
  pinion: PropTypes.shape().isRequired,
  params: PropTypes.shape(),
  gears: PropTypes.shape({
    forward: PropTypes.shape(),
    reverse: PropTypes.shape(),
    pattern: PropTypes.string
  }),
  onChange: PropTypes.func
}
