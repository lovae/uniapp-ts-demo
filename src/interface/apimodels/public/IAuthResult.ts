interface IAuthResult {
  /// <summary>
  /// 是否认证成功
  /// </summary>
  beAuthenticationOk: boolean,

  /// <summary>
  /// 会话令牌，认证成功时有效
  /// </summary>
  sessionToken: string,

  /// <summary>
  /// 认证失败时，填充该失败信息
  /// </summary>
  failedMessage: string
}

export { IAuthResult }
