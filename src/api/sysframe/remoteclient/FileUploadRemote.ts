import IFileUpload from '@/interface/apicontract/IFileUpload'
import { IFileUploadResult } from '@/interface/apimodels/public/IFileUploadResult'
import { IFrontEndContext } from '@/lib/remoteapiproxy/WebFrontEndContext'
import RemoteServerClient from '@/lib/remoteapiproxy/RemoteServerProxy';

let FileUploadRemote: IFileUpload = {
  //上传单个文件到临时文件夹
  UploadSingleFileToShortTimeFile: function (
    fec: IFrontEndContext,
    param: { key: string, value: File }
  ): Promise<IFileUploadResult> {
    let webClientRunningType: string = fec.ClientRunningType
    let webFuncTag: string = fec.FuncTag
    let webApiToken: string = fec.ApiToken
    let webApiTicket: string = fec.ApiTicket

    let remoteclient = new RemoteServerClient(
      'sysframeservice',
      'UploadPicToOSS/uploadSingleFileToShortTimeFile.do',
      {},
      webApiToken,
      webFuncTag,
      webApiTicket,
      webClientRunningType
    )
    return remoteclient
      .PostRemoteWithToken(param)
      .then(response => response.data)
  },

  //上传单个文件到持久文件库
  UploadSingleFileToLongTimeFile: function (
    fec: IFrontEndContext,
    param: { key: string, value: File }
  ): Promise<IFileUploadResult> {
    let webClientRunningType: string = fec.ClientRunningType
    let webFuncTag: string = fec.FuncTag
    let webApiToken: string = fec.ApiToken
    let webApiTicket: string = fec.ApiTicket

    let remoteclient = new RemoteServerClient(
      'sysframeservice',
      'UploadPicToOSS/uploadSingleFileToLongTimeFile.do',
      {},
      webApiToken,
      webFuncTag,
      webApiTicket,
      webClientRunningType
    )
    return remoteclient
      .PostRemoteWithToken(param)
      .then(response => response.data)
  },

  //删除临时文件
  DeleteShortTimeFileByFileURLPath: function (
    fec: IFrontEndContext,
    fileUrl: string
  ): Promise<IFileUploadResult> {
    let webClientRunningType: string = fec.ClientRunningType
    let webFuncTag: string = fec.FuncTag
    let webApiToken: string = fec.ApiToken
    let webApiTicket: string = fec.ApiTicket

    let remoteclient = new RemoteServerClient(
      'sysframeservice',
      'UploadPicToOSS/deleteShortTimeFileByFileURLPath.do',
      { fileUrl: fileUrl },
      webApiToken,
      webFuncTag,
      webApiTicket,
      webClientRunningType
    )
    return remoteclient
      .GetRemoteWithToken()
      .then(response => response.data)
  },

  //删除永久文件
  DeleteLongTimeFileByFileURLPath: function (
    fec: IFrontEndContext,
    fileUrl: string
  ): Promise<IFileUploadResult> {
    let webClientRunningType: string = fec.ClientRunningType
    let webFuncTag: string = fec.FuncTag
    let webApiToken: string = fec.ApiToken
    let webApiTicket: string = fec.ApiTicket

    let remoteclient = new RemoteServerClient(
      'sysframeservice',
      'UploadPicToOSS/deleteLongTimeFileByFileURLPath.do',
      { fileUrl: fileUrl },
      webApiToken,
      webFuncTag,
      webApiTicket,
      webClientRunningType
    )
    return remoteclient
      .GetRemoteWithToken()
      .then(response => response.data)
  },
}

export default FileUploadRemote