import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
} from './reducer.js'

import Counter from './Component.js'

const mapStateToProps = createStructuredSelector({
  count: (state) => state.getIn(['counter'])
})

const mapDispatchToProps = (dispatch) => ({
  counterClicked: (up) => up ? dispatch({type: INCREASE_COUNTER}) : dispatch({type: DECREASE_COUNTER})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter)
