import FileUploadClient from '@/api/sysframe/apiclient/FileUploadClient'
import { IFileUploadResult } from '@/interface/apimodels/public/IFileUploadResult'
import { IFrontEndContext, CreateWebFrontEndContext } from '@/lib/remoteapiproxy/WebFrontEndContext'

// 预约安装记录
const UploadFile = {


  UploadSingleFileToShortTimeFile: function (
    param: { key: string, value: File }): Promise<IFileUploadResult> {
    let webFrontEndContext: IFrontEndContext = CreateWebFrontEndContext()

    webFrontEndContext.FuncTag = 'FileUpload'
    webFrontEndContext.ApiToken = ''
    webFrontEndContext.ApiTicket = ''

    return FileUploadClient.UploadSingleFileToShortTimeFile(webFrontEndContext, param)
  },

  UploadSingleFileToLongTimeFile: function (
    param: { key: string, value: File }): Promise<IFileUploadResult> {
    let webFrontEndContext: IFrontEndContext = CreateWebFrontEndContext()

    webFrontEndContext.FuncTag = 'FileUpload'
    webFrontEndContext.ApiToken = ''
    webFrontEndContext.ApiTicket = ''

    return FileUploadClient.UploadSingleFileToShortTimeFile(webFrontEndContext, param)
  },

  DeleteShortTimeFileByFileURLPath: function (
    fileUrl: string): Promise<IFileUploadResult> {
    let webFrontEndContext: IFrontEndContext = CreateWebFrontEndContext()

    webFrontEndContext.FuncTag = 'FileUpload'
    webFrontEndContext.ApiToken = ''
    webFrontEndContext.ApiTicket = ''

    return FileUploadClient.DeleteShortTimeFileByFileURLPath(webFrontEndContext, fileUrl)
  },

  DeleteLongTimeFileByFileURLPath: function (
    fileUrl: string): Promise<IFileUploadResult> {
    let webFrontEndContext: IFrontEndContext = CreateWebFrontEndContext()

    webFrontEndContext.FuncTag = 'FileUpload'
    webFrontEndContext.ApiToken = ''
    webFrontEndContext.ApiTicket = ''

    return FileUploadClient.DeleteLongTimeFileByFileURLPath(webFrontEndContext, fileUrl)
  },

}

export {
  UploadFile
}