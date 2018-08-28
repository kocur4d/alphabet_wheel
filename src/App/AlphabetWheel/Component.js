import React from 'react'

import Wheel from './Wheel'
import Circle from './Circle'

const AlphabetWheel = () => (
  <div>
    <svg width="600" height="600" viewBox="0 0 600 600">
      <g transform="translate(300,300)" stroke="#000">
        <Wheel />
        <Wheel radiusFix={-40} />
        <Circle radiusFix={-80} />
      </g>
    </svg>
  </div>
)

export default AlphabetWheel
