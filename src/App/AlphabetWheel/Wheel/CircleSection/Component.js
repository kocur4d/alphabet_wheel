import React from 'react'
import {index, subset,} from 'mathjs'

import './style.css'

const CircleSection = ({
  matrix,
  color,
  radius,
  letter,
  letterRatio,
  backgroundColor,
}) => {
  const x1 = subset(matrix, index(0, 0))
  const y1 = subset(matrix, index(1, 0))

  const x2 = subset(matrix, index(0, 1))
  const y2 = subset(matrix, index(1, 1))

  const letterX = 0.5 * (x2 + x1) * letterRatio
  const letterY = 0.5 * (y2 + y1) * letterRatio

  return <g className='section'>
    <path
      className='path'
      d={`M0,0 L${x1},${y1} A${radius},${radius} 0 0 1 ${x2},${y2}Z`}
      strokeWidth={2}
      fill={backgroundColor}
    />
    <text
      className='text'
      textAnchor={'middle'}
      alignmentBaseline={'central'}
      x={letterX}
      y={letterY}
    >{letter}</text>
  </g>
}

export default CircleSection
