import axios from '../libs/axios'
// 登录接口
export const login = ({
  ...data
}) => {
  return axios.request({
    url: 'login/',
    method:'POST',
    data
  })
}
