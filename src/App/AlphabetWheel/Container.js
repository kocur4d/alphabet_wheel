import { connect } from 'react-redux'

import AlphabetWheel from './Component.js'

const mapStateToProps = (state) => ({
  outerClock: state.getIn(['alphabetWheel', 'outerCircle']).toJS(),
  radius: state.getIn(['alphabetWheel', 'radius']),
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlphabetWheel)
