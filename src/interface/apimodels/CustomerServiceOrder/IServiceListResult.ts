import { IServiceCateInfo } from './IServiceCateInfo';
import { IServiceProjectInfo } from './IServiceProjectInfo';

interface IServiceListResult {
  servicerID: string,//服务商ID
  servicername: string,//服务商名称
  servicerphone: string,//服务商电话
  servicerimg: string,//服务商图片
  hotservices: IServiceProjectInfo[],//热门服务项目
  services: IServiceCateInfo[] //所有服务列表

}

export { IServiceListResult }