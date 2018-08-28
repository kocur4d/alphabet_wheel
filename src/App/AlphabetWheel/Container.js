import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import outerClockSelector from './selectors/outerClockSelector.js'
import AlphabetWheel from './Component.js'

const mapStateToProps = createStructuredSelector({
  outerClock: outerClockSelector,
  radius: state => state.getIn(['alphabetWheel', 'radius']),
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlphabetWheel)
