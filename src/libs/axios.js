import axios from 'axios'

class httpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }
  // 默认地址+书写header
  publicStatus() {
    const config = {
      baseURL: this.baseUrl,
    //   headers: {

    //   }
    }
    return config
  }
  // 请求拦截+响应拦截
  interceptors(instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      //   console.log(config)
      return config
    }, err => {
      return Promise.reject(err)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      //   console.log(res)
      let {
        data,
        status
      } = res
      if (status === 200) {
        return data
      }

    }, err => {
      console.error('服务器出错了')
      return Promise.reject(err)
    })
  }
  request(data) {
    const instance = axios.create()
    let options = Object.assign(this.publicStatus(), data)
    this.interceptors(instance)
    return instance(options)
  }
}
let baseUrl = 'http://182.92.226.20:9999/'
export default new httpRequest(baseUrl);
