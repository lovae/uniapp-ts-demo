
interface IApiSendBackResult<T> {

  /// <summary>
  /// 由服务器端发放的Api 调用的序列号码牌（具有唯一性的字符串）
  /// （1）此序列号码牌申请后只能使用一次，再次使用将按照系统异常报错【预防由程序发起的连续调用】
  /// （2）序列号码牌在客户端发起调用前临时申请，申请后号码牌有其特定的有效期，如20秒
  /// （3）序列号码牌在客户端发起调用，通过自定义HttpHeader中传送，或作为url参数隐式传送（不在api接口中定义，由api自行自动解析）
  /// （4）每次api服务处理后回送时，需回送本次调用使用的号牌
  /// （5）号牌使用后自动失效，不再生效
  /// （6）服务器端使用号牌也用于保证调用的幂等性（如保证一次增加用户的请求只能执行一次，多次发送的会被忽略）
  /// </summary>
  apiSequenceTicket: string,

  /// <summary>
  /// 是否发生服务器端运行时异常
  /// 有异常时，无任务有效的业务数据返回，只返回异常信息
  /// 异常信息，主要是服务器端运行时发生的系统异常
  /// 注意：异常信息，并非业务报错信息（如业务报错-用户email不同相重）
  ///       业务报错信息，是业务返回对象需要设计的必要内容，与异常无关，也不能由异常信息回送。
  /// </summary>
  hasServerException: boolean,

  /// <summary>
  /// api 服务端执行异常的类型【不需要到每个异常，到大类即可，用于分类识别处理异常的需要定义】
  /// 如：normal  或 ticketInvalid 或 runtimeException
  /// </summary>
  exceptionCatalog: string,

  /// <summary>
  /// 服务器端回送的服务器运行异常消息
  /// 异常消息的回送，在后台需按照开发调试还是正式上线运行，设置一个开关，
  /// 控制显示的显示方式，在调试状态，则显示明确的异常信息，在运行时，则可以定制确定消息回送
  /// </summary>
  serverExceptionMessage: string,

  code: string,

  /// <summary>
  /// 有效的业务回送数据
  /// 仅当服务器端没有发生异常时，通过该数据项接收正常的数据结果
  /// 数据结果，仍按照业务需求定义，可以是简单对象或对象数组
  /// 此业务数据表达了正常的系统交互方式，用于用户交互的各种逻辑处理
  /// </summary>
  resultData: T

}

export { IApiSendBackResult }
