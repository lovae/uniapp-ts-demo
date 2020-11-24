import { AxiosRequestConfig } from 'axios'
import CreateAxiosInstance from '@/utils/request'

class AxiosRestClient {
  public static async request(config: AxiosRequestConfig) {
    let axiosservice = CreateAxiosInstance(config)

    return (await axiosservice).request(config)
  }
}

export default AxiosRestClient
