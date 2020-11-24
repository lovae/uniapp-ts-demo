import { IServiceOrder } from '@/interface/apicontract/IServiceOrder';
import { ICustomerOrderInfo } from '@/interface/apimodels/CustomerServiceOrder/ICustomerOrderInfo';
import { ICustomerOrderListResult } from '@/interface/apimodels/CustomerServiceOrder/ICustomerOrderListResult';
import { ICustomerPreResult } from '@/interface/apimodels/CustomerServiceOrder/ICustomerPreResult';
import { IGetCustomerOrdersParam } from '@/interface/apimodels/CustomerServiceOrder/IGetCustomerOrdersParam';
import { IServiceListResult } from '@/interface/apimodels/CustomerServiceOrder/IServiceListResult';
import { IServiceTypeResult } from '@/interface/apimodels/CustomerServiceOrder/IServiceTypeResult';
import { IApiSendBackResult } from '@/interface/apimodels/public/IApiSendBackResult';
import { IQueryPagerResultBag } from '@/interface/apimodels/public/IQueryPagerResultBag';
import { IFrontEndContext } from '@/lib/remoteapiproxy/WebFrontEndContext';

let ServiceOrderLocal: IServiceOrder = {
  /**
   * 获取客服预定单(最新呼叫、待分配)
   */
  GetCsPreOrderList: function (
    fec: IFrontEndContext,
    csPreOrder: IGetCustomerOrdersParam
  ): Promise<IApiSendBackResult<IQueryPagerResultBag<ICustomerPreResult>>> {
    return Promise.resolve({
      apiSequenceTicket: "123456",
      code: "0",
      exceptionCatalog: "normal",
      serverExceptionMessage: "",
      hasServerException: false,
      resultData: {
        queryResults: [],
        pagination: {
          page: 1,
          limit: 10,
          total: 20,
          fromId: '',
        }
      }
    })
  },

  /**
   * 获取所有客服定单(全部)
   */
  GetCsOrderList: function (
    fec: IFrontEndContext,
    csOrder: IGetCustomerOrdersParam
  ): Promise<IApiSendBackResult<IQueryPagerResultBag<ICustomerOrderListResult>>> {
    return Promise.resolve({
      apiSequenceTicket: "123456",
      code: "0",
      exceptionCatalog: "normal",
      serverExceptionMessage: "",
      hasServerException: false,
      resultData: {
        queryResults: [],
        pagination: {
          page: 1,
          limit: 10,
          total: 20,
          fromId: '',
        }
      }
    })
  },

  /**
   * 客服抢单
   */
  AcceptPreOrder: function (
    fec: IFrontEndContext,
    orderID: string
  ): Promise<IApiSendBackResult<string>> {
    return Promise.resolve({
      apiSequenceTicket: "123456",
      code: "0",
      exceptionCatalog: "normal",
      serverExceptionMessage: "",
      hasServerException: false,
      resultData: ""
    })
  },

  /**
   * 客服退单
   */
  BackPreOrder: function (
    fec: IFrontEndContext,
    orderID: string
  ): Promise<IApiSendBackResult<string>> {
    return Promise.resolve({
      apiSequenceTicket: "123456",
      code: "0",
      exceptionCatalog: "normal",
      serverExceptionMessage: "",
      hasServerException: false,
      resultData: ""
    })
  },

  /**
   * 生成订单
   */
  CreateOrder: function (
    fec: IFrontEndContext,
    orderItem: ICustomerOrderInfo
  ): Promise<IApiSendBackResult<string>> {
    return Promise.resolve({
      apiSequenceTicket: "123456",
      code: "0",
      exceptionCatalog: "normal",
      serverExceptionMessage: "",
      hasServerException: false,
      resultData: ""
    })
  },

  /**
   * 编辑订单
   */
  EditOrder: function (
    fec: IFrontEndContext,
    orderItem: ICustomerOrderInfo
  ): Promise<IApiSendBackResult<string>> {
    return Promise.resolve({
      apiSequenceTicket: "123456",
      code: "0",
      exceptionCatalog: "normal",
      serverExceptionMessage: "",
      hasServerException: false,
      resultData: ""
    })
  },

  /**
   * 取消订单
   */
  CancelTheorder: function (
    fec: IFrontEndContext,
    orderID: string
  ): Promise<IApiSendBackResult<string>> {
    return Promise.resolve({
      apiSequenceTicket: "123456",
      code: "0",
      exceptionCatalog: "normal",
      serverExceptionMessage: "",
      hasServerException: false,
      resultData: ""
    })
  },

  /**
   * 完成
   */
  OrderFinished: function (
    fec: IFrontEndContext,
    orderID: string
  ): Promise<IApiSendBackResult<string>> {
    return Promise.resolve({
      apiSequenceTicket: "123456",
      code: "0",
      exceptionCatalog: "normal",
      serverExceptionMessage: "",
      hasServerException: false,
      resultData: ""
    })
  },

  /**
   * 获取服务商列表
   */
  GetServicersList: function (
    fec: IFrontEndContext,
    param: IGetCustomerOrdersParam
  ): Promise<IApiSendBackResult<IQueryPagerResultBag<IServiceListResult>>> {
    return Promise.resolve({
      apiSequenceTicket: "123456",
      code: "0",
      exceptionCatalog: "normal",
      serverExceptionMessage: "",
      hasServerException: false,
      resultData: {
        queryResults: [],
        pagination: {
          page: 1,
          limit: 10,
          total: 20,
          fromId: '',
        }
      }
    })
  },

  /**
   * 获取服务商类型(条件筛选)
   */
  GetServicesType: function (
    fec: IFrontEndContext
  ): Promise<IApiSendBackResult<IServiceTypeResult[]>> {
    return Promise.resolve({
      apiSequenceTicket: "123456",
      code: "0",
      exceptionCatalog: "normal",
      serverExceptionMessage: "",
      hasServerException: false,
      resultData: []
    })
  },


}

export { ServiceOrderLocal }