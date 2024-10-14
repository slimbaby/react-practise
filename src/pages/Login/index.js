import React from 'react'
import { Card, Form, Input, Button, Checkbox, message } from 'antd'
import logo from '@/assets/logo.png'
import { phoneValidata } from '@/utils/validate'
import { useDispatch } from 'react-redux'
import { login } from '@/store/actions'
import { useNavigate } from 'react-router-dom'
import './index.scss'
const Login = () => {
  const dispatch = useDispatch()
  const history = useNavigate()
  // 表单提交
  const onFinish = (values) => {
    //将登录需要的手机号码，验证码传递给login action
    dispatch(login({ mobile: values.phone, code: values.code }))
    // 登陆成功后跳转到首页
    message.success('登录成功', 1.5, () => {
      history('/home')
    })
  }
  return (
    <div className="login">
      <Card className="login-container" bordered={false}>
        <img className="login-logo" src={logo} alt=""></img>
        <Form
          validateTrigger={['onBlur', 'onChange']}
          onFinish={onFinish}
          initialValues={{
            phone: '13911111111',
            code: '246810',
            remeber: true,
          }}
        >
          <Form.Item name="phone" rules={[phoneValidata]}>
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item name="code">
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item
            name="remeber"
            valuePropName="checked"
            rules={[phoneValidata]}
          >
            <Checkbox className="login-checkbox-label">
              我已同意并阅读【用户协议】和【隐私条款】
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
export default Login
