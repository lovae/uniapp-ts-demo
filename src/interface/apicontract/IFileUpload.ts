import { IFrontEndContext } from '@/lib/remoteapiproxy/WebFrontEndContext';
import { IFileUploadResult } from '../apimodels/public/IFileUploadResult';

interface IFileUpload {
  //上传单个文件到临时文件夹
  UploadSingleFileToShortTimeFile: (
    fec: IFrontEndContext,
    param: { key: string, value: File }
  ) => Promise<IFileUploadResult>;

  //上传单个文件到持久文件库
  UploadSingleFileToLongTimeFile: (
    fec: IFrontEndContext,
    param: { key: string, value: File }
  ) => Promise<IFileUploadResult>;

  //删除临时文件
  DeleteShortTimeFileByFileURLPath: (
    fec: IFrontEndContext,
    fileUrl: string
  ) => Promise<IFileUploadResult>;

  //删除永久文件
  DeleteLongTimeFileByFileURLPath: (
    fec: IFrontEndContext,
    fileUrl: string
  ) => Promise<IFileUploadResult>;
}

export default IFileUpload