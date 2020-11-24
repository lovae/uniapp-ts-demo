import { AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from '@/js_sdk/gangdiedao-uni-axios'

function CreateAxiosInstance(config: AxiosRequestConfig) {
  let axiosservice = axios.create(config)

  // Request interceptors
  axiosservice.interceptors.request.use(
    (    config: any) => {
      const storage = uni.getStorageSync('token')
      if (!storage) { // 本地没有token表示未登录
        uni.showModal({
          content: '未登录返回到登录页',
          showCancel: false,
          success: function () {
            uni.reLaunch({ url: '/pages/login/login' })
          }
        })
      }
      return config
    },
    (    error: any) => {
      Promise.reject(error)
    }
  )

  return axiosservice
}

export default CreateAxiosInstance
