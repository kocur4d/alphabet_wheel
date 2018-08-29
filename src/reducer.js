import { combineReducers } from 'redux-immutable'

import alphabetWheelReducer from './App/AlphabetWheel/reducer.js'
import counterReducer from './App/Counter/reducer.js'
import messageReducer from './App/Message/reducer.js'

export default combineReducers({
  alphabetWheel: alphabetWheelReducer,
  counter: counterReducer,
  message: messageReducer,
})
