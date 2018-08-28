import React from 'react'
import _map from 'lodash/map'

import CircleSection from './CircleSection'

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ]

const Wheel = ({
  wheel,
  radius,
  backgroundColor,
}) => (
  _map(
    wheel,
    (matrix, index) =>
      <CircleSection key={index}
        matrix={matrix}
        radius={radius}
        letter={alphabet[index]}
        backgroundColor={backgroundColor}
      />
  )
)

export default Wheel
