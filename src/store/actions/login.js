// 登录功能
import { http } from '@/utils/http'
import { setToken } from '@/utils/token'
export const login = (data) => {
  return async (dispatch) => {
    //异步请求
    console.log('登录需要的参数', data)
    const res = await http.post('/authorizations', data)

    if (res.data.message === 'OK') {
      const token = res.data.data.token
      //把token存到localstorage
      setToken(token)
      dispatch({ type: 'login/setToken', payload: token })
    }
    console.log(res, 10)
  }
}
