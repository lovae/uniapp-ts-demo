interface ICommonHierarchyItem {

	id: string;        // 当前节点项ID

	type: string;        // 节点项类型

	name: string;        // 节点项名称

	icon: string;        // 节点图标信息

	data: string;        // 节点项数据信息

	parentId: string;    // 父级节点项ID

	description: string;    // 描述

}

export { ICommonHierarchyItem }
