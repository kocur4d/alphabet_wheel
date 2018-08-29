import React from 'react'

import Wheel from './Wheel'
import Circle from './Circle'

const AlphabetWheel = () => (
  <div>
    <svg width="600" height="600" viewBox="0 0 600 600">
      <g transform="translate(300,300)" stroke="#000">
        <Wheel
          letterRatio={0.83}
          backgroundColor='#3498db'
        />
        <Wheel
          letterRatio={0.75}
          radiusFix={-100}
          rotate={true}
          backgroundColor='#2ecc71'
        />
        <Circle
          radiusFix={-200}
        />
      </g>
    </svg>
  </div>
)

export default AlphabetWheel
