import { createSelector } from 'reselect'

import WheelCalculator from '../lib/WheelCalculator.js'

const countSelector = (state) => state.getIn(['alphabetWheel', 'count'])
const radiusSelector = (state) => state.getIn(['alphabetWheel', 'radius'])

const outerClockSelector = createSelector(
  [
    countSelector,
    radiusSelector,
  ],
  (count, radius) => {
    const wc = new WheelCalculator(count)
    wc.init()
    wc.rotateVertices(45)
    wc.scaleVertices(radius)
    return wc.coordinates()
  }
)

export default outerClockSelector
