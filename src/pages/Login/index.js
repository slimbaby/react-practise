import React from 'react'
import { Card, Form, Input, Button, Checkbox } from 'antd'
import logo from '@/assets/logo.png'
import { phoneValidata, phonePattern } from '@/utils/validate'
import './index.scss'
const Login = () => {
  // 表单提交
  const onFinish = (values) => {
    console.log(values, 8)
  }
  return (
    <div className="login">
      <Card className="login-container" bordered={false}>
        <img className="login-logo" src={logo} alt=""></img>
        <Form
          validateTrigger={['onBlur', 'onChange']}
          onFinish={onFinish}
          initialValues={{
            phone: '15168268719',
            code: '666666',
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
