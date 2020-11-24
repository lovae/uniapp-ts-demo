import IFileUpload from '@/interface/apicontract/IFileUpload'
import { IFileUploadResult } from '@/interface/apimodels/public/IFileUploadResult'
import { IFrontEndContext } from '@/lib/remoteapiproxy/WebFrontEndContext'

let FileUploadLocal: IFileUpload = {
  //上传单个文件到临时文件夹
  UploadSingleFileToShortTimeFile: function (
    fec: IFrontEndContext,
    param: { key: string, value: File }
  ): Promise<IFileUploadResult> {
    return Promise.resolve({
      success: true,
      msg: '',
      tag: ''
    })
  },

  //上传单个文件到持久文件库
  UploadSingleFileToLongTimeFile: function (
    fec: IFrontEndContext,
    param: { key: string, value: File }
  ): Promise<IFileUploadResult> {
    return Promise.resolve({
      success: true,
      msg: '',
      tag: ''
    })
  },

  //删除临时文件
  DeleteShortTimeFileByFileURLPath: function (
    fec: IFrontEndContext,
    fileUrl: string
  ): Promise<IFileUploadResult> {
    return Promise.resolve({
      success: true,
      msg: '',
      tag: ''
    })
  },

  //删除永久文件
  DeleteLongTimeFileByFileURLPath: function (
    fec: IFrontEndContext,
    fileUrl: string
  ): Promise<IFileUploadResult> {
    return Promise.resolve({
      success: true,
      msg: '',
      tag: ''
    })
  },
}

export default FileUploadLocal