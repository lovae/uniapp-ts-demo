interface IAuthRequestWithUserPwd {
  /// <summary>
  /// 认证设备名称 如 "web",''
  /// </summary>
  LoginDevice: string,

  /// <summary>
  /// 认证用户类型
  /// </summary>
  LoginType: string,

  /// <summary>
  /// 认证用户名
  /// </summary>
  UserName: string,

  /// <summary>
  /// 认证用户名
  /// </summary>
  UserPassword: string
}

export { IAuthRequestWithUserPwd }
