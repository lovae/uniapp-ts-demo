import {
  IFrontEndContext,
  CreateWebFrontEndContext
} from '../lib/remoteapiproxy/WebFrontEndContext'
import { ISinglePropertyBag } from '../interface/apimodels/public/ISinglePropertyBag'
import RemoteServerClient from '../lib/remoteapiproxy/RemoteServerProxy'
import ApiTicketService from './TicketApiApply'

// 向所有api服务器申请发放访问令牌

/// <summary>
/// 设置Auth服务Cookie
/// </summary>
/// <param name="tokenValue"></param>
/// <returns></returns>
let AuthServiceSetCookie = function (
  fec: IFrontEndContext,
  tokenValue: ISinglePropertyBag<string>
): Promise<string> {
  let webClientRunningType: string = fec.ClientRunningType
  let webFuncTag: string = fec.FuncTag
  let webApiToken: string = fec.ApiToken
  let webApiTicket: string = fec.ApiTicket

  var jsonToken = { value: tokenValue.Value }

  let remoteclient = new RemoteServerClient(
    'LockIndexService',
    'AuthenticationToken/authSetCookie.do',
    {},
    webApiToken,
    webFuncTag,
    webApiTicket,
    webClientRunningType
  )

  return remoteclient
    .PostRemoteWithToken(jsonToken)
    .then(response => response.data)
}

/// <summary>
/// 设置SysFrameService服务Cookie
/// </summary>
/// <param name="tokenValue"></param>
/// <returns></returns>
let SysFrameServiceSetCookie = function (
  fec: IFrontEndContext,
  tokenValue: ISinglePropertyBag<string>
): Promise<string> {
  let webClientRunningType: string = fec.ClientRunningType
  let webFuncTag: string = fec.FuncTag
  let webApiToken: string = fec.ApiToken
  let webApiTicket: string = fec.ApiTicket

  var jsonToken = { value: tokenValue.Value }

  let remoteclient = new RemoteServerClient(
    'sysframeservice',
    'AuthenticationToken/authSetCookie.do',
    {},
    webApiToken,
    webFuncTag,
    webApiTicket,
    webClientRunningType
  )

  return remoteclient
    .PostRemoteWithToken(jsonToken)
    .then(response => response.data)
}


let PostAllTokenCookies = function (cookieToken: string): Promise<string> {
  let fec: IFrontEndContext = CreateWebFrontEndContext()

  let PromiseAuthService = AuthServiceSetCookie(fec, { Value: cookieToken })
  let PromiseSysFrameService = SysFrameServiceSetCookie(fec, { Value: cookieToken })

  return Promise.all([
    PromiseAuthService,
    PromiseSysFrameService
  ]).then(results => results[0])
}

export default PostAllTokenCookies
