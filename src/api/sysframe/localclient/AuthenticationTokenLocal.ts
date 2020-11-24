import IAuthenticationToken from '@/interface/apicontract/IAuthenticationToken'
import { IApiApplyTicket } from '@/interface/apimodels/public/IApiApplyTicket'
import { IAuthRequestWithUserPwd } from '@/interface/apimodels/public/IAuthRequestWithUserPwd'
import { IAuthResult } from '@/interface/apimodels/public/IAuthResult'
import { ILogoutResult } from '@/interface/apimodels/public/ILogoutResult'
import { ISinglePropertyBag } from '@/interface/apimodels/public/ISinglePropertyBag'
import { IFrontEndContext } from '@/lib/remoteapiproxy/WebFrontEndContext'

let AuthenticationTokenLocal: IAuthenticationToken = {

  /// <summary>
  /// 设置服务Cookie
  /// </summary>
  /// <param name="tokenValue"></param>
  /// <returns></returns>
  AuthSetCookie: function (
    fec: IFrontEndContext,
    tokenValue: ISinglePropertyBag<string>
  ): Promise<void> {
    return Promise.resolve()
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
    let apitick: IApiApplyTicket = {
      MethodAllowed: 'GET',
      ApiSequenceTicket: ''
    }
    return Promise.resolve(apitick)
  },


  AuthWithUserPwd: function (
    fec: IFrontEndContext,
    arup: IAuthRequestWithUserPwd
  ): Promise<IAuthResult> {
    return Promise.resolve({
      beAuthenticationOk: false,
      sessionToken: '',
      failedMessage: ''
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
    let ar: ILogoutResult = {
      hasServerException: false,
      resultData: ''
    }
    return Promise.resolve(ar)
  }
}

export default AuthenticationTokenLocal
