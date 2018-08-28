import React from 'react'
import _map from 'lodash/map'

import CircleSection from './CircleSection'

const Wheel = ({
  wheel,
  radius,
}) => (
  _map(
    wheel,
    (matrix, index) =>
      <CircleSection key={index}
        matrix={matrix}
        radius={radius}
      />
  )
)

export default Wheel
