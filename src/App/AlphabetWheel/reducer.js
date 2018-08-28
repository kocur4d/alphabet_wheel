import { combineReducers } from 'redux-immutable';

import radiusReducer from './reducers/radiusReducer.js'
import countReducer from './reducers/countReducer.js'

export default combineReducers({
  radius: radiusReducer,
  count: countReducer,
})
