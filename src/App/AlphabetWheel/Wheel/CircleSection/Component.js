import React from 'react'
import _round from 'lodash/round'
import {
  subset,
  index,
} from 'mathjs'

const randomColor = () => '#'+(Math.random()*0xFFFFFF<<0).toString(16)

const CircleSection = ({
  matrix,
  radius,
  letter,
  backgroundColor,
}) => {
  const x1 = _round(subset(matrix, index(0, 0)))
  const y1 = _round(subset(matrix, index(1, 0)))

  const x2 = _round(subset(matrix, index(0, 1)))
  const y2 = _round(subset(matrix, index(1, 1)))

  const letterX = _round(0.5*(x2 + x1) * 0.9)
  const letterY = _round(0.5*(y2 + y1) * 0.9)
  console.log(letterX, ' : ', letterY)

  return <React.Fragment>
    <path
      d={`M0,0 L${x1},${y1} A${radius},${radius} 0 0 1 ${x2},${y2}Z`}
      fill={backgroundColor}
      strokeWidth='2'
    />
    <text x={letterX} y={letterY} fill="black" textAnchor="middle" alignmentBaseline="central">{letter}</text>
  </React.Fragment> 
}

export default CircleSection
