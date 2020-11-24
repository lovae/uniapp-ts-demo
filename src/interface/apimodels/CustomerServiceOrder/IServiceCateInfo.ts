import { IServiceProjectInfo } from './IServiceProjectInfo';

interface IServiceCateInfo {
  servicecateID: string,
  servicecatename: string,
  serviceprojects: IServiceProjectInfo[]
}

export { IServiceCateInfo }