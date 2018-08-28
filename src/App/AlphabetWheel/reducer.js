import { combineReducers } from 'redux-immutable';

import outerCircleReducer from './reducers/outerCircleReducer.js'
import radiusReducer from './reducers/radiusReducer.js'
import countReducer from './reducers/countReducer.js'

export default combineReducers({
  outerCircle: outerCircleReducer,
  radius: radiusReducer,
  count: countReducer,
})
