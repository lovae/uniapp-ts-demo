// 实体属性更新包
interface IEntityPropertyUpdateBag<T1, T2> {

	// 要更新的实体
	entityToUpdate: T1;

	propertyUpdated: T2;

}

export { IEntityPropertyUpdateBag }