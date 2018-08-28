import { createSelector } from 'reselect'

import WheelCalculator from '../lib/WheelCalculator.js'

const countSelector = (state) => state.getIn(['alphabetWheel', 'count'])
const counterSelector = (state, {rotate = false}) => rotate ?  state.getIn(['counter']) : null
export const radiusSelector = (state, {radiusFix = 0}) => state.getIn(['alphabetWheel', 'radius']) + radiusFix

const outerClockSelector = createSelector(
  [
    countSelector,
    radiusSelector,
    counterSelector,
  ],
  (count, radius, counter) => {
    const wc = new WheelCalculator(count)
    wc.init()
    wc.scaleVertices(radius)
    wc.rotateVertices(-90)
    if(Number.isInteger(counter))
      wc.rotateVertices(-1 * counter * wc.angle)
    return wc.coordinates()
  }
)

export default outerClockSelector
