const reducer = (state = 0, action) => {
  console.log(action, 111)
  switch (action.type) {
    case 'increment':
      return state + action.payload
    case 'decrement':
      return state - action.payload
    default:
      return state
  }
}

export default reducer
