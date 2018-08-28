import { createSelector } from 'reselect'

import WheelCalculator from '../lib/WheelCalculator.js'

const countSelector = (state) => state.getIn(['alphabetWheel', 'count'])
export const radiusSelector = (state, {radiusFix = 0}) => state.getIn(['alphabetWheel', 'radius']) + radiusFix

const outerClockSelector = createSelector(
  [
    countSelector,
    radiusSelector,
  ],
  (count, radius) => {
    const wc = new WheelCalculator(count)
    wc.init()
    wc.scaleVertices(radius)
    wc.rotateVertices(-90)
    return wc.coordinates()
  }
)

export default outerClockSelector
