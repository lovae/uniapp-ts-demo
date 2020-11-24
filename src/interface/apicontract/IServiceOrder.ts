import { IFrontEndContext } from '@/lib/remoteapiproxy/WebFrontEndContext';
import { ICustomerOrderInfo } from '../apimodels/CustomerServiceOrder/ICustomerOrderInfo';
import { ICustomerOrderListResult } from '../apimodels/CustomerServiceOrder/ICustomerOrderListResult';
import { ICustomerPreResult } from '../apimodels/CustomerServiceOrder/ICustomerPreResult';
import { IGetCustomerOrdersParam } from '../apimodels/CustomerServiceOrder/IGetCustomerOrdersParam';
import { IServiceListResult } from '../apimodels/CustomerServiceOrder/IServiceListResult';
import { IServiceTypeResult } from '../apimodels/CustomerServiceOrder/IServiceTypeResult';
import { IApiSendBackResult } from '../apimodels/public/IApiSendBackResult';
import { IQueryPagerResultBag } from '../apimodels/public/IQueryPagerResultBag';

interface IServiceOrder {
  /**
   * 获取客服预定单(最新呼叫、待分配)
   */
  GetCsPreOrderList: (
    fec: IFrontEndContext,
    csPreOrder: IGetCustomerOrdersParam
  ) => Promise<IApiSendBackResult<IQueryPagerResultBag<ICustomerPreResult>>>;

  /**
   * 获取所有客服定单(全部)
   */
  GetCsOrderList: (
    fec: IFrontEndContext,
    csOrder: IGetCustomerOrdersParam
  ) => Promise<IApiSendBackResult<IQueryPagerResultBag<ICustomerOrderListResult>>>;

  /**
   * 客服抢单
   */
  AcceptPreOrder: (
    fec: IFrontEndContext,
    orderID: string
  ) => Promise<IApiSendBackResult<string>>;

  /**
   * 客服退单
   */
  BackPreOrder: (
    fec: IFrontEndContext,
    orderID: string
  ) => Promise<IApiSendBackResult<string>>;

  /**
   * 取消订单
   */
  CancelTheorder: (
    fec: IFrontEndContext,
    orderID: string
  ) => Promise<IApiSendBackResult<string>>;

  /**
   * 服务完成
   */
  OrderFinished: (
    fec: IFrontEndContext,
    orderID: string
  ) => Promise<IApiSendBackResult<string>>;

  /**
   * 生成订单
   */
  CreateOrder: (
    fec: IFrontEndContext,
    orderItem: ICustomerOrderInfo
  ) => Promise<IApiSendBackResult<string>>;

  /**
   * 编辑订单
   */
  EditOrder: (
    fec: IFrontEndContext,
    orderItem: ICustomerOrderInfo
  ) => Promise<IApiSendBackResult<string>>;

  /**
   * 获取服务商列表
   */
  GetServicersList: (
    fec: IFrontEndContext,
    param: IGetCustomerOrdersParam
  ) => Promise<IApiSendBackResult<IQueryPagerResultBag<IServiceListResult>>>;

  /**
   * 获取服务类型(条件筛选）
   */
  GetServicesType: (
    fec: IFrontEndContext
  ) => Promise<IApiSendBackResult<IServiceTypeResult[]>>;

}

export { IServiceOrder }