import IFileUpload from '@/interface/apicontract/IFileUpload'
import { IFileUploadResult } from '@/interface/apimodels/public/IFileUploadResult'
import { IServiceLocation } from '@/lib/remoteapiproxy/IServiceLocation'
import ServiceLocator from '@/lib/remoteapiproxy/ServiceLocator'
import { IFrontEndContext } from '@/lib/remoteapiproxy/WebFrontEndContext'
import FileUploadLocal from '../localclient/FileUploadLocal'
import FileUploadRemote from '../remoteclient/FileUploadRemote'

let FileUploadClient: IFileUpload = {
  //上传单个文件到临时文件夹
  UploadSingleFileToShortTimeFile: function (
    fec: IFrontEndContext,
    param: { key: string, value: File }
  ): Promise<IFileUploadResult> {
    return ServiceLocator.getConfigServiceLocations()
      .then(urlConfig => {
        let apiconfig: IServiceLocation | null = ServiceLocator.getServiceLocation(
          'sysframeservice',
          urlConfig
        )

        return apiconfig
      })
      .then(apiconfig => {
        if (apiconfig === null) {
          return Promise.reject(new Error('UrlConfig未发现authservice配置'))
        }

        if (apiconfig.apitype === 'local') {
          return FileUploadLocal.UploadSingleFileToShortTimeFile(fec, param)
        }

        return FileUploadRemote.UploadSingleFileToShortTimeFile(fec, param)
      })
  },

  //上传单个文件到持久文件库
  UploadSingleFileToLongTimeFile: function (
    fec: IFrontEndContext,
    param: { key: string, value: File }
  ): Promise<IFileUploadResult> {
    return ServiceLocator.getConfigServiceLocations()
      .then(urlConfig => {
        let apiconfig: IServiceLocation | null = ServiceLocator.getServiceLocation(
          'sysframeservice',
          urlConfig
        )

        return apiconfig
      })
      .then(apiconfig => {
        if (apiconfig === null) {
          return Promise.reject(new Error('UrlConfig未发现authservice配置'))
        }

        if (apiconfig.apitype === 'local') {
          return FileUploadLocal.UploadSingleFileToShortTimeFile(fec, param)
        }

        return FileUploadRemote.UploadSingleFileToShortTimeFile(fec, param)
      })
  },

  //删除临时文件
  DeleteShortTimeFileByFileURLPath: function (
    fec: IFrontEndContext,
    fileUrl: string
  ): Promise<IFileUploadResult> {
    return ServiceLocator.getConfigServiceLocations()
      .then(urlConfig => {
        let apiconfig: IServiceLocation | null = ServiceLocator.getServiceLocation(
          'sysframeservice',
          urlConfig
        )

        return apiconfig
      })
      .then(apiconfig => {
        if (apiconfig === null) {
          return Promise.reject(new Error('UrlConfig未发现authservice配置'))
        }

        if (apiconfig.apitype === 'local') {
          return FileUploadLocal.DeleteShortTimeFileByFileURLPath(fec, fileUrl)
        }

        return FileUploadRemote.DeleteShortTimeFileByFileURLPath(fec, fileUrl)
      })
  },

  //删除永久文件
  DeleteLongTimeFileByFileURLPath: function (
    fec: IFrontEndContext,
    fileUrl: string
  ): Promise<IFileUploadResult> {
    return ServiceLocator.getConfigServiceLocations()
      .then(urlConfig => {
        let apiconfig: IServiceLocation | null = ServiceLocator.getServiceLocation(
          'sysframeservice',
          urlConfig
        )

        return apiconfig
      })
      .then(apiconfig => {
        if (apiconfig === null) {
          return Promise.reject(new Error('UrlConfig未发现authservice配置'))
        }

        if (apiconfig.apitype === 'local') {
          return FileUploadLocal.DeleteLongTimeFileByFileURLPath(fec, fileUrl)
        }

        return FileUploadRemote.DeleteLongTimeFileByFileURLPath(fec, fileUrl)
      })
  },
}

export default FileUploadClient