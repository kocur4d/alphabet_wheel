import { createSelector } from 'reselect'

import CaesarCalculator from './lib/CaesarCalculator.js'

const messageSelector = (state) => state.getIn(['message'])
const counterSelector = (state) => state.getIn(['counter'])

const cipherSelector = createSelector(
  [
    messageSelector,
    counterSelector,
  ],
  (message, shift) => {
    const cc = new CaesarCalculator(shift)
    return cc.cipher(message)
  }
)

export default cipherSelector
