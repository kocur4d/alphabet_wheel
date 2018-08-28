const initialState = 0 

export const INCREASE_COUNTER = 'INCREASE_COUNTER'
export const DECREASE_COUNTER = 'DECREASE_COUNTER'

export default (state = initialState, action) => {
  switch(action.type) {
    case INCREASE_COUNTER:
      return state + 1
    case DECREASE_COUNTER:
      return state - 1
    default:
      return state
  }
}
