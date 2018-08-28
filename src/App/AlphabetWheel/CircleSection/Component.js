import React from 'react'
import { randomColor } from '../../../helpers.js' 
import _round from 'lodash/round'
import {
  subset,
  index,
} from 'mathjs'

const CircleSection = ({
  matrix,
  radius,
}) => {
  const x1 = _round(subset(matrix, index(0, 0)))
  const y1 = _round(subset(matrix, index(1, 0)))

  const x2 = _round(subset(matrix, index(0, 1)))
  const y2 = _round(subset(matrix, index(1, 1)))

  return <path d={`M0,0 L${x1},${y1} A${radius},${radius} 0 0 1 ${x2},${y2}Z`} fill={randomColor()}/>
}

export default CircleSection
