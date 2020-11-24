import { IServiceOrder } from '@/interface/apicontract/IServiceOrder';
import { ICustomerOrderInfo } from '@/interface/apimodels/CustomerServiceOrder/ICustomerOrderInfo';
import { ICustomerOrderListResult } from '@/interface/apimodels/CustomerServiceOrder/ICustomerOrderListResult';
import { ICustomerPreResult } from '@/interface/apimodels/CustomerServiceOrder/ICustomerPreResult';
import { IGetCustomerOrdersParam } from '@/interface/apimodels/CustomerServiceOrder/IGetCustomerOrdersParam';
import { IServiceListResult } from '@/interface/apimodels/CustomerServiceOrder/IServiceListResult';
import { IServiceTypeResult } from '@/interface/apimodels/CustomerServiceOrder/IServiceTypeResult';
import { IApiSendBackResult } from '@/interface/apimodels/public/IApiSendBackResult';
import { IQueryPagerResultBag } from '@/interface/apimodels/public/IQueryPagerResultBag';
import { IServiceLocation } from '@/lib/remoteapiproxy/IServiceLocation';
import ServiceLocator from '@/lib/remoteapiproxy/ServiceLocator';
import { IFrontEndContext } from '@/lib/remoteapiproxy/WebFrontEndContext';
import { ServiceOrderLocal } from '../localclient/ServiceOrderLocal';
import { ServiceOrderRemote } from '../remoteclient/ServiceOrderRemote';

let ServiceOrderClient: IServiceOrder = {
  /**
   * 获取客服预定单(最新呼叫、待分配)
   */
  GetCsPreOrderList: function (
    fec: IFrontEndContext,
    csPreOrder: IGetCustomerOrdersParam
  ): Promise<IApiSendBackResult<IQueryPagerResultBag<ICustomerPreResult>>> {
    return ServiceLocator.getConfigServiceLocations()
      .then(urlConfig => {
        let apiconfig: IServiceLocation | null = ServiceLocator.getServiceLocation(
          'LockIndexService',
          urlConfig
        )

        return apiconfig
      })
      .then(apiconfig => {
        if (apiconfig === null) {
          return Promise.reject(new Error('UrlConfig未发现authservice配置'))
        }

        if (apiconfig.apitype === 'local') {
          return ServiceOrderLocal.GetCsPreOrderList(fec, csPreOrder)
        }

        return ServiceOrderRemote.GetCsPreOrderList(fec, csPreOrder)
      })

  },

  /**
   * 获取所有客服定单(全部) 
   */
  GetCsOrderList: function (
    fec: IFrontEndContext,
    csOrder: IGetCustomerOrdersParam
  ): Promise<IApiSendBackResult<IQueryPagerResultBag<ICustomerOrderListResult>>> {
    return ServiceLocator.getConfigServiceLocations()
      .then(urlConfig => {
        let apiconfig: IServiceLocation | null = ServiceLocator.getServiceLocation(
          'LockIndexService',
          urlConfig
        )

        return apiconfig
      })
      .then(apiconfig => {
        if (apiconfig === null) {
          return Promise.reject(new Error('UrlConfig未发现authservice配置'))
        }

        if (apiconfig.apitype === 'local') {
          return ServiceOrderLocal.GetCsOrderList(fec, csOrder)
        }

        return ServiceOrderRemote.GetCsOrderList(fec, csOrder)
      })
  },

  /**
   * 客服抢单
   */
  AcceptPreOrder: function (
    fec: IFrontEndContext,
    orderID: string
  ): Promise<IApiSendBackResult<string>> {
    return ServiceLocator.getConfigServiceLocations()
      .then(urlConfig => {
        let apiconfig: IServiceLocation | null = ServiceLocator.getServiceLocation(
          'LockIndexService',
          urlConfig
        )

        return apiconfig
      })
      .then(apiconfig => {
        if (apiconfig === null) {
          return Promise.reject(new Error('UrlConfig未发现authservice配置'))
        }

        if (apiconfig.apitype === 'local') {
          return ServiceOrderLocal.AcceptPreOrder(fec, orderID)
        }

        return ServiceOrderRemote.AcceptPreOrder(fec, orderID)
      })
  },

  /**
   * 客服退单
   */
  BackPreOrder: function (
    fec: IFrontEndContext,
    orderID: string
  ): Promise<IApiSendBackResult<string>> {
    return ServiceLocator.getConfigServiceLocations()
      .then(urlConfig => {
        let apiconfig: IServiceLocation | null = ServiceLocator.getServiceLocation(
          'LockIndexService',
          urlConfig
        )

        return apiconfig
      })
      .then(apiconfig => {
        if (apiconfig === null) {
          return Promise.reject(new Error('UrlConfig未发现authservice配置'))
        }

        if (apiconfig.apitype === 'local') {
          return ServiceOrderLocal.BackPreOrder(fec, orderID)
        }

        return ServiceOrderRemote.BackPreOrder(fec, orderID)
      })
  },

  /**
   * 取消订单
   */
  CancelTheorder: function (
    fec: IFrontEndContext,
    orderID: string
  ): Promise<IApiSendBackResult<string>> {
    return ServiceLocator.getConfigServiceLocations()
      .then(urlConfig => {
        let apiconfig: IServiceLocation | null = ServiceLocator.getServiceLocation(
          'LockIndexService',
          urlConfig
        )

        return apiconfig
      })
      .then(apiconfig => {
        if (apiconfig === null) {
          return Promise.reject(new Error('UrlConfig未发现authservice配置'))
        }

        if (apiconfig.apitype === 'local') {
          return ServiceOrderLocal.CancelTheorder(fec, orderID)
        }

        return ServiceOrderRemote.CancelTheorder(fec, orderID)
      })
  },

  /**
   * 服务完成
   */
  OrderFinished: function (
    fec: IFrontEndContext,
    orderID: string
  ): Promise<IApiSendBackResult<string>> {
    return ServiceLocator.getConfigServiceLocations()
      .then(urlConfig => {
        let apiconfig: IServiceLocation | null = ServiceLocator.getServiceLocation(
          'LockIndexService',
          urlConfig
        )

        return apiconfig
      })
      .then(apiconfig => {
        if (apiconfig === null) {
          return Promise.reject(new Error('UrlConfig未发现authservice配置'))
        }

        if (apiconfig.apitype === 'local') {
          return ServiceOrderLocal.OrderFinished(fec, orderID)
        }

        return ServiceOrderRemote.OrderFinished(fec, orderID)
      })
  },

  /**
   * 生成订单
   */
  CreateOrder: function (
    fec: IFrontEndContext,
    orderItem: ICustomerOrderInfo
  ): Promise<IApiSendBackResult<string>> {
    return ServiceLocator.getConfigServiceLocations()
      .then(urlConfig => {
        let apiconfig: IServiceLocation | null = ServiceLocator.getServiceLocation(
          'LockIndexService',
          urlConfig
        )

        return apiconfig
      })
      .then(apiconfig => {
        if (apiconfig === null) {
          return Promise.reject(new Error('UrlConfig未发现authservice配置'))
        }

        if (apiconfig.apitype === 'local') {
          return ServiceOrderLocal.CreateOrder(fec, orderItem)
        }

        return ServiceOrderRemote.CreateOrder(fec, orderItem)
      })
  },

  /**
   * 编辑订单
   */
  EditOrder: function (
    fec: IFrontEndContext,
    orderItem: ICustomerOrderInfo
  ): Promise<IApiSendBackResult<string>> {
    return ServiceLocator.getConfigServiceLocations()
      .then(urlConfig => {
        let apiconfig: IServiceLocation | null = ServiceLocator.getServiceLocation(
          'LockIndexService',
          urlConfig
        )

        return apiconfig
      })
      .then(apiconfig => {
        if (apiconfig === null) {
          return Promise.reject(new Error('UrlConfig未发现authservice配置'))
        }

        if (apiconfig.apitype === 'local') {
          return ServiceOrderLocal.EditOrder(fec, orderItem)
        }

        return ServiceOrderRemote.EditOrder(fec, orderItem)
      })
  },

  /**
   * 获取服务商列表
   */
  GetServicersList: function (
    fec: IFrontEndContext,
    param: IGetCustomerOrdersParam
  ): Promise<IApiSendBackResult<IQueryPagerResultBag<IServiceListResult>>> {
    return ServiceLocator.getConfigServiceLocations()
      .then(urlConfig => {
        let apiconfig: IServiceLocation | null = ServiceLocator.getServiceLocation(
          'LockIndexService',
          urlConfig
        )

        return apiconfig
      })
      .then(apiconfig => {
        if (apiconfig === null) {
          return Promise.reject(new Error('UrlConfig未发现authservice配置'))
        }

        if (apiconfig.apitype === 'local') {
          return ServiceOrderLocal.GetServicersList(fec, param)
        }

        return ServiceOrderRemote.GetServicersList(fec, param)
      })
  },

  /**
   * 获取服务商类型(条件筛选)
   */
  GetServicesType: function (
    fec: IFrontEndContext
  ): Promise<IApiSendBackResult<IServiceTypeResult[]>> {
    return ServiceLocator.getConfigServiceLocations()
      .then(urlConfig => {
        let apiconfig: IServiceLocation | null = ServiceLocator.getServiceLocation(
          'LockIndexService',
          urlConfig
        )

        return apiconfig
      })
      .then(apiconfig => {
        if (apiconfig === null) {
          return Promise.reject(new Error('UrlConfig未发现authservice配置'))
        }

        if (apiconfig.apitype === 'local') {
          return ServiceOrderLocal.GetServicesType(fec)
        }

        return ServiceOrderRemote.GetServicesType(fec)
      })
  },


}

export { ServiceOrderClient }