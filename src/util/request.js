import axios from "axios";

const request = axios.create({
  baseURL: "/api",
  timeout: 50000,
})
// 请求拦截器
request.interceptors.request.use((config) => {
  return config;
}, (error) => {})
// 响应拦截器
request.interceptors.response.use((config) => {
  return config;
}, (error) => {})
export default request;