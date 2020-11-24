import { IApiApplyTicket } from '@/interface/apimodels/public/IApiApplyTicket';
import { IAuthRequestWithUserPwd } from '@/interface/apimodels/public/IAuthRequestWithUserPwd';
import { IAuthResult } from '@/interface/apimodels/public/IAuthResult';
import { ISinglePropertyBag } from '@/interface/apimodels/public/ISinglePropertyBag';

import { IFrontEndContext } from '@/lib/remoteapiproxy/WebFrontEndContext';
import { ILogoutResult } from '../apimodels/public/ILogoutResult';


interface IAuthenticationToken {

  /// <summary>
  /// 获取API操作序列号牌，需携带身份信息，只对具有有效token【同authValidUserToken一致】的申请发放
  /// 由于本操作API中无数据修改等操作，不考虑异常的发生
  /// [HttpPost]
  /// </summary>
  /// <param name="apiMethod">申请方法</param>
  /// <returns>获取的票据对象</returns>
  ApplyApiTicket: (
    fec: IFrontEndContext,
    apiMethod: ISinglePropertyBag<string>
  ) => Promise<IApiApplyTicket>;

  /// <summary>
  /// 设置服务Cookie
  /// </summary>
  /// <param name="tokenValue"></param>
  /// <returns></returns>
  AuthSetCookie: (
    fec: IFrontEndContext,
    tokenValue: ISinglePropertyBag<string>
  ) => Promise<void>;

  AuthWithUserPwd: (
    fec: IFrontEndContext,
    arup: IAuthRequestWithUserPwd
  ) => Promise<IAuthResult>;

  UserLogout: (
    fec: IFrontEndContext
  ) => Promise<ILogoutResult>;
}

export default IAuthenticationToken
