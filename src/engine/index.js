import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Pinion,
  Gears
} from 'shinkansen-engine/components'

export default class Engine extends Component {
  render () {
    const {
      pinion,
      params,
      onChange,
      gears: {
        reverse,
        forward,
        pattern
      }
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
    forward: PropTypes.object,
    reverse: PropTypes.object,
    pattern: PropTypes.string
  }),
  onChange: PropTypes.func
}

Engine.defaultProps = {
  params: {},
  gears: {}
}
