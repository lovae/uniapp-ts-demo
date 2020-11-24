import { ICustomerOrderInfo } from "./ICustomerOrderInfo";

interface ICustomerOrderListResult {
  servicecate: string,
  orders: ICustomerOrderInfo[]
}

export { ICustomerOrderListResult }