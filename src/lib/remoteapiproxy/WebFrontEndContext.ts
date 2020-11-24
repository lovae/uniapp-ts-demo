
interface IFrontEndContext {

  ClientRunningType: string, /* web | mobile | pad ，根据前端运行环境类型而不同 */

  FuncTag: string, /* 前端调用api的功能标识码（后台框架定义的功能Code加密后的编码），后台提供列表，前端组件中以常量锁定 */

  ApiToken: string, /* 当不通过cookie传递时有效，通过cookie传递时，='' */

  ApiTicket: string, /* 每次Get-Post Api时，如是访问非安全限制的api时，='',否则不能为空 */

}

let CreateWebFrontEndContext = function (): IFrontEndContext {
  let fec: IFrontEndContext = {

    ClientRunningType: 'web',

    FuncTag: '',

    ApiToken: '',

    ApiTicket: ''
  }

  return fec
}

export { IFrontEndContext, CreateWebFrontEndContext }
