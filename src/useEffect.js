import './App.css'
import { useEffect, useState } from 'react'

const Child = ({ count }) => {
  useEffect(() => {
    const handleResize = () => {
      console.log('666')
    }
    window.addEventListener('resize', handleResize)

    // 返回一个函数来移除事件监听器
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return <h1>豆豆被打的次数：{count}</h1>
}
const Aaa = () => {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const handleCount = () => {
    setCount(count + 1)
  }
  return (
    <div>
      {count > 3 ? '豆豆被打死了' : <Child count={count}></Child>}
      <button onClick={handleCount}>+1</button>
      <div>{loading ? '加载中' : '加载完成！！'}</div>
      <button
        onClick={() => {
          setLoading(!loading)
        }}
      >
        loading
      </button>
    </div>
  )
}

export default Aaa
