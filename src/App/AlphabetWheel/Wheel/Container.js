import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { radiusSelector } from './selectors.js'
import wheelSelector from './selectors.js'

import Wheel from './Component.js'

const mapStateToProps = createStructuredSelector({
  wheel: wheelSelector,
  radius: radiusSelector,
})

export default connect(
  mapStateToProps,
)(Wheel)
