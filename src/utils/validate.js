const phoneValidata = { required: true, message: '请输入手机号' }
const phonePattern = {
  validateTrigger: 'onBlur',
  pattern: /^[3-9]\d{9}$/,
  message: '手机号格式不对',
}
export { phoneValidata, phonePattern }
