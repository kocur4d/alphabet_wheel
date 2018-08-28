import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { radiusSelector } from '../selectors/clockSelector.js'
import clockSelector from '../selectors/clockSelector.js'

import Wheel from './Component.js'

const mapStateToProps = createStructuredSelector({
  wheel: clockSelector,
  radius: radiusSelector,
})

export default connect(
  mapStateToProps,
)(Wheel)
