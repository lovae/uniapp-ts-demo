import {
  IFrontEndContext,
  CreateWebFrontEndContext
} from '../lib/remoteapiproxy/WebFrontEndContext'
import AuthenticationTokenClient from './sysframe/apiclient/AuthenticationTokenClient'
import ApiServerError from '@/lib/base/ApiServerError'
import { IApiSendBackResult } from '@/interface/apimodels/public/IApiSendBackResult'

// 支持 6 参数传递
interface IApiTicketApplyService<T> {
  // (fec: IFrontEndContext, ...params: any): Promise<IApiSendBackResult<T>>;
  (
    fec: IFrontEndContext,
    param1?: any,
    param2?: any,
    param3?: any,
    param4?: any,
    param5?: any,
    param6?: any,
    param7?: any,
    param8?: any,
    param9?: any
  ): Promise<IApiSendBackResult<T>>;
}

interface IApiResultHandle<T1, T2> {
  (resultData: T1): T2;
}

let ApiTicketService = {
  ApplyTicketApiService: function <T1, T2>(
    funcTag: string,
    apiMethod: string,
    apiService: IApiTicketApplyService<T1>,
    apiResultHandle: IApiResultHandle<T1, T2>,
    param1: any,
    param2: any,
    param3: any,
    param4: any,
    param5: any,
    param6: any,
    param7?: any,
    param8?: any,
    param9?: any
  ): Promise<T2> {
    let webFrontEndContext: IFrontEndContext = CreateWebFrontEndContext()

    webFrontEndContext.FuncTag = 'Permission'
    webFrontEndContext.ApiToken = ''
    webFrontEndContext.ApiTicket = ''

    return AuthenticationTokenClient.ApplyApiTicket(webFrontEndContext, {
      Value: apiMethod
    }).then(ticket => {
      webFrontEndContext.FuncTag = funcTag
      webFrontEndContext.ApiTicket = ticket.ApiSequenceTicket

      return apiService(
        webFrontEndContext,
        param1,
        param2,
        param3,
        param4,
        param5,
        param6,
        param7,
        param8,
        param9
      ).then(apiResult => {
        if (!apiResult.hasServerException) {

          let successData: T1 = apiResult.resultData

          let anyResult: T2 = apiResultHandle(successData)

          return Promise.resolve(anyResult)
        } else {
          return Promise.reject(
            new ApiServerError(
              apiResult.exceptionCatalog,
              apiResult.serverExceptionMessage
            )
          )
        }
      })
    })
  },

  ApplyTicketGetApiService: function <T1, T2>(
    funcTag: string,
    apiService: IApiTicketApplyService<T1>,
    apiResultHandle: IApiResultHandle<T1, T2>,
    param1?: any,
    param2?: any,
    param3?: any,
    param4?: any,
    param5?: any,
    param6?: any,
    param7?: any,
    param8?: any,
    param9?: any
  ): Promise<T2> {
    return this.ApplyTicketApiService(
      funcTag,
      'GET',
      apiService,
      apiResultHandle,
      param1,
      param2,
      param3,
      param4,
      param5,
      param6,
      param7,
      param8,
      param9
    )
  },

  ApplyTicketPostApiService: function <T1, T2>(
    funcTag: string,
    apiService: IApiTicketApplyService<T1>,
    apiResultHandle: IApiResultHandle<T1, T2>,
    param1?: any,
    param2?: any,
    param3?: any,
    param4?: any,
    param5?: any,
    param6?: any,
    param7?: any,
    param8?: any,
    param9?: any
  ): Promise<T2> {
    return this.ApplyTicketApiService(
      funcTag,
      'POST',
      apiService,
      apiResultHandle,
      param1,
      param2,
      param3,
      param4,
      param5,
      param6,
      param7,
      param8,
      param9
    )
  }
}

export default ApiTicketService
