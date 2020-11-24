import { IPageOutTag } from './IPageOutTag';

interface IQueryPagerResultBag<T> {
	//查询结果集
	queryResults: T[];

	//返回分页情况
	pagination: IPageOutTag;


}

export { IQueryPagerResultBag }
