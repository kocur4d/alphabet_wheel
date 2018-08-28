import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { radiusSelector } from '../selectors/clockSelector.js'

import Circle from './Component.js'

const mapStateToProps = createStructuredSelector({
  radius: radiusSelector,
})

export default connect(
  mapStateToProps,
)(Circle)
