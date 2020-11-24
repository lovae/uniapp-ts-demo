class AxiosSendError extends Error {
  private _type: number; // 1-Response Error  2-Request Error 3-Axios Config Error
  private _status: number; // http错误代码

  // message: string; // 错误消息(综合),继承

  constructor(type: number, status: number, message: string) {
    super(message)
    this._type = type
    this._status = status
  }
}

export default AxiosSendError
