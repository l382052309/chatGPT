/**
 * @Description:
 * @author wxj
 * @date 2020-10-12-13:32
 */
// axios数据请求
import axios from 'axios'

axios.interceptors.request.use(config => {
  // token
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

export default function (url, {
  method = 'post',
  timeout = 1000000,
  data = {},
  baseURL = 'https://api.openai.com',
  headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'Authorization':'Bearer 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'
  },
  responseType = 'json'
}) {
  const config = {
    method: method,
    timeout: timeout,
    url: url,
    baseURL: baseURL,
    withCredentials: true,
    cache: false,
    data: data,
    headers: headers,
    responseType: responseType
  }
  return axios(config)
}
