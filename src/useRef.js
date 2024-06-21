import './App.css'
import { useRef } from 'react'

const Aaa = () => {
  const inputRef = useRef(null)
  const add = () => {
    inputRef.current.focus()
    console.log(inputRef.current.value, 777)
  }
  return (
    <div>
      777
      <input type="text" ref={inputRef} />
      <button onClick={add}>添加</button>
    </div>
  )
}

export default Aaa
