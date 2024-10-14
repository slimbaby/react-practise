// login模块只需要存储token，所以此处默认值给个空字符串
const initialSate = localStorage.getItem('geek-pc-token')
  ? localStorage.getItem('geek-pc-token')
  : ''

const login = (state = initialSate, action) => {
  switch (action.type) {
    case 'login/setToken':
      return action.payload

    default:
      return state
  }
}
export default login
