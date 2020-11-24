interface IUserInfoData {

  token: string

  // 用户头像（没有就返回 空字符串 ""）
  headPicUrl: string

  // 用户名称
  userName: string

  // 用户ID
  userID: string

  // 用户手机号码
  userTelephone: string

  smartLifeUserId: string

  smartLifeUserToken: string

  //userName   logonName     beValid   status  sex   mobileno
  loginName: string

  beValid: boolean

  status: string

  sex: string

  mobileno: string

  hxUserName: string

  hxUserPassword: string

}

export { IUserInfoData }
