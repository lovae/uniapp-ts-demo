interface ICustomerOrderInfo {
  orderID: string,  //订单ID
  name: string, //客户姓名
  phone: string, //客户电话
  serviceproject: string, //服务项目
  servicename: string, //服务人员姓名
  servicephone: string, //服务人员电话
  address: string, //服务地址
  time: string, //上门时间
  remark: string,    //备注
  money: string,  //金额

  status?: string,    //订单状态  2待服务，3待支付  4已取消   5已完成
  payStatus?: string,    //支付状态 
  orderNum?: string,  //订单编号

  province?: string,  //省
  city?: string,  //市
  area?: string,  //区
  pca?: string
}

export { ICustomerOrderInfo }