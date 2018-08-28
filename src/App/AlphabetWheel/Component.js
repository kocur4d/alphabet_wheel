import React from 'react'
import _map from 'lodash/map'

import CircleSection from './CircleSection'

const AlphabetWheel = ({
  outerClock,
  radius,
}) => (
  <div>
    <svg width="400" height="400" viewBox="0 0 400 400">
      <g transform="translate(200,200)" stroke="#000" strokeWidth="2">
        {
          _map(outerClock, (matrix, index) => <CircleSection key={index} matrix={matrix} radius={radius}/>)
        }
      </g>
    </svg>
  </div>
)

export default AlphabetWheel
