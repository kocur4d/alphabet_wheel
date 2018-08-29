const initialState = ''

export const UPDATE_MESSAGE = 'UPDATE_MESSAGE'

export default (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_MESSAGE:
      return action.message
    default:
      return state
  }
}

