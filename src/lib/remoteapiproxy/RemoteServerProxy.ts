import serviceLocator from './ServiceLocator'
import axiosClient from './AxiosRestClient'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { IServiceLocation } from './IServiceLocation'
import AxiosSendError from './AxiosSendError'

class RemoteServerClient {
  private _ServiceName: string = ''; // 协议名称 【http/https】

  public get ServiceName(): string {
    return this._ServiceName
  }
  public set ServiceName(value: string) {
    this._ServiceName = value
  }

  private _HttpUrlScheme: string | undefined = 'http'; // 协议名称 【http/https】

  public get HttpUrlScheme(): string | undefined {
    return this._HttpUrlScheme
  }
  public set HttpUrlScheme(value: string | undefined) {
    this._HttpUrlScheme = value
  }

  private _HttpUrlHost: string | undefined = 'localhost'; // 主机名称部分
  public get HttpUrlHost(): string | undefined {
    return this._HttpUrlHost
  }
  public set HttpUrlHost(value: string | undefined) {
    this._HttpUrlHost = value
  }

  private _HttpUrlPort: number | undefined = 80; // 端口号
  public get HttpUrlPort(): number | undefined {
    return this._HttpUrlPort
  }
  public set HttpUrlPort(value: number | undefined) {
    this._HttpUrlPort = value
  }

  private _HttpUrlBaseAdress: string | undefined = 'api'; // api基地址部分
  public get HttpUrlBaseAdress(): string | undefined {
    return this._HttpUrlBaseAdress
  }
  public set HttpUrlBaseAdress(value: string | undefined) {
    this._HttpUrlBaseAdress = value
  }

  private _HttpUrlPath: string = ''; // api服务路径
  public get HttpUrlPath(): string {
    return this._HttpUrlPath
  }
  public set HttpUrlPath(value: string) {
    this._HttpUrlPath = value
  }

  private _HttpUrlQueryParams: object | URLSearchParams = {}; // api查询参数
  public get HttpUrlQueryParams(): object | URLSearchParams {
    return this._HttpUrlQueryParams
  }
  public set HttpUrlQueryParams(value: object | URLSearchParams) {
    this._HttpUrlQueryParams = value
  }

  private _HttpClientRunningType: string = ''; // 前端运行环境类型
  public get HttpClientRunningType(): string {
    return this._HttpClientRunningType
  }
  public set HttpClientRunningType(value: string) {
    this._HttpClientRunningType = value
  }

  private _HttpFuncTag: string = ''; // 功能项标识
  public get HttpFuncTag(): string {
    return this._HttpFuncTag
  }
  public set HttpFuncTag(value: string) {
    this._HttpFuncTag = value
  }

  private _HttpApiToken: string = ''; // 用户token
  public get HttpApiToken(): string {
    return this._HttpApiToken
  }
  public set HttpApiToken(value: string) {
    this._HttpApiToken = value
  }

  private _HttpApiTicket: string = ''; // 申请的ApiTicket
  public get HttpApiTicket(): string {
    return this._HttpApiTicket
  }
  public set HttpApiTicket(value: string) {
    this._HttpApiTicket = value
  }

  private GetRemoteConfigUrl(
    serviceName: string,
    urlConfig: IServiceLocation[]
  ): string {
    let nameServiceLoaction = serviceLocator.getServiceLocation(
      serviceName,
      urlConfig
    )

    let HttpUrlScheme: string
    let HttpUrlHost: string
    let HttpUrlPort: number
    let HttpUrlBaseAdress: string

    if (nameServiceLoaction == null) {
      HttpUrlScheme = this.HttpUrlScheme || 'http'
      HttpUrlHost = this.HttpUrlHost || '127.0.0.1'
      HttpUrlPort = this.HttpUrlPort || 80
      HttpUrlBaseAdress = this.HttpUrlBaseAdress || ''
    } else {
      HttpUrlScheme =
        this.HttpUrlScheme || nameServiceLoaction.serviceHttpUri.UrlScheme
      HttpUrlHost =
        this.HttpUrlHost || nameServiceLoaction.serviceHttpUri.UrlHost
      HttpUrlPort =
        this.HttpUrlPort || nameServiceLoaction.serviceHttpUri.UrlPort
      HttpUrlBaseAdress =
        this.HttpUrlBaseAdress ||
        nameServiceLoaction.serviceHttpUri.UrlBaseAdress
    }

    let urlpart = HttpUrlScheme + '://' + HttpUrlHost

    urlpart += HttpUrlPort === 0 ? '80' : ':' + HttpUrlPort.toString()
    urlpart += HttpUrlBaseAdress === '' ? '' : '/' + HttpUrlBaseAdress
    urlpart += this.HttpUrlPath === '' ? '' : '/' + this.HttpUrlPath

    return urlpart
  }

  private GetRemoteCallingUrl(): Promise<string> {
    return serviceLocator.getConfigServiceLocations().then(urlConfig => {
      let url: string = this.GetRemoteConfigUrl(this.ServiceName, urlConfig)
      return url
    })
  }

  constructor(
    serviceName: string,
    httpUrlPath: string,
    httpUrlQueryParams: object | URLSearchParams,
    httpApiToken: string,
    httpFuncTag: string,
    httpApiTicket: string,
    httpClientRunningType: string,
    httpUrlScheme?: string,
    httpUrlHost?: string,
    httpUrlPort?: number,
    httpUrlBaseAdress?: string
  ) {
    this._ServiceName = serviceName
    this._HttpUrlScheme = httpUrlScheme
    this._HttpUrlHost = httpUrlHost
    this._HttpUrlPort = httpUrlPort
    this._HttpUrlBaseAdress = httpUrlBaseAdress

    this._HttpUrlPath = httpUrlPath || ''
    this._HttpUrlQueryParams = httpUrlQueryParams || {}

    this._HttpClientRunningType = httpClientRunningType || ''
    this._HttpFuncTag = httpFuncTag || ''
    this._HttpApiToken = httpApiToken || ''
    this._HttpApiTicket = httpApiTicket || ''
  }

  private ExtractAxiosError(catcherror: any): AxiosSendError {
    let axiosErrorType = 0
    let axiosErrorStatus = 0
    let axiosErrorMessage = ''

    if (catcherror.response) {

      axiosErrorType = 1
      axiosErrorStatus = catcherror.response.status
      axiosErrorMessage = catcherror.response.data.Message
    } else if (catcherror.request) {

      let xhr: XMLHttpRequest = catcherror.request
      let loginerr = ''

      if (xhr.status === 0) {
        loginerr = '连接失败，请检查网络状态！'
      } else if (xhr.status === 404) {
        loginerr = '请求地址没有发现！'
      } else if (xhr.status === 500) {
        loginerr = '服务器内部错误！'
      } else {
        loginerr = '未知服务调用错误.\n' + xhr.responseText
      }

      axiosErrorType = 2
      axiosErrorStatus = xhr.status
      axiosErrorMessage = loginerr
    } else {
      // Something happened in setting up the request that triggered an Error
      axiosErrorType = 3
      axiosErrorStatus = 0
      axiosErrorMessage = catcherror.message
    }

    let axiosError = new AxiosSendError(
      axiosErrorType,
      axiosErrorStatus,
      axiosErrorMessage
    )

    return axiosError
  }

  public GetRemote(): Promise<AxiosResponse<any>> {
    return this.GetRemoteCallingUrl()
      .then(remoteCallingUrl => {
        let urlConfig: AxiosRequestConfig = {
          url: remoteCallingUrl,
          method: 'get',
          params: this.HttpUrlQueryParams,
          headers: {
            'FTag': this.HttpFuncTag,
            'ApiToken': this.HttpApiToken,
            'ApiTicket': this.HttpApiTicket,
            'RUICHAOSESSIONID': uni.getStorageSync('token')
          }
        }

        return urlConfig
      })
      .then(urlConfig => {
        return axiosClient.request(urlConfig).catch((reason: any) => {
          return Promise.reject(this.ExtractAxiosError(reason))
        })
      })
  }

  public GetRemoteWithToken() {
    return this.GetRemoteCallingUrl()
      .then(remoteCallingUrl => {
        let urlConfig: AxiosRequestConfig = {
          url: remoteCallingUrl,
          method: 'get',
          params: this.HttpUrlQueryParams,
          withCredentials: true,
          headers: {
            'FTag': this.HttpFuncTag,
            'ApiToken': this.HttpApiToken,
            'ApiTicket': this.HttpApiTicket,
            'RUICHAOSESSIONID': uni.getStorageSync('token')
          }
        }

        return urlConfig
      })
      .then(urlConfig => {
        return axiosClient.request(urlConfig).catch((reason: any) => {
          return Promise.reject(this.ExtractAxiosError(reason))
        })
      })
  }

  public PostRemote(postData: any) {
    return this.GetRemoteCallingUrl()
      .then(remoteCallingUrl => {
        let urlConfig: AxiosRequestConfig = {
          url: remoteCallingUrl,
          method: 'post',
          data: postData,
          params: this.HttpUrlQueryParams,
          headers: {
            'FTag': this.HttpFuncTag,
            'ApiToken': this.HttpApiToken,
            'ApiTicket': this.HttpApiTicket,
            'RUICHAOSESSIONID': uni.getStorageSync('token')
          }
        }

        return urlConfig
      })
      .then(urlConfig => {
        return axiosClient.request(urlConfig).catch((reason: any) => {
          return Promise.reject(this.ExtractAxiosError(reason))
        })
      })
  }

  public PostRemoteWithToken(postData?: any) {
    return this.GetRemoteCallingUrl()
      .then(remoteCallingUrl => {
        let urlConfig: AxiosRequestConfig = {
          url: remoteCallingUrl,
          method: 'post',
          data: postData,
          params: this.HttpUrlQueryParams,
          withCredentials: true,
          headers: {
            'FTag': this.HttpFuncTag,
            'ApiToken': this.HttpApiToken,
            'ApiTicket': this.HttpApiTicket,
            'RUICHAOSESSIONID': uni.getStorageSync('token')
          }
        }

        return urlConfig
      })
      .then(urlConfig => {
        return axiosClient.request(urlConfig).catch((reason: any) => {
          return Promise.reject(this.ExtractAxiosError(reason))
        })
      })
  }
}

export default RemoteServerClient
