import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { radiusSelector } from '../Wheel/selectors.js'

import Circle from './Component.js'

const mapStateToProps = createStructuredSelector({
  radius: radiusSelector,
})

export default connect(
  mapStateToProps,
)(Circle)
