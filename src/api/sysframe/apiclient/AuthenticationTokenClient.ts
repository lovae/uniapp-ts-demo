import IAuthenticationToken from '@/interface/apicontract/IAuthenticationToken'
import { IApiApplyTicket } from '@/interface/apimodels/public/IApiApplyTicket'
import { IApiSendBackResult } from '@/interface/apimodels/public/IApiSendBackResult'
import { IAuthRequestWithUserPwd } from '@/interface/apimodels/public/IAuthRequestWithUserPwd'
import { IAuthResult } from '@/interface/apimodels/public/IAuthResult'
import { ILogoutResult } from '@/interface/apimodels/public/ILogoutResult'
import { ISinglePropertyBag } from '@/interface/apimodels/public/ISinglePropertyBag'
import { IValidateResult } from '@/interface/apimodels/public/IValidateResult'
import { IUserInfoData } from '@/interface/apimodels/sysframe/UserAuthorization/IUserInfoData'
import { IServiceLocation } from '@/lib/remoteapiproxy/IServiceLocation'
import ServiceLocator from '@/lib/remoteapiproxy/ServiceLocator'
import { IFrontEndContext } from '@/lib/remoteapiproxy/WebFrontEndContext'
import AuthenticationTokenLocal from '../localclient/AuthenticationTokenLocal'
import AuthenticationTokenRemote from '../remoteclient/AuthenticationTokenRemote'


let AuthenticationTokenClient: IAuthenticationToken = {

  /// <summary>
  /// 设置服务Cookie
  /// </summary>
  /// <param name="tokenValue"></param>
  /// <returns></returns>
  AuthSetCookie: function (
    fec: IFrontEndContext,
    tokenValue: ISinglePropertyBag<string>
  ): Promise<void> {
    return ServiceLocator.getConfigServiceLocations()
      .then(urlConfig => {
        let apiconfig: IServiceLocation | null = ServiceLocator.getServiceLocation(
          'authservice',
          urlConfig
        )
        return apiconfig
      })
      .then(apiconfig => {
        if (apiconfig === null) {
          return Promise.reject(new Error('UrlConfig未发现authservice配置'))
        }

        if (apiconfig.apitype === 'local') {
          return AuthenticationTokenLocal.AuthSetCookie(fec, tokenValue)
        }

        return AuthenticationTokenRemote.AuthSetCookie(fec, tokenValue)
      })
  },

  /// <summary>
  /// 获取API操作序列号牌，需携带身份信息，只对具有有效token【同authValidUserToken一致】的申请发放
  /// 由于本操作API中无数据修改等操作，不考虑异常的发生
  /// [HttpPost]
  /// </summary>
  /// <param name="apiMethod">申请方法</param>
  /// <returns>获取的票据对象</returns>
  ApplyApiTicket: function (
    fec: IFrontEndContext,
    apiMethod: ISinglePropertyBag<string>
  ): Promise<IApiApplyTicket> {
    return ServiceLocator.getConfigServiceLocations()
      .then(urlConfig => {
        let apiconfig: IServiceLocation | null = ServiceLocator.getServiceLocation(
          'authservice',
          urlConfig
        )

        return apiconfig
      })
      .then(apiconfig => {
        if (apiconfig === null) {
          return Promise.reject(new Error('UrlConfig未发现authservice配置'))
        }

        if (apiconfig.apitype === 'local') {
          return AuthenticationTokenLocal.ApplyApiTicket(fec, apiMethod)
        }

        return AuthenticationTokenRemote.ApplyApiTicket(fec, apiMethod)
      })
  },

  AuthWithUserPwd: function (
    fec: IFrontEndContext,
    arup: IAuthRequestWithUserPwd
  ): Promise<IAuthResult> {
    return ServiceLocator.getConfigServiceLocations()
      .then(urlConfig => {
        let apiconfig: IServiceLocation | null = ServiceLocator.getServiceLocation(
          'authservice',
          urlConfig
        )

        return apiconfig
      })
      .then(apiconfig => {
        if (apiconfig === null) {
          return Promise.reject(new Error('UrlConfig未发现authservice配置'))
        }

        if (apiconfig.apitype === 'local') {
          return AuthenticationTokenLocal.AuthWithUserPwd(fec, arup)
        }

        return AuthenticationTokenRemote.AuthWithUserPwd(fec, arup)
      })
  },

  /// <summary>
  /// 设置服务Cookie
  /// </summary>
  /// <param name="tokenValue"></param>
  /// <returns></returns>
  UserLogout: function (
    fec: IFrontEndContext
  ): Promise<ILogoutResult> {
    return ServiceLocator.getConfigServiceLocations()
      .then(urlConfig => {
        let apiconfig: IServiceLocation | null = ServiceLocator.getServiceLocation(
          'authservice',
          urlConfig
        )
        return apiconfig
      })
      .then(apiconfig => {
        if (apiconfig === null) {
          return Promise.reject(new Error('UrlConfig未发现authservice配置'))
        }

        if (apiconfig.apitype === 'local') {
          return AuthenticationTokenLocal.UserLogout(fec)
        }

        return AuthenticationTokenRemote.UserLogout(fec)
      })
  },

}

export default AuthenticationTokenClient
