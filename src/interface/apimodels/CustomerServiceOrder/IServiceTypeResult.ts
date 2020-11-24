interface IServiceTypeResult {

  type: "string",//服务类型名称
  children: [ //服务项目列表
    {
      ID: "string",//服务项目ID
      name: "string",//服务项目名称
    }
  ]
}

export { IServiceTypeResult }