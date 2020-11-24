import Vue from 'vue'
import { IServiceLocation, IServiceHttpUri } from './IServiceLocation'
// import axios from 'axios'
import axios from '@/js_sdk/gangdiedao-uni-axios'


class ServiceLocator {
  private static getServiceLocations() {
    return axios
      .get('./static/config/apiurl.json')
      .then((response: { data: any }) => response.data)
  }

  public static getConfigServiceLocations(): Promise<IServiceLocation[]> {
    let apiUrlConfig = Vue.prototype.ApiUrlConfig

    // 已经建立的全局变量配置优先
    if (!!apiUrlConfig && apiUrlConfig.length !== 0) {
      return Promise.resolve(apiUrlConfig)
    }

    return this.getServiceLocations().then((servcielocationsdata: any) => {
      let loadServiceLoactions: IServiceLocation[] = []
      let servcielocations: any

      servcielocations = servcielocationsdata

      for (var i = 0; i < servcielocations.length; i++) {
        let serviceHttpUri: IServiceHttpUri = {
          UrlScheme: servcielocations[i].serviceHttpUri.UrlScheme,
          UrlHost: servcielocations[i].serviceHttpUri.UrlHost,
          UrlPort: servcielocations[i].serviceHttpUri.UrlPort,
          UrlBaseAdress: servcielocations[i].serviceHttpUri.UrlBaseAdress
        }

        let slitem: IServiceLocation = {
          name: servcielocations[i].name,
          isdefault: servcielocations[i].isdefault,
          apitype: servcielocations[i].apitype,
          serviceHttpUri: serviceHttpUri
        }

        loadServiceLoactions.push(slitem)
      }

      apiUrlConfig.length = 0
      // 建立全局配置
      Object.assign(apiUrlConfig, loadServiceLoactions)

      return loadServiceLoactions
    })
  }

  public static getDefaultServiceItem(
    serviceLocations: IServiceLocation[]
  ): IServiceLocation | null {
    let defaultService: IServiceLocation | null = null

    for (let item of serviceLocations) {
      if (item.isdefault) {
        defaultService = item
        break
      }
    }

    return defaultService
  }

  public static getServiceLocation(
    serviceName: string,
    serviceLocations: IServiceLocation[]
  ): IServiceLocation | null {
    if (!serviceName) return this.getDefaultServiceItem(serviceLocations)

    let foundServiceLocation: IServiceLocation | null = null

    for (let slitem of serviceLocations) {
      if (slitem.name === serviceName) {
        foundServiceLocation = slitem
        break
      }
    }

    return foundServiceLocation
  }

  private static buildListServiceUrl(
    serviceName: string,
    serviceLocations: IServiceLocation[],
    httpUrlPath: string,
    httpUrlQuery: string
  ) {
    let service: IServiceLocation | null = this.getServiceLocation(
      serviceName,
      serviceLocations
    )

    if (service === null) return ''

    let urlpart = `${service.serviceHttpUri.UrlScheme}://${service.serviceHttpUri.UrlHost}`

    urlpart +=
      service.serviceHttpUri.UrlPort === 0 ||
        service.serviceHttpUri.UrlPort === 80
        ? ''
        : ':' + service.serviceHttpUri.UrlPort

    urlpart +=
      service.serviceHttpUri.UrlBaseAdress === ''
        ? ''
        : '/' + service.serviceHttpUri.UrlBaseAdress

    urlpart += httpUrlPath === '' ? '' : '/' + httpUrlPath

    let querypart = httpUrlQuery === '' ? '' : '?' + httpUrlQuery

    return urlpart + querypart
  }

  public static buildServiceUrl(
    serviceName: string,
    httpUrlPath: string,
    httpUrlQuery: string
  ) {
    let apiUrlConfig = Vue.prototype.ApiUrlConfig

    if (!!apiUrlConfig && apiUrlConfig.length !== 0) {
      return this.buildListServiceUrl(
        serviceName,
        apiUrlConfig,
        httpUrlPath,
        httpUrlQuery
      )
    }

    return ''
  }
}

export default ServiceLocator
