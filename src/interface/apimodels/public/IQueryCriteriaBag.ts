import { IFilterCriteriaItem } from './IFilterCriteriaItem';
import { IPageInTag } from './IPageInTag';

interface IQueryCriteriaBag {

	filterCriteriaItems: IFilterCriteriaItem[];

	inPagination: IPageInTag;

}

export { IQueryCriteriaBag }