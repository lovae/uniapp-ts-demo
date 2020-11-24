interface IApiApplyTicket {

  /// <summary>
  /// 允许的操作类型 【GET/POST】
  /// </summary>
  MethodAllowed: string,

  /// <summary>
  /// 服务器上发放的有效的号码【采用不重复的随机码即可】
  /// </summary>
  ApiSequenceTicket:string
}

export { IApiApplyTicket }
