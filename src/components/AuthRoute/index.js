// AuthRouter.js
import React from 'react'
import { isAuth } from '@/utils'
import { useNavigate } from 'react-router-dom'

export default function AuthRouter({ children }) {
  const navigate = useNavigate()
  const isAuthenticated = isAuth()

  React.useEffect(() => {
    if (!isAuthenticated) {
      // 重定向到登录页面
      navigate('/login', { replace: true })
    }
  }, [isAuthenticated, navigate])

  return children
}
