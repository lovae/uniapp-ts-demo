
// 用于对关系的操作打包
interface IRelationUpdateBag<T1, T2> {

	updateFlagCode: string;        // 更新识别码，用于在服务器上避免多次重复执行

	updateMode: number;            // 更新模式
	// 1-增加（向目标对象增加关联）
	// 2-移除（从目标对象删除关联）
	// 3—变更（按目前的更新设置，将原有的本次无的删除，原无的增加，都有的更新）

	trgEntity: T1;            // 代表目标实体

	updatedSrcEntity: T2;    // 代表更新的源实体

}

export { IRelationUpdateBag }
