import { IServiceOrder } from '@/interface/apicontract/IServiceOrder';
import { ICustomerOrderInfo } from '@/interface/apimodels/CustomerServiceOrder/ICustomerOrderInfo';
import { ICustomerOrderListResult } from '@/interface/apimodels/CustomerServiceOrder/ICustomerOrderListResult';
import { ICustomerPreResult } from '@/interface/apimodels/CustomerServiceOrder/ICustomerPreResult';
import { IGetCustomerOrdersParam } from '@/interface/apimodels/CustomerServiceOrder/IGetCustomerOrdersParam';
import { IServiceListResult } from '@/interface/apimodels/CustomerServiceOrder/IServiceListResult';
import { IServiceTypeResult } from '@/interface/apimodels/CustomerServiceOrder/IServiceTypeResult';
import { IApiSendBackResult } from '@/interface/apimodels/public/IApiSendBackResult';
import { IQueryPagerResultBag } from '@/interface/apimodels/public/IQueryPagerResultBag';
import RemoteServerClient from '@/lib/remoteapiproxy/RemoteServerProxy';
import { IFrontEndContext } from '@/lib/remoteapiproxy/WebFrontEndContext';

let ServiceOrderRemote: IServiceOrder = {
  /**
   * 获取客服预定单(最新呼叫、待分配)
   */
  GetCsPreOrderList: function (
    fec: IFrontEndContext,
    csPreOrder: IGetCustomerOrdersParam
  ): Promise<IApiSendBackResult<IQueryPagerResultBag<ICustomerPreResult>>> {
    let webClientRunningType: string = fec.ClientRunningType
    let webFuncTag: string = fec.FuncTag
    let webApiToken: string = fec.ApiToken
    let webApiTicket: string = fec.ApiTicket

    let remoteclient = new RemoteServerClient(
      'LockIndexService',
      'CustomerService/getCsPreOrderList.do',
      {},
      webApiToken,
      webFuncTag,
      webApiTicket,
      webClientRunningType
    )
    return remoteclient
      .PostRemoteWithToken(csPreOrder)
      .then(response => response.data)

  },

  /**
   * 获取所有客服定单(全部) 
   */
  GetCsOrderList: function (
    fec: IFrontEndContext,
    csOrder: IGetCustomerOrdersParam
  ): Promise<IApiSendBackResult<IQueryPagerResultBag<ICustomerOrderListResult>>> {
    let webClientRunningType: string = fec.ClientRunningType
    let webFuncTag: string = fec.FuncTag
    let webApiToken: string = fec.ApiToken
    let webApiTicket: string = fec.ApiTicket

    let remoteclient = new RemoteServerClient(
      'LockIndexService',
      'CustomerService/getCsOrderList.do',
      {},
      webApiToken,
      webFuncTag,
      webApiTicket,
      webClientRunningType
    )
    return remoteclient
      .PostRemoteWithToken(csOrder)
      .then(response => response.data)
  },

  /**
   * 客服抢单
   */
  AcceptPreOrder: function (
    fec: IFrontEndContext,
    orderID: string
  ): Promise<IApiSendBackResult<string>> {
    let webClientRunningType: string = fec.ClientRunningType
    let webFuncTag: string = fec.FuncTag
    let webApiToken: string = fec.ApiToken
    let webApiTicket: string = fec.ApiTicket

    let param = {
      orderID: orderID
    }

    let remoteclient = new RemoteServerClient(
      'LockIndexService',
      'CustomerService/acceptPreOrder.do',
      {},
      webApiToken,
      webFuncTag,
      webApiTicket,
      webClientRunningType
    )
    return remoteclient
      .PostRemoteWithToken(param)
      .then(response => response.data)
  },

  /**
   * 客服退单
   */
  BackPreOrder: function (
    fec: IFrontEndContext,
    orderID: string
  ): Promise<IApiSendBackResult<string>> {
    let webClientRunningType: string = fec.ClientRunningType
    let webFuncTag: string = fec.FuncTag
    let webApiToken: string = fec.ApiToken
    let webApiTicket: string = fec.ApiTicket

    let param = {
      orderID: orderID
    }

    let remoteclient = new RemoteServerClient(
      'LockIndexService',
      'CustomerService/backPreOrder.do',
      {},
      webApiToken,
      webFuncTag,
      webApiTicket,
      webClientRunningType
    )
    return remoteclient
      .PostRemoteWithToken(param)
      .then(response => response.data)
  },

  /**
   * 取消退单
   */
  CancelTheorder: function (
    fec: IFrontEndContext,
    orderID: string
  ): Promise<IApiSendBackResult<string>> {
    let webClientRunningType: string = fec.ClientRunningType
    let webFuncTag: string = fec.FuncTag
    let webApiToken: string = fec.ApiToken
    let webApiTicket: string = fec.ApiTicket

    let param = {
      orderID: orderID
    }

    let remoteclient = new RemoteServerClient(
      'LockIndexService',
      'Homeservice/canceltheorder.do',
      {},
      webApiToken,
      webFuncTag,
      webApiTicket,
      webClientRunningType
    )
    return remoteclient
      .PostRemoteWithToken(param)
      .then(response => response.data)
  },

  /**
   * 服务完成
   */
  OrderFinished: function (
    fec: IFrontEndContext,
    orderID: string
  ): Promise<IApiSendBackResult<string>> {
    let webClientRunningType: string = fec.ClientRunningType
    let webFuncTag: string = fec.FuncTag
    let webApiToken: string = fec.ApiToken
    let webApiTicket: string = fec.ApiTicket

    let param = {
      orderID: orderID
    }

    let remoteclient = new RemoteServerClient(
      'LockIndexService',
      'Homeservice/orderfinished.do',
      {},
      webApiToken,
      webFuncTag,
      webApiTicket,
      webClientRunningType
    )
    return remoteclient
      .PostRemoteWithToken(param)
      .then(response => response.data)
  },

  /**
   * 生成订单
   */
  CreateOrder: function (
    fec: IFrontEndContext,
    orderItem: ICustomerOrderInfo
  ): Promise<IApiSendBackResult<string>> {
    let webClientRunningType: string = fec.ClientRunningType
    let webFuncTag: string = fec.FuncTag
    let webApiToken: string = fec.ApiToken
    let webApiTicket: string = fec.ApiTicket

    let remoteclient = new RemoteServerClient(
      'LockIndexService',
      'CustomerService/createOrder.do',
      {},
      webApiToken,
      webFuncTag,
      webApiTicket,
      webClientRunningType
    )
    return remoteclient
      .PostRemoteWithToken(orderItem)
      .then(response => response.data)
  },

  /**
   * 编辑订单
   */
  EditOrder: function (
    fec: IFrontEndContext,
    orderItem: ICustomerOrderInfo
  ): Promise<IApiSendBackResult<string>> {
    let webClientRunningType: string = fec.ClientRunningType
    let webFuncTag: string = fec.FuncTag
    let webApiToken: string = fec.ApiToken
    let webApiTicket: string = fec.ApiTicket

    let remoteclient = new RemoteServerClient(
      'LockIndexService',
      'CustomerService/editOrder.do',
      {},
      webApiToken,
      webFuncTag,
      webApiTicket,
      webClientRunningType
    )
    return remoteclient
      .PostRemoteWithToken(orderItem)
      .then(response => response.data)
  },

  /**
   * 获取服务商列表
   */
  GetServicersList: function (
    fec: IFrontEndContext,
    param: IGetCustomerOrdersParam
  ): Promise<IApiSendBackResult<IQueryPagerResultBag<IServiceListResult>>> {
    let webClientRunningType: string = fec.ClientRunningType
    let webFuncTag: string = fec.FuncTag
    let webApiToken: string = fec.ApiToken
    let webApiTicket: string = fec.ApiTicket

    let remoteclient = new RemoteServerClient(
      'LockIndexService',
      'CustomerService/getServicersList.do',
      {},
      webApiToken,
      webFuncTag,
      webApiTicket,
      webClientRunningType
    )
    return remoteclient
      .PostRemoteWithToken(param)
      .then(response => response.data)
  },

  /**
   * 获取服务商类型(条件筛选)
   */
  GetServicesType: function (
    fec: IFrontEndContext
  ): Promise<IApiSendBackResult<IServiceTypeResult[]>> {
    let webClientRunningType: string = fec.ClientRunningType
    let webFuncTag: string = fec.FuncTag
    let webApiToken: string = fec.ApiToken
    let webApiTicket: string = fec.ApiTicket

    let remoteclient = new RemoteServerClient(
      'LockIndexService',
      'CustomerService/getServicesType.do',
      {},
      webApiToken,
      webFuncTag,
      webApiTicket,
      webClientRunningType
    )
    return remoteclient
      .GetRemoteWithToken()
      .then(response => response.data)
  },


}

export { ServiceOrderRemote }