/**
 *  @typedef {EngineTypes.Components.Pinion.PinionType} PinionType
 *  @typedef {EngineTypes.Components.Pinion.ParamsType} ParamsType
 *  @typedef {EngineTypes.Components.Gears.GearsProps} GearsProps
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Pinion from '#engine/components/pinion'
import Gears from '#engine/components/gears'

import {
  DEFAULT_HANDLE_CHANGE
} from '#engine/common'

/**
 *  @type {ParamsType}
 */
const DEFAULT_PARAMS = {
  components: {},
  errors: []
}

/**
 *  @type {GearsProps}
 */
const DEFAULT_GEARS = {}

export default class Engine extends Component {
  render () {
    const {
      /**
       *  @type {PinionType}
       */
      pinion,
      /**
       *  @type {ParamsType}
       */
      params = DEFAULT_PARAMS,
      /**
       *  @type {() => void}
       */
      onChange = DEFAULT_HANDLE_CHANGE,
      /**
       *  @type {GearsType}
       */
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
  pinion: PropTypes.shape({}).isRequired,
  params: PropTypes.shape({}),
  gears: PropTypes.shape({
    forward: PropTypes.shape({}),
    reverse: PropTypes.shape({}),
    pattern: PropTypes.string
  }),
  onChange: PropTypes.func
}
