interface IGetCustomerOrdersParam {
  limit: number,
  page: number,

  //查询客服预订单（最新呼叫、待分配）时，传该字段
  status?: string,  // 0最新呼叫  1 待分配

  //获取服务商列表时，传该字段
  projectIDs?: string  //服务项目ID集合，为空查全部
}

export { IGetCustomerOrdersParam }