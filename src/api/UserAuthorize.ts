import {
  IFrontEndContext,
  CreateWebFrontEndContext
} from '../lib/remoteapiproxy/WebFrontEndContext'
import AuthenticationTokenClient from './sysframe/apiclient/AuthenticationTokenClient'
import PostAllTokenCookies from './AllTokenCookies'
import { IAuthResult } from '@/interface/apimodels/public/IAuthResult'
import { IAuthRequestWithUserPwd } from '@/interface/apimodels/public/IAuthRequestWithUserPwd'

let UserAuthorize = {

  // 设置服务api认证信息
  SetApiTokens: function (apiToken: string): Promise<void> {
    let webFrontEndContext: IFrontEndContext = CreateWebFrontEndContext()
    webFrontEndContext.FuncTag = 'SetCookies'

    return PostAllTokenCookies(apiToken).then(() => { })
  },

  // 登录
  AuthWithUserPwd: function (userName: string, password: string): Promise<IAuthResult> {
    let webFrontEndContext: IFrontEndContext = CreateWebFrontEndContext()

    webFrontEndContext.FuncTag = 'AuthWithUserPwd'
    webFrontEndContext.ApiToken = ''
    webFrontEndContext.ApiTicket = ''

    let arup: IAuthRequestWithUserPwd = {
      LoginDevice: 'web',
      LoginType: 'FORMS',
      UserName: userName,
      UserPassword: password
    }
    return AuthenticationTokenClient.AuthWithUserPwd(webFrontEndContext, arup)
  },

  //退出登录
  LogoutUser: function (): Promise<boolean> {
    let webFrontEndContext: IFrontEndContext = CreateWebFrontEndContext()
    webFrontEndContext.FuncTag = 'ClearCookies'

    return AuthenticationTokenClient.UserLogout(webFrontEndContext).then(authResult => {
      if (!authResult.hasServerException) {
        return Promise.resolve(true)
      } else {
        return Promise.reject(false)
      }
    })
  },
}

export default UserAuthorize
