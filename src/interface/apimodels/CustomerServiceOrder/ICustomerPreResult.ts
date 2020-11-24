import { IUserInfo } from './IUserInfo';

interface ICustomerPreResult {
  servicecate: string, //服务类型名称
  preOrders: IUserInfo[],
}

export { ICustomerPreResult }