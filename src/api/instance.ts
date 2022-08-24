/*
 * @Author: EdisonGu
 * @Date: 2022-08-24 23:17:57
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-08-24 23:18:30
 * @Descripttion: 
 */
import axios from 'axios'

const BASE_DOMAIN = process.env.BASE_DOMAIN
interface Res {
  data: Object,
  status: number
}

// 创建axios实例
const service:any = axios.create({
  baseURL: BASE_DOMAIN,
  timeout: 10000,
})

service.interceptors.request.use(
  (config: Object) => {
    return config;
  },
  (error: Object) => {
    return Promise.reject(error);
  }
);
// response interceptors
service.interceptors.response.use(
  (response: Res) => {
    if ((response || {}).status == 200) {
      return response.data;
    }
  },
  (error: Object) => {
    Promise.reject(error);
  }
);

export default service