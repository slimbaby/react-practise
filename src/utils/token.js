const TOKEN_KEY = 'itcast_geek_pc'
// 获取token
const getToken = () => localStorage.getItem(TOKEN_KEY)
// 设置token
const setToken = (Token) => localStorage.setItem(TOKEN_KEY, Token)
// 清除token
const cleanToken = () => localStorage.removeItem(TOKEN_KEY)
// 是否已登录，判断token是否有值
const isAuth = () => {
  return !!getToken()
}
export { getToken, setToken, cleanToken, isAuth }
