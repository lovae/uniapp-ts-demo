import IAuthenticationToken from '@/interface/apicontract/IAuthenticationToken'
import { IApiApplyTicket } from '@/interface/apimodels/public/IApiApplyTicket'
import { IApiSendBackResult } from '@/interface/apimodels/public/IApiSendBackResult'
import { IAuthRequestWithUserPwd } from '@/interface/apimodels/public/IAuthRequestWithUserPwd'
import { IAuthResult } from '@/interface/apimodels/public/IAuthResult'
import { ILogoutResult } from '@/interface/apimodels/public/ILogoutResult'
import { ISinglePropertyBag } from '@/interface/apimodels/public/ISinglePropertyBag'
import { IValidateResult } from '@/interface/apimodels/public/IValidateResult'
import { IUserInfoData } from '@/interface/apimodels/sysframe/UserAuthorization/IUserInfoData'
import RemoteServerClient from '@/lib/remoteapiproxy/RemoteServerProxy'
import { IFrontEndContext } from '@/lib/remoteapiproxy/WebFrontEndContext'


let AuthenticationTokenRemote: IAuthenticationToken = {

  /// <summary>
  /// 设置服务Cookie
  /// </summary>
  /// <param name="tokenValue"></param>
  /// <returns></returns>
  AuthSetCookie: function (
    fec: IFrontEndContext,
    tokenValue: ISinglePropertyBag<string>
  ): Promise<void> {
    let webClientRunningType: string = fec.ClientRunningType
    let webFuncTag: string = fec.FuncTag
    let webApiToken: string = fec.ApiToken
    let webApiTicket: string = fec.ApiTicket

    var jsonToken = { Value: tokenValue.Value }

    let remoteclient = new RemoteServerClient(
      'authservice',
      'AuthenticationToken/authSetCookie.do',
      {},
      webApiToken,
      webFuncTag,
      webApiTicket,
      webClientRunningType
    )

    return remoteclient.PostRemote(jsonToken).then(() => { })
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
    let webClientRunningType: string = fec.ClientRunningType
    let webFuncTag: string = fec.FuncTag
    let webApiToken: string = fec.ApiToken
    let webApiTicket: string = fec.ApiTicket

    let applydata = { Value: apiMethod.Value }

    let remoteclient = new RemoteServerClient(
      'authservice',
      'AuthenticationToken/applyApiTicket.do',
      {},
      webApiToken,
      webFuncTag,
      webApiTicket,
      webClientRunningType
    )

    return remoteclient
      .PostRemoteWithToken(applydata)
      .then(response => response.data)
      .then(apiticket => {
        let apiApplyTicket: IApiApplyTicket = apiticket
        return apiApplyTicket
      })
  },

  /// <summary>
  /// 电信聚翼登录
  /// </summary>
  /// <param name="arup"></param>
  /// <returns></returns>
  AuthWithUserPwd: function (
    fec: IFrontEndContext,
    arup: IAuthRequestWithUserPwd
  ): Promise<IAuthResult> {
    let webClientRunningType: string = fec.ClientRunningType
    let webFuncTag: string = fec.FuncTag
    let webApiToken: string = fec.ApiToken
    let webApiTicket: string = fec.ApiTicket

    let remoteclient = new RemoteServerClient(
      'authservice',
      'AuthenticationToken/authWithUserPwd.do',
      {},
      webApiToken,
      webFuncTag,
      webApiTicket,
      webClientRunningType
    )
    return remoteclient
      .PostRemoteWithToken(arup)
      .then(response => response.data)
  },

  /// <summary>
  /// 设置服务Cookie
  /// </summary>
  /// <param name="tokenValue"></param>
  /// <returns></returns>
  UserLogout: function (
    fec: IFrontEndContext
  ): Promise<ILogoutResult> {
    let webClientRunningType: string = fec.ClientRunningType
    let webFuncTag: string = fec.FuncTag
    let webApiToken: string = fec.ApiToken
    let webApiTicket: string = fec.ApiTicket

    let remoteclient = new RemoteServerClient(
      'authservice',
      'AuthenticationToken/pcLogout.do',
      {},
      webApiToken,
      webFuncTag,
      webApiTicket,
      webClientRunningType
    )

    return remoteclient.GetRemote().then(response => response.data)
  },
}

export default AuthenticationTokenRemote
