import { useState } from 'react'
const Hooks = () => {
  const stateArry = useState(10)
  // const state = stateArry[0]
  // const setState = stateArry[1]
  const [state, setState] = stateArry
  return (
    <div>
      <h1>计数器：{state}</h1>
      <button onClick={() => setState(state + 1)}>+1</button>
    </div>
  )
}
export default Hooks
