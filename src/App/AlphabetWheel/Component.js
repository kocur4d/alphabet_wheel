import React from 'react'

import Wheel from './Wheel'
import Circle from './Circle'

const AlphabetWheel = () => (
  <div>
    <svg width="600" height="600" viewBox="0 0 600 600">
      <g transform="translate(300,300)" stroke="#000">
        <Wheel backgroundColor='#9a4a96' />
        <Wheel radiusFix={-60} backgroundColor='#136683'/>
        <Circle radiusFix={-120} />
      </g>
    </svg>
  </div>
)

export default AlphabetWheel
