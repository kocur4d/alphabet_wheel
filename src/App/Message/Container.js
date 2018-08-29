import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
  UPDATE_MESSAGE,
} from './reducer.js'

import cipherSelector from './selectors.js'

import Message from './Component.js'

const mapStateToProps = createStructuredSelector({
  message: (state) => state.getIn(['message']),
  cipher: cipherSelector
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (message) => dispatch({type: UPDATE_MESSAGE, message})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Message)

