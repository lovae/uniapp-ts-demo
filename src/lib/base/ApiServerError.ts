class ApiServerError extends Error {
  /// <summary>
  /// api 服务端执行异常的类型【不需要到每个异常，到大类即可，用于分类识别处理异常的需要定义】
  /// 如：normal  或 ticketInvalid 或 runtimeException
  /// </summary>
  ExceptionCatalog?: string;

  /// <summary>
  /// 服务器端回送的服务器运行异常消息
  /// 异常消息的回送，在后台需按照开发调试还是正式上线运行，设置一个开关，
  /// 控制显示的显示方式，在调试状态，则显示明确的异常信息，在运行时，则可以定制确定消息回送
  /// </summary>
  ServerExceptionMessage?: string;

  constructor(catalog?: string, message?: string) {
    super(message)
    this.ExceptionCatalog = catalog
    this.ServerExceptionMessage = message
  }
}

export default ApiServerError
