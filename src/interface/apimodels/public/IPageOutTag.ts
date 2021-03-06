interface IPageOutTag {
	// page 表示是第几页
	page: number;

	// limit 限制获取多少条
	limit: number;

	// total 总记录数
	total: number;

	// fromid 获取的开始位置标识码，服务器端通过fromid可重构获取开始查询位置
	fromId: string;

}

export { IPageOutTag }