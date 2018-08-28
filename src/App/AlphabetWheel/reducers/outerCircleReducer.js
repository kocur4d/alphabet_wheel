import Immutable from 'immutable'

import WheelCalculator from '../lib/WheelCalculator.js'

const wc = new WheelCalculator(4)
wc.init()
wc.rotateVertices(45)
wc.scaleVertices(99)

const initialState = Immutable.List(wc.coordinates())

export default (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
  }
}
