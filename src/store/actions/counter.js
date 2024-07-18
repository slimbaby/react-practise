export const increment = (payload) => ({ type: 'increment', payload })
export const decrement = (payload) => ({ type: 'decrement', payload })
export const decrementAsync = (payload) => {
  return (dispatch) => {
    setTimeout(() => {
      console.log('异步函数执行')
      dispatch({ type: 'decrement', payload })
    }, 2000)
  }
}
