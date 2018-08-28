import { combineReducers } from 'redux-immutable'

import alphabetWheelReducer from './App/AlphabetWheel/reducer.js'

export default combineReducers({
  alphabetWheel: alphabetWheelReducer,
})
